import * as moment from 'moment';
import * as uuid from 'uuid';
import { ExpectedError } from '../utils/errors';
import { aggregateHealthData } from '../utils/sample';
import { findItemByDate } from './global';
import { addHealthItem } from './health';
import models from '../models';
import { Model } from 'sequelize-typescript';
const { healthTypes } = require('../configs/healthkit.json');
const healthConfig = require('../configs/health.json');

import { 
  HealthKitType, 
  HealthKitInputType, 
  HealthKitInputUpdateType, 
  HealthKitConfigType,
  BloodPressureType,
  HealthKitTypeWithItemType,
  HealthkitInputAndConfig,
  HealthTypes
} from '../types';

// add health item
export const addHealthKitItem = async (
  input: HealthKitInputType, 
  config: HealthKitConfigType, 
  doSave = true
): Promise<HealthKitType> => {
  // if type is not valid
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTHKIT_TYPE');
  }

  // if type has been disabled in config
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTHKIT_TYPE');
  }

  if (config.interval && !doSave) {
    const dupeItem: any = await findItemByDate(input.sampledOn, config.modelID);

    const id = dupeItem && dupeItem.id 
      ? dupeItem.id
      : dupeItem && dupeItem.dataValues 
      ? dupeItem.dataValues.id 
      : null;

    if (dupeItem) return replaceHealthKitItem(id, input, config, doSave);
  }

  let data: HealthKitType = aggregateHealthData(input, config);
  const currentDate: string = moment().toISOString();

  data.id = uuid();
  data.createdOn = currentDate;
  data.updatedOn = currentDate;

  // do not create row if there is no value or type is disabled
  if (data.value === null) return null;

  // if doSave is false, only return healthkit data and do not save to the database
  if (!doSave) return data;

  const HealthItem = models[config.modelID];

  try {
    const res: any = await HealthItem.create(data);
    return res.dataValues;
  } catch (err) {
    throw new ExpectedError('ADD_HEALTHKIT_ERROR');
  }
}

// replace health item
export const replaceHealthKitItem = async (
  id: string, 
  input: HealthKitInputType, 
  config: HealthKitConfigType,
  doSave = false,
): Promise<Model | HealthKitType> => {
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE'); 
  }

  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  const data: HealthKitType = aggregateHealthData(input, config);
  data.updatedOn = moment().toISOString();
  
  if (!doSave) return data;

  const HealthItem = models[config.modelID];

  try {
    const [rows, [ updatedItem ]]: any = await HealthItem.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('REPLACE_HEALTHKIT_ERROR');
  }
}

// update health item
export const updateHealthKitItem = async (id: string, input: HealthKitInputUpdateType, config: HealthKitConfigType): Promise<Model> => {
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  const HealthItem = models[config.modelID];
  let data = { ...input, updatedOn: moment().toISOString() }

  try {
    const [rows, [ updatedItem ]]: any = await HealthItem.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('UPDATE_HEALTHKIT_ERROR');
  }
}

const addHealthkitBloodPressure = async (healthItems: HealthkitInputAndConfig[]): Promise<HealthTypes> => {
  const bpConfig = healthConfig.bloodPressure;
  const processedItems: Promise<HealthKitTypeWithItemType[]> = Promise.all(
    healthItems.map(async (item: HealthkitInputAndConfig): Promise<HealthKitTypeWithItemType> => {
      const { input, config } = item;
      const processedItem = await addHealthKitItem(input, config, false);
      return {
        ...processedItem, 
        healthkitType: config.id,
      }
    })
  );

  const output = (await processedItems).reduce((result: BloodPressureType, currentItem: HealthKitTypeWithItemType) => {
    const validTypes = [
      healthTypes.systolicBloodPressure.id, 
      healthTypes.diastolicBloodPressure.id,
    ];

    if (validTypes.indexOf(currentItem.healthkitType) < 0) return;

    if (Object.keys(result).length < 1) {
      result = { 
        sampledOn: currentItem.sampledOn, 
        unit: currentItem.unit,
      }
    }

    const valueType: string = currentItem.healthkitType === healthTypes.systolicBloodPressure.id 
      ? "systolic" 
      : "diastolic";

    result = { ...result, [valueType]: currentItem.value };

    return result;
  }, {});

  return addHealthItem(output, bpConfig);
}

export const addHealthKitItems = async (inputs: HealthKitInputType[]) => {
  if (!inputs) throw new ExpectedError('INVALID_HEALTHKIT_INPUT');

  let bloodPressuremItems: HealthkitInputAndConfig[] = [];
  let healthkitItems: HealthKitType[] = [];

  await Promise.all(inputs.map(async (input: HealthKitInputType): Promise<void> => {
    const { type } = input;
    const config = healthTypes[Object.keys(healthTypes).find(c => healthTypes[c].healthkitID === type)];

    if (!config) new ExpectedError('INVALID_HEALTHKIT_TYPE');
    if (config.disabled) return null; 

    if (config.modelID === healthConfig.bloodPressure.modelID) {
      bloodPressuremItems = [ ...bloodPressuremItems, { input, config } ];
    } else {
      const newItem = await addHealthKitItem(input, config);
      healthkitItems = [ ...healthkitItems, newItem ];
    }
  }));

  const output = [
    ...healthkitItems,
    await addHealthkitBloodPressure(bloodPressuremItems)
  ];

  return { response: output };
}

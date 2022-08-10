import * as moment from 'moment';
import { v4 as uuid } from 'uuid';
import { ExpectedError } from '@utils/errors';
import { aggregateHealthData } from '@utils/sample';
import { findItemByDate } from './global';
import { addHealthItem } from './health';
import models from '@models';
import { nanoid } from 'nanoid';
import { Model } from 'sequelize-typescript';
import { FindOptions } from 'sequelize';
import { appendResponse } from '@schema/utils/global';
const { healthTypes } = require('@configs/healthkit.json');
const healthConfig = require('@configs/health.json');

import {
  HealthKitType,
  HealthKitInputType,
  HealthKitInputUpdateType,
  HealthKitConfigType,
  BloodPressureType,
  HealthKitTypeWithItemType,
  HealthkitInputAndConfig,
  HealthTypes,
  HealthType,
  HealthKitDeleteType,
  HealthKitCombined,
} from '@types';
import logger from '@utils/logger';

// find by hkid
export const findItemByHkid = async (hkid: string, modelID: string): Promise<Model> => {
  const dbOptions: FindOptions = { where: { hkid } };
  return models[modelID].findOne(dbOptions);
};

// add health item
export const addHealthKitItem = async (
  input: HealthKitInputType,
  hkid: string,
  config: HealthKitConfigType,
  doSave = true,
): Promise<HealthKitType> => {
  // if type is not valid
  if (!input.type || !config || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTHKIT_TYPE');
  }

  // if type has been disabled in config
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTHKIT_TYPE');
  }

  if (config.interval && !doSave) {
    const dupeItem: any = await findItemByDate(input.sampledOn, config.modelID);

    const id =
      dupeItem && dupeItem.id
        ? dupeItem.id
        : dupeItem && dupeItem.dataValues
        ? dupeItem.dataValues.id
        : null;

    if (dupeItem) return replaceHealthKitItem(id, input, config, doSave);
  }

  const data: HealthKitType = aggregateHealthData(input, config);

  // do not create row if there is no value or type is disabled
  if (data.value === null) return null;

  const currentDate: string = moment().toISOString();
  data.id = uuid();
  data.hkid = hkid;
  data.createdOn = currentDate;
  data.updatedOn = currentDate;

  // if doSave is false, only return healthkit data and do not save to the database
  if (!doSave) return data;

  const HealthItem = models[config.modelID];

  try {
    const res: any = await HealthItem.create(data);
    return res.dataValues;
  } catch (err) {
    throw new ExpectedError('ADD_HEALTHKIT_ERROR');
  }
};

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
    const [rows, [updatedItem]]: any = await HealthItem.update(
      { ...data },
      { where: { id }, returning: true },
    );
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('REPLACE_HEALTHKIT_ERROR');
  }
};

// update health item
export const updateHealthKitItem = async (
  id: string,
  input: HealthKitInputUpdateType,
  config: HealthKitConfigType,
): Promise<Model> => {
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  const HealthItem = models[config.modelID];
  const data = { ...input, updatedOn: moment().toISOString() };

  try {
    const [rows, [updatedItem]]: any = await HealthItem.update(
      { ...data },
      { where: { id }, returning: true },
    );
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('UPDATE_HEALTHKIT_ERROR');
  }
};

const addHealthkitBloodPressure = async (
  healthItems: HealthkitInputAndConfig[],
  hkid: string,
): Promise<HealthTypes> => {
  const bpConfig = healthConfig.bloodPressure;
  const processedItems: Promise<HealthKitTypeWithItemType[]> = Promise.all(
    healthItems.map(async (item: HealthkitInputAndConfig): Promise<HealthKitTypeWithItemType> => {
      const { input, config } = item;
      const processedItem = await addHealthKitItem(input, hkid, config, false);
      return {
        ...processedItem,
        healthkitType: config.id,
      };
    }),
  );

  const output = (await processedItems).reduce(
    (result: BloodPressureType, currentItem: HealthKitTypeWithItemType) => {
      const validTypes = [
        healthTypes.systolicBloodPressure.id,
        healthTypes.diastolicBloodPressure.id,
      ];

      if (validTypes.indexOf(currentItem.healthkitType) < 0) return;

      if (Object.keys(result).length < 1) {
        result = {
          sampledOn: currentItem.sampledOn,
          unit: currentItem.unit,
        };
      }

      const valueType: string =
        currentItem.healthkitType === healthTypes.systolicBloodPressure.id
          ? 'systolic'
          : 'diastolic';

      result = { ...result, [valueType]: currentItem.value };

      return result;
    },
    {},
  );

  const addResult: Model & HealthType = (await addHealthItem(output, bpConfig)) as Model &
    HealthType;
  const result = addResult.get ? addResult.get() : addResult;

  // append missing hk properties
  result.hkid = hkid;
  return appendResponse(result, bpConfig);
};

// batch controllers
export const findHealthkitItems = async (hkid: string) => {
  if (!hkid) throw new ExpectedError('INVALID_HEALTHKIT_INPUT');

  const hkConfigs = [...healthTypes, healthConfig.bloodPressure];

  const healthkitItems: HealthKitType[] = await Promise.all(
    Object.keys(hkConfigs).map(async (hkType: string): Promise<HealthKitType> => {
      const config = healthTypes[hkType];

      if (config.disabled) return null;

      try {
        const hkItem = await findItemByHkid(hkid, config.modelID);
        return appendResponse(hkItem, config) as HealthKitType;
      } catch (err) {
        logger.error(err);
      }
    }),
  );

  return { response: healthkitItems };
};

export const addHealthKitItems = async (
  inputs: HealthKitInputType[],
): Promise<{ response: HealthKitCombined[] }> => {
  if (!inputs) throw new ExpectedError('INVALID_HEALTHKIT_INPUT');

  const hkid: string = nanoid(11);
  let bloodPressuremItems: HealthkitInputAndConfig[] = [];
  let healthkitItems: HealthKitType[] = [];

  await Promise.all(
    inputs.map(async (input: HealthKitInputType): Promise<void> => {
      const { type } = input;
      const config =
        healthTypes[Object.keys(healthTypes).find((c) => healthTypes[c].healthkitID === type)];

      if (!config) throw new ExpectedError('INVALID_HEALTHKIT_TYPE');
      if (config.disabled) return null;
      if (!input.sampleList?.length && !input.sample) return null;

      if (config.modelID === healthConfig.bloodPressure.modelID) {
        bloodPressuremItems = [...bloodPressuremItems, { input, config }];
      } else {
        const newItem = await addHealthKitItem(input, hkid, config);

        if (!newItem || !newItem.id) return null;

        healthkitItems = [...healthkitItems, appendResponse(newItem, config)];
      }
    }),
  );

  const output: HealthKitCombined[] = healthkitItems;

  if (bloodPressuremItems.length > 0) {
    const bloodPressureOutput = await addHealthkitBloodPressure(bloodPressuremItems, hkid);
    output.push(bloodPressureOutput);
  }

  // sort output by configID so it is in a predictable order
  output.sort((a: HealthKitCombined, b: HealthKitCombined): number =>
    a.configID > b.configID ? 1 : -1,
  );

  return { response: output };
};

export const deleteHealthkitItems = async (hkid: string): Promise<HealthKitDeleteType> => {
  const configIDs: string[] = await Promise.all(
    Object.keys(healthTypes).map(async (hkType: string): Promise<string> => {
      if (!healthTypes[hkType]) return null;
      if (healthTypes[hkType].disabled) return null;

      try {
        const item = models[healthTypes[hkType].modelID];
        await item.destroy({ where: { hkid } });
        return healthTypes[hkType].id;
      } catch (err) {
        throw new ExpectedError('DELETE_ERROR');
      }
    }),
  );

  return {
    hkid,
    configIDs,
  };
};

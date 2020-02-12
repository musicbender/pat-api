import * as moment from 'moment';
import * as uuid from 'uuid';
import { ExpectedError } from '../utils/errors';
const { healthTypes } = require('../configs/healthkit.json');
import { HealthKitType, HealthKitInputType, HealthKitInputUpdateType, HealthKitConfigType } from '../types';
import { aggregateHealthData } from '../utils/sample';
import { findItemByDate } from './global';
import models from '../models';
import { Model } from 'sequelize-typescript';

// add health item
export const addHealthKitItem = async (input: HealthKitInputType, config: HealthKitConfigType): Promise<HealthKitType> => {
  // if type is not valid
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTHKIT_TYPE');
  }

  // if type has been disabled in config
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTHKIT_TYPE');
  }

  if (config.interval) {
    const dupeItem: any = await findItemByDate(input.sampledOn, config.modelID);

    const id = dupeItem && dupeItem.id 
      ? dupeItem.id
      : dupeItem && dupeItem.dataValues 
      ? dupeItem.dataValues.id 
      : null;

    if (dupeItem) return replaceHealthKitItem(id, input, config);
  }

  let data: HealthKitType = aggregateHealthData(input, config);
  
  data.id = uuid();
  data.createdOn = moment().toISOString();

  // do not create row if there is no value or type is disabled
  if (data.value === null) {
    return null;
  };

  const HealthItem = models[config.modelID];

  try {
    const res: any = await HealthItem.create(data);
    return res.dataValues;
  } catch (err) {
    throw new ExpectedError('ADD_HEALTHKIT_ERROR');
  }
}

// replace health item
export const replaceHealthKitItem = async (id: string, input: HealthKitInputType, config: HealthKitConfigType): Promise<Model> => {
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE'); 
  }

  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  const data: HealthKitType = aggregateHealthData(input, config);
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

export const addHealthKitItems = async (input: HealthKitInputType[]) => {
  if (!input) throw new ExpectedError('INVALID_HEALTHKIT_INPUT');

  const allItems = input.map(async (healthItem: HealthKitInputType): Promise<HealthKitType> => {
    const { type } = healthItem;
    const config = healthTypes[Object.keys(healthTypes).find(c => healthTypes[c].healthkitID === type)];

    if (!config) new ExpectedError('INVALID_HEALTHKIT_TYPE');
    if (config.disabled) return null;

    return await addHealthKitItem(healthItem, config);
  });

  const output = await Promise.all(allItems);

  return { response: output };
}

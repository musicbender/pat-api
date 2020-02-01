import * as moment from 'moment';
import * as uuid from 'uuid';
import { ExpectedError } from '../utils/errors';
const { healthTypes } = require('../configs/healthkit.json');
import { HealthType, HealthInputType, HealthInputUpdateType, HealthConfigType } from '../types';
import { aggregateHealthData } from '../utils/sample';
import { findHealthByDate } from './health';
import models from '../models';
import { Model } from 'sequelize-typescript';

// add health item
export const addHealthKitItem = async (input: HealthInputType, config: HealthConfigType): Promise<HealthType> => {
  // if type is not valid
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE');
  }

  // if type has been disabled in config
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  if (config.interval) {
    const dupeItem: any = await findHealthByDate(input.sampledOn, config);

    const id = dupeItem && dupeItem.id 
      ? dupeItem.id
      : dupeItem && dupeItem.dataValues 
      ? dupeItem.dataValues.id 
      : null;

    if (dupeItem) return replaceHealthKitItem(id, input, config);
  }

  let data: HealthType = aggregateHealthData(input, config);
  
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
    throw new ExpectedError('ADD_HEALTH_ERROR');
  }
}

// replace health item
export const replaceHealthKitItem = async (id: string, input: HealthInputType, config: HealthConfigType): Promise<Model> => {
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE'); 
  }

  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  const data: HealthType = aggregateHealthData(input, config);
  const HealthItem = models[config.modelID];

  try {
    const [rows, [ updatedItem ]]: any = await HealthItem.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('REPLACE_HEALTH_ERROR');
  }
}

// update health item
export const updateHealthKitItem = async (id: string, input: HealthInputUpdateType, config: HealthConfigType): Promise<Model> => {
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  const HealthItem = models[config.modelID];
  let data = { ...input, updatedOn: moment().toISOString() }

  try {
    const [rows, [ updatedItem ]]: any = await HealthItem.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('UPDATE_HEALTH_ERROR');
  }
}

export const addHealthKitItems = async (input: HealthInputType[]) => {
  if (!input) throw new ExpectedError('INVALID_HEALTHKIT_INPUT');

  const allItems = input.map(async (healthItem: HealthInputType): Promise<HealthType> => {
    const { type } = healthItem;
    const config = healthTypes[Object.keys(healthTypes).find(c => healthTypes[c].healthkitID === type)];

    if (!config) new ExpectedError('INVALID_HEALTH_TYPE');
    if (config.disabled) return null;

    return await addHealthKitItem(healthItem, config);
  });

  const output = await Promise.all(allItems);

  return { response: output };
}

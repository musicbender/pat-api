import * as uuid from 'uuid';
import * as moment from 'moment';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { findItemByDate } from './global';
import { ExpectedError } from '../utils/errors';
import { HealthTypes, HealthInputTypes, HealthInputUpdateTypes, HealthConfigType } from '../types';

// add health item
export const addHealthItem = async (input: HealthInputTypes, config: HealthConfigType): Promise<HealthTypes> => {
  // if type has been disabled in config
  if (config.disabled) throw new ExpectedError('DISABLED_HEALTH_TYPE');

  if (config.interval) {
    const dupeItem: any = await findItemByDate(input.sampledOn, config.modelID, config.interval);
    const id = dupeItem && dupeItem.id 
      ? dupeItem.id
      : dupeItem && dupeItem.dataValues 
      ? dupeItem.dataValues.id 
      : null;

    if (dupeItem) return replaceHealthItem(id, input, config);
  }

  const currentDate: string = moment().toISOString();

  let data: HealthTypes = {
    ...input,
    id: uuid(),
    unit: config.unit,
    createdOn: currentDate,
    updatedOn: currentDate,
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
export const replaceHealthItem = async (id: string, input: HealthInputTypes, config: HealthConfigType): Promise<Model> => {
  if (config.disabled) throw new ExpectedError('DISABLED_HEALTH_TYPE');

  const data: HealthTypes = { ...input, updatedOn: moment().toISOString() };
  const HealthItem = models[config.modelID];

  try {
    const [rows, [ updatedItem ]]: any = await HealthItem.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('REPLACE_HEALTH_ERROR');
  }
}

// update health item
export const updateHealthItem = async (id: string, input: HealthInputUpdateTypes, config: HealthConfigType): Promise<Model> => {
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
import * as uuid from 'uuid';
import * as moment from 'moment';
import { Op } from 'sequelize';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { ExpectedError } from '../utils/errors';
import { HealthType, HealthInputType, HealthInputUpdateType, HealthConfigType, HealthKitConfigType } from '../types';

// find by id
export const findHealthById = (id: string, config: HealthConfigType | HealthKitConfigType): Promise<Model> => {
  return models[config.modelID].findOne({ where: { id } });
}

// find by date
export const findHealthByDate = (date: Date | string, config: HealthConfigType | HealthKitConfigType): Promise<Model> => {
  const start = moment(date).startOf('day').toDate();
  const end = moment(date).endOf('day').toDate();

  return models[config.modelID].findOne({ 
    where: { 
      sampledOn: { [Op.gte]: start, [Op.lte]: end } 
    } 
  });
}

// add health item
export const addHealthItem = async (input: HealthInputType, config: HealthConfigType): Promise<HealthType> => {
  // if type has been disabled in config
  if (config.disabled) throw new ExpectedError('DISABLED_HEALTH_TYPE');

   // do not create row if there is no value or type is disabled
  if (input.value === null) return null;

  if (config.interval && config.interval === 'day') {
    const dupeItem: any = await findHealthByDate(input.sampledOn, config);
    const id = dupeItem && dupeItem.id 
      ? dupeItem.id
      : dupeItem && dupeItem.dataValues 
      ? dupeItem.dataValues.id 
      : null;

    if (dupeItem) return replaceHealthItem(id, input, config);
  }

  let data: HealthType = {
    ...input,
    id: uuid(),
    unit: config.unit,
    createdOn: moment().toISOString(),
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
export const replaceHealthItem = async (id: string, input: HealthInputType, config: HealthConfigType): Promise<Model> => {
  if (config.disabled) throw new ExpectedError('DISABLED_HEALTH_TYPE');

  const data: HealthType = input;
  const HealthItem = models[config.modelID];

  try {
    const [rows, [ updatedItem ]]: any = await HealthItem.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('REPLACE_HEALTH_ERROR');
  }
}

// update health item
export const updateHealthItem = async (id: string, input: HealthInputUpdateType, config: HealthConfigType): Promise<Model> => {
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
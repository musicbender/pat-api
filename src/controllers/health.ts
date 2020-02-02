import * as uuid from 'uuid';
import * as moment from 'moment';
import { Op } from 'sequelize';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { ExpectedError } from '../utils/errors';
// import { HealthType, HealthInputType, HealthInputUpdateType, HealthConfigType } from '../types';

// find by id
export const findHealthById = (id: string, config: HealthConfigType): Promise<Model> => {
  return models[config.modelID].findOne({ where: { id } });
}

// find by date
export const findHealthByDate = (date: Date | string, config: any): Promise<Model> => {
  const start = moment(date).startOf('day').toDate();
  const end = moment(date).endOf('day').toDate();

  return models[config.modelID].findOne({ 
    where: { 
      sampledOn: { [Op.gte]: start, [Op.lte]: end } 
    } 
  });
}

// add health item
export const addHealthItem = async (input, config) => {
  // if type is not valid
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE');
  }

  // if type has been disabled in config
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  if (config.interval && config.interval === 'day') {
    const dupeItem: any = await findHealthByDate(input.sampledOn, config);

    const id = dupeItem && dupeItem.id 
      ? dupeItem.id
      : dupeItem && dupeItem.dataValues 
      ? dupeItem.dataValues.id 
      : null;

    if (dupeItem) return replaceHealthItem(id, input, config);
  }

  let data: HealthType = input;
  
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
// TODO: update health item
export const updateHealthItem = (id, input, config) => {
  return;
}
// TODO: replace health item
export const replaceHealthItem = (id, input, config) => {
  return;
}
// TODO: delete health item
export const deleteHealthItem = (id) => {
  return;
}
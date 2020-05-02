import { Op } from 'sequelize';
import * as moment from 'moment';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { WhereDb, DateInterval } from 'types';

// find by id
export const findItemById = (id: string, modelID: string): Promise<Model> => {
  return models[modelID].findOne({ where: { id } });
}

// find by date
export const findItemByDate = (date: Date | string, modelID: string, interval: DateInterval = 'day'): Promise<Model> => {
  const start = moment(date).startOf(interval).toDate();
  const end = moment(date).endOf(interval).toDate();

  return models[modelID].findOne({ 
    where: { 
      sampledOn: { [Op.gte]: start, [Op.lte]: end } 
    } 
  });
}

// find by item by any key/value
export const findItem = (where: WhereDb, modelID: string): Promise<Model> => {
  return models[modelID].findOne({ where });
}
import { Op } from 'sequelize';
import * as moment from 'moment';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { WhereDb } from 'types';

// find by id
export const findItemById = (id: string, modelID: string): Promise<Model> => {
  return models[modelID].findOne({ where: { id } });
}

// find by date
export const findItemByDate = (date: Date | string, modelID: string): Promise<Model> => {
  const start = moment(date).startOf('day').toDate();
  const end = moment(date).endOf('day').toDate();

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
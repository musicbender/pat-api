import { FindOptions, Op } from 'sequelize';
import * as moment from 'moment';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { WhereDb, DateInterval, QueryAllOptions } from 'types';

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

// find muliple items
export const findAllItems = (options: QueryAllOptions, modelID: string): Promise<Model> => {
  let dbOptions: FindOptions = {};

  if (options.after || options.before) {
    const dateBy: string = options.dateBy || 'sampledOn';
    let dateOptions = {};

    if (options.after && moment(options.after).isValid()) {
      dateOptions = { ...dateOptions, [Op.gte]: moment(options.after).toDate() };
    }

    if (options.before && moment(options.before).isValid()) {
      dateOptions = { ...dateOptions, [Op.lte]: moment(options.before).toDate() };
    }

    dbOptions.where = { [dateBy]: dateOptions };
  }

  if (options.limit) dbOptions.limit = options.limit;
  if (options.offset) dbOptions.offset = options.offset;
  if (options.sortBy) dbOptions.order = [ options.sortBy ];

  return models[modelID].findAll(dbOptions);
}
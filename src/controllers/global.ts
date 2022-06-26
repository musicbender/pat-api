import { FindOptions, Op } from 'sequelize';
import * as moment from 'moment';
import models from '@models';
import { Model } from 'sequelize-typescript';
import { WhereDb, DateInterval, QueryAllOptions, AnyConfig } from '@types';
import { ExpectedError } from '@utils/errors';

// find by id
export const findItemById = (id: string, modelID: string, include?: string): Promise<Model> => {
  let dbOptions: FindOptions = { where: { id } };
  if (include) dbOptions.include = models[include];
  return models[modelID].findOne(dbOptions);
};

// find by date
export const findItemByDate = (
  date: Date | string,
  modelID: string,
  include?: string,
  interval: DateInterval = 'day',
): Promise<Model> => {
  const start = moment(date).startOf(interval).toDate();
  const end = moment(date).endOf(interval).toDate();

  let dbOptions: FindOptions = {
    where: {
      sampledOn: { [Op.gte]: start, [Op.lte]: end },
    },
  };

  if (include) dbOptions.include = models[include];

  return models[modelID].findOne(dbOptions);
};

// find by item by any key/value
export const findItem = (where: WhereDb, modelID: string, include?: string): Promise<Model> => {
  let dbOptions: FindOptions = { where };
  if (include) dbOptions.include = models[include];
  return models[modelID].findOne(dbOptions);
};

// find muliple items
export const findAllItems = (
  options: QueryAllOptions,
  modelID: string,
  include?: string,
): Promise<Model[]> => {
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
  if (options.sortBy) dbOptions.order = [options.sortBy];
  if (include) dbOptions.include = models[include];

  return models[modelID].findAll(dbOptions);
};

// delete health item
export const deleteItem = async (id: string, config: AnyConfig): Promise<void> => {
  if (config.disabled) throw new ExpectedError('DISABLED_TYPE');
  try {
    const item = models[config.modelID];
    await item.destroy({ where: { id } });
  } catch (err) {
    throw new ExpectedError('DELETE_ERROR');
  }
};

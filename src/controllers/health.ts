import * as moment from 'moment';
import { Op } from 'sequelize';
import models from '../models';
import { HealthConfigType } from '../types';
import { Model } from 'sequelize-typescript';

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

// TODO: add health item

// TODO: update health item

// TODO: replace health item

// TODO: delete health item
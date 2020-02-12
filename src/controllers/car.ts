import * as uuid from 'uuid';
import * as moment from 'moment';
import { AverageMpgInputType, CarConfigType, AverageMpgType, AverageMpgInputUpdateType } from '../types';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { findItemByDate } from './global';
import { ExpectedError } from '../utils/errors';

// add average mpg item
export const addAverageMpgItem = async (input: AverageMpgInputType, config: CarConfigType): Promise<AverageMpgType> => {
  // if type has been disabled in config
  if (config.disabled) throw new ExpectedError('DISABLED_CAR_TYPE');

   // do not create row if there is no value or type is disabled
  if (input.value === null) return null;

  let data: AverageMpgType = {
    ...input,
    id: uuid(),
    createdOn: moment().toISOString(),
  };

  const item = models[config.modelID];

  try {
    const res: any = await item.create(data);
    return res.dataValues;
  } catch (err) {
    throw new ExpectedError('ADD_AVERAGE_MPG_ERROR');
  }
}

// update health item
export const updateAverageMpgItem = async (id: string, input: AverageMpgInputUpdateType, config: CarConfigType): Promise<Model> => {
  if (config.disabled) throw new ExpectedError('DISABLED_CAR_TYPE');

  const item = models[config.modelID];
  let data = { ...input, updatedOn: moment().toISOString() }

  try {
    const [rows, [ updatedItem ]]: any = await item.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('UPDATE_HEALTH_ERROR');
  }
}
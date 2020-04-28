import * as uuid from 'uuid';
import * as moment from 'moment';
import { CarType, CarInputType, CarInputUpdateType, CarConfigType } from '../types';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { ExpectedError } from '../utils/errors';

// add car item
export const addCarItem = async (input: CarInputType, config: CarConfigType): Promise<CarType> => {
  // if type has been disabled in config
  if (config.disabled) throw new ExpectedError('DISABLED_CAR_TYPE');

  let data: CarType = {
    ...input,
    id: uuid(),
    createdOn: moment().toISOString(),
  };

  const item = models[config.modelID];

  try {
    const res: any = await item.create(data);
    return res.dataValues;
  } catch (err) {
    throw new ExpectedError('ADD_CAR_ERROR');
  }
}

// update car item
export const updateCarItem = async (id: string, input: CarInputUpdateType, config: CarConfigType): Promise<Model> => {
  if (config.disabled) throw new ExpectedError('DISABLED_CAR_TYPE');

  const item = models[config.modelID];
  let data = { ...input, updatedOn: moment().toISOString() }

  try {
    const [rows, [ updatedItem ]]: any = await item.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('UPDATE_CAR_ERROR');
  }
}
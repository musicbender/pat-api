import { v4 as uuid } from 'uuid';
import * as moment from 'moment';
import { CarType, CarInputType, CarInputUpdateType, CarConfigType } from '../types';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { ExpectedError } from '../utils/errors';

// add car item
export const addCarItem = async (input: CarInputType, config: CarConfigType): Promise<CarType> => {
  // if type has been disabled in config
  if (config.disabled) throw new ExpectedError('DISABLED_CAR_TYPE');

  const currentDate: string = moment().toISOString();

  let data: CarType = {
    ...input,
    id: uuid(),
    sampledOn: input.sampledOn || currentDate,
    createdOn: currentDate,
    updatedOn: currentDate,
    configID: config.id,
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

  const CarItem = models[config.modelID];
  let data = { ...input, updatedOn: moment().toISOString() }

  try {
    const [rows, [ updatedItem ]]: any = await CarItem.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('UPDATE_CAR_ERROR');
  }
}

// delete car item
export const deleteCarItem = async(id: string, config: CarConfigType): Promise<void> => {
  if (config.disabled) throw new ExpectedError('DISABLED_CAR_TYPE');

  try {
    const item = models[config.modelID];
    await item.destroy({ where: {id }});
  } catch (err) {
    throw new ExpectedError('DELETE_CAR_ERROR');
  }
}
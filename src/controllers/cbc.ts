import * as uuid from 'uuid';
import * as moment from 'moment';
// import { CbcType, CbcInputType, CbcInputUpdateType, CbcConfigType } from '../types';
// import models from '../models';
import { Model } from 'sequelize-typescript';
import { ExpectedError } from '../utils/errors';

// add average mpg item
export const addCbcItem = async (input: any): Promise<any> => {
  // // if type has been disabled in config
  // if (config.disabled) throw new ExpectedError('DISABLED_CAR_TYPE');

  // let data: CbcType = {
  //   ...input,
  //   id: uuid(),
  //   createdOn: moment().toISOString(),
  // };

  // const item = models[config.modelID];

  // try {
  //   const res: any = await item.create(data);
  //   return res.dataValues;
  // } catch (err) {
  //   throw new ExpectedError('ADD_CAR_ERROR');
  // }
  return;
}

// update health item
export const updateCbcItem = async (id: string, input: any): Promise<Model> => {
  // if (config.disabled) throw new ExpectedError('DISABLED_CAR_TYPE');

  // const item = models[config.modelID];
  // let data = { ...input, updatedOn: moment().toISOString() }

  // try {
  //   const [rows, [ updatedItem ]]: any = await item.update({ ...data }, { where: { id }, returning: true });
  //   return updatedItem;
  // } catch (err) {
  //   throw new ExpectedError('UPDATE_CAR_ERROR');
  // }
  return;
}
import * as uuid from 'uuid';
import * as moment from 'moment';
import { CbcType, CbcInputType, CbcInputUpdateType, HealthConfigType } from '../types';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { ExpectedError } from '../utils/errors';
const healthConfig = require('../configs/health.json');

// add cbc item
export const addCbcItem = async (input: CbcInputType): Promise<any> => {
  // if type has been disabled in config
  if (healthConfig.cbc.disabled) throw new ExpectedError('DISABLED_HEALTH_TYPE');

  const currentDate = moment().toISOString();

  let data: CbcType = {
    ...input,
    id: uuid(),
    createdOn: currentDate,
    platelets: {
      id: uuid(),
      value: input.plateletCount,
      sampledOn: input.sampledOn,
      createdOn: currentDate,
      unit: healthConfig.platelets.unit
    }
  };

  const item = models[healthConfig.cbc.modelID];

  try {
    const res: any = await item.create(data, { include: models[healthConfig.platelets.modelID] });
    return res.dataValues;
  } catch (err) {
    throw new ExpectedError('ADD_HEALTH_ERROR');
  }
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
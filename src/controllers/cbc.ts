import * as uuid from 'uuid';
import * as moment from 'moment';
import { CbcType, CbcInputType, CbcInputUpdateType, HealthConfigType } from '../types';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { ExpectedError } from '../utils/errors';
import { findItemById, findItemByDate } from './global';
const healthConfig = require('../configs/health.json');

export const getCbcItem = async (id?: string, date?: Date): Promise<CbcType> => {
  const modelID = 'Cbc';
  let response;

  if (id) {
    response = await findItemById(id, modelID);
  } else if (date) {
    response = await findItemByDate(date, modelID);
  }

  const platelets = await models[healthConfig.platelets.modelID].findOne({ where: { id: response.plateletsId } });
  response.platelets = platelets;

  return response
}

export const addCbcItem = async (input: CbcInputType): Promise<CbcType> => {
  // if type has been disabled in config
  if (healthConfig.cbc.disabled) throw new ExpectedError('DISABLED_CBC_TYPE');

  const currentDate = moment().toISOString();
  const plateletId = uuid();

  let data: CbcType = {
    ...input,
    id: uuid(),
    createdOn: currentDate,
    updatedOn: currentDate,
    plateletsId: plateletId,
    platelets: {
      id: plateletId,
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
    throw new ExpectedError('ADD_CBC_ERROR');
  }
}

export const updateCbcItem = async (id: string, input: any): Promise<CbcType> => {
  if (healthConfig.cbc.disabled) throw new ExpectedError('DISABLED_CBC_TYPE');

  const item = models[healthConfig.cbc.modelID];
  let data = { ...input, updatedOn: moment().toISOString() }

  try {
    let [rows, [ updatedItem ]]: any = await item.update({ ...data }, { where: { id }, returning: true });
    const platelets = await models[healthConfig.platelets.modelID].findOne({ where: { id: updatedItem.plateletsId } })
    updatedItem.platelets = platelets;
    return updatedItem
  } catch (err) {
    throw new ExpectedError('UPDATE_CBC_ERROR');
  }
}
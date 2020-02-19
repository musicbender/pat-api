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
  if (healthConfig.cbc.disabled) throw new ExpectedError('DISABLED_CBC_TYPE');

  const currentDate = moment().toISOString();
  const plateletId = uuid();

  let data: CbcType = {
    ...input,
    id: uuid(),
    createdOn: currentDate,
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

// update health item
export const updateCbcItem = async (id: string, input: any): Promise<Model> => {
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
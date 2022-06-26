import { v4 as uuid } from 'uuid';
import * as moment from 'moment';
import { CbcType, CbcInputType, CbcInputUpdateType } from '@types';
import models from '@models';
import { ExpectedError } from '@utils/errors';
const healthConfig = require('@configs/health.json');

export const addCbcItem = async (input: CbcInputType): Promise<CbcType> => {
  // if type has been disabled in config
  if (healthConfig.cbc.disabled) throw new ExpectedError('DISABLED_CBC_TYPE');

  const currentDate = moment().toISOString();
  const plateletId = uuid();

  let data: CbcType = {
    ...input,
    id: uuid(),
    sampledOn: input.sampledOn || null,
    createdOn: currentDate,
    updatedOn: currentDate,
    plateletsId: plateletId,
    platelets: {
      id: plateletId,
      value: input.plateletCount,
      sampledOn: input.sampledOn || null,
      createdOn: currentDate,
      unit: healthConfig.platelets.unit,
    },
  };

  const item = models[healthConfig.cbc.modelID];

  try {
    const res: any = await item.create(data, { include: models[healthConfig.platelets.modelID] });
    return { ...res.dataValues, configID: healthConfig.platelets.id };
  } catch (err) {
    throw new ExpectedError('ADD_CBC_ERROR');
  }
};

export const updateCbcItem = async (id: string, input: CbcInputUpdateType): Promise<CbcType> => {
  if (healthConfig.cbc.disabled) throw new ExpectedError('DISABLED_CBC_TYPE');

  const item = models[healthConfig.cbc.modelID];
  let data = { ...input, updatedOn: moment().toISOString() };

  try {
    let [rows, [updatedItem]]: any = await item.update(
      { ...data },
      { where: { id }, returning: true },
    );
    const platelets = await models[healthConfig.platelets.modelID].findOne({
      where: { id: updatedItem.plateletsId },
    });
    updatedItem.platelets = platelets;
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('UPDATE_CBC_ERROR');
  }
};

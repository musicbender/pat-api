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

  const data: CbcType = {
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
    const cbcOutput = res.get();
    return {
      ...cbcOutput,
      platelets: cbcOutput.platelets.get(),
    };
  } catch (err) {
    throw new ExpectedError('ADD_CBC_ERROR');
  }
};

export const updateCbcItem = async (id: string, input: CbcInputUpdateType): Promise<CbcType> => {
  if (healthConfig.cbc.disabled) throw new ExpectedError('DISABLED_CBC_TYPE');

  const item = models[healthConfig.cbc.modelID];
  const plateletItem = models[healthConfig.platelets.modelID];
  const { plateletCount, ...inputCbc } = input;
  const data = { ...inputCbc, updatedOn: moment().toISOString() };
  let platelets;

  try {
    const [rows, [updatedItem]]: any = await item.update(
      { ...data },
      { where: { id }, returning: true },
    );

    if (plateletCount) {
      const [plateletRows, [updatedPlatelets]]: any = await plateletItem.update(
        { value: plateletCount },
        { where: { id: updatedItem.get().plateletsId }, returning: true },
      );
      platelets = updatedPlatelets;
    } else {
      platelets = await models[healthConfig.platelets.modelID].findOne({
        where: { id: updatedItem.get().plateletsId },
      });
    }

    return {
      ...updatedItem.get(),
      platelets: platelets.get(),
    };
  } catch (err) {
    throw new ExpectedError('UPDATE_CBC_ERROR');
  }
};

// delete health item
export const deleteCbcItem = async (id: string): Promise<void> => {
  if (healthConfig.cbc.disabled) throw new ExpectedError('DISABLED_TYPE');
  try {
    const item = models[healthConfig.cbc.modelID];
    const plateletItem = models[healthConfig.platelets.modelID];
    await item.destroy({ where: { id } });
    await plateletItem.destroy({ where: { cbcId: id } });
  } catch (err) {
    throw new ExpectedError('DELETE_ERROR');
  }
};

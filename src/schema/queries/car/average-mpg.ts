import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { AverageMPGType } from '@schema/types';
const carConf = require('@configs/cars.json');

const options = {
  name: 'averageMPG',
  type: AverageMPGType,
  config: carConf.averageMPG,
};

export const averageMPG = composeQuery(options);
export const averageMPGAll = composeQueryAll(options);

import { composeQuery } from '../../utils/global';
import { AverageMPGType } from '../../types';
const carConf = require('../../../configs/cars.json');

export const averageMPG = composeQuery({
  name: carConf.averageMPG.modelID, 
  type: AverageMPGType, 
});
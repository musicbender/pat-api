import { composeQuery, composeQueryAll } from '../../utils/global';
import { DrivingScoreType } from '../../types';
const carConf = require('../../../configs/cars.json');

const options = {
  name: carConf.drivingScore.modelID, 
  type: DrivingScoreType,
  config: carConf.drivingScore,
};

export const drivingScore = composeQuery(options);
export const drivingScoreAll = composeQueryAll(options);
import { composeQuery } from '../../utils/global';
import { DrivingScoreType } from '../../types';
const carConf = require('../../../configs/cars.json');

export const drivingScore = composeQuery({
  name: carConf.drivingScore.modelID, 
  type: DrivingScoreType, 
});
import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { DrivingScoreType } from '@schema/types';
const carConf = require('@configs/cars.json');

const options = {
  name: 'drivingScore',
  type: DrivingScoreType,
  config: carConf.drivingScore,
};

export const drivingScore = composeQuery(options);
export const drivingScoreAll = composeQueryAll(options);

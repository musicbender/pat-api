import { composeQuery, composeQueryAll } from '../../utils/global';
import { RefuelType } from '../../types';
const carConf = require('../../../configs/cars.json');

const options = {
  name: 'refuel', 
  type: RefuelType, 
  config: carConf.refuel,
};

export const refuel = composeQuery(options);
export const refuelAll = composeQueryAll(options);

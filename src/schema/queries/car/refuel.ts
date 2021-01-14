import { composeQuery, composeQueryAll } from '../../utils/global';
import { RefuelType } from '../../types';
const carConf = require('../../../configs/cars.json');

const options = {
  name: carConf.refuel.modelID, 
  type: RefuelType, 
};

export const refuel = composeQuery(options);
export const refuelAll = composeQueryAll(options);

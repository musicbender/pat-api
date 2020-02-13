import { composeQuery } from '../../utils/global';
import { RefuelType } from '../../types';
const carConf = require('../../../configs/cars.json');

export const refuel = composeQuery({
  name: carConf.refuel.modelID, 
  type: RefuelType, 
});
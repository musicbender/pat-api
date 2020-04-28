import { composeQuery } from '../../utils/global';
import { CollectionType } from '../../types';
const collectionConf = require('../../../configs/cars.json');

export const steins = composeQuery({
  name: collectionConf.steins.modelID, 
  type: CollectionType, 
});
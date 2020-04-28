import { composeQuery } from '../../utils/global';
import { CollectionType } from '../../types';
const collectionConf = require('../../../configs/cars.json');

export const collections = composeQuery({
  name: collectionConf.collections.modelID, 
  type: CollectionType, 
});
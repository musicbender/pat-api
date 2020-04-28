import { composeQuery } from '../../utils/global';
import { CollectionType } from '../../types';
const collectionConf = require('../../../configs/collections.json');

export const collections = composeQuery({
  name: collectionConf.collections.modelID, 
  type: CollectionType, 
});
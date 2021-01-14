import { composeQuery, composeQueryAll } from '../../utils/global';
import { CollectionType } from '../../types';
const collectionConf = require('../../../configs/collections.json');

const options = {
  name: collectionConf.collections.modelID, 
  type: CollectionType, 
};

export const collections = composeQuery(options);
export const collectionsAll = composeQueryAll(options);
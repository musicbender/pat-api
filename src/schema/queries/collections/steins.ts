import { composeQuery, composeQueryAll } from '../../utils/global';
import { CollectionType } from '../../types';
const collectionConf = require('../../../configs/collections.json');

const options = {
  name: collectionConf.steins.modelID, 
  type: CollectionType, 
};

export const steins = composeQuery(options);
export const steinsAll = composeQueryAll(options);
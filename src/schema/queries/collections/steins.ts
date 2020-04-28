import { composeQuery } from '../../utils/global';
import { CollectionType } from '../../types';
const collectionConf = require('../../../configs/collections.json');

export const steins = composeQuery({
  name: collectionConf.steins.modelID, 
  type: CollectionType, 
});
import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { CollectionType } from '@schema/types';
const collectionConf = require('@configs/collections.json');

const options = {
  name: collectionConf.collections.modelID,
  type: CollectionType,
  config: collectionConf.collections,
};

export const collections = composeQuery(options);
export const collectionsAll = composeQueryAll(options);

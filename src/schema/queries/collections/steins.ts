import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { CollectionType } from '@schema/types';
const collectionConf = require('@configs/collections.json');

const options = {
  name: collectionConf.steins.modelID,
  type: CollectionType,
  config: collectionConf.steins,
};

export const steins = composeQuery(options);
export const steinsAll = composeQueryAll(options);

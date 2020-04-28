import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddCollectionOptions, baseUpdateCollectionOptions } from '../../utils/collections';
const collectionConf = require('../../../configs/collections.json');

const options = {
  name: 'Collections',
  config: collectionConf.collections,
}

export const addCollection = composeAddMutation({ ...baseAddCollectionOptions, ...options });
export const updateCollection = composeUpdateMutation({ ...baseUpdateCollectionOptions, ...options });

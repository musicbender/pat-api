import { composeAddMutation, composeUpdateMutation, composeIncrementMutation } from '../../utils/global';
import { baseAddCollectionOptions, baseUpdateCollectionOptions, baseIncrementCollectionOptions } from '../../utils/collections';
const collectionConf = require('../../../configs/collections.json');

const options = {
  name: 'Collection',
  config: collectionConf.collections,
}

export const addCollection = composeAddMutation({ ...baseAddCollectionOptions, ...options });
export const updateCollection = composeUpdateMutation({ ...baseUpdateCollectionOptions, ...options });
export const incrementCollection = composeIncrementMutation({ ...baseIncrementCollectionOptions, ...options });
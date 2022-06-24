import {
  composeAddMutation,
  composeUpdateMutation,
  composeIncrementMutation,
} from '@schema/utils/global';
import {
  baseAddCollectionOptions,
  baseUpdateCollectionOptions,
  baseIncrementCollectionOptions,
} from '@schema/utils/collections';
const collectionConf = require('@configs/collections.json');

const options = {
  name: 'Stein',
  config: collectionConf.steins,
};

export const addStein = composeAddMutation({ ...baseAddCollectionOptions, ...options });
export const updateStein = composeUpdateMutation({ ...baseUpdateCollectionOptions, ...options });
export const incrementStein = composeIncrementMutation({
  ...baseIncrementCollectionOptions,
  ...options,
});

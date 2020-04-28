import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddCollectionOptions, baseUpdateCollectionOptions } from '../../utils/collections';
const collectionConf = require('../../../configs/collections.json');

const options = {
  name: 'Steins',
  config: collectionConf.steins,
}

export const addStein = composeAddMutation({ ...baseAddCollectionOptions, ...options });
export const updateStein = composeUpdateMutation({ ...baseUpdateCollectionOptions, ...options });

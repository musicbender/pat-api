import {
  composeAddMutation,
  composeDeleteMutation,
  composeUpdateMutation,
} from '@schema/utils/global';
import { CbcType, CbcInputType, CbcInputUpdateType } from '@schema/types';
import { addCbcItem, deleteCbcItem, updateCbcItem } from '@controllers/cbc';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'Cbc',
  type: CbcType,
  config: healthTypes.cbc,
};

export const addCbc = composeAddMutation({
  ...options,
  inputType: CbcInputType,
  controller: addCbcItem,
});

export const updateCbc = composeUpdateMutation({
  ...options,
  inputType: CbcInputUpdateType,
  controller: updateCbcItem,
});

export const deleteCbc = composeDeleteMutation({
  ...options,
  controller: deleteCbcItem,
});

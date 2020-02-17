import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { CbcType, CbcInputType, CbcInputUpdateType } from 'schema/types';
import { addCbcItem, updateCbcItem } from 'controllers/cbc';

const options = {
  name: 'Cbc',
  type: CbcType
}

export const addHeight = composeAddMutation({
  ...options,
  inputType: CbcInputType,
  controller: addCbcItem,
});

export const updateHeight= composeUpdateMutation({
  ...options,
  inputType: CbcInputUpdateType,
  controller: updateCbcItem,
});

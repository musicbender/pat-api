import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { CbcType, CbcInputType, CbcInputUpdateType } from '@schema/types';
import { addCbcItem, updateCbcItem } from '@controllers/cbc';

const options = {
  name: 'Cbc',
  type: CbcType,
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

import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { CbcType, CbcInputType, CbcInputUpdateType } from '../../types';
import { addCbcItem, updateCbcItem } from '../../../controllers/cbc';

const options = {
  name: 'Cbc',
  type: CbcType
}

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

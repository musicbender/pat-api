import { composeQuery } from '../../utils/global';
import { CbcType } from '../../types';

export const cbc = composeQuery({
  type: CbcType,
  name: 'cbc',
  modelID: 'Cbc'
});

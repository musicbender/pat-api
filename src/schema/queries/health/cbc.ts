import { CbcType } from '@schema/types';
import { composeQuery, composeQueryAll } from '@schema/utils/global';
const healthTypes = require('@configs/health.json');

const options = {
  type: CbcType,
  name: 'cbc',
  config: healthTypes.cbc,
  findInclude: healthTypes.platelets.modelID,
};

export const cbc = composeQuery(options);
export const cbcAll = composeQueryAll(options);

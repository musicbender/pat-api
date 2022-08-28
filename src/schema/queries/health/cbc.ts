import { CbcType } from '@schema/types';
import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { ComposeQueryOptions } from '@types';
const healthTypes = require('@configs/health.json');

const options: ComposeQueryOptions = {
  type: CbcType,
  name: 'cbc',
  config: healthTypes.cbc,
  findInclude: healthTypes.platelets.modelID,
  includeResponseKey: healthTypes.platelets.id,
};

export const cbc = composeQuery(options);
export const cbcAll = composeQueryAll(options);

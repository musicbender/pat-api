import { CbcType } from '../../types';
import { composeQuery, composeQueryAll } from '../../utils/global';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: CbcType,
  name: 'cbc',
  config: healthTypes.cbc,
  findInclude: healthTypes.platelets.modelID,
};

export const cbc = composeQuery(options);
export const cbcAll = composeQueryAll(options);

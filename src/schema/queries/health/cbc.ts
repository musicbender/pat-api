import { CbcType } from '../../types';
import { composeQuery, composeQueryAll } from '../../utils/global';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: CbcType,
  name: 'cbc',
  modelID: healthTypes.cbc.modelID,
  findInclude: healthTypes.platelets.modelID,
};

export const cbc = composeQuery(options);
export const cbcAll = composeQueryAll(options);

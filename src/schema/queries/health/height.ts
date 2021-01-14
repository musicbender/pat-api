import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: HealthType,
  name: 'height',
  modelID: healthTypes.height.modelID,
};

export const height = composeQuery(options);
export const heightAll = composeQueryAll(options);

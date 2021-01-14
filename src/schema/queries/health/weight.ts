import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: HealthType,
  name: 'weight',
  modelID: healthTypes.weight.modelID,
};

export const weight = composeQuery(options);
export const weightAll = composeQueryAll(options);

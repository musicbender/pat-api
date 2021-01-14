import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: HealthType,
  name: 'anxiety',
  modelID: healthTypes.anxiety.modelID,
};

export const anxiety = composeQuery(options);
export const anxietyAll = composeQueryAll(options);

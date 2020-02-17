import { composeQuery } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const weight = composeQuery({
  type: HealthType,
  name: 'weight',
  modelID: healthTypes.weight.modelID,
});

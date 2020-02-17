import { composeQuery } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const bodyTemperature = composeQuery({
  type: HealthType,
  name: 'bodyTemperature',
  modelID: healthTypes.bodyTemperature.modelID,
});

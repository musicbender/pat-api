import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: HealthType,
  name: 'bodyTemperature',
  config: healthTypes.bodyTemperature,
};

export const bodyTemperature = composeQuery(options);
export const bodyTemperatureAll = composeQueryAll(options);

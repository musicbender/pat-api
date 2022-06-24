import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  type: HealthType,
  name: 'bodyTemperature',
  config: healthTypes.bodyTemperature,
};

export const bodyTemperature = composeQuery(options);
export const bodyTemperatureAll = composeQueryAll(options);

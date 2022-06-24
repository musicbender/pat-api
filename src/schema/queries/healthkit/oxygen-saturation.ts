import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthType,
  name: 'oxygenSaturation',
  config: healthTypes.oxygenSaturation,
};

export const oxygenSaturation = composeQuery(options);
export const oxygenSaturationAll = composeQueryAll(options);

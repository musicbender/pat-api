import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthType,
  name: 'oxygenSaturation',
  config: healthTypes.oxygenSaturation,
};

export const oxygenSaturation = composeQuery(options);
export const oxygenSaturationAll = composeQueryAll(options);

import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthType,
  name: 'oxygenSaturation',
  modelID: healthTypes.oxygenSaturation.modelID,
};

export const oxygenSaturation = composeQuery(options);
export const oxygenSaturationAll = composeQueryAll(options);

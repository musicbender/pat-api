import { composeQuery } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const oxygenSaturation = composeQuery({
  type: HealthType,
  name: 'oxygenSaturation',
  modelID: healthTypes.oxygenSaturation.modelID,
});

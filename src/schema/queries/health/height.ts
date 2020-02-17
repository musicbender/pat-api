import { composeQuery } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const height = composeQuery({
  type: HealthType,
  name: 'height',
  modelID: healthTypes.height.modelID,
});

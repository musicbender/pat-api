import { composeQuery } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const anxiety = composeQuery({
  type: HealthType,
  name: 'anxiety',
  modelID: healthTypes.anxiety.modelID,
});

import { composeQuery } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const platelets = composeQuery({
  type: HealthType,
  name: 'platelets',
  modelID: healthTypes.platelets.modelID,
});

import { composeQuery } from '../../utils/global';
import { ActivityType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const activity = composeQuery({
  type: ActivityType,
  name: 'activity',
  modelID: healthTypes.activity.modelID,
});

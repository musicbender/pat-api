import { composeQuery, composeQueryAll } from '../../utils/global';
import { ActivityType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: ActivityType,
  name: 'activity',
  config: healthTypes.activity,
};

export const activity = composeQuery(options);
export const activityAll = composeQueryAll(options);

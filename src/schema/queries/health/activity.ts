import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { ActivityType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  type: ActivityType,
  name: 'activity',
  config: healthTypes.activity,
};

export const activity = composeQuery(options);
export const activityAll = composeQueryAll(options);

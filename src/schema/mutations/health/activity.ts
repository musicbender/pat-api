import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '@schema/utils/health';
import { ActivityInputType, ActivityInputUpdateType, ActivityType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'Activity',
  config: healthTypes.activity,
  type: ActivityType,
};

export const addActivity = composeAddMutation({
  ...baseAddHealthOptions,
  ...options,
  inputType: ActivityInputType,
});

export const updateActivity = composeUpdateMutation({
  ...baseUpdateHealthOptions,
  ...options,
  inputType: ActivityInputUpdateType,
});

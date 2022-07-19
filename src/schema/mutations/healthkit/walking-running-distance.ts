import {
  composeAddMutation,
  composeDeleteMutation,
  composeUpdateMutation,
} from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'WalkingRunningDistance',
  config: healthTypes.walkingRunningDistance,
};

export const addWalkingRunningDistance = composeAddMutation({
  ...baseAddHealthkitOptions,
  ...options,
});

export const updateWalkingRunningDistance = composeUpdateMutation({
  ...baseUpdateHealthkitOptions,
  ...options,
});

export const deleteWalkingRunningDistance = composeDeleteMutation(options);

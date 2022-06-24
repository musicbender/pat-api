import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'WalkingHeartRateAverage',
  config: healthTypes.walkingHeartRateAverage,
};

export const addWalkingHeartRateAverage = composeAddMutation({
  ...baseAddHealthkitOptions,
  ...options,
});
export const updateWalkingHeartRateAverage = composeUpdateMutation({
  ...baseUpdateHealthkitOptions,
  ...options,
});

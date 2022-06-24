import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'RestingHeartRate',
  config: healthTypes.restingHeartRate,
};

export const addRestingHeartRate = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateRestingHeartRate = composeUpdateMutation({
  ...baseUpdateHealthkitOptions,
  ...options,
});

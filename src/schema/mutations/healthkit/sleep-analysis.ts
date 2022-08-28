import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'SleepAnalysis',
  config: healthTypes.sleepAnalysis,
};

export const addSleepAnalysis = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateSleepAnalysis = composeUpdateMutation({
  ...baseUpdateHealthkitOptions,
  ...options,
});

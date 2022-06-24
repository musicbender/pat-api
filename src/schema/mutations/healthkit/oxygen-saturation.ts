import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'OxygenSaturation',
  config: healthTypes.oxygenSaturation,
};

export const addOxygenSaturation = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateOxygenSaturation = composeUpdateMutation({
  ...baseUpdateHealthkitOptions,
  ...options,
});

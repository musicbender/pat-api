import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'ActiveEnergy',
  config: healthTypes.activeEnergy,
};

export const addActiveEnergy = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateActiveEnergy = composeUpdateMutation({
  ...baseUpdateHealthkitOptions,
  ...options,
});

import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'SwimmingDistance',
  config: healthTypes.swimmingDistance,
};

export const addSwimmingDistance = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateSwimmingDistance = composeUpdateMutation({
  ...baseUpdateHealthkitOptions,
  ...options,
});

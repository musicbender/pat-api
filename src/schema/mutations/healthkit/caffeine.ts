import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'Caffeine',
  config: healthTypes.caffeine,
};

export const addCaffeine = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateCaffeine = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

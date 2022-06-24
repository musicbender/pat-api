import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'Step',
  config: healthTypes.steps,
};

export const addStep = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateStep = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

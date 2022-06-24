import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '@schema/utils/health';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'Anxiety',
  config: healthTypes.anxiety,
};

export const addAnxiety = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateAnxiety = composeUpdateMutation({ ...baseUpdateHealthOptions, ...options });

import {
  composeAddMutation,
  composeDeleteMutation,
  composeUpdateMutation,
} from '@schema/utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '@schema/utils/health';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'Weight',
  config: healthTypes.weight,
};

export const addWeight = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateWeight = composeUpdateMutation({ ...baseUpdateHealthOptions, ...options });
export const deleteWeight = composeDeleteMutation(options);

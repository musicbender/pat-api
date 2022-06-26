import {
  composeAddMutation,
  composeDeleteMutation,
  composeUpdateMutation,
} from '@schema/utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '@schema/utils/health';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'Height',
  config: healthTypes.height,
};

export const addHeight = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateHeight = composeUpdateMutation({ ...baseUpdateHealthOptions, ...options });
export const deleteHeight = composeDeleteMutation(options);

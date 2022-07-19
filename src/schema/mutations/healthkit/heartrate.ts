import {
  composeAddMutation,
  composeDeleteMutation,
  composeUpdateMutation,
} from '@schema/utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '@schema/utils/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  name: 'HeartRate',
  config: healthTypes.heartRate,
};

export const addHeartRate = composeAddMutation({ ...baseAddHealthkitOptions, ...options });

export const updateHeartRate = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

export const deleteHeartRate = composeDeleteMutation(options);

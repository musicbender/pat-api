import {
  composeAddMutation,
  composeDeleteMutation,
  composeUpdateMutation,
} from '@schema/utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '@schema/utils/health';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'BodyTemperature',
  config: healthTypes.bodyTemperature,
};

export const addBodyTemperature = composeAddMutation({ ...baseAddHealthOptions, ...options });

export const updateBodyTemperature = composeUpdateMutation({
  ...baseUpdateHealthOptions,
  ...options,
});

export const deleteBodyTemperature = composeDeleteMutation(options);

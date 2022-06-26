import {
  composeAddMutation,
  composeDeleteMutation,
  composeUpdateMutation,
} from '@schema/utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '@schema/utils/health';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'WaistCircumference',
  config: healthTypes.waistCircumference,
};

export const addWaistCircumference = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateWaistCircumference = composeUpdateMutation({
  ...baseUpdateHealthOptions,
  ...options,
});
export const deleteWaistCircumference = composeDeleteMutation(options);

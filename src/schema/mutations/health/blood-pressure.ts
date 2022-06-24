import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '@schema/utils/health';
import {
  BloodPressureInputType,
  BloodPressureInputUpdateType,
  BloodPressureType,
} from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'BloodPressure',
  config: healthTypes.bloodPressure,
  type: BloodPressureType,
};

export const addBloodPressure = composeAddMutation({
  ...baseAddHealthOptions,
  ...options,
  inputType: BloodPressureInputType,
});

export const updateBloodPressure = composeUpdateMutation({
  ...baseUpdateHealthOptions,
  ...options,
  inputType: BloodPressureInputUpdateType,
});

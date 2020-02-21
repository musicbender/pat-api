import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '../../utils/health';
import { BloodPressureInputType, BloodPressureInputUpdateType, BloodPressureType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  name: 'BloodPressure',
  config: healthTypes.bloodPressure,
  type: BloodPressureType,
}

export const addBloodPressure = composeAddMutation({ 
  ...baseAddHealthOptions, 
  ...options, 
  inputType: BloodPressureInputType 
});

export const updateBloodPressure = composeUpdateMutation({ 
  ...baseUpdateHealthOptions, 
  ...options, 
  inputType: BloodPressureInputUpdateType 
});

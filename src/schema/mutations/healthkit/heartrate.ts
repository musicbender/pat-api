import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'HeartRate',
  config: healthTypes.heartRate,
}

export const addHeartRate = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateHeartRate = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'RestingHeartRate',
  config: healthTypes.restingHeartRate,
}

export const addRestingHeartRate = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateRestingHeartRate = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

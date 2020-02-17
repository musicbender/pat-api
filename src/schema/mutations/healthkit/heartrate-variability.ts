import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'HeartRateVariability',
  config: healthTypes.heartRateVariability,
}

export const addHeartRateVariability = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateHeartRateVariability = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'SleepAnalysis',
  config: healthTypes.sleepAnalysis,
}

export const addSleepAnalysis = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateSleepAnalysis = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

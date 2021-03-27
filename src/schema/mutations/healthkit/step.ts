import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'Step',
  config: healthTypes.steps,
}

export const addStep = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateStep = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });
 
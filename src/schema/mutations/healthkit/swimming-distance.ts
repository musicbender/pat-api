import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'SwimmingDistance',
  config: healthTypes.swimmingDistance,
}

export const addSwimmingDistance = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateSwimmingDistance = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

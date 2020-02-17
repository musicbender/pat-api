import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'RestingEnergy',
  config: healthTypes.restingEnergy,
}

export const addRestingEnergy = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateRestingEnergy = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

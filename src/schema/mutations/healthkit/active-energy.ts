import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'ActiveEnergy',
  config: healthTypes.activeEnergy,
}

export const addActiveEnergy = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateActiveEnergy = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

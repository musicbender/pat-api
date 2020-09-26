import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'OxygenSaturation',
  config: healthTypes.oxygenSaturation,
}

export const addOxygenSaturation = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateOxygenSaturation= composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

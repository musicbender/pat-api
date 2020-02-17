import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

const options = {
  name: 'OxygenSaturation',
  config: healthTypes.oxygenSaturation,
}

export const addOxygenSaturation = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateOxygenSaturation= composeUpdateMutation({ ...baseUpdateHealthOptions, ...options });

import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

const options = {
  name: 'Weight',
  config: healthTypes.weight,
}

export const addWeight = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateWeight= composeUpdateMutation({ ...baseUpdateHealthOptions, ...options });

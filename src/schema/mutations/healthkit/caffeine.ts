import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'Caffeine',
  config: healthTypes.caffeine,
}

export const addCaffeine = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateCaffeine = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

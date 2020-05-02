import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

const options = {
  name: 'Anxiety',
  config: healthTypes.anxiety,
}

export const addAnxiety = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateAnxiety = composeUpdateMutation({ ...baseUpdateHealthOptions, ...options });

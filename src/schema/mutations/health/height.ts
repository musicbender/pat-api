import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

const options = {
  name: 'Height',
  config: healthTypes.height,
}

export const addHeight = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateHeight= composeUpdateMutation({ ...baseUpdateHealthOptions, ...options });

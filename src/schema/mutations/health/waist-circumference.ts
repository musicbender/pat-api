import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

const options = {
  name: 'WaistCircumference',
  config: healthTypes.waistCircumference,
}

export const addWaistCircumference = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateWaistCircumference= composeUpdateMutation({ ...baseUpdateHealthOptions, ...options });

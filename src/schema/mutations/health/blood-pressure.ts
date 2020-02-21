import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

const options = {
  name: 'BloodPressure',
  config: healthTypes.bloodPressure,
  controller: () => Promise.resolve()
}

export const addBloodPressure = composeAddMutation({ ...baseAddHealthOptions, ...options });
export const updateBloodPressure= composeUpdateMutation({ ...baseUpdateHealthOptions, ...options });

import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'WalkingRunningDistance',
  config: healthTypes.walkingRunningDistance,
}

export const addWalkingRunningDistance = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateWalkingRunningDistance = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'WalkingHeartRateAverage',
  config: healthTypes.walkingHeartRateAverage,
}

export const addWalkingHeartRateAverage = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateWalkingHeartRateAverage= composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

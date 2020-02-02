import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'walkingHeartRateAverage',
  name: 'WalkingHeartRateAverage',
}

export const addWalkingHeartRateAverage = composeHealthkitAdd(options);
export const updateWalkingHeartRateAverage = composeHealthkitUpdate(options);

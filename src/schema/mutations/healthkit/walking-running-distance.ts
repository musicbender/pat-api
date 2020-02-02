import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'walkingRunningDistance',
  name: 'WalkingRunningDistance',
}

export const addWalkingRunningDistance = composeHealthkitAdd(options);
export const updateWalkingRunningDistance = composeHealthkitUpdate(options);

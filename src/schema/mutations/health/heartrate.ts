import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'heartRate',
  name: 'HeartRate',
}

export const addHeartRate = composeHealthkitAdd(options);
export const updateHeartRate = composeHealthkitUpdate(options);

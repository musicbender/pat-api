import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'restingHeartRate',
  name: 'RestingHeartRate',
}

export const addRestingHeartRate = composeHealthkitAdd(options);
export const updateRestingHeartRate = composeHealthkitUpdate(options);

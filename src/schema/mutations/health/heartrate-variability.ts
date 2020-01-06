import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'heartRateVariability',
  name: 'HeartRateVariability',
}

export const addHeartRateVariability = composeHealthkitAdd(options);
export const updateHeartRateVariability = composeHealthkitUpdate(options);

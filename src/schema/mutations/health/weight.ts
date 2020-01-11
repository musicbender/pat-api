import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'weight',
  name: 'Weight',
}

export const addWeight = composeHealthkitAdd(options);
export const updateWeight = composeHealthkitUpdate(options);

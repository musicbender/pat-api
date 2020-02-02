import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'caffeine',
  name: 'Caffeine',
}

export const addCaffeine = composeHealthkitAdd(options);
export const updateCaffeine = composeHealthkitUpdate(options);

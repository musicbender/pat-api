import { composeHealthAdd, composeHealthUpdate } from '../../utils/health';

const options = {
  type: 'weight',
  name: 'Weight',
}

export const addWeight = composeHealthAdd(options);
export const updateWeight= composeHealthUpdate(options);

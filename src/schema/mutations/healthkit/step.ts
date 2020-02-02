import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'steps',
  name: 'Step',
}

export const addStep = composeHealthkitAdd(options);
export const updateStep = composeHealthkitUpdate(options);

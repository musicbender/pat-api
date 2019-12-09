import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

export const addStep = composeHealthkitAdd({
  type: 'steps',
  name: 'Step',
  description: 'Add a step count node'
});

export const updateStep = composeHealthkitUpdate({
  type: 'steps',
  name: 'Step',
  description: 'Update a step count node'
});

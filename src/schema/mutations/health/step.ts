import { StepType, StepInputType } from '../../types';
import { addAStep } from '../../../controllers/step';

export const addStep = {
  name: 'addStep',
  description: 'Add a step count node',
  type: StepType,
  args: {
    input: {
      type: StepInputType
    }
  },
  resolve(parentValue, { input }) {
    return addAStep(input);
  }
}

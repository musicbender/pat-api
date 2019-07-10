import { GraphQLNonNull, GraphQLID } from 'graphql';
import { StepType, StepInputType } from '../../types';
import { addAStep } from '../../../controllers/step';

export const addStep = {
  name: 'addStep',
  description: 'Add a step count node',
  type: StepType,
  args: {
    input: {
      type: new GraphQLNonNull(StepInputType)
    }
  },
  resolve(parentValue, { input }) {
    return addAStep(input);
  }
}

export const updateStep = {
  name: 'updateStep',
  description: 'Update a step count node',
  type: StepType,
  args: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    input: {
      type: new GraphQLNonNull(StepInputType)
    }
  },
  resolve(parentValue, { _id, input }) {
    return null;
  }
}

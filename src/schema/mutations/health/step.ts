import { GraphQLNonNull, GraphQLID } from 'graphql';
import { HealthType, HealthInputType } from '../../types';
import { addHealthItem } from '../../../controllers/health';
import { healthTypes } from '../../../configs/health.json';

export const addStep = {
  name: 'addStep',
  description: 'Add a step count node',
  type: HealthType,
  args: {
    input: {
      type: new GraphQLNonNull(HealthInputType)
    }
  },
  resolve(parentValue, { input }) {
    return addHealthItem(input, healthTypes.steps);
  }
}

export const updateStep = {
  name: 'updateStep',
  description: 'Update a step count node',
  type: HealthType,
  args: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    input: {
      type: new GraphQLNonNull(HealthInputType)
    }
  },
  resolve(parentValue, { _id, input }) {
    return null;
  }
}

import { GraphQLNonNull, GraphQLID } from 'graphql';
import { HealthType, HealthInputType } from '../../types';
import { addHealthItem, updateHealthItem } from '../../../controllers/health';
const { healthTypes } = require('../../../configs/health.json');

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
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    input: {
      type: new GraphQLNonNull(HealthInputType)
    }
  },
  resolve(parentValue, { id, input }) {
    return updateHealthItem(id, input, healthTypes.steps);
  }
}

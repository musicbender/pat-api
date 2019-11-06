import { GraphQLNonNull, GraphQLID } from 'graphql';
import { HealthType, HealthInputType, ResponseUnionType } from '../../types';
import { addHealthItem, updateHealthItem } from '../../../controllers/health';
const { healthTypes } = require('../../../configs/health.json');

export const addStep = {
  name: 'addStep',
  description: 'Add a step count node',
  type: ResponseUnionType({
    name: 'addStep',
    responseType: HealthType
  }),
  args: {
    input: {
      type: new GraphQLNonNull(HealthInputType)
    }
  },
  resolve(parentValue, { input }) {
    return { response: addHealthItem(input, healthTypes.steps) };
  }
}

export const updateStep = {
  name: 'updateStep',
  description: 'Update a step count node',
  type: ResponseUnionType({
    name: 'updateStep',
    responseType: HealthType
  }),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    input: {
      type: new GraphQLNonNull(HealthInputType)
    }
  },
  resolve(parentValue, { id, input }) {
    return { response: updateHealthItem(id, input, healthTypes.steps) };
  }
}

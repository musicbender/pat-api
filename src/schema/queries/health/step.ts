import { StepType, StepQueryInputType } from '../../types';
import GraphQLDate from 'graphql-date';
import { GraphQLID } from 'graphql';
import { findStepById, findStepByDate } from '../../../controllers/step';

export const step = {
  type: StepType,
  description: 'Get a single step count',
  args: {
    input: { type: StepQueryInputType }
  },
  resolve(parentValue, { input }) {
    if (input._id) {
      return findStepById(input._id);
    } else if (input.date) {
      return findStepByDate(input.date);
    }
  }
}

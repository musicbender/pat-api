import { StepType } from '../../types';
import { findStepById, findStepByDate } from '../../../controllers/step';
import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLNonNull } from 'graphql';

const step = {
  type: StepType,
  description: 'Get a single step count',
  args: {
    // input: { type: StepQueryInputType }
    _id: {
      type: GraphQLString
    },
    date: {
      type: GraphQLDate
    }
  },
  resolve(parentValue, args) {
    if (args._id) {args
      return findStepById(args._id);
    } else if (args.date) {
      return findStepByDate(args.date);
    } else {
      throw new Error('INVALID_ARGUMENTS');
    }
  }
}

export default step;

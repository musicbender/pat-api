import { StepType } from '../../types';
import { findHealthById, findHealthByDate } from '../../../controllers/health';
import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLNonNull } from 'graphql';

const step = {
  type: StepType,
  description: 'Get a single step count by either _id or date, _id taking priority',
  args: {
    _id: {
      type: GraphQLString
    },
    date: {
      type: GraphQLDate
    }
  },
  resolve(parentValue, args) {
    if (args._id) {args
      return findStepById(args._id, 'Step');
    } else if (args.date) {
      return findStepByDate(args.date, 'Step');
    } else {
      throw new Error('INVALID_ARGUMENTS');
    }
  }
}

export default step;

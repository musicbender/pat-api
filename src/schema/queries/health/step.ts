import { HealthType } from '../../types';
import { findHealthById, findHealthByDate } from '../../../controllers/health';
import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLNonNull } from 'graphql';

const step = {
  type: HealthType,
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
    if (args._id) {
      return findHealthById(args._id, 'Steps');
    } else if (args.date) {
      return findHealthByDate(args.date, 'Steps');
    } else {
      throw new Error('INVALID_ARGUMENTS');
    }
  }
}

export default step;

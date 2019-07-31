import { HealthType } from '../../types';
import { findHealthById, findHealthByDate } from '../../../controllers/health';
import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLNonNull } from 'graphql';
import { healthTypes } from '../../../configs/health.json';
import { ExpectedError } from '../../../utils/errors';

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
      return findHealthById(args._id, healthTypes.steps);
    } else if (args.date) {
      return findHealthByDate(args.date, healthTypes.steps);
    } else {
      throw new ExpectedError('INVALID_ARGUMENTS');
    }
  }
}

export default step;

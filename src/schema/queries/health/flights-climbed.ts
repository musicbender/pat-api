import { HealthType } from '../../types';
import { findHealthById, findHealthByDate } from '../../../controllers/health';
import * as GraphQLDate from 'graphql-date';
import { GraphQLString } from 'graphql';
import { ExpectedError } from '../../../utils/errors';
import { HealthConfigType } from '../../../types';
const { healthTypes } = require('../../../configs/health.json');

const flightsClimbed = {
  type: HealthType,
  description: 'Get a single flights climbed count by either _id or date, _id taking priority',
  args: {
    id: {
      type: GraphQLString
    },
    date: {
      type: GraphQLDate
    }
  },
  resolve(parentValue, args) {
    const config: HealthConfigType = healthTypes.flightsClimbed;
    if (args.id) {
      return findHealthById(args.id, config);
    } else if (args.date) {
      return findHealthByDate(args.date, config);
    } else {
      throw new ExpectedError('INVALID_ARGUMENTS');
    }
  }
}

export default flightsClimbed;

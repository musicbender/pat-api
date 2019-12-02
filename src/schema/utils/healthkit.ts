import { HealthType } from '../types';
import { findHealthById, findHealthByDate } from '../../controllers/health';
import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLField } from 'graphql';
import { ExpectedError } from '../../utils/errors';
import { HealthConfigType } from '../../types';
const { healthTypes } = require('../../configs/health.json');

type Options = {
  type: string, 
  description?: string
}

export const composeHealthkitQuery = (options: Options) => {
  return {
    type: HealthType,
    description: options.description || 'HealthKit query',
    args: {
      id: {
        type: GraphQLString
      },
      date: {
        type: GraphQLDate
      }
    },
    resolve(parentValue, args) {
      const config: HealthConfigType = healthTypes[options.type];
      if (args.id) {
        return findHealthById(args.id, config);
      } else if (args.date) {
        return findHealthByDate(args.date, config);
      } else {
        throw new ExpectedError('INVALID_ARGUMENTS');
      }
    }
  }
}
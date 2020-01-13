import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { findHealthById, findHealthByDate, addHealthItem, updateHealthItem } from '../../controllers/health';
import { ExpectedError } from '../../utils/errors';
import { HealthType, HealthInputType, ResponseUnionType, HealthInputUpdateType } from '../types';
import { HealthConfigType } from '../../types';
const { healthTypes } = require('../../configs/healthkit.json');

type QueryOptions = {
  type: string, 
  description?: string
}

export const composeHealthkitQuery = (options: QueryOptions) => {
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

type AddOptions = {
  type: string, 
  name: string,
  description?: string
}

export const composeHealthkitAdd = (options: AddOptions) => {
  const name = `add${options.name}`;
  return {
    name,
    description: options.description || `Add a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: HealthType
    }),
    args: {
      input: {
        type: new GraphQLNonNull(HealthInputType)
      }
    },
    resolve(parentValue, { input }) {
      return { response: addHealthItem(input, healthTypes[options.type]) };
    }
  }
}

type UpdateOptions = {
  type: string, 
  name: string,
  description?: string
}

export const composeHealthkitUpdate = (options: UpdateOptions) => {
  const name = `update${options.name}`;
  return {
    name,
    description: options.description || `Update a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: HealthType
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      input: {
        type: new GraphQLNonNull(HealthInputUpdateType)
      }
    },
    resolve(parentValue, { id, input }) {
      return { response: updateHealthItem(id, input, healthTypes[options.type]) };
    }
  }
}

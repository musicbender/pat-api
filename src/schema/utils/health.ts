import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { findHealthById, findHealthByDate, addHealthItem, updateHealthItem } from '../../controllers/health';
import { ExpectedError } from '../../utils/errors';
import { HealthType, HealthInputType, ResponseUnionType, HealthInputUpdateType } from '../types';
import { HealthConfigType } from '../../types';
const healthTypes = require('../../configs/health.json');

type QueryOptions = {
  type: string, 
  description?: string
}

export const composeHealthQuery = (options: QueryOptions) => {
  return {
    type: HealthType,
    description: options.description || 'Health query',
    args: {
      id: {
        type: GraphQLString
      },
      date: {
        type: GraphQLDate
      }
    },
    async resolve(parentValue, args) {
      if (!args.id && !args.date) throw new ExpectedError('INVALID_ARGUMENTS');

      const config: HealthConfigType = healthTypes[options.type];
      let response;

      try {
        if (args.id) {
          response = await findHealthById(args.id, config);
        } else if (args.date) {
          response = await findHealthByDate(args.date, config);
        }
        
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

type AddOptions = {
  type: string, 
  name: string,
  description?: string
}

export const composeHealthAdd = (options: AddOptions) => {
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
    async resolve(parentValue, { input }) {
      try {
        const response = await addHealthItem(input, healthTypes[options.type]);
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

type UpdateOptions = {
  type: string, 
  name: string,
  description?: string
}

export const composeHealthUpdate = (options: UpdateOptions) => {
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
    async resolve(parentValue, { id, input }) {
      try {
        const response = await updateHealthItem(id, input, healthTypes[options.type]);
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

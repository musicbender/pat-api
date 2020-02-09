import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { findHealthById, findHealthByDate, addHealthItem, updateHealthItem } from '../../controllers/health';
import { ExpectedError } from '../../utils/errors';
const healthTypes = require('../../configs/health.json');
import { 
  HealthType, 
  HealthInputType, 
  ResponseUnionType, 
  HealthInputUpdateType 
} from '../types';
import { 
  HealthConfigType,
  HealthQueryOptions,
  HealthAddOptions,
  HealthUpdateOptions,
} from '../../types';

export const composeHealthQuery = (options: HealthQueryOptions) => {
  const name = options.name || options.type.replace('-', '') || HealthType.name;
  const description = `Get a single ${name} entry by either _id or date, _id taking priority`;
  return {
    name,
    type: ResponseUnionType({
      name,
      responseType: HealthType,
    }),
    description: options.description || description || `${HealthType.name} query`,
    args: {
      id: {
        type: GraphQLString
      },
      date: {
        type: GraphQLDate
      },
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

export const composeHealthAdd = (options: HealthAddOptions) => {
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

export const composeHealthUpdate = (options: HealthUpdateOptions) => {
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

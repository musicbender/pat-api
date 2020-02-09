import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { findItemById, findItemByDate } from '../../controllers/global';
import { addHealthKitItem, updateHealthKitItem } from '../../controllers/healthkit';
import { ExpectedError } from '../../utils/errors';
const { healthTypes } = require('../../configs/healthkit.json');
import { 
  HealthKitType, 
  HealthKitInputType, 
  ResponseUnionType, 
  HealthKitInputUpdateType,
} from '../types';
import { 
  HealthKitConfigType, 
  HealthKitQueryOptions,
  HealthKitAddOptions,
  HealthKitUpdateOptions,
} from '../../types';

export const composeHealthkitQuery = (options: HealthKitQueryOptions) => {
  const name = options.name || options.type.replace('-', '') || HealthKitType.name;
  const description = `Get a single ${name} entry by either _id or date, _id taking priority`;
  return {
    name,
    type: ResponseUnionType({
      name,
      responseType: HealthKitType,
    }),
    description: options.description || description || `${HealthKitType.name} query`,
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

      const config: HealthKitConfigType = healthTypes[options.type];
      let response;

      try {
        if (args.id) {
          response = await findItemById(args.id, config.modelID);
        } else if (args.date) {
          response = await findItemByDate(args.date, config.modelID);
        }

        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

export const composeHealthkitAdd = (options: HealthKitAddOptions) => {
  const name = `add${options.name}`;
  return {
    name,
    description: options.description || `Add a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: HealthKitType
    }),
    args: {
      input: {
        type: new GraphQLNonNull(HealthKitInputType)
      }
    },
    async resolve(parentValue, { input }) {
      try {
        const response = await addHealthKitItem(input, healthTypes[options.type]);
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

export const composeHealthkitUpdate = (options: HealthKitUpdateOptions) => {
  const name = `update${options.name}`;
  return {
    name,
    description: options.description || `Update a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: HealthKitType
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      input: {
        type: new GraphQLNonNull(HealthKitInputUpdateType)
      }
    },
    async resolve(parentValue, { id, input }) {
      try {
        const response = await updateHealthKitItem(id, input, healthTypes[options.type]);
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

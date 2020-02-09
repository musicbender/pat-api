import * as GraphQLDate from 'graphql-date';
import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { findHealthById, findHealthByDate } from '../../controllers/health';
import { addHealthKitItem, updateHealthKitItem } from '../../controllers/healthkit';
import { ExpectedError } from '../../utils/errors';
import { HealthKitType, HealthKitInputType, ResponseUnionType, HealthKitInputUpdateType } from '../types';
import { HealthKitConfigType } from '../../types';
const { healthTypes } = require('../../configs/healthkit.json');

type QueryOptions = {
  type: string, 
  description?: string
}

export const composeHealthkitQuery = (options: QueryOptions) => {
  return {
    type: HealthKitType,
    description: options.description || 'HealthKit query',
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
          response = await findHealthById(args.id, config);
        } else if (args.date) {
          response = await findHealthByDate(args.date, config);
        } 

        return response;
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

export const composeHealthkitAdd = (options: AddOptions) => {
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

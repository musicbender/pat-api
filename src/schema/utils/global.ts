import * as GraphQLDate from 'graphql-date';
import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql';
import { findItemById, findItemByDate } from '../../controllers/global';
import { QueryOptions, ComposeAddMutationOptions } from '../../types';
import { ResponseUnionType } from '../types';
import { ExpectedError } from '../../utils/errors';

export const composeQuery = (options: QueryOptions) => {
  const name = options.name || options.type.name;
  const description = `Get a single ${name} entry by either _id or date, _id taking priority`;
  return {
    name,
    type: ResponseUnionType({
      name,
      responseType: options.type,
    }),
    description: options.description || description || `${name} query`,
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

      const modelID = options.modelID || options.name;
      let response;

      try {
        if (args.id) {
          response = await findItemById(args.id, modelID);
        } else if (args.date) {
          response = await findItemByDate(args.date, modelID);
        }
        
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

export const composeAddMutation = (options: ComposeAddMutationOptions) => {
  const name = `add${options.name}`;
  return {
    name,
    description: options.description || `Add a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: options.type
    }),
    args: {
      input: {
        type: new GraphQLNonNull(options.inputType)
      }
    },
    async resolve(parentValue, { input }) {
      try {
        const response = await options.controllerFunc(input, options.config || {});
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

export const composeUpdateMutation = (options: ComposeAddMutationOptions) => {
  const name = `update${options.name}`;
  return {
    name,
    description: options.description || `Update a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: options.type
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      input: {
        type: new GraphQLNonNull(options.inputType)
      }
    },
    async resolve(parentValue, { id, input }) {
      try {
        const response = await options.controllerFunc(id, input, options.config || {});
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}
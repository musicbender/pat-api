import * as GraphQLDate from 'graphql-date';
import { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLDirective, GraphQLBoolean, GraphQLList } from 'graphql';
import { findItemById, findItemByDate, findAllItems } from '../../controllers/global';
import { ExpectedError } from '../../utils/errors';
import { ComposeQueryOptions, ComposeMutationOptions } from '../../types';
import { ResponseUnionType } from '../types';

export const composeQuery = (options: ComposeQueryOptions) => {
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

export const composeQueryAll = (options: ComposeQueryOptions) => {
  const name = (options.name || options.type.name);
  const queryName = `${name}All`;
  const description = `Get a multiple ${name} entries`;
  return {
    queryName,
    type: ResponseUnionType({
      queryName,
      responseType: new GraphQLList(options.type),
    }),
    description: options.description || description || `${name} query for all`,
    args: {
      limit: {
        type: GraphQLInt 
      },
      offset: {
        type: GraphQLInt 
      },
      after: {
        type: GraphQLDate 
      },
      before: {
        type: GraphQLDate 
      },
      sortBy: {
        type: new GraphQLList(GraphQLString) 
      },
      dateBy: {
        type: GraphQLString 
      },
    },
    async resolve(parentValue, args) {
      const modelID = options.modelID || options.name;

      try {
        const response =  await findAllItems(args, modelID);
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

export const composeAddMutation = (options: ComposeMutationOptions) => {
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
        const response = await options.controller(input, options.config || {});
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

export const composeUpdateMutation = (options: ComposeMutationOptions) => {
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
        const response = await options.controller(id, input, options.config || {});
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}

export const composeIncrementMutation = (options: ComposeMutationOptions) => {
  const name = `increment${options.name}`;
  return {
    name,
    description: options.description || `Increment a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: options.type
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      input: {
        type: options.inputType
      }
    },
    async resolve(parentValue, { id, input }) {
      try {
        const response = await options.controller(id, input, options.config || {});
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }
}
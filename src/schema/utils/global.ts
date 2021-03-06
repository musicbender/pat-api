import * as GraphQLDate from 'graphql-date';
import { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLDirective, GraphQLBoolean, GraphQLList } from 'graphql';
import { findItemById, findItemByDate, findAllItems } from '../../controllers/global';
import { ExpectedError } from '../../utils/errors';
import { ComposeQueryOptions, ComposeMutationOptions, AnyConfig } from '../../types';
import { ResponseUnionType } from '../types';

export const appendResponse = (resData: Object, config: AnyConfig) => {
  return { 
    ...resData, 
    configID: config.id,
  };
}

export const globalTypeFields = {
    id: { type: GraphQLString },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
    configID: { type: GraphQLString },
}

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

      const modelID = options.config.modelID || options.name;
      let response;

      try {
        if (args.id) {
          response = await findItemById(args.id, modelID, options.findInclude);
        } else if (args.date) {
          response = await findItemByDate(args.date, modelID, options.findInclude);
        }

        console.log('get***', response, response.get());
        
        return { response: appendResponse(response.get(), options.config) };
      } catch (err) {
        throw err;
      }
    }
  }
}

export const composeQueryAll = (options: ComposeQueryOptions) => {
  const id = (options.name || options.type.name);
  const name = `${id}All`;
  const description = `Get a multiple ${id} entries`;
  return {
    name,
    type: ResponseUnionType({
      name,
      responseType: new GraphQLList(options.type),
    }),
    description: options.description || description || `${id} query for all`,
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
      const modelID = options.config.modelID || options.name;

      try {
        const response =  await findAllItems(args, modelID, options.findInclude);
        return { response: appendResponse(response, options.config) };
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
        return { response: appendResponse(response, options.config)}; 
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
        return { response: appendResponse(response, options.config) };
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
        return { response: appendResponse(response, options.config) };
      } catch (err) {
        throw err;
      }
    }
  }
}

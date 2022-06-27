import * as GraphQLDate from 'graphql-date';
import { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql';
import { findItemById, findItemByDate, findAllItems, deleteItem } from '@controllers/global';
import { ExpectedError } from '@utils/errors';
import { ComposeQueryOptions, ComposeMutationOptions, AnyConfig } from '@types';
import { DeleteType, ResponseUnionType } from '@schema/types';

export const appendResponse = (resData: any, config: AnyConfig) => {
  return {
    ...resData,
    configID: config.id,
  };
};

export const globalTypeFields = {
  id: { type: GraphQLString },
  sampledOn: { type: GraphQLDate },
  createdOn: { type: GraphQLDate },
  updatedOn: { type: GraphQLDate },
  configID: { type: GraphQLString },
};

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
        type: GraphQLString,
      },
      date: {
        type: GraphQLDate,
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

        if (!response) throw new ExpectedError('NOT_FOUND');

        return { response: appendResponse(response.get(), options.config) };
      } catch (err) {
        throw err;
      }
    },
  };
};

export const composeQueryAll = (options: ComposeQueryOptions) => {
  const id = options.name || options.type.name;
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
        type: GraphQLInt,
      },
      offset: {
        type: GraphQLInt,
      },
      after: {
        type: GraphQLDate,
      },
      before: {
        type: GraphQLDate,
      },
      sortBy: {
        type: new GraphQLList(GraphQLString),
      },
      dateBy: {
        type: GraphQLString,
      },
    },
    async resolve(parentValue, args) {
      const modelID = options.config.modelID || options.name;

      try {
        const response = await findAllItems(args, modelID, options.findInclude);
        if (!response) throw new ExpectedError('NOT_FOUND');
        return { response: appendResponse(response, options.config) };
      } catch (err) {
        throw err;
      }
    },
  };
};

export const composeAddMutation = (options: ComposeMutationOptions) => {
  const name = `add${options.name}`;
  return {
    name,
    description: options.description || `Add a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: options.type,
    }),
    args: {
      input: {
        type: new GraphQLNonNull(options.inputType),
      },
    },
    async resolve(parentValue, { input }) {
      try {
        const response = await options.controller(input, options.config || {});
        const output = response.get ? response.get() : response;
        return { response: appendResponse(output, options.config) };
      } catch (err) {
        throw err;
      }
    },
  };
};

export const composeUpdateMutation = (options: ComposeMutationOptions) => {
  const name = `update${options.name}`;
  return {
    name,
    description: options.description || `Update a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: options.type,
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      input: {
        type: new GraphQLNonNull(options.inputType),
      },
    },
    async resolve(parentValue, { id, input }) {
      try {
        const response = await options.controller(id, input, options.config || {});
        const output = response.get ? response.get() : response;
        return {
          response: appendResponse(output, options.config),
        };
      } catch (err) {
        throw err;
      }
    },
  };
};

export const composeIncrementMutation = (options: ComposeMutationOptions) => {
  const name = `increment${options.name}`;
  return {
    name,
    description: options.description || `Increment a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: options.type,
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      input: {
        type: options.inputType,
      },
    },
    async resolve(parentValue, { id, input }) {
      try {
        const response = await options.controller(id, input, options.config || {});
        const output = response.get ? response.get() : response;
        return {
          response: appendResponse(output, options.config),
        };
      } catch (err) {
        throw err;
      }
    },
  };
};

export const composeDeleteMutation = (options: ComposeMutationOptions) => {
  const name = `delete${options.name}`;
  return {
    name,
    description: options.description || `Delete a ${options.name} node`,
    type: ResponseUnionType({
      name,
      responseType: DeleteType,
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    async resolve(parentValue, { id }) {
      try {
        await deleteItem(id, options.config);
        return {
          response: {
            id,
            configID: options.config.id,
          },
        };
      } catch (err) {
        throw err;
      }
    },
  };
};

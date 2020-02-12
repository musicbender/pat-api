import * as GraphQLDate from 'graphql-date';
import { GraphQLString } from 'graphql';
import { findItemById, findItemByDate } from '../../controllers/global';
import { QueryOptions } from '../../types';
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
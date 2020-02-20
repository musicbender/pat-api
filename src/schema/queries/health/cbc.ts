import * as GraphQLDate from 'graphql-date';
import { GraphQLString } from 'graphql';
import { ExpectedError } from '../../../utils/errors';
import { ResponseUnionType, CbcType } from '../../types';
import { getCbcItem } from '../../../controllers/cbc';

const name = 'cbc';

export const cbc = {
  name,
  type: ResponseUnionType({
    name,
    responseType: CbcType,
  }),
  description: `${name} query`,
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

    try {
      const response = await getCbcItem(args.id, args.date);
      return { response };
    } catch (err) {
      throw err;
    }
  }
}

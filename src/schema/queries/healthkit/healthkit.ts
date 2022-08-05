import { findHealthkitItems } from '@controllers/healthkit';
import { HealthKitUnionType, ResponseUnionType } from '@schema/types';
import { ExpectedError } from '@utils/errors';
import { GraphQLList, GraphQLString } from 'graphql';

export const healthkit = {
  name: 'healthkit',
  type: ResponseUnionType({
    name: 'healthKit',
    responseType: new GraphQLList(HealthKitUnionType),
  }),
  description: 'Get group of healthkit items by hkid',
  args: {
    hkid: {
      type: GraphQLString,
    },
  },
  async resolve(parentValue, { hkid }, ctx) {
    if (
      process.env.PATAPI_HEALTHKIT_USER_AGENT !== 'false' &&
      !ctx.headers['user-agent'].includes(process.env.PATAPI_HEALTHKIT_USER_AGENT)
    ) {
      throw new ExpectedError('UNAUTHORIZED');
    }

    if (!hkid) throw new ExpectedError('INVALID_ARGUMENTS');
    try {
      const response = await findHealthkitItems(hkid);
      if (!response) throw new ExpectedError('NOT_FOUND');
      return { response };
    } catch (err) {
      throw err;
    }
  },
};

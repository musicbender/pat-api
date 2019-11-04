import { GraphQLList } from 'graphql';
import { ResponseUnionType, HealthType, HealthInputType } from '../../types';
import { addHealthKitItems } from '../../../controllers/healthkit';
import { ExpectedError } from '../../../utils/errors';

export const addHealthKit = {
  name: 'addHealthKit',
  description: 'Add multiple HealthKit data types',
  type: ResponseUnionType({
    name: 'addHealthKit',
    responseType: new GraphQLList(HealthType)
  }),
  args: {
    input: {
      type: new GraphQLList(HealthInputType)
    }
  },
  resolve: async (parentValue, { input }, ctx) => {
    if (process.env.PATAPI_HEALTHKIT_USER_AGENT !== 'false' && !ctx.headers['user-agent'].includes(process.env.PATAPI_HEALTHKIT_USER_AGENT)) {
      throw new ExpectedError('UNAUTHORIZED');
    }

    return addHealthKitItems(input);
  }
}

import { GraphQLObjectType, GraphQLEnumType, GraphQLList } from 'graphql';
import { ResponseType, ErrorType, HealthType, HealthInputType } from '../../types';
import { addHealthKitItems } from '../../../controllers/healthkit';
import { ExpectedError } from '../../../utils/errors';

const addHealthKitResponseType = new GraphQLObjectType({
  name: 'addHealthKitResponse',
  description: 'Response data for adding healthkit data',
  fields: () => ({
    response: {
      type: new GraphQLList(HealthType)
    }
  })
});

export const addHealthKit = {
  name: 'addHealthKit',
  description: 'Add multiple HealthKit data types',
  type: ResponseType({
    name: 'addHealthKitUnion',
    responseType: addHealthKitResponseType,
    errorType: ErrorType('addHealthKitError')
  }),
  args: {
    input: {
      type: new GraphQLList(HealthInputType)
    }
  },
  resolve: async (parentValue, { input }, { ctx }) => {
    if (!ctx.headers['user-agent'].includes(process.env.PATAPI_HEALTHKIT_USER_AGENT)) {
      throw new ExpectedError('UNAUTHORIZED');
    }

    console.log(`here we go`);
    console.log(`ctx:`);
    console.log(`url: ${ctx.url}`);
    console.log(`host: ${ctx.host}`);
    console.log(JSON.stringify(ctx.body));
    console.log(ctx.headers);

    return addHealthKitItems(input);
  }
}

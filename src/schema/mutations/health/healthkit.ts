import { GraphQLObjectType, GraphQLEnumType, GraphQLList } from 'graphql';
import { ResponseType, ErrorType, HealthType, HealthInputType } from '../../types';
import { addHealthKitItems } from '../../../controllers/healthkit';

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
  resolve: async (parentValue, { input }) => {
    console.log(`here we go`);
    return addHealthKitItems(input);
  }
}

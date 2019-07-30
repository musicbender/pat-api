import { GraphQLEnumType, GraphQLList } from 'graphql';
import { ResponseType, ErrorType, HealthType, HealthInputType } from '../../types';
import { addHealthKitItems } from '../../../controllers/healthkit';

export const addHealthKit = {
  name: 'addHealthKit',
  type: ResponseType({
    name: 'addHealthKitResponse',
    description: 'Add multiple HealthKit data types',
    responseType: HealthType,
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

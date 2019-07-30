import { GraphQLEnumType, GraphQLList } from 'graphql';
import { ResponseType, ErrorType, HealthType, HealthInputType } from '../../types';
import { addHealthKitItems } from '../../../controllers/health';
import { common, health } from '../../../configs/error-codes.json';
import { ExpectedError } from '../../../utils/errors';

const errorCodesType = new GraphQLEnumType({
  name: 'addHealthkitErrorCodes',
  values: {
    ...common,
    ...health
  }
});

export const addHealthKit = {
  name: 'addHealthKit',
  type: ResponseType({
    name: 'addHealthKitResponse',
    description: 'Add multiple HealthKit data types',
    responseType: HealthType,
    errorType: ErrorType('addHealthKitError', errorCodesType)
  }),
  args: {
    input: {
      type: new GraphQLList(HealthInputType)
    }
  },
  resolve: async (parentValue, { input }) => {
    // return addHealthKitItems(input);

    console.log(`in addHealthKit resolver`);

    throw new ExpectedError('INTERNAL_ERROR');

    return {
      _id: 'not-real-id',
      value: 1234,
      sampledOn: new Date(),
      createdOn: new Date(),
      sources: ['Apple Watch'],
      unit: 'steps'
    };
  }
}

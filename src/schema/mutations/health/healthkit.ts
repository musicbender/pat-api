import { GraphQLEnumType, GraphQLList } from 'graphql';
import { ResponseType, ErrorType, HealthType, HealthInputType } from '../../types';
import { addHealthKitItems } from '../../../controllers/health';
import { common, health } from '../../../configs/error-codes.json';
import { ExpectedError } from '../../../utils/errors';

const validErrors = {
  ...common,
  ...health
};

const errorCodesType = new GraphQLEnumType({
  name: 'addHealthkitErrorCodes',
  values: validErrors
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

    if (!input || input.length === 0) {
      throw new ExpectedError('INVALID_HEALTHKIT_INPUT', 'health');
    }

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

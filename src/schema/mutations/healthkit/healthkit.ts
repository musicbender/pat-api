import { GraphQLList, GraphQLString } from 'graphql';
import {
  ResponseUnionType,
  HealthKitUnionType,
  HealthKitInputType,
  HealthKitDeleteType,
} from '@schema/types';
import { addHealthKitItems, deleteHealthkitItems } from '@controllers/healthkit';
import { ExpectedError } from '@utils/errors';

export const addHealthKit = {
  name: 'addHealthKit',
  description: 'Add multiple HealthKit data types',
  type: ResponseUnionType({
    name: 'addHealthKit',
    responseType: new GraphQLList(HealthKitUnionType),
  }),
  args: {
    input: {
      type: new GraphQLList(HealthKitInputType),
    },
  },
  resolve: async (parentValue, { input }, ctx) => {
    if (
      process.env.PATAPI_HEALTHKIT_USER_AGENT !== 'false' &&
      !ctx.headers['user-agent'].includes(process.env.PATAPI_HEALTHKIT_USER_AGENT)
    ) {
      throw new ExpectedError('UNAUTHORIZED');
    }

    return addHealthKitItems(input);
  },
};

export const deleteHealthKit = {
  name: 'deleteHealthKit',
  description: 'Delete multiple HealthKit data types by hkid',
  type: ResponseUnionType({
    name: 'deleteHealthKit',
    responseType: HealthKitDeleteType,
  }),
  args: {
    hkid: {
      type: GraphQLString,
    },
  },
  resolve: async (parentValue, { hkid }, ctx) => {
    if (
      process.env.PATAPI_HEALTHKIT_USER_AGENT !== 'false' &&
      !ctx.headers['user-agent'].includes(process.env.PATAPI_HEALTHKIT_USER_AGENT)
    ) {
      throw new ExpectedError('UNAUTHORIZED');
    }

    return deleteHealthkitItems(hkid);
  },
};

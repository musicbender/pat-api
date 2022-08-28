import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import * as GraphQLDate from 'graphql-date';
import { CbcType } from './cbc-type';
import { UnitType } from './unit-type';
import { globalTypeFields } from '@schema/utils/global';

export const PlateletInputType = new GraphQLInputObjectType({
  name: 'PlateletInputType',
  description: 'Health data input',
  fields: () => ({
    value: { type: new GraphQLNonNull(GraphQLFloat) },
    sampledOn: { type: GraphQLDate },
  }),
});

export const PlateletInputUpdateType = new GraphQLInputObjectType({
  name: 'PlateletInputUpdateType',
  description: 'Health data input for updating',
  fields: () => ({
    value: { type: GraphQLFloat },
    unit: { type: UnitType },
    sampledOn: { type: GraphQLDate },
    createdOn: { type: GraphQLDate },
  }),
});

export const PlateletType = new GraphQLObjectType({
  name: 'PlateletType',
  description: 'Health data',
  fields: () => ({
    ...globalTypeFields,
    value: { type: GraphQLFloat },
    unit: { type: UnitType },
    cbc: { type: CbcType },
    cbcId: { type: GraphQLString },
  }),
});

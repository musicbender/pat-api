import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { CbcType } from './cbc-type';
import { UnitType } from './unit-type';

export const PlateletInputType = new GraphQLInputObjectType({
  name: 'PlateletInputType',
  description: 'Health data input',
  fields: () => ({
    value: { type: new GraphQLNonNull(GraphQLFloat) },
    sampledOn: { type: GraphQLString },
  })
});

export const PlateletInputUpdateType = new GraphQLInputObjectType({
  name: 'PlateletInputUpdateType',
  description: 'Health data input for updating',
  fields: () => ({
    value: { type: GraphQLFloat },
    unit: { type: UnitType },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString }
  })
});

export const PlateletType = new GraphQLObjectType({
  name: 'PlateletType',
  description: 'Health data',
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLFloat },
    unit: { type: UnitType },
    cbcId: { type: CbcType },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
  })
});


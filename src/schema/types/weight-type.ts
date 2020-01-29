import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';
import { UnitType } from './unit-type';

export const WeightInputType = new GraphQLInputObjectType({
  name: 'WeightInputType',
  description: 'Health data input',
  fields: () => ({
    value: { type: GraphQLInt },
    sampledOn: { type: GraphQLString },
  })
});

export const WeightInputUpdateType = new GraphQLInputObjectType({
  name: 'WeightInputUpdateType',
  description: 'Health data input for updating',
  fields: () => ({
    value: { type: GraphQLInt },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    unit: { type: UnitType }
  })
});

export const WeightType = new GraphQLObjectType({
  name: 'WeightType',
  description: 'Health data',
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLInt },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
    unit: { type: UnitType }
  })
});

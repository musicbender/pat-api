import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString
} from 'graphql';
import { UnitType } from './unit-type';

export const HealthInputType = new GraphQLInputObjectType({
  name: 'HealthInputType',
  description: 'Health data input',
  fields: () => ({
    value: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
  })
});

export const HealthInputUpdateType = new GraphQLInputObjectType({
  name: 'HealthInputUpdateType',
  description: 'Health data input for updating',
  fields: () => ({
    value: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    unit: { type: UnitType }
  })
});

export const HealthType = new GraphQLObjectType({
  name: 'HealthType',
  description: 'Health data',
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
    unit: { type: UnitType }
  })
});


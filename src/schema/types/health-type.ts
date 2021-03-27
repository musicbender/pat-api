import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString
} from 'graphql';
import { UnitType } from './unit-type';
import { globalTypeFields } from '../utils/global';

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
    ...globalTypeFields,
    value: { type: GraphQLFloat },
    unit: { type: UnitType },
  })
});

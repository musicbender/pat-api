import { GraphQLObjectType, GraphQLInputObjectType, GraphQLFloat, GraphQLNonNull } from 'graphql';
import * as GraphQLDate from 'graphql-date';
import { VehicleType } from './vehicles-type';
import { globalTypeFields } from '@schema/utils/global';

export const RefuelInputType = new GraphQLInputObjectType({
  name: 'RefuelInputType',
  description: 'Car gas refuel data input',
  fields: () => ({
    gallons: { type: GraphQLNonNull(GraphQLFloat) },
    cost: { type: GraphQLFloat },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLDate },
  }),
});

export const RefuelInputUpdateType = new GraphQLInputObjectType({
  name: 'RefuelInputUpdateType',
  description: 'Car gas refuel input for updating',
  fields: () => ({
    gallons: { type: GraphQLFloat },
    cost: { type: GraphQLFloat },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLDate },
    updatedOn: { type: GraphQLDate },
  }),
});

export const RefuelType = new GraphQLObjectType({
  name: 'RefuelType',
  description: 'Car gas refuel sample for car',
  fields: () => ({
    ...globalTypeFields,
    gallons: { type: GraphQLFloat },
    cost: { type: GraphQLFloat },
    vehicle: { type: VehicleType },
  }),
});

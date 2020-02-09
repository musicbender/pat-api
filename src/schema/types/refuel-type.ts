import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { VehicleType } from './vehicles-type';

export const RefuelInputType = new GraphQLInputObjectType({
  name: 'RefuelInputType',
  description: 'Car gas refuel data input',
  fields: () => ({
    gallons: { type: GraphQLNonNull(GraphQLFloat) },
    cost: { type: GraphQLFloat },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLString },
  })
});

export const RefuelType = new GraphQLObjectType({
  name: 'RefuelType',
  description: 'Car gas refuel sample for car',
  fields: () => ({
    id: { type: GraphQLString },
    gallons: { type: GraphQLFloat },
    cost: { type: GraphQLFloat },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
  })
});

import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { VehicleType } from './vehicles-type';
import { globalTypeFields } from '../utils/global';

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

export const RefuelInputUpdateType = new GraphQLInputObjectType({
  name: 'RefuelInputUpdaetType',
  description: 'Car gas refuel input for updating',
  fields: () => ({
    gallons: { type: GraphQLFloat },
    cost: { type: GraphQLFloat },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
  })
});

export const RefuelType = new GraphQLObjectType({
  name: 'RefuelType',
  description: 'Car gas refuel sample for car',
  fields: () => ({
    ...globalTypeFields,
    gallons: { type: GraphQLFloat },
    cost: { type: GraphQLFloat },
    vehicle: { type: VehicleType },
  })
});

import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { VehicleType } from './vehicles-type';
import { globalTypeFields } from '../utils/global';

export const DrivingScoreInputType = new GraphQLInputObjectType({
  name: 'DrivingScoreInputType',
  description: 'Driving score data input',
  fields: () => ({
    accelerationScore: { type: GraphQLInt },
    coastingScore: { type: GraphQLInt },
    breakingScore: { type: GraphQLInt },
    totalScore: { type: GraphQLNonNull(GraphQLInt) },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLString },
  })
});

export const DrivingScoreInputUpdateType = new GraphQLInputObjectType({
  name: 'DrivingScoreInputUpdateType',
  description: 'Driving score input for update',
  fields: () => ({
    accelerationScore: { type: GraphQLInt },
    coastingScore: { type: GraphQLInt },
    breakingScore: { type: GraphQLInt },
    totalScore: { type: GraphQLInt },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
  })
});

export const DrivingScoreType = new GraphQLObjectType({
  name: 'DrivingScoreType',
  description: 'Driving score sample for car',
  fields: () => ({
    ...globalTypeFields,
    accelerationScore: { type: GraphQLInt },
    coastingScore: { type: GraphQLInt },
    breakingScore: { type: GraphQLInt },
    totalScore: { type: GraphQLInt },
    vehicle: { type: VehicleType },
  })
});

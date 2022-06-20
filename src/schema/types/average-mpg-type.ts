import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import * as GraphQLDate from 'graphql-date';
import { VehicleType } from './vehicles-type';

export const AverageMPGInputType = new GraphQLInputObjectType({
  name: 'AverageMPGInputType',
  description: 'Average MPG data input',
  fields: () => ({
    value: { type: new GraphQLNonNull(GraphQLFloat) },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLDate },
  })
});

export const AverageMPGInputUpdateType = new GraphQLInputObjectType({
  name: 'AverageMPGInputUpdateType',
  description: 'Average MPG data update input',
  fields: () => ({
    value: { type: GraphQLFloat },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLDate },
    updatedOn: { type: GraphQLDate },
  })
});

export const AverageMPGType = new GraphQLObjectType({
  name: 'AverageMPGType',
  description: 'Average MPG sample for car',
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLFloat },
    vehicle: { type: VehicleType },
    sampledOn: { type: GraphQLDate },
    createdOn: { type: GraphQLDate },
    updatedOn: { type: GraphQLDate },
    configID: { type: GraphQLString },
  })
});

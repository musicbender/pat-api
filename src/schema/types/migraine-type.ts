import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import * as GraphQLDate from 'graphql-date';
import { globalTypeFields } from '@schema/utils/global';

export const MigraineInputType = new GraphQLInputObjectType({
  name: 'MigraineInputType',
  description: 'Migraine data input',
  fields: () => ({
    painLevel: { type: GraphQLInt },
    auraLevel: { type: GraphQLInt },
    nauseaLevel: { type: GraphQLInt },
    auraTags: { type: new GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    totalDuration: { type: GraphQLString },
    sampledOn: { type: GraphQLDate },
  }),
});

export const MigraineInputUpdateType = new GraphQLInputObjectType({
  name: 'MigraineInputUpdateType',
  description: 'Migraine data input for updating',
  fields: () => ({
    painLevel: { type: GraphQLInt },
    auraLevel: { type: GraphQLInt },
    nauseaLevel: { type: GraphQLInt },
    auraTags: { type: new GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    totalDuration: { type: GraphQLString },
    sampledOn: { type: GraphQLDate },
    createdOn: { type: GraphQLDate },
  }),
});

export const MigraineType = new GraphQLObjectType({
  name: 'MigraineType',
  description: 'Migraine data',
  fields: () => ({
    ...globalTypeFields,
    painLevel: { type: GraphQLInt },
    auraLevel: { type: GraphQLInt },
    nauseaLevel: { type: GraphQLInt },
    auraTags: { type: new GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    totalDuration: { type: GraphQLString },
  }),
});

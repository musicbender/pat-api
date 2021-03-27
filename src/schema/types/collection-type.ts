import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import { globalTypeFields } from '../utils/global';

export const CollectionInputType = new GraphQLInputObjectType({
  name: 'CollectionInputType',
  description: 'Collection data input',
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    count: { type: GraphQLInt },
    sampledOn: { type: GraphQLString },
  })
});

export const CollectionInputUpdateType = new GraphQLInputObjectType({
  name: 'CollectionInputUpdateType',
  description: 'Collection data input for updating',
  fields: () => ({
    shortId: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    count: { type: GraphQLInt },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
  })
});

export const CollectionInputIncrementType = new GraphQLInputObjectType({
  name: 'CollectionInputIncrementType',
  description: 'Collection data input for incrementing count',
  fields: () => ({
    increment: { type: GraphQLInt },
  })
});

export const CollectionType = new GraphQLObjectType({
  name: 'CollectionType',
  description: 'Collection data',
  fields: () => ({
    ...globalTypeFields,
    shortId: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    count: { type: GraphQLInt },
  })
});


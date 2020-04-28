import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';



export const CollectionInputType = new GraphQLInputObjectType({
  name: 'CollectionInputType',
  description: 'Collection data input',
  fields: () => ({
    shortId: { type: GraphQLString },
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

export const CollectionType = new GraphQLObjectType({
  name: 'CollectionType',
  description: 'Collection data',
  fields: () => ({
    id: { type: GraphQLString },
    shortId: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    count: { type: GraphQLInt },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
  })
});
import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLInt
} from 'graphql';

export const CollectionInputType = new GraphQLInputObjectType({
  name: 'CollectionInputType',
  description: 'Collection data input',
  fields: () => ({
    value: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
  })
});

export const CollectionInputUpdateType = new GraphQLInputObjectType({
  name: 'CollectionInputUpdateType',
  description: 'Collection data input for updating',
  fields: () => ({
    value: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
  })
});

export const CollectionType = new GraphQLObjectType({
  name: 'CollectionType',
  description: 'Collection data',
  fields: () => ({
    id: { type: GraphQLString },
    collectionId: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: GraphQLString },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
  })
});

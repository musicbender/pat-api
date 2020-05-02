import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

export const MigraineInputType = new GraphQLInputObjectType({
  name: 'MigraineInputType',
  description: 'Migraine data input',
  fields: () => ({
    painLevel: { type: GraphQLInt },
    auraLevel: { type: GraphQLInt },
    nauseaLevel: { type: GraphQLInt },
    auraTags: { type: new GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    duration: { type: GraphQLString },
    sampledOn: { type: GraphQLString },
  })
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
    duration: { type: GraphQLString },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
  })
});

export const MigraineType = new GraphQLObjectType({
  name: 'MigraineType',
  description: 'Migraine data',
  fields: () => ({
    id: { type: GraphQLString },
    painLevel: { type: GraphQLInt },
    auraLevel: { type: GraphQLInt },
    nauseaLevel: { type: GraphQLInt },
    auraTags: { type: new GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    duration: { type: GraphQLString },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
  })
});



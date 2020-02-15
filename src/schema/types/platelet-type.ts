import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { CbcType } from './cbc-type';

export const PlateletInputType = new GraphQLInputObjectType({
  name: 'PlateletInputType',
  description: 'Health data input',
  fields: () => ({
    count: { type: new GraphQLNonNull(GraphQLFloat) },
    sampledOn: { type: GraphQLString },
  })
});

export const PlateletInputUpdateType = new GraphQLInputObjectType({
  name: 'PlateletInputUpdateType',
  description: 'Health data input for updating',
  fields: () => ({
    count: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString }
  })
});

export const PlateletType = new GraphQLObjectType({
  name: 'PlateletType',
  description: 'Health data',
  fields: () => ({
    id: { type: GraphQLString },
    count: { type: GraphQLFloat },
    cbcId: { type: CbcType },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
  })
});


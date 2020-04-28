import { GraphQLObjectType } from 'graphql';
import * as healthkitMutations from './healthkit';
import * as healthMutations from './health';
import * as carMutations from './car';
import * as collectionMutations from './collections';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...healthkitMutations,
    ...healthMutations,
    ...carMutations,
    ...collectionMutations,
  }
});

export default mutation;

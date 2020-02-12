import { GraphQLObjectType } from 'graphql';
import * as healthkitMutations from './healthkit';
import * as healthMutations from './health';
import * as carMutations from './car';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...healthkitMutations,
    ...healthMutations,
    ...carMutations,
  }
});

export default mutation;

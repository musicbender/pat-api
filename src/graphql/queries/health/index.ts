import { GraphQLObjectType } from 'graphql';
import {
  step
} from './step';

const RootQuery = new GraphQLObjectType({
  name: 'Health',
  fields: () => ({
    step
  })
});

export default RootQuery;

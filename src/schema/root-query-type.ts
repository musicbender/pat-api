import { GraphQLObjectType, GraphQLString } from 'graphql';
import {
  step
} from './queries';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    step
  })
});

export default RootQueryType;

import { GraphQLObjectType } from 'graphql';
import {
  step,
  flightsClimbed,
  heartrate,
} from './queries';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    step,
    flightsClimbed,
    heartrate,
  })
});

export default RootQueryType;

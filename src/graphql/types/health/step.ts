import GraphQLDate from 'graphql-date';
import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';

export const StepInputType = new GraphQLInputObjectType({
  name: 'StepInputType',
  description: 'Step count input',
  fields: () => ({
    stepCount: { type: new GraphQLNonNull(GraphQLInt) },
    date: { type: GraphQLDate }
  })
});

export const StepType = new GraphQLObjectType({
  name: 'StepType',
  description: 'Step count data for a single day',
  fields: () => ({
    _id: { type: GraphQLID },
    stepCount: { type: GraphQLInt },
    date: { type: GraphQLDate }
  })
});

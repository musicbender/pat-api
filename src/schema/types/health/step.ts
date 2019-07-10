import * as GraphQLDate from 'graphql-date';
import * as GraphQLUnionInputType from 'graphql-union-input-type';
import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

export const StepInputType = new GraphQLInputObjectType({
  name: 'StepInputType',
  description: 'Step count input',
  fields: () => ({
    stepData: { type: new GraphQLNonNull(GraphQLInt) },
    date: { type: GraphQLDate }
  })
});

// export const StepQueryInputIdType = new GraphQLInputObjectType({
//   name: 'StepQueryInputIdType',
//   description: 'Step count id input',
//   fields: () => ({
//     _id: { type: GraphQLString },
//   })
// });
//
// export const StepQueryInputDateType = new GraphQLInputObjectType({
//   name: 'StepQueryInputDateType',
//   description: 'Step count date input',
//   fields: () => ({
//     date: { type: GraphQLDate }
//   })
// });
//
// export const StepQueryInputType = GraphQLUnionInputType({
//   name: 'StepQueryInputType',
//   description: 'Input for single step query',
//   inputTypes: [StepQueryInputIdType, StepQueryInputDateType]
// });

export const StepType = new GraphQLObjectType({
  name: 'StepType',
  description: 'Step count data for a single day',
  fields: () => ({
    _id: { type: GraphQLString },
    stepCount: { type: GraphQLInt },
    samplesDate: { type: GraphQLDate },
    createdOn: { type: GraphQLDate },
    sources: { type: new GraphQLList(GraphQLString) },
    unit: { type: GraphQLString }
  })
});

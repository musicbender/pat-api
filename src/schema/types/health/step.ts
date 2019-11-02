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

export const StepInputDataSampleType = new GraphQLInputObjectType({
  name: 'StepInputDataSampleType',
  description: 'Sample item in step data',
  fields: () => ({
    date: { type: GraphQLString },
    source: { type: GraphQLString },
    value: { type: new GraphQLNonNull(GraphQLString)}
  })
});


export const StepInputDataType = new GraphQLInputObjectType({
  name: 'StepInputDataType',
  description: 'Step data type',
  fields: () => ({
    health_type: { type: new GraphQLNonNull(GraphQLString) },
    unit: { type: GraphQLString },
    samples: { type: new GraphQLList(StepInputDataSampleType) }
  })
})

export const StepInputType = new GraphQLInputObjectType({
  name: 'StepInputType',
  description: 'Step count input',
  fields: () => ({
    data: { type: new GraphQLNonNull(StepInputDataType) },
    date: { type: GraphQLDate }
  })
});

export const StepType = new GraphQLObjectType({
  name: 'StepType',
  description: 'Step count data for a single day',
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLInt },
    sampledOn: { type: GraphQLDate },
    createdOn: { type: GraphQLDate },
    sources: { type: new GraphQLList(GraphQLString) },
    unit: { type: GraphQLString }
  })
});

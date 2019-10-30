import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

export const HealthInputSampleType = new GraphQLInputObjectType({
  name: 'HealthInputSampleType',
  description: 'Sample item in health data',
  fields: () => ({
    date: { type: GraphQLString },
    source: { type: GraphQLString },
    value: { type: new GraphQLNonNull(GraphQLString)},
    duration: { type: GraphQLString }
  })
});

export const HealthInputType = new GraphQLInputObjectType({
  name: 'HealthInputType',
  description: 'Health data input',
  fields: () => ({
    type: { type: new GraphQLNonNull(GraphQLString) },
    unit: { type: GraphQLString },
    sampleList: { type: new GraphQLList(HealthInputSampleType) },
    sample: { type: HealthInputSampleType },
    sampledOn: { type: GraphQLString }
  })
});

export const HealthType = new GraphQLObjectType({
  name: 'HealthType',
  description: 'Health data',
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLInt },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
    sources: { type: new GraphQLList(GraphQLString) },
    unit: { type: GraphQLString },
    totalDuration: { type: GraphQLString }
  })
});

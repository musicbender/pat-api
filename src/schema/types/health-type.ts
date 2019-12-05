import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { UnitType } from './unit-type';

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
    unit: { type: UnitType },
    sampleList: { type: new GraphQLList(HealthInputSampleType) },
    sample: { type: HealthInputSampleType },
    sampledOn: { type: GraphQLString },
    validSources: { type: new GraphQLList(GraphQLString) }
  })
});

export const HealthType = new GraphQLObjectType({
  name: 'HealthType',
  description: 'Health data',
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLInt },
    valueType: { type: GraphQLString },
    totalSampleValue: { type: GraphQLInt },
    averageSampleValue: { type: GraphQLInt },
    highestSampleValue: { type: GraphQLInt },
    lowestSampleValue: { type: GraphQLInt },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
    sources: { type: new GraphQLList(GraphQLString) },
    unit: { type: UnitType },
    totalDuration: { type: GraphQLString }
  })
});

import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
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

export const HealthInputUpdateType = new GraphQLInputObjectType({
  name: 'HealthInputUpdateType',
  description: 'Health data input for updating',
  fields: () => ({
    value: { type: GraphQLFloat },
    valueType: { type: GraphQLString },
    totalSampleValue: { type: GraphQLFloat },
    averageSampleValue: { type: GraphQLFloat },
    highestSampleValue: { type: GraphQLFloat },
    lowestSampleValue: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    sources: { type: new GraphQLList(GraphQLString) },
    unit: { type: UnitType },
    totalDuration: { type: GraphQLString }
  })
});

export const HealthType = new GraphQLObjectType({
  name: 'HealthType',
  description: 'Health data',
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLFloat },
    valueType: { type: GraphQLString },
    totalSampleValue: { type: GraphQLFloat },
    averageSampleValue: { type: GraphQLFloat },
    highestSampleValue: { type: GraphQLFloat },
    lowestSampleValue: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
    sources: { type: new GraphQLList(GraphQLString) },
    unit: { type: UnitType },
    totalDuration: { type: GraphQLString }
  })
});

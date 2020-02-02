import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { UnitType } from './unit-type';

export const HealthKitInputSampleType = new GraphQLInputObjectType({
  name: 'HealthKitInputSampleType',
  description: 'Sample item in health data',
  fields: () => ({
    date: { type: GraphQLString },
    source: { type: GraphQLString },
    value: { type: new GraphQLNonNull(GraphQLString)},
    duration: { type: GraphQLString }
  })
});

export const HealthKitInputType = new GraphQLInputObjectType({
  name: 'HealthKitInputType',
  description: 'Health data input',
  fields: () => ({
    type: { type: new GraphQLNonNull(GraphQLString) },
    unit: { type: UnitType },
    sampleList: { type: new GraphQLList(HealthKitInputSampleType) },
    sample: { type: HealthKitInputSampleType },
    sampledOn: { type: GraphQLString },
    validSources: { type: new GraphQLList(GraphQLString) }
  })
});

export const HealthKitInputUpdateType = new GraphQLInputObjectType({
  name: 'HealthKitInputUpdateType',
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

export const HealthKitType = new GraphQLObjectType({
  name: 'HealthKitType',
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

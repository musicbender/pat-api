import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLUnionType,
  GraphQLFloat,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import * as GraphQLDate from 'graphql-date';
import { BloodPressureType } from './blood-pressure-type';
import { UnitType } from './unit-type';
import { globalTypeFields } from '@schema/utils/global';

export const HealthKitInputSampleType = new GraphQLInputObjectType({
  name: 'HealthKitInputSampleType',
  description: 'Sample item in health data',
  fields: () => ({
    date: { type: GraphQLString },
    source: { type: GraphQLString },
    value: { type: new GraphQLNonNull(GraphQLString) },
    duration: { type: GraphQLString },
  }),
});

export const HealthKitInputType = new GraphQLInputObjectType({
  name: 'HealthKitInputType',
  description: 'Health data input',
  fields: () => ({
    type: { type: GraphQLString },
    unit: { type: UnitType },
    sampleList: { type: new GraphQLList(HealthKitInputSampleType) },
    sample: { type: HealthKitInputSampleType },
    sampledOn: { type: GraphQLDate },
    validSources: { type: new GraphQLList(GraphQLString) },
  }),
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
    sampledOn: { type: GraphQLDate },
    createdOn: { type: GraphQLDate },
    sources: { type: new GraphQLList(GraphQLString) },
    unit: { type: UnitType },
    totalDuration: { type: GraphQLString },
  }),
});

export const HealthKitType = new GraphQLObjectType({
  name: 'HealthKitType',
  description: 'Health data',
  fields: () => ({
    ...globalTypeFields,
    hkid: { type: GraphQLString },
    value: { type: GraphQLFloat },
    valueType: { type: GraphQLString },
    totalSampleValue: { type: GraphQLFloat },
    averageSampleValue: { type: GraphQLFloat },
    highestSampleValue: { type: GraphQLFloat },
    lowestSampleValue: { type: GraphQLFloat },
    sources: { type: new GraphQLList(GraphQLString) },
    unit: { type: UnitType },
    totalDuration: { type: GraphQLString },
  }),
});

export const HealthKitUnionType = new GraphQLUnionType({
  name: 'HealthKitUnionType',
  description: 'Return either HealthKittype item or Blood Pressure item',
  types: [HealthKitType, BloodPressureType],
  resolveType: (value) => {
    if (value.systolic || value.dystolic) return 'BloodPressureType';
    return 'HealthKitType';
  },
});

export const HealthKitDeleteType = new GraphQLObjectType({
  name: 'HealthKitDeleteType',
  description: 'Healthkit deletion data',
  fields: () => ({
    hkid: { type: GraphQLString },
    configIDs: { type: new GraphQLList(GraphQLString) },
  }),
});

import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString
} from 'graphql';
import { UnitType } from './unit-type';
import * as GraphQLDate from 'graphql-date';
import { globalTypeFields } from '../utils/global';

export const BloodPressureInputType = new GraphQLInputObjectType({
  name: 'BloodPressureInputType',
  description: 'BloodPressure data input',
  fields: () => ({
    systolic: { type: GraphQLFloat },
    diastolic: { type: GraphQLFloat },
    sampledOn: { type: GraphQLDate },
  })
});

export const BloodPressureInputUpdateType = new GraphQLInputObjectType({
  name: 'BloodPressureInputUpdateType',
  description: 'BloodPressure data input for updating',
  fields: () => ({
    systolic: { type: GraphQLFloat },
    diastolic: { type: GraphQLFloat },
    sampledOn: { type: GraphQLDate },
    createdOn: { type: GraphQLDate },
    unit: { type: UnitType }
  })
});

export const BloodPressureType = new GraphQLObjectType({
  name: 'BloodPressureType',
  description: 'BloodPressure data',
  fields: () => ({
    ...globalTypeFields,
    systolic: { type: GraphQLFloat },
    diastolic: { type: GraphQLFloat },
    unit: { type: UnitType },
  })
});



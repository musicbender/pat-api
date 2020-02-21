import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString
} from 'graphql';
import { UnitType } from './unit-type';

export const BloodPressureInputType = new GraphQLInputObjectType({
  name: 'BloodPressureInputType',
  description: 'BloodPressure data input',
  fields: () => ({
    systolic: { type: GraphQLFloat },
    diastolic: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
  })
});

export const BloodPressureInputUpdateType = new GraphQLInputObjectType({
  name: 'BloodPressureInputUpdateType',
  description: 'BloodPressure data input for updating',
  fields: () => ({
    systolic: { type: GraphQLFloat },
    diastolic: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    unit: { type: UnitType }
  })
});

export const BloodPressureType = new GraphQLObjectType({
  name: 'BloodPressureType',
  description: 'BloodPressure data',
  fields: () => ({
    id: { type: GraphQLString },
    systolic: { type: GraphQLFloat },
    diastolic: { type: GraphQLFloat },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
    unit: { type: UnitType }
  })
});



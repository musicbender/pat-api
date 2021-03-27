import { globalTypeFields } from '../utils/global';
import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean
} from 'graphql';

export const ActivityInputType = new GraphQLInputObjectType({
  name: 'ActivityInputType',
  description: 'Fitness activity input',
  fields: () => ({
    sampledOn: { type: GraphQLString },
    energy: { type: GraphQLFloat },
    energyUnit: { type: GraphQLString },
    energyGoal: { type: GraphQLFloat },
    energyProgress: { type: GraphQLFloat },
    energyComplete: { type: GraphQLBoolean },
    standHours: { type: GraphQLFloat },
    standProgress: { type: GraphQLFloat },
    standGoal: { type: GraphQLFloat },
    standComplete: { type: GraphQLBoolean },
    exerciseMinutes: { type: GraphQLFloat },
    exerciseGoal: { type: GraphQLFloat },
    exerciseProgress: { type: GraphQLFloat },
    exerciseComplete: { type: GraphQLBoolean },
    ringsProgress: { type: GraphQLFloat },
    ringsComplete: { type: GraphQLBoolean },
  })
});

export const ActivityInputUpdateType = new GraphQLInputObjectType({
  name: 'ActivityInputUpdateType',
  description: 'Fitness activity update input',
  fields: () => ({
    sampledOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
    energy: { type: GraphQLFloat },
    energyUnit: { type: GraphQLString },
    energyGoal: { type: GraphQLFloat },
    energyProgress: { type: GraphQLFloat },
    energyComplete: { type: GraphQLBoolean },
    standHours: { type: GraphQLFloat },
    standProgress: { type: GraphQLFloat },
    standGoal: { type: GraphQLFloat },
    standComplete: { type: GraphQLBoolean },
    exerciseMinutes: { type: GraphQLFloat },
    exerciseGoal: { type: GraphQLFloat },
    exerciseProgress: { type: GraphQLFloat },
    exerciseComplete: { type: GraphQLBoolean },
    ringsProgress: { type: GraphQLFloat },
    ringsComplete: { type: GraphQLBoolean },
  })
});

export const ActivityType = new GraphQLObjectType({
  name: 'ActivityType',
  description: 'Fitness activity sample',
  fields: () => ({
    ...globalTypeFields,
    energy: { type: GraphQLFloat },
    energyUnit: { type: GraphQLString },
    energyGoal: { type: GraphQLFloat },
    energyProgress: { type: GraphQLFloat },
    energyComplete: { type: GraphQLBoolean },
    standHours: { type: GraphQLFloat },
    standProgress: { type: GraphQLFloat },
    standGoal: { type: GraphQLFloat },
    standComplete: { type: GraphQLBoolean },
    exerciseMinutes: { type: GraphQLFloat },
    exerciseGoal: { type: GraphQLFloat },
    exerciseProgress: { type: GraphQLFloat },
    exerciseComplete: { type: GraphQLBoolean },
    ringsProgress: { type: GraphQLFloat },
    ringsComplete: { type: GraphQLBoolean },
  })
});

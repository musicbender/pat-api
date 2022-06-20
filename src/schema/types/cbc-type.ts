import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString
} from 'graphql';
import * as GraphQLDate from 'graphql-date';
import { globalTypeFields } from '../utils/global';
import { PlateletType } from './platelet-type';

export const CbcInputType = new GraphQLInputObjectType({
  name: 'CbcInputType',
  description: 'Complete blood count data input',
  fields: () => ({
    sampledOn: { type: GraphQLDate },
    wbcCount: { type: GraphQLFloat },
    rbcCount: { type: GraphQLFloat },
    hematrocrit: { type: GraphQLFloat },
    hgb: { type: GraphQLFloat },
    mvc: { type: GraphQLFloat },
    mch: { type: GraphQLFloat },
    mchc: { type: GraphQLFloat },
    redCellDistributionWidth: { type: GraphQLFloat },
    plateletCount: { type: GraphQLFloat },
    meanPlateletVolume: { type: GraphQLFloat },
    granulocytes: { type: GraphQLFloat },
    lymphocytes: { type: GraphQLFloat },
    monocytes: { type: GraphQLFloat },
    neutrophil: { type: GraphQLFloat },
    lymphocytePercent: { type: GraphQLFloat },
    monocytePercent: { type: GraphQLFloat },
  })
});

export const CbcInputUpdateType = new GraphQLInputObjectType({
  name: 'CbcInputUpdateType',
  description: 'Complete blood count data update input',
  fields: () => ({
    sampledOn: { type: GraphQLDate },
    updatedOn: { type: GraphQLDate },
    wbcCount: { type: GraphQLFloat },
    rbcCount: { type: GraphQLFloat },
    hematrocrit: { type: GraphQLFloat },
    hgb: { type: GraphQLFloat },
    mvc: { type: GraphQLFloat },
    mch: { type: GraphQLFloat },
    mchc: { type: GraphQLFloat },
    redCellDistributionWidth: { type: GraphQLFloat },
    plateletCount: { type: GraphQLFloat },
    meanPlateletVolume: { type: GraphQLFloat },
    granulocytes: { type: GraphQLFloat },
    lymphocytes: { type: GraphQLFloat },
    monocytes: { type: GraphQLFloat },
    neutrophil: { type: GraphQLFloat },
    lymphocytePercent: { type: GraphQLFloat },
    monocytePercent: { type: GraphQLFloat },
  })
});

export const CbcType = new GraphQLObjectType({
  name: 'CbcType',
  description: 'Complete blood count data sample',
  fields: () => ({
    ...globalTypeFields,
    wbcCount: { type: GraphQLFloat },
    rbcCount: { type: GraphQLFloat },
    hematrocrit: { type: GraphQLFloat },
    hgb: { type: GraphQLFloat }, 
    mvc: { type: GraphQLFloat },
    mch: { type: GraphQLFloat }, 
    mchc: { type: GraphQLFloat },
    redCellDistributionWidth: { type: GraphQLFloat },
    platelets: { type: PlateletType },
    plateletsId: { type: GraphQLString },
    meanPlateletVolume: { type: GraphQLFloat },
    granulocytes: { type: GraphQLFloat },
    lymphocytes: { type: GraphQLFloat },
    monocytes: { type: GraphQLFloat },
    neutrophil: { type: GraphQLFloat },
    lymphocytePercent: { type: GraphQLFloat },
    monocytePercent: { type: GraphQLFloat }, 
  })
});

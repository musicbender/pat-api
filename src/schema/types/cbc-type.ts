import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLString
} from 'graphql';
import { PlateletType } from './platelet-type';

export const CbcInputType = new GraphQLInputObjectType({
  name: 'CbcInputType',
  description: 'Complete blood count data input',
  fields: () => ({
    sampledOn: { type: GraphQLString },
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
    neutrophil: { type: GraphQLFloat },
    monocyte: { type: GraphQLFloat },
  })
});

export const CbcInputUpdateType = new GraphQLInputObjectType({
  name: 'CbcInputUpdateType',
  description: 'Complete blood count data update input',
  fields: () => ({
    sampledOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
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
    neutrophil: { type: GraphQLFloat },
    lymphocyte: { type: GraphQLFloat },
    monocyte: { type: GraphQLFloat },
  })
});

export const CbcType = new GraphQLObjectType({
  name: 'CbcType',
  description: 'Complete blood count data sample',
  fields: () => ({
    id: { type: GraphQLString },
    sampledOn: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    updatedOn: { type: GraphQLString },
    wbcCount: { type: GraphQLFloat },
    rbcCount: { type: GraphQLFloat },
    hematrocrit: { type: GraphQLFloat },
    hgb: { type: GraphQLFloat },
    mvc: { type: GraphQLFloat },
    mch: { type: GraphQLFloat },
    mchc: { type: GraphQLFloat },
    redCellDistributionWidth: { type: GraphQLFloat },
    plateletCount: { type: PlateletType },
    meanPlateletVolume: { type: GraphQLFloat },
    granulocytes: { type: GraphQLFloat },
    lymphocytes: { type: GraphQLFloat },
    neutrophil: { type: GraphQLFloat },
    lymphocyte: { type: GraphQLFloat },
    monocyte: { type: GraphQLFloat },
  })
});

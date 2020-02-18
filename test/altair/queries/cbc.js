export const addCbc = `
  mutation AddCbc($input: CbcInputType!) {
    addCbc(input: $input){
      ... on addCbcResponse {
          response {
            id
            sampledOn
            createdOn
            updatedOn
            wbcCount
            rbcCount
            hematrocrit
            hgb
            mvc
            mch
            mchc
            redCellDistributionWidth
            meanPlateletVolume
            granulocytes
            lymphocytes
            monocytes
            neutrophil
            lymphocytePercent
            monocytePercent
          }
      }
      ... on addCbcError {
        errorCode
        errorDesc
      }
    }
  }
`;
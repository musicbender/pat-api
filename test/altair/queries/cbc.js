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

export const updateCbc = `
  mutation UpdateCbc($id: ID!, $input: CbcInputUpdateType!) {
    updateCbc(id: $id, input: $input){
      ... on updateCbcResponse {
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
            plateletsId
            platelets {
              id
              value
              unit
              sampledOn
              cbcId
            }
          }
      }
      ... on updateCbcError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const getCbc = `  
  query GetCbc ($id: String, $date: Date) {
    cbc(id: $id, date: $date) {
        ... on cbcResponse {
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
            plateletsId
            platelets {
              id
              value
              unit
              sampledOn
              cbcId
            }
          }
        }
      ... on cbcError {
        errorCode
        errorDesc
      }
    }
  }
`;
export const addMutation = `
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
            plateletsId
            configID
            platelets {
              id
              value
              unit
              sampledOn
              cbcId
            }
          }
      }
      ... on addCbcError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const getQueryAll = `
  query GetCbcAll ($limit: Int) {
    cbcAll (limit: $limit) {
        ... on cbcAllResponse {
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
            configID
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
      ... on cbcAllError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
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
            configID
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

export const getQuery = `  
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
            configID
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

export const deleteMutation = `
  mutation DeleteCbc ($id: ID!) {
    deleteCbc(id: $id) {
      ... on deleteCbcResponse {
          response {
            id
            configID
          }
      }
      ... on deleteCbcError {
        errorCode
        errorDesc
      }
    }
  }
`;

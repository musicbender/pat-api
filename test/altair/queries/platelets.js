export const addPlatelets = `
  mutation AddPlatelets ($input: PlateletInputType!) {
    addPlatelets(input: $input){
      ... on addPlateletsResponse {
          response {
            id
            value
            sampledOn
            createdOn
            updatedOn
            unit
            cbcId
          }
      }
      ... on addPlateletsError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const getPlatelets = `  
  query GetPlatelets ($id: String, $date: Date) {
    platelets(id: $id, date: $date) {
        ... on PlateletsResponse {
          response {
            id
            value
            sampledOn
            createdOn
            updatedOn
            unit
            cbcId
          }
        }
      ... on PlateletsError {
        errorCode
        errorDesc
      }
    }
  }
`;
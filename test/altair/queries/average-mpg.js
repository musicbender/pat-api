export const addAverageMPG = `
  mutation AddAverageMPG ($input: CarInputType!) {
    addAverageMPG(input: $input){
      ... on addAverageMPGResponse {
          response {
            id
            value
            vehicle
            sampledOn
            createdOn
            updatedOn
          }
      }
      ... on addAverageMPGError {
        errorCode
        errorDesc
      }
    }
  }
`;
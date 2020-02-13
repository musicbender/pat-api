export const addAverageMPG = `
  mutation AddAverageMPG ($input: AverageMPGInputType!) {
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
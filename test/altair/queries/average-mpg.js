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

export const updateAverageMPG = `
  mutation UpdateAverageMPG ($input: AverageMPGInputUpdateType!, $id: ID!) {
    updateAverageMPG(input: $input, id: $id) {
      ... on updateAverageMPGResponse {
          response {
            id
            value
            vehicle
            sampledOn
            createdOn
            updatedOn
          }
      }
      ... on updateAverageMPGError {
        errorCode
        errorDesc
      }
    }
  }
`
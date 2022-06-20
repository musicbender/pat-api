export const getAverageMPG = `
  query GetAverageMPG ($id: String, $date: Date) {
    averageMPG(id: $id, date: $date){
      ... on averageMPGResponse {
          response {
            id
            value
            vehicle
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on averageMPGError {
        errorCode
        errorDesc
      }
    }
  }
`;

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
            configID
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
            configID
          }
      }
      ... on updateAverageMPGError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteAverageMPG = `
  mutation DeleteAverageMPG ($id: ID!) {
    deleteAverageMPG(id: $id) {
      ... on deleteAverageMPGResponse {
          response {
            id
            configID
          }
      }
      ... on deleteAverageMPGError {
        errorCode
        errorDesc
      }
    }
  }
`;
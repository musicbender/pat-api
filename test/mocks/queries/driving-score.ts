export const getQuery = `
  query GetDrivingScore ($id: String, $date: Date) {
    drivingScore(id: $id, date: $date){
      ... on drivingScoreResponse {
          response {
            id
            accelerationScore
            coastingScore
            breakingScore
            totalScore
            vehicle
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on drivingScoreError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
  mutation AddDrivingScore ($input: DrivingScoreInputType!) {
    addDrivingScore(input: $input){
      ... on addDrivingScoreResponse {
          response {
            id
            accelerationScore
            coastingScore
            breakingScore
            totalScore
            vehicle
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on addDrivingScoreError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
  mutation UpdateDrivingScore ($input: DrivingScoreInputUpdateType!, $id: ID!) {
    updateDrivingScore(input: $input, id: $id) {
      ... on updateDrivingScoreResponse {
          response {
            id
            accelerationScore
            coastingScore
            breakingScore
            totalScore
            vehicle
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on updateDrivingScoreError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteDrivingScore ($id: ID!) {
    deleteDrivingScore(id: $id) {
      ... on deleteDrivingScoreResponse {
          response {
            id
            configID
          }
      }
      ... on deleteDrivingScoreError {
        errorCode
        errorDesc
      }
    }
  }
`;
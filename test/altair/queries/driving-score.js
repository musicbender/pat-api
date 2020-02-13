export const addDrivingScore = `
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
          }
      }
      ... on addDrivingScoreError {
        errorCode
        errorDesc
      }
    }
  }
`;
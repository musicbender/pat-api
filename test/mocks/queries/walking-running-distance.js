export const addWalkingRunningDistance = `
  mutation addWalkingRunningDistance ($input: HealthInputType!) {
    addWalkingRunningDistance(input: $input) {
      ... on addWalkingRunningDistanceResponse {
          response {
            id
            value
            valueType
            totalSampleValue
            averageSampleValue
            highestSampleValue
            lowestSampleValue
            sampledOn
            createdOn
            updatedOn
            sources
            unit
            totalDuration
          }
      }
      ... on addWalkingRunningDistanceError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateWalkingRunningDistance = `
  mutation updateWalkingRunningDistance ($input: HealthInputUpdateType!, $id: ID!) {
    updateWalkingRunningDistance(input: $input, id: $id) {
      ... on updateWalkingRunningDistanceResponse {
          response {
            id
            value
            valueType
            totalSampleValue
            averageSampleValue
            highestSampleValue
            lowestSampleValue
            sampledOn
            createdOn
            updatedOn
            sources
            unit
            totalDuration
          }
      }
      ... on updateWalkingRunningDistanceError {
        errorCode
        errorDesc
      }
    }
  }
`;


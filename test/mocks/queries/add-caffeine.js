export const addCaffeine = `
  mutation addCaffeine ($input: HealthInputType!) {
    addCaffeine(input: $input) {
      ... on addCaffeineResponse {
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
      ... on addCaffeineError {
        errorCode
        errorDesc
      }
    }
  }
`
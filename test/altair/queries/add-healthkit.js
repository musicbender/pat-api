export const addHealthKit = `
  mutation AddHealthKit($input: [HealthInputType]!) {
    addHealthKit(input: $input) {
      ... on addHealthKitResponse {
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
      ... on addHealthKitError {
        errorCode
        errorDesc
      }
    }
  }
`
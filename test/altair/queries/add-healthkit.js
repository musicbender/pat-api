export const addHealthKit = `mutation AddHealthKit($input: [HealthKitInputType]!) {
  addHealthKit(input: $input) { 
    ... on addHealthKitResponse {
      response {
        ... on HealthKitType {
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
          configID
        }
        ... on BloodPressureType {
          id
          systolic
          diastolic
          sampledOn
          createdOn
          updatedOn
          unit
          configID
        }
      }
    }
    ... on addHealthKitError {
      errorCode
      errorDesc
    }
  }
}`
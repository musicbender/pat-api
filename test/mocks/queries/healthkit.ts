export const getQuery = `
  query GetHealthKit ($hkid: String!) {
    healthkit(hkid: $hkid){
      ... on healthKitResponse {
        response {
          ... on HealthKitType {
            id
            hkid
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
            hkid
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
      ... on healthKitError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
  mutation AddHealthKit($input: [HealthKitInputType]!) {
    addHealthKit(input: $input) {
      ... on addHealthKitResponse {
        response {
          ... on HealthKitType {
            id
            hkid
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
            hkid
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
  }
`;

export const deleteMutation = `
  mutation DeleteHealthKit ($hkid: String!) {
    deleteDrivingScore(hkid: $hkid) {
      ... on deleteHealthKitResponse {
          response {
            hkid
            configIDs
          }
      }
      ... on deleteHealthKitError {
        errorCode
        errorDesc
      }
    }
  }
`;

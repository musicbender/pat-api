export const addRestingEnergy = `
  mutation addRestingEnergy ($input: HealthInputType!) {
    addRestingEnergy(input: $input) {
      ... on addRestingEnergyResponse {
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
      ... on addRestingEnergyError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateRestingEnergy = `
  mutation updateRestingEnergy ($input: HealthInputUpdateType!, $id: ID!) {
    updateRestingEnergy(input: $input, id: $id) {
      ... on updateRestingEnergyResponse {
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
      ... on updateRestingEnergyError {
        errorCode
        errorDesc
      }
    }
  }
`;


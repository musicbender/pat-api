export const addBodyTemperature = `
  mutation AddBodyTemperature ($input: HealthInputType!) {
    addBodyTemperature(input: $input){
      ... on addBodyTemperatureResponse {
          response {
            id
            value
            sampledOn
            createdOn
            updatedOn
            unit
          }
      }
      ... on addBodyTemperatureError {
        errorCode
        errorDesc
      }
    }
  }
`;
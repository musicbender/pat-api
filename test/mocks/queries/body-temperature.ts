export const getQuery = `  
  query GetBodyTemperature ($id: String, $date: Date) {
    bodyTemperature(id: $id, date: $date) {
        ... on bodyTemperatureResponse {
          response {
            id
            value
            sampledOn
            createdOn
            updatedOn
            unit
            configID
          }
        }
      ... on bodyTemperatureError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
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
            configID
          }
      }
      ... on addBodyTemperatureError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
  mutation UpdateBodyTemperature ($input: HealthInputUpdateType!, $id: ID!) {
    updateBodyTemperature(input: $input, id: $id) {
      ... on updateBodyTemperatureResponse {
          response {
            id
            value
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on updateBodyTemperatureError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteBodyTemperature ($id: ID!) {
    deleteBodyTemperature(id: $id) {
      ... on deleteBodyTemperatureResponse {
          response {
            id
            configID
          }
      }
      ... on deleteBodyTemperatureError {
        errorCode
        errorDesc
      }
    }
  }
`;

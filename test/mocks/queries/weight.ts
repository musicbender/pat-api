export const getQuery = `  
  query GetWeight ($id: String, $date: Date) {
    weight(id: $id, date: $date) {
        ... on weightResponse {
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
      ... on weightError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
  mutation AddWeight ($input: HealthInputType!) {
    addWeight(input: $input){
      ... on addWeightResponse {
          response {
            id
            value
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on addWeightError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
  mutation UpdateWeight ($input: HealthInputUpdateType!, $id: ID!) {
    updateWeight(input: $input, id: $id) {
      ... on updateWeightResponse {
          response {
            id
            value
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on updateWeightError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteWeight ($id: ID!) {
    deleteWeight(id: $id) {
      ... on deleteWeightResponse {
          response {
            id
            configID
          }
      }
      ... on deleteWeightError {
        errorCode
        errorDesc
      }
    }
  }
`;

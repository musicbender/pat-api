export const getQuery = `  
  query GetWaistCircumference ($id: String, $date: Date) {
    waistCircumference(id: $id, date: $date) {
        ... on waistCircumferenceResponse {
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
      ... on waistCircumferenceError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
  mutation AddWaistCircumference ($input: HealthInputType!) {
    addWaistCircumference(input: $input){
      ... on addWaistCircumferenceResponse {
          response {
            id
            value
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on addWaistCircumferenceError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
  mutation UpdateWaistCircumference ($input: HealthInputUpdateType!, $id: ID!) {
    updateWaistCircumference(input: $input, id: $id) {
      ... on updateWaistCircumferenceResponse {
          response {
            id
            value
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on updateWaistCircumferenceError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteWaistCircumference ($id: ID!) {
    deleteWaistCircumference(id: $id) {
      ... on deleteWaistCircumferenceResponse {
          response {
            id
            configID
          }
      }
      ... on deleteWaistCircumferenceError {
        errorCode
        errorDesc
      }
    }
  }
`;

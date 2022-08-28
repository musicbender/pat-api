export const getQuery = `  
  query GetAnxiety ($id: String, $date: Date) {
    anxiety(id: $id, date: $date) {
        ... on anxietyResponse {
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
      ... on anxietyError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
  mutation AddAnxiety ($input: HealthInputType!) {
    addAnxiety(input: $input){
      ... on addAnxietyResponse {
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
      ... on addAnxietyError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
  mutation UpdateAnxiety ($input: HealthInputUpdateType!, $id: ID!) {
    updateAnxiety(input: $input, id: $id){
      ... on updateAnxietyResponse {
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
      ... on updateAnxietyError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteAnxiety ($id: ID!) {
    deleteAnxiety(id: $id) {
      ... on deleteAnxietyResponse {
          response {
            id
            configID
          }
      }
      ... on deleteAnxietyError {
        errorCode
        errorDesc
      }
    }
  }
`;

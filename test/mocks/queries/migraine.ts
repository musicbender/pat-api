export const getQuery = `  
  query GetMigraine ($id: String, $date: Date) {
    migraine(id: $id, date: $date) {
        ... on migraineResponse {
          response {
            id
            painLevel
            auraLevel
            nauseaLevel
            auraTags
            description
            totalDuration
            sampledOn
            createdOn
            updatedOn
            configID
          }
        }
      ... on migraineError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
  mutation AddMigraine ($input: MigraineInputType!) {
    addMigraine(input: $input){
      ... on addMigraineResponse {
          response {
            id
            painLevel
            auraLevel
            nauseaLevel
            auraTags
            description
            totalDuration
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on addMigraineError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
  mutation UpdateMigraine ($input: MigraineInputUpdateType!, $id: ID!) {
    updateMigraine(input: $input, id: $id) {
      ... on updateMigraineResponse {
          response {
            id
            painLevel
            auraLevel
            nauseaLevel
            auraTags
            description
            totalDuration
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on updateMigraineError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteMigraine ($id: ID!) {
    deleteMigraine(id: $id) {
      ... on deleteMigraineResponse {
          response {
            id
            configID
          }
      }
      ... on deleteMigraineError {
        errorCode
        errorDesc
      }
    }
  }
`;

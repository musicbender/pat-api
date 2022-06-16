export const getMigraine = `  
  query GetMigraine ($id: String, $date: Date) {
    migraine(id: $id, date: $date) {
        ... on migraineResponse {
          response {
            id
            painLevel
            auraLevel
            nuaseaLevel
            auraTags
            description
            totalDuration
            sampledOn
            createdOn
            updatedOn
          }
        }
      ... on migraineError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMigraine = `
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
          }
      }
      ... on addMigraineError {
        errorCode
        errorDesc
      }
    }
  }
`;
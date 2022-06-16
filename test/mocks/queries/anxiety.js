export const getAnxiety = `  
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
          }
        }
      ... on anxietyError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addAnxiety = `
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
          }
      }
      ... on addAnxietyError {
        errorCode
        errorDesc
      }
    }
  }
`;
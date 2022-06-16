export const getWeight = `  
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
          }
        }
      ... on weightError {
        errorCode
        errorDesc
      }
    }
  }
`;
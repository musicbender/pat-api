export const addSteins = `
  mutation AddStein ($input: CollectionInputType!) {
    addStein(input: $input){
      ... on addSteinResponse {
          response {
            id
            shortId
            name
            description
            tags
            count
            sampledOn
          }
      }
      ... on addSteinError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateSteins = `
  mutation UpdateStein ($input: CollectionInputUpdateType!, $id: ID!) {
    updateStein(input: $input, id: $id) {
      ... on updateSteinResponse {
          response {
            id
            shortId
            name
            description
            tags
            count
            sampledOn
          }
      }
      ... on updateSteinError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const incrementSteins = `
  mutation IncrementStein ($input: CollectionInputIncrementType!, $id: ID!) {
    incrementStein(input: $input, id: $id) {
      ... on incrementSteinResponse {
          response {
            id
            shortId
            name
            description
            tags
            count
            sampledOn
          }
      }
      ... on incrementSteinError {
        errorCode
        errorDesc
      }
    }
  }
`;
export const addCollections = `
  mutation AddCollection ($input: CollectionInputType!) {
    addCollection(input: $input){
      ... on addCollectionsResponse {
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
      ... on addCollectionsError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateCollections = `
  mutation UpdateCollection ($input: CollectionInputUpdateType!, $id: ID!) {
    updateCollection(input: $input, id: $id) {
      ... on updateCollectionsResponse {
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
      ... on updateCollectionsError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const incrementCollections = `
  mutation IncrementCollection ($input: CollectionInputIncrementType!, $id: ID!) {
    incrementCollection(input: $input, id: $id) {
      ... on incrementCollectionsResponse {
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
      ... on incrementCollectionsError {
        errorCode
        errorDesc
      }
    }
  }
`;
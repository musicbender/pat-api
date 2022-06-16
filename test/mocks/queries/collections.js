export const addCollections = `
  mutation AddCollection ($input: CollectionInputType!) {
    addCollection(input: $input){
      ... on addCollectionResponse {
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
      ... on updateCollectionResponse {
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
      ... on updateCollectionError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const incrementCollections = `
  mutation IncrementCollection ($input: CollectionInputIncrementType!, $id: ID!) {
    incrementCollection(input: $input, id: $id) {
      ... on incrementCollectionResponse {
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
      ... on incrementCollectionError {
        errorCode
        errorDesc
      }
    }
  }
`;
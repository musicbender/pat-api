export const getQuery = `  
  query GetCollections ($id: String, $date: Date) {
    collections(id: $id, date: $date) {
        ... on collectionsResponse {
          response {
            id
            shortId
            name
            description
            tags
            count
            sampledOn
            configID
          }
        }
      ... on collectionsError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
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
            configID
          }
      }
      ... on addCollectionsError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
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
            configID
          }
      }
      ... on updateCollectionError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const incrementMutation = `
  mutation IncrementCollection ($input: CollectionInputIncrementType!, $id: ID!) {
    incrementCollection(input: $input, id: $id) {
      ... on incrementCollectionResponse {
          response {
            id
            name
            count
            configID
          }
      }
      ... on incrementCollectionError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteCollections ($id: ID!) {
    deleteCollections(id: $id) {
      ... on deleteCollectionsResponse {
          response {
            id
            configID
          }
      }
      ... on deleteCollectionsError {
        errorCode
        errorDesc
      }
    }
  }
`;

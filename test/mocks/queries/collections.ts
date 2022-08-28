export const getQuery = `  
  query GetCollections ($id: String, $date: Date) {
    collections(id: $id, date: $date) {
        ... on CollectionsResponse {
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
      ... on CollectionsError {
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
      ... on addCollectionError {
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
  mutation DeleteCollection ($id: ID!) {
    deleteCollection(id: $id) {
      ... on deleteCollectionResponse {
          response {
            id
            configID
          }
      }
      ... on deleteCollectionError {
        errorCode
        errorDesc
      }
    }
  }
`;

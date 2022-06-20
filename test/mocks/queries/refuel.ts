export const getQuery = `
  query GetRefuel ($id: String, $date: Date) {
    refuel(id: $id, date: $date){
      ... on refuelResponse {
          response {
            id
            gallons
            cost
            vehicle
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on refuelError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
  mutation AddRefuel ($input: RefuelInputType!) {
    addRefuel(input: $input){
      ... on addRefuelResponse {
          response {
            id
            gallons
            cost
            vehicle
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on addRefuelError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
  mutation UpdateRefuel ($input: RefuelInputUpdateType!, $id: ID!) {
    updateRefuel(input: $input, id: $id) {
      ... on updateRefuelResponse {
          response {
            id
            gallons
            cost
            vehicle
            sampledOn
            createdOn
            updatedOn
            configID
          }
      }
      ... on updateRefuelError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteRefuel ($id: ID!) {
    deleteRefuel(id: $id) {
      ... on deleteRefuelResponse {
          response {
            id
            configID
          }
      }
      ... on deleteRefuelError {
        errorCode
        errorDesc
      }
    }
  }
`;
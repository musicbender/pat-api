export const addRefuel = `
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
          }
      }
      ... on addRefuelError {
        errorCode
        errorDesc
      }
    }
  }
`;
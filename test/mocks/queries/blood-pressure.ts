export const getQuery = `  
  query GetBloodPressure($id: String, $date: Date) {
    bloodPressure(id: $id, date: $date) {
        ... on bloodPressureResponse {
          response {
            id
            systolic
            diastolic
            sampledOn
            createdOn
            updatedOn
            unit
            configID
          }
        }
      ... on bloodPressureError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
  mutation AddBloodPressure ($input: BloodPressureInputType!) {
    addBloodPressure(input: $input){
      ... on addBloodPressureResponse {
          response {
            id
            systolic
            diastolic
            sampledOn
            createdOn
            updatedOn
            unit
            configID
          }
      }
      ... on addBloodPressureError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
  mutation UpdateBloodPressure ($input: BloodPressureInputUpdateType!, $id: ID!) {
    updateBloodPressure(input: $input, id: $id) {
      ... on updateBloodPressureResponse {
          response {
            id
            systolic
            diastolic
            sampledOn
            createdOn
            updatedOn
            unit
            configID
          }
      }
      ... on updateBloodPressureError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteBloodPressure ($id: ID!) {
    deleteBloodPressure(id: $id) {
      ... on deleteBloodPressureResponse {
          response {
            id
            configID
          }
      }
      ... on deleteBloodPressureError {
        errorCode
        errorDesc
      }
    }
  }
`;

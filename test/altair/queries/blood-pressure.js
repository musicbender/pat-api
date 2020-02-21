export const getBloodPressure = `  
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
          }
        }
      ... on bloodPressureError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addBloodPressure = `
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
          }
      }
      ... on addBloodPressureError {
        errorCode
        errorDesc
      }
    }
  }
`;
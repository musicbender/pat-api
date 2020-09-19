export const getActivity = `  
  query GetActivity($id: String, $date: Date) {
    activity(id: $id, date: $date) {
        ... on activityResponse {
          response {
            id
            sampledOn
            energy
            energyUnit
            energyGoal
            energyProgress
            energyComplete
            standHours
            standProgress
            standGoal
            standComplete
            exerciseMinutes
            exerciseGoal
            exerciseProgress
            exerciseComplete
            ringsProgress
            ringsComplete
            createdOn
            updatedOn
          }
        }
      ... on activityError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addActivity = `
  mutation AddActivity ($input: ActivityInputType!) {
    addActivity(input: $input){
      ... on addActivityResponse {
          response {
            id
            energy
            energyUnit
            energyGoal
            energyProgress
            energyComplete
            standHours
            standProgress
            standGoal
            standComplete
            exerciseMinutes
            exerciseGoal
            exerciseProgress
            exerciseComplete
            ringsProgress
            ringsComplete
            sampledOn
            createdOn
            updatedOn
          }
      }
      ... on addActivityError {
        errorCode
        errorDesc
      }
    }
  }
`;
export const getQuery = `  
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
            configID
          }
        }
      ... on activityError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const addMutation = `
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
            configID
          }
      }
      ... on addActivityError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const updateMutation = `
  mutation UpdateActivity ($input: ActivityInputUpdateType!, $id: ID!) {
    updateActivity(input: $input, id: $id){
      ... on updateActivityResponse {
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
            configID
          }
      }
      ... on updateActivityError {
        errorCode
        errorDesc
      }
    }
  }
`;

export const deleteMutation = `
  mutation DeleteActivity ($id: ID!) {
    deleteActivity(id: $id) {
      ... on deleteActivityResponse {
          response {
            id
            configID
          }
      }
      ... on deleteActivityError {
        errorCode
        errorDesc
      }
    }
  }
`;

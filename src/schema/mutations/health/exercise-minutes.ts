import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'exerciseMinutes',
  name: 'ExerciseMinutes',
}

export const addExerciseMinutes = composeHealthkitAdd(options);
export const updateExerciseMinutes = composeHealthkitUpdate(options);

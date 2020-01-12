import { composeHealthkitQuery } from '../../utils/healthkit';

export const exerciseMinutes = composeHealthkitQuery({
  type: 'exercise-minutes',
  description: 'Get a single exercise-minutes count by either _id or date, _id taking priority',
});

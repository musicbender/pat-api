import { composeHealthkitQuery } from '../../utils/healthkit';

export const step = composeHealthkitQuery({
  type: 'steps',
  description: 'Get a single step count by either _id or date, _id taking priority',
});

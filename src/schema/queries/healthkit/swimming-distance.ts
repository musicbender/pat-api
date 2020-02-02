import { composeHealthkitQuery } from '../../utils/healthkit';

export const swimmingDistance = composeHealthkitQuery({
  type: 'swimming-distance',
  description: 'Get a single swimming-distance count by either _id or date, _id taking priority',
});

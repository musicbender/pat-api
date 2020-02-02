import { composeHealthkitQuery } from '../../utils/healthkit';

export const caffeine = composeHealthkitQuery({
  type: 'caffeine',
  description: 'Get a single caffeine count by either _id or date, _id taking priority',
});

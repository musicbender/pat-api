import { composeHealthkitQuery } from '../../utils/healthkit';

export const weight = composeHealthkitQuery({
  type: 'weight',
  description: 'Get a single weight value by either _id or date, _id taking priority',
});

import { composeHealthkitQuery } from '../../utils/healthkit';

export const activeEnergy = composeHealthkitQuery({
  type: 'active-energy',
  description: 'Get a single active energy count by either _id or date, _id taking priority',
});

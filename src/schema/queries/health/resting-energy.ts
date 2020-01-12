import { composeHealthkitQuery } from '../../utils/healthkit';

export const restingEnergy = composeHealthkitQuery({
  type: 'resting-energy',
  description: 'Get a single resting energy count by either _id or date, _id taking priority',
});

import { composeHealthkitQuery } from '../../utils/healthkit';

const restingEnergy = composeHealthkitQuery({
  type: 'resting-energy',
  description: 'Get a single resting energy count by either _id or date, _id taking priority',
});

export default restingEnergy;

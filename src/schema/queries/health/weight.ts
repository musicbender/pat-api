import { composeHealthkitQuery } from '../../utils/healthkit';

const weight = composeHealthkitQuery({
  type: 'weight',
  description: 'Get a single weight value by either _id or date, _id taking priority',
});

export default weight;

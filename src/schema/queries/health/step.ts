import { composeHealthkitQuery } from '../../utils/healthkit';

const step = composeHealthkitQuery({
  type: 'steps',
  description: 'Get a single step count by either _id or date, _id taking priority',
});

export default step;

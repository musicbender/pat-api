import { composeHealthkitQuery } from '../../utils/healthkit';

const swimmingDistance = composeHealthkitQuery({
  type: 'swimming-distance',
  description: 'Get a single swimming-distance count by either _id or date, _id taking priority',
})

export default swimmingDistance;

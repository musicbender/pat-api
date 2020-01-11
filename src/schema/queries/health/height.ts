import { composeHealthkitQuery } from '../../utils/healthkit';

const height = composeHealthkitQuery({
  type: 'height',
  description: 'Get a single height value by either _id or date, _id taking priority',
});

export default height;

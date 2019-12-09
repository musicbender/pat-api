import { composeHealthkitQuery } from '../../utils/healthkit';

const heartrate = composeHealthkitQuery({
  type: 'heartRate',
  description: 'Get a single heartrate average by either _id or date, _id taking priority',
})

export default heartrate;

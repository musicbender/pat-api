import { composeHealthkitQuery } from '../../utils/healthkit';

const restingHeartrate = composeHealthkitQuery({
  type: 'resting-heartrate',
  description: 'Get a single resting-heartrate count by either _id or date, _id taking priority',
})

export default restingHeartrate;

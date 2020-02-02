import { composeHealthkitQuery } from '../../utils/healthkit';

export const restingHeartrate = composeHealthkitQuery({
  type: 'resting-heartrate',
  description: 'Get a single resting-heartrate count by either _id or date, _id taking priority',
});

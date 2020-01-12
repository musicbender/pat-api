import { composeHealthkitQuery } from '../../utils/healthkit';

export const heartrate = composeHealthkitQuery({
  type: 'heartRate',
  description: 'Get a single heartrate average by either _id or date, _id taking priority',
});

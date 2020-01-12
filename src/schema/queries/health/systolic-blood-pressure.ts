import { composeHealthkitQuery } from '../../utils/healthkit';

export const systolicBloodPressure = composeHealthkitQuery({
  type: 'systolic-blood-pressure',
  description: 'Get a single systolic-blood-pressure by either _id or date, _id taking priority',
});
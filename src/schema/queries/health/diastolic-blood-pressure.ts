import { composeHealthkitQuery } from '../../utils/healthkit';

export const diastolicBloodPressure = composeHealthkitQuery({
  type: 'diastolic-blood-pressure',
  description: 'Get a single diastolic blood pressure by either _id or date, _id taking priority',
});

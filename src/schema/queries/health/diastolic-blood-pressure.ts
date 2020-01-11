import { composeHealthkitQuery } from '../../utils/healthkit';

const diastolicBloodPressure = composeHealthkitQuery({
  type: 'diastolic-blood-pressure',
  description: 'Get a single diastolic blood pressure by either _id or date, _id taking priority',
})

export default diastolicBloodPressure;

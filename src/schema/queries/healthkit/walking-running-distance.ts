import { composeHealthkitQuery } from '../../utils/healthkit';

export const walkingRunningDistance = composeHealthkitQuery({
  type: 'walking-running-distance',
  description: 'Get a single walking-running-distance count by either _id or date, _id taking priority',
});

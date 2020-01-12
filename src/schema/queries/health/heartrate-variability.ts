import { composeHealthkitQuery } from '../../utils/healthkit';

export const heartrateVariability = composeHealthkitQuery({
  type: 'heartrate-variability',
  description: 'Get a single heartrate-variability average by either _id or date, _id taking priority',
});

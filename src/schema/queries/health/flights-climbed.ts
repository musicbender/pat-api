import { composeHealthkitQuery } from '../../utils/healthkit';

export const flightsClimbed = composeHealthkitQuery({
  type: 'flightsClimbed',
  description: 'Get a single flights climbed count by either _id or date, _id taking priority',
});


import { composeHealthQuery } from '../../utils/health';

export const height = composeHealthQuery({
  type: 'height',
  description: 'Get a single height entry by either _id or date, _id taking priority',
});

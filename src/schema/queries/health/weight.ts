import { composeHealthQuery } from '../../utils/health';

export const weight = composeHealthQuery({
  type: 'weight',
  description: 'Get a single weight entry by either _id or date, _id taking priority',
});

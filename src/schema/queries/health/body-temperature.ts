import { composeHealthQuery } from '../../utils/health';

export const bodyTemperature = composeHealthQuery({
  type: 'body-temperature',
  description: 'Get a single body temperature entry by either _id or date, _id taking priority',
});

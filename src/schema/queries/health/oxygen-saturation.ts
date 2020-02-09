import { composeHealthQuery } from '../../utils/health';

export const oxygenSaturation = composeHealthQuery({
  type: 'oxygen-saturation',
  description: 'Get a single oxygen saturation entry by either _id or date, _id taking priority',
});

import { composeHealthkitQuery } from '../../utils/healthkit';

export const oxygenSaturation = composeHealthkitQuery({
  type: 'oxygen-saturation',
  description: 'Get a single oxygen saturation count by either _id or date, _id taking priority',
});

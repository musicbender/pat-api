import { composeHealthkitQuery } from '../../utils/healthkit';

const oxygenSaturation = composeHealthkitQuery({
  type: 'oxygen-saturation',
  description: 'Get a single oxygen saturation count by either _id or date, _id taking priority',
})

export default oxygenSaturation;

import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const swimmingDistance = composeHealthkitQuery({
  type: healthTypes.swimmingDistance.id,
  name: 'swimmingDistance'
});

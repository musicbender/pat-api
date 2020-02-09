import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const heartrateVariability = composeHealthkitQuery({
  type: healthTypes.heartRateVariability.id,
  name: 'heartrateVariability'
});

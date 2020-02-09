import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const step = composeHealthkitQuery({
  type: healthTypes.steps.id,
  name: 'steps'
});

import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const caffeine = composeHealthkitQuery({
  type: healthTypes.caffeine.id,
  name: 'caffeine'
});

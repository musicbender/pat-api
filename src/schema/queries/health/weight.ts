import { composeHealthQuery } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

export const weight = composeHealthQuery({
  type: healthTypes.weight.id,
  name: 'weight',
});

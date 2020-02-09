import { composeHealthQuery } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

export const bodyTemperature = composeHealthQuery({
  type: healthTypes.bodyTemperature.id,
  name: 'bodyTemperature',
});

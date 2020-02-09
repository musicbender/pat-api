import { composeHealthQuery } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

export const oxygenSaturation = composeHealthQuery({
  type: healthTypes.oxygenSaturation.id,
  name: 'oxygenSaturation',
});

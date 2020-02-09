import { composeHealthQuery } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

export const height = composeHealthQuery({
  type: healthTypes.height.id,
  name: 'height',
});

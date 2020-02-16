import { composeHealthQuery } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

export const platelets = composeHealthQuery({
  type: healthTypes.platelets.id,
  name: 'platelets',
});

import { composeHealthQuery } from '../../utils/health';
const healthTypes = require('../../../configs/health.json');

export const waistCircumference = composeHealthQuery({
  type: healthTypes.waistCircumference.id,
  name: 'waistCircumference',
});

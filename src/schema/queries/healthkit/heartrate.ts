import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const heartrate = composeHealthkitQuery({
  type: healthTypes.heartRate.id,
  name: 'heartrate'
});

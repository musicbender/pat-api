import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const restingHeartrate = composeHealthkitQuery({
  type: healthTypes.restingHeartRate.id,
  name: 'restingHeartrate'
});

import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const walkingRunningDistance = composeHealthkitQuery({
  type: healthTypes.walkingRunningDistance.id,
  name: 'walkingRunningDistance'
});

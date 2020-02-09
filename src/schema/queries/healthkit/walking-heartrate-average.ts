import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const walkingHeartRateAverage = composeHealthkitQuery({
  type: healthTypes.walkingHeartRateAverage.id,
  name: 'walkingHeartrateAverage'
});

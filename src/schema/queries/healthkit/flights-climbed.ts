import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const flightsClimbed = composeHealthkitQuery({
  type: healthTypes.flightsClimbed.id,
  name: 'flightsClimbed'
});


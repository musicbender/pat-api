import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const flightsClimbed = composeQuery({
  type: HealthKitType,
  name: 'flightsClimbed',
  modelID: healthTypes.flightsClimbed.modelID,
});

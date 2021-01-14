import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'flightsClimbed',
  modelID: healthTypes.flightsClimbed.modelID,
};

export const flightsClimbed = composeQuery(options);
export const flightsClimbedAll = composeQueryAll(options);

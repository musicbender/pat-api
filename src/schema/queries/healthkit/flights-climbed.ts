import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'flightsClimbed',
  config: healthTypes.flightsClimbed,
};

export const flightsClimbed = composeQuery(options);
export const flightsClimbedAll = composeQueryAll(options);

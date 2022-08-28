import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'walkingHeartrateAverage',
  config: healthTypes.walkingHeartRateAverage,
};

export const walkingHeartrateAverage = composeQuery(options);
export const walkingHeartrateAverageAll = composeQueryAll(options);

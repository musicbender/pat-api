import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'walkingHeartrateAverage',
  config: healthTypes.walkingHeartRateAverage,
};

export const walkingHeartrateAverage = composeQuery(options);
export const walkingHeartrateAverageAll = composeQueryAll(options);

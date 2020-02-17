import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const walkingHeartrateAverage = composeQuery({
  type: HealthKitType,
  name: 'walkingHeartrateAverage',
  modelID: healthTypes.walkingHeartRateAverage.modelID,
});

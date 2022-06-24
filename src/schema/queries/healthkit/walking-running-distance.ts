import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'walkingRunningDistance',
  config: healthTypes.walkingRunningDistance,
};

export const walkingRunningDistance = composeQuery(options);
export const walkingRunningDistanceAll = composeQueryAll(options);

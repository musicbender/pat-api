import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'heartrate',
  config: healthTypes.heartRate,
};

export const heartrate = composeQuery(options);
export const heartrateAll = composeQueryAll(options);

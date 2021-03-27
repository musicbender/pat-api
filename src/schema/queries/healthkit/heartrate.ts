import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'heartrate',
  config: healthTypes.heartRate,
};

export const heartrate = composeQuery(options);
export const heartrateAll = composeQueryAll(options);

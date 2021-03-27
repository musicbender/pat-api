import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'restingHeartrate',
  config: healthTypes.restingHeartRate.modelID,
};

export const restingHeartrate = composeQuery(options);
export const restingHeartrateAll = composeQueryAll(options);

import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const restingHeartrate = composeQuery({
  type: HealthKitType,
  name: 'restingHeartrate',
  modelID: healthTypes.restingHeartRate.modelID,
});

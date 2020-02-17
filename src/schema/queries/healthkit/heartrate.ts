import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const heartrate = composeQuery({
  type: HealthKitType,
  name: 'heartrate',
  modelID: healthTypes.heartRate.modelID,
});

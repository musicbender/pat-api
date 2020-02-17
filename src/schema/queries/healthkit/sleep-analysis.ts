import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const sleepAnalysis = composeQuery({
  type: HealthKitType,
  name: 'sleepAnalysis',
  modelID: healthTypes.sleepAnalysis.modelID,
});

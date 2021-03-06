import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'sleepAnalysis',
  config: healthTypes.sleepAnalysis,
};

export const sleepAnalysis = composeQuery(options);
export const sleepAnalysisAll = composeQueryAll(options);

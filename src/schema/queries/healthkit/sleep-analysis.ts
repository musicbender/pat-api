import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'sleepAnalysis',
  config: healthTypes.sleepAnalysis,
};

export const sleepAnalysis = composeQuery(options);
export const sleepAnalysisAll = composeQueryAll(options);

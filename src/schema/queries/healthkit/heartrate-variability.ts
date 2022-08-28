import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'heartrateVariability',
  config: healthTypes.heartRateVariability,
};

export const heartrateVariability = composeQuery(options);
export const heartrateVariabilityAll = composeQueryAll(options);

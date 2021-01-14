import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'heartrateVariability',
  modelID: healthTypes.heartRateVariability.modelID,
};

export const heartrateVariability = composeQuery(options);
export const heartrateVariabilityAll = composeQueryAll(options);

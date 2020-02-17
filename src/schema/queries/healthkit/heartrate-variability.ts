import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const heartrateVariability = composeQuery({
  type: HealthKitType,
  name: 'heartrateVariability',
  modelID: healthTypes.heartRateVariability.modelID,
});

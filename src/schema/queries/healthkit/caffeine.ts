import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const caffeine = composeQuery({
  type: HealthKitType,
  name: 'caffeine',
  modelID: healthTypes.caffeine.modelID,
});

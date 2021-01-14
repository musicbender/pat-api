import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'caffeine',
  modelID: healthTypes.caffeine.modelID,
};

export const caffeine = composeQuery(options);
export const caffeineAll = composeQueryAll(options);
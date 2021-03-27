import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'caffeine',
  config: healthTypes.caffeine,
};

export const caffeine = composeQuery(options);
export const caffeineAll = composeQueryAll(options);
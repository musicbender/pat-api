import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'caffeine',
  config: healthTypes.caffeine,
};

export const caffeine = composeQuery(options);
export const caffeineAll = composeQueryAll(options);

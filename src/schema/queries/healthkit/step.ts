import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'steps',
  config: healthTypes.steps,
};

export const step = composeQuery(options);
export const stepAll = composeQueryAll(options);

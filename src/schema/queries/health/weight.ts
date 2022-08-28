import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  type: HealthType,
  name: 'weight',
  config: healthTypes.weight,
};

export const weight = composeQuery(options);
export const weightAll = composeQueryAll(options);

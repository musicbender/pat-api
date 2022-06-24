import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  type: HealthType,
  name: 'height',
  config: healthTypes.height,
};

export const height = composeQuery(options);
export const heightAll = composeQueryAll(options);

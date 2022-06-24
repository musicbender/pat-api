import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  type: HealthType,
  name: 'anxiety',
  config: healthTypes.anxiety,
};

export const anxiety = composeQuery(options);
export const anxietyAll = composeQueryAll(options);

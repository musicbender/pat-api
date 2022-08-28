import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { MigraineType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  type: MigraineType,
  name: 'migraine',
  config: healthTypes.migraine,
};

export const migraine = composeQuery(options);
export const migraineAll = composeQueryAll(options);

import { composeQuery, composeQueryAll } from '../../utils/global';
import { MigraineType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: MigraineType,
  name: 'migraine',
  config: healthTypes.migraine,
};

export const migraine = composeQuery(options);
export const migraineAll = composeQueryAll(options);

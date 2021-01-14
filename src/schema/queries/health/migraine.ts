import { composeQuery, composeQueryAll } from '../../utils/global';
import { MigraineType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: MigraineType,
  name: 'migraine',
  modelID: healthTypes.migraine.modelID,
};

export const migraine = composeQuery(options);
export const migraineAll = composeQueryAll(options);

import { composeQuery } from '../../utils/global';
import { MigraineType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const migraine = composeQuery({
  type: MigraineType,
  name: 'migraine',
  modelID: healthTypes.migraine.modelID,
});

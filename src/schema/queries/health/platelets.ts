import { composeQuery } from '../../utils/global';
import { PlateletType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const platelets = composeQuery({
  type: PlateletType,
  name: 'platelets',
  modelID: healthTypes.platelets.modelID,
});

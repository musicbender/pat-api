import { composeQuery, composeQueryAll } from '../../utils/global';
import { PlateletType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: PlateletType,
  name: 'platelets',
  config: healthTypes.platelets,
};

export const platelets = composeQuery(options);
export const plateletsAll = composeQueryAll(options);

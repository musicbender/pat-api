import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { PlateletType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  type: PlateletType,
  name: 'platelets',
  config: healthTypes.platelets,
};

export const platelets = composeQuery(options);
export const plateletsAll = composeQueryAll(options);

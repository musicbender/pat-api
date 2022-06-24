import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '@schema/utils/health';
import { MigraineInputType, MigraineInputUpdateType, MigraineType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'Migraine',
  config: healthTypes.migraine,
  type: MigraineType,
};

export const addMigraine = composeAddMutation({
  ...baseAddHealthOptions,
  ...options,
  inputType: MigraineInputType,
});

export const updateMigraine = composeUpdateMutation({
  ...baseUpdateHealthOptions,
  ...options,
  inputType: MigraineInputUpdateType,
});

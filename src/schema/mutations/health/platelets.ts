import { composeAddMutation, composeUpdateMutation } from '@schema/utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '@schema/utils/health';
import { PlateletType, PlateletInputType, PlateletInputUpdateType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  name: 'Platelets',
  config: healthTypes.platelets,
  type: PlateletType,
};

export const addPlatelets = composeAddMutation({
  ...baseAddHealthOptions,
  ...options,
  inputType: PlateletInputType,
});

export const updatePlatelets = composeUpdateMutation({
  ...baseUpdateHealthOptions,
  ...options,
  inputType: PlateletInputUpdateType,
});

import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthOptions, baseUpdateHealthOptions } from '../../utils/health';
import { PlateletType, PlateletInputType, PlateletInputUpdateType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  name: 'Platelets',
  config: healthTypes.platelets,
  type: PlateletType,
}

export const addPlatelets = composeAddMutation({ 
  ...baseAddHealthOptions, 
  ...options,
  inputType: PlateletInputType 
});

export const updatePlatelets= composeUpdateMutation({ 
  ...baseUpdateHealthOptions, 
  ...options,
  inputType: PlateletInputUpdateType
});

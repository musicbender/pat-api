import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'oxygenSaturation',
  name: 'OxygenSaturation',
}

export const addOxygenSaturation = composeHealthkitAdd(options);
export const updateOxygenSaturation = composeHealthkitUpdate(options);

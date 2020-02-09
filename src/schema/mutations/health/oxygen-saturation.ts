import { composeHealthAdd, composeHealthUpdate } from '../../utils/health';

const options = {
  type: 'oxygenSaturation',
  name: 'OxygenSaturation',
}

export const addOxygenSaturation = composeHealthAdd(options);
export const updateOxygenSaturation= composeHealthUpdate(options);

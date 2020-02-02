import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'activeEnergy',
  name: 'ActiveEnergy',
}

export const addActiveEnergy = composeHealthkitAdd(options);
export const updateActiveEnergy = composeHealthkitUpdate(options);

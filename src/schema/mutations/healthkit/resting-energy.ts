import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'restingEnergy',
  name: 'RestingEnergy',
}

export const addRestingEnergy = composeHealthkitAdd(options);
export const updateRestingEnergy = composeHealthkitUpdate(options);

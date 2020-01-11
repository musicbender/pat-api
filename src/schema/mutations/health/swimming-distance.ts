import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'swimmingDistance',
  name: 'SwimmingDistance',
}

export const addSwimmingDistance = composeHealthkitAdd(options);
export const updateSwimmingDistance = composeHealthkitUpdate(options);

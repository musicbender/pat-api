import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'height',
  name: 'Height',
}

export const addHeight = composeHealthkitAdd(options);
export const updateHeight = composeHealthkitUpdate(options);

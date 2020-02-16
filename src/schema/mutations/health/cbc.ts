import { composeHealthAdd, composeHealthUpdate } from '../../utils/health';

const options = {
  type: 'height',
  name: 'Height',
}

export const addHeight = composeHealthAdd(options);
export const updateHeight= composeHealthUpdate(options);

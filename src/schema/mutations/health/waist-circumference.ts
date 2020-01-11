import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'WaistCircumference',
  name: 'WaistCircumference',
}

export const addWaistCircumference = composeHealthkitAdd(options);
export const updateWaistCircumference = composeHealthkitUpdate(options);

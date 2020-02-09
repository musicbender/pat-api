import { composeHealthAdd, composeHealthUpdate } from '../../utils/health';

const options = {
  type: 'waistCircumference',
  name: 'WaistCircumference',
}

export const addWaistCircumference = composeHealthAdd(options);
export const updateWaistCircumference= composeHealthUpdate(options);

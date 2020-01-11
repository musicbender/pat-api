import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'systolicBloodPressure',
  name: 'SystolicBloodPressure',
}

export const addSystolicBloodPressure = composeHealthkitAdd(options);
export const updateSystolicBloodPressure = composeHealthkitUpdate(options);

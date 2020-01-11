import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'diastolicBloodPressure',
  name: 'DiastolicBloodPressure',
}

export const addDiastolicBloodPressure = composeHealthkitAdd(options);
export const updateDiastolicBloodPressure = composeHealthkitUpdate(options);

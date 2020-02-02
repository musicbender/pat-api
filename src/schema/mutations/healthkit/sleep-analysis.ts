import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'sleepAnalysis',
  name: 'SleepAnalysis',
}

export const addSleepAnalysis = composeHealthkitAdd(options);
export const updateSleepAnalysis = composeHealthkitUpdate(options);

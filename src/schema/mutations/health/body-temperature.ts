import { composeHealthAdd, composeHealthUpdate } from '../../utils/health';

const options = {
  type: 'bodyTemperature',
  name: 'BodyTemperature',
}

export const addBodyTemperature = composeHealthAdd(options);
export const updateBodyTemperature= composeHealthUpdate(options);

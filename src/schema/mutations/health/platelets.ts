import { composeHealthAdd, composeHealthUpdate } from '../../utils/health';

const options = {
  type: 'platelets',
  name: 'Platelets',
}

export const addPlatelets = composeHealthAdd(options);
export const updatePlatelets= composeHealthUpdate(options);

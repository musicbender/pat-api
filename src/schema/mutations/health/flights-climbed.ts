import { composeHealthkitAdd, composeHealthkitUpdate } from '../../utils/healthkit';

const options = {
  type: 'flights-climbed',
  name: 'FlightsClimbed',
};

export const addFlightsClimbed = composeHealthkitAdd(options);
export const updateFlightsClimbed = composeHealthkitUpdate(options);

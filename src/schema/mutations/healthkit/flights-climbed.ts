import { composeAddMutation, composeUpdateMutation } from '../../utils/global';
import { baseAddHealthkitOptions, baseUpdateHealthkitOptions } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  name: 'FlightsClimbed',
  config: healthTypes.flightsClimbed,
}

export const addFlightsClimbed = composeAddMutation({ ...baseAddHealthkitOptions, ...options });
export const updateFlightsClimbed = composeUpdateMutation({ ...baseUpdateHealthkitOptions, ...options });

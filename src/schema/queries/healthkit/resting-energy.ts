import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const restingEnergy = composeHealthkitQuery({
  type: healthTypes.restingEnergy.id,
  name: 'restingEnergy'
});

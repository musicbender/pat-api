import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const activeEnergy = composeHealthkitQuery({
  type: healthTypes.activeEnergy.id,
  name: 'activeEnergy'
});

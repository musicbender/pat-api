import { composeHealthkitQuery } from '../../utils/healthkit';
const { healthTypes } = require('../../../configs/healthkit.json');

export const sleepAnalysis = composeHealthkitQuery({
  type: healthTypes.sleepAnalysis.id,
  name: 'sleepAnalysis'
});

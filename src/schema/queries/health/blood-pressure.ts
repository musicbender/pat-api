import { composeQuery } from '../../utils/global';
import { BloodPressureType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const height = composeQuery({
  type: BloodPressureType,
  name: 'bloodPressure',
  modelID: healthTypes.bloodPressure.modelID,
});

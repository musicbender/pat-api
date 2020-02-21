import { composeQuery } from '../../utils/global';
import { BloodPressureType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const bloodPressure = composeQuery({
  type: BloodPressureType,
  name: 'bloodPressure',
  modelID: healthTypes.bloodPressure.modelID,
});

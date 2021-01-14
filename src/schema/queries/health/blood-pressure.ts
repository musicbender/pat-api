import { composeQuery, composeQueryAll } from '../../utils/global';
import { BloodPressureType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: BloodPressureType,
  name: 'bloodPressure',
  modelID: healthTypes.bloodPressure.modelID,
};

export const bloodPressure = composeQuery(options);
export const bloodPressureAll = composeQueryAll(options);

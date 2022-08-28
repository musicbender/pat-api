import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { BloodPressureType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  type: BloodPressureType,
  name: 'bloodPressure',
  config: healthTypes.bloodPressure,
};

export const bloodPressure = composeQuery(options);
export const bloodPressureAll = composeQueryAll(options);

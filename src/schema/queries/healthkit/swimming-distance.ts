import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'swimmingDistance',
  config: healthTypes.swimmingDistance,
};

export const swimmingDistance = composeQuery(options);
export const swimmingDistanceAll = composeQueryAll(options);

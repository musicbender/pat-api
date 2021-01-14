import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'swimmingDistance',
  modelID: healthTypes.swimmingDistance.modelID,
};

export const swimmingDistance = composeQuery(options);
export const swimmingDistanceAll = composeQueryAll(options);

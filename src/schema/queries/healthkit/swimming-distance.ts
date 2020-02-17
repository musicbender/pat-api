import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const swimmingDistance = composeQuery({
  type: HealthKitType,
  name: 'swimmingDistance',
  modelID: healthTypes.swimmingDistance.modelID,
});

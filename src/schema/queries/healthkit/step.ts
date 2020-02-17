import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const step = composeQuery({
  type: HealthKitType,
  name: 'steps',
  modelID: healthTypes.steps.modelID,
});

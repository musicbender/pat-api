import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const restingEnergy = composeQuery({
  type: HealthKitType,
  name: 'restingEnergy',
  modelID: healthTypes.restingEnergy.modelID,
});

import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const activeEnergy = composeQuery({
  type: HealthKitType,
  name: 'activeEnergy',
  modelID: healthTypes.activeEnergy.modelID,
});

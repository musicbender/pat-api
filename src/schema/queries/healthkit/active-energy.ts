import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'activeEnergy',
  modelID: healthTypes.activeEnergy.modelID,
};

export const activeEnergy = composeQuery(options);
export const activeEnergyAll = composeQueryAll(options);

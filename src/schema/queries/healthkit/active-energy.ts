import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'activeEnergy',
  config: healthTypes.activeEnergy,
};

export const activeEnergy = composeQuery(options);
export const activeEnergyAll = composeQueryAll(options);

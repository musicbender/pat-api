import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'activeEnergy',
  config: healthTypes.activeEnergy,
};

export const activeEnergy = composeQuery(options);
export const activeEnergyAll = composeQueryAll(options);

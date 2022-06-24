import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthKitType } from '@schema/types';
const { healthTypes } = require('@configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'restingEnergy',
  config: healthTypes.restingEnergy,
};

export const restingEnergy = composeQuery(options);
export const restingEnergyAll = composeQueryAll(options);

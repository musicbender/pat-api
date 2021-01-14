import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'restingEnergy',
  modelID: healthTypes.restingEnergy.modelID,
}

export const restingEnergy = composeQuery(options);
export const restingEnergyAll = composeQueryAll(options);

import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'steps',
  modelID: healthTypes.steps.modelID,
};

export const step = composeQuery(options);
export const stepAll = composeQueryAll(options);

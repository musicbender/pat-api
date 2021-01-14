import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

const options = {
  type: HealthKitType,
  name: 'walkingRunningDistance',
  modelID: healthTypes.walkingRunningDistance.modelID,
};

export const walkingRunningDistance = composeQuery(options);
export const walkingRunningDistanceAll = composeQueryAll(options);

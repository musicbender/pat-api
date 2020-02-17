import { composeQuery } from '../../utils/global';
import { HealthKitType } from '../../types';
const { healthTypes } = require('../../../configs/healthkit.json');

export const walkingRunningDistance = composeQuery({
  type: HealthKitType,
  name: 'walkingRunningDistance',
  modelID: healthTypes.walkingRunningDistance.modelID,
});

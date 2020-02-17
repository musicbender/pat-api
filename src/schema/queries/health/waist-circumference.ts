import { composeQuery } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

export const waistCircumference = composeQuery({
  type: HealthType,
  name: 'waistCircumference',
  modelID: healthTypes.waistCircumference.modelID,
});

import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: HealthType,
  name: 'waistCircumference',
  modelID: healthTypes.waistCircumference.modelID,
};

export const waistCircumference = composeQuery(options);
export const waistCircumferenceAll = composeQueryAll(options);

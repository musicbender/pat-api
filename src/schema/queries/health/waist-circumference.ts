import { composeQuery, composeQueryAll } from '@schema/utils/global';
import { HealthType } from '@schema/types';
const healthTypes = require('@configs/health.json');

const options = {
  type: HealthType,
  name: 'waistCircumference',
  config: healthTypes.waistCircumference,
};

export const waistCircumference = composeQuery(options);
export const waistCircumferenceAll = composeQueryAll(options);

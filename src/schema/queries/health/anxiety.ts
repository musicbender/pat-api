import { composeQuery, composeQueryAll } from '../../utils/global';
import { HealthType } from '../../types';
const healthTypes = require('../../../configs/health.json');

const options = {
  type: HealthType,
  name: 'anxiety',
  config: healthTypes.anxiety,
};

export const anxiety = composeQuery(options);
export const anxietyAll = composeQueryAll(options);

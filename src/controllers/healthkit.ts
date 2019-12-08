import { addHealthItem } from './health';
import { ExpectedError } from '../utils/errors';
const { healthTypes } = require('../configs/health.json');
import { HealthType, HealthInputType } from '../types/generated';

export const addHealthKitItems = async (input: HealthInputType[]) => {
  if (!input) throw new ExpectedError('INVALID_HEALTHKIT_INPUT');

  const allItems = input.map(async (healthItem: HealthInputType): Promise<HealthType> => {
    const { type } = healthItem;
    const config = healthTypes[Object.keys(healthTypes).find(c => healthTypes[c].healthkitID === type)];

    if (!config) new ExpectedError('INVALID_HEALTH_TYPE');
    if (config.disabled) new ExpectedError('DISABLED_HEALTH_TYPE');

    return await addHealthItem(healthItem, config);
  });

  const output = await Promise.all(allItems);

  return { response: output };
}

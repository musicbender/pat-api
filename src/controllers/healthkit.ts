import * as moment from 'moment';
import mongoose from 'mongoose';
import { addHealthItem } from './health';
import { ExpectedError } from '../utils/errors';
import { healthTypes } from '../configs/health.json';

export const addHealthKitItems = async (input: any[]) => {
  if (!input) {
    throw new ExpectedError('INVALID_HEALTHKIT_INPUT');
  }

  const allItems = input.map(async healthItem => {
    const { type } = healthItem;
    let output;

    switch(type) {
      case healthTypes.steps.healthkitID: {
        output = await addHealthItem(healthItem, healthTypes.steps);
        break;
      }
      default:
        throw new ExpectedError('INVALID_HEALTH_TYPE');
    }

    if (output) {
      return output;
    }
  });

  const output = await Promise.all(allItems);

  return {
    response: output
  };
}

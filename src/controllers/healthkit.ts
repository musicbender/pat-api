import * as moment from 'moment';
import mongoose from 'mongoose';
import { addHealthItem } from './health';
import { ExpectedError } from '../utils/errors';
import { healthTypes } from '../configs/health.json';

export const addHealthKitItems = async (input: any[]) => {
  if (!input) {
    throw new ExpectedError('INVALID_HEALTHKIT_INPUT');
  }

  console.log(`in healthkit controller. Let's loop...`);

  const allItems = input.map(async healthItem => {
    const { type } = healthItem;
    let output;

    console.log(`type: ${type}`);

    switch(type) {
      case healthTypes.steps.healthkitID: {
        console.log(`is steps type`);
        output = await addHealthItem(healthItem, healthTypes.steps);
        break;
      }
      default:
        console.log(`default`);
        output = null;
    }

    return output;
  });

  const output = await Promise.all(allItems);

  console.log(`output:`);
  console.log(`length: ${output.length}`);
  console.log(output);

  return {
    response: output
  };
}

import * as moment from 'moment';
import { FindOutterValuesTypes } from '../types';

export const isWithinInterval = (interval: moment.unitOfTime.StartOf, date: string, sampledOn: string): boolean => {
    if (!interval) return true;

    const date1 = moment(date, 'YYYY-MM-DD');
    const date2 = moment(sampledOn, 'YYYY-MM-DD');

    return moment(date1).isSame(moment(date2), 'day');
}

export const getValidSources = (validSources: string[], defaultValidSource: string): string[] => {
    if (validSources && validSources.indexOf('none') > -1) {
        return null;
    }

    if (!validSources && defaultValidSource === 'none') {
        return null;
    }

    return validSources && validSources.length > 0
        ? [ ...validSources ]
        : defaultValidSource
        ? [defaultValidSource]
        : ["*"];
}

export const getAverage = (values: number[] = []): number => {
  if (!values || values.length < 1) return null;

  let total = values.reduce((sum: number, num: number): number => sum + num, 0);
  return +(total / values.length).toFixed(0);
}

export const findOutterValues = (values: number[] = [], type: keyof typeof FindOutterValuesTypes = 'highest'): number => {
  let output = null;

  values.forEach((num) => {
    if (output === null) {
      output = num;
      return;
    } 

    if (type === 'highest' && num > output) {
      output = num;
      return;
    }

    if (type === 'lowest' && num < output) {
      output = num;
      return;
    }
  });

  return output;
}


import * as moment from 'moment';
import { addToDuration } from './date';
import { 
  FindOutterValuesTypes, 
  ValidSampleOptionsType, 
  HealthKitType, 
  HealthKitInputSampleType, 
  HealthKitInputType, 
  HealthKitConfigType 
} from '@types';

export const isWithinInterval = (interval: moment.unitOfTime.StartOf, date: string, sampledOn: string): boolean => {
    if (!interval) return true;

    const date1 = moment(date, 'YYYY-MM-DD');
    const date2 = moment(sampledOn, 'YYYY-MM-DD');

    return moment(date1).isSame(moment(date2), 'day');
}

export const getValidSources = (validSources: string[], defaultSources?: string[]): string[] => {
    return validSources && validSources.length > 0
        ? validSources
        : defaultSources && defaultSources.length > 0
        ? defaultSources
        : ["*"];
}

export const getAverage = (values: number[] = []): number => {
  if (!values || values.length < 1) return null;

  let total = values.reduce((sum: number, num: number): number => sum + num, 0);
  return +(total / values.length).toFixed(2);
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

export const isValidSample = (options: ValidSampleOptionsType): boolean => {
  const { config, input, sample, validSources } = options;
  
  // not within defined interval
  if (config.interval && !isWithinInterval(config.interval, sample.date, input.sampledOn)) {
    return false;
  }

  // no valid sources
  if (!validSources) {
    return false;
  }
  
  // not from valid source
  if (validSources.indexOf(sample.source) < 0 && validSources.indexOf('*') < 0) {
    return false;
  }

  return true;
}

export const getOutputValue = (valueType: string = 'totalSampleValue', output: HealthKitType): number => {
  switch(valueType) {
    case 'totalSampleValue':
      return output.totalSampleValue;
    case 'averageSampleValue':
      return output.averageSampleValue;
    default:
      return output.totalSampleValue || 0;
  }
}

// reduce all samples into a single output object
export const reduceSampleData = (
  samples: HealthKitInputSampleType[], 
  input: HealthKitInputType, 
  initialOutput: HealthKitType, 
  config: HealthKitConfigType
): HealthKitType => {
  let output: HealthKitType = initialOutput;
  const validSources: string[] = getValidSources(input.validSources, config.defaultValidSources);
  let valueArr: number[] = [];
  
  samples.forEach((sample: HealthKitInputSampleType) => {
    if (!isValidSample({ sample, input, config, validSources })) {
      return;
    }

    if (config.valueType === 'totalSampleValue') {
      output.totalSampleValue += Number(sample.value);
    }
   
    if (!output.sampledOn) {
      output.sampledOn = sample.date;
    }

    if (output.sources.indexOf(sample.source) === -1) {
      output.sources.push(sample.source);
    }

    if (sample.duration) {
      output.totalDuration = addToDuration(`${sample.duration}`, output.totalDuration);
    }

    valueArr = [ ...valueArr, +sample.value ];
  });

  if (output.totalSampleValue) {
    output.totalSampleValue = +output.totalSampleValue.toFixed(2);
  }

  output.averageSampleValue = getAverage(valueArr);
  output.highestSampleValue = findOutterValues(valueArr, 'highest');
  output.lowestSampleValue = findOutterValues(valueArr, 'lowest');
  output.value = getOutputValue(config.valueType, output);

  return output;
}

// aggregate health data based on config
export const aggregateHealthData = (input: HealthKitInputType, config: HealthKitConfigType): HealthKitType => {
  const sampledOn = !!input.sampledOn && moment(input.sampledOn).isValid() ? input.sampledOn : null;
  const samples: HealthKitInputSampleType[] = input.hasOwnProperty('sampleList')
    ? input.sampleList
    : input.sample
    ? [input.sample]
    : [];

  const initialOutput: HealthKitType = {
    unit: input.unit || config.defaultUnit,
    value: null,
    valueType: config.valueType || 'totalSampleValue',
    totalSampleValue: null,
    averageSampleValue: null,
    highestSampleValue: null, 
    lowestSampleValue: null,
    sampledOn,
    sources: [],
    totalDuration: '0.00:00:00',
    updatedOn: moment().toISOString()
  };

  return reduceSampleData(samples, input, initialOutput, config);
}


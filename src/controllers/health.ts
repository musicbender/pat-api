import * as moment from 'moment';
import * as uuid from 'uuid';
import { Op } from 'sequelize';
import { healthModels } from '../models';
import { ExpectedError } from '../utils/errors';
import { addToDuration } from '../utils/date';
import { isWithinInterval, getValidSources, getAverage, findOutterValues } from '../utils/sample';
import { HealthConfigType, ValidSampleOptionsType } from '../types';
import { HealthType, HealthInputType, HealthInputSampleType, HealthInputUpdateType } from '../types/generated';
import { Model } from 'sequelize-typescript';

/******* Private ********/
// check if sample is valid and should be counted
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

// determine value based on value type
export const getOutputValue = (valueType: string = 'totalSampleValue', output: HealthType): number => {
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
export const reduceSampleData = (samples: HealthInputSampleType[], input: HealthInputType, initialOutput: HealthType, config: HealthConfigType): HealthType => {
  let output: HealthType = initialOutput;
  const validSources: string[] = getValidSources(input.validSources, config.defaultValidSource);
  let valueArr: number[] = [];
  
  samples.forEach((sample: HealthInputSampleType) => {
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

  output.totalSampleValue = +output.totalSampleValue.toFixed(2);
  output.averageSampleValue = getAverage(valueArr);
  output.highestSampleValue = findOutterValues(valueArr, 'highest');
  output.lowestSampleValue = findOutterValues(valueArr, 'lowest');
  output.value = getOutputValue(config.valueType, output);

  return output;
}

// aggregate health data based on config
export const aggregateHealthData = (input: HealthInputType, config: HealthConfigType): HealthType => {
  const sampledOn = !!input.sampledOn && moment(input.sampledOn).isValid() ? input.sampledOn : null;
  const samples: HealthInputSampleType[] = input.hasOwnProperty('sampleList')
    ? input.sampleList
    : input.sample
    ? [input.sample]
    : [];

  const initialOutput: HealthType = {
    unit: input.unit,
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

/******* Public ********/
// find by id
export const findHealthById = (id: string, config: HealthConfigType): Promise<Model> => {
  return healthModels[config.modelID].findOne({ where: { id } });
}

// find by date
export const findHealthByDate = (date: Date | string, config: any): Promise<Model> => {
  const start = moment(date).startOf('day').toDate();
  const end = moment(date).endOf('day').toDate();

  return healthModels[config.modelID].findOne({ 
    where: { 
      sampledOn: { [Op.gte]: start, [Op.lte]: end } 
    } 
  });
}

// add health item
export const addHealthItem = async (input: HealthInputType, config: HealthConfigType): Promise<HealthType> => {
  // if type is not valid
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE');
  }

  // if type has been disabled in config
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  if (config.interval) {
    const dupeItem: any = await findHealthByDate(input.sampledOn, config);

    const id = dupeItem && dupeItem.id 
      ? dupeItem.id
      : dupeItem && dupeItem.dataValues 
      ? dupeItem.dataValues.id 
      : null;

    if (dupeItem) return replaceHealthItem(id, input, config);
  }

  let data: HealthType = aggregateHealthData(input, config);
  
  data.id = uuid();
  data.createdOn = moment().toISOString();

  // do not create row if there is no value or type is disabled
  if (data.value === null) {
    return null;
  };

  const HealthItem = healthModels[config.modelID];

  try {
    const res: any = await HealthItem.create(data);
    return res.dataValues;
  } catch (err) {
    throw new ExpectedError('ADD_HEALTH_ERROR');
  }
}

// replace health item
export const replaceHealthItem = async (id: string, input: HealthInputType, config: HealthConfigType): Promise<Model> => {
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE'); 
  }

  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  const data: HealthType = aggregateHealthData(input, config);
  const HealthItem = healthModels[config.modelID];

  try {
    const [rows, [ updatedItem ]]: any = await HealthItem.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('REPLACE_HEALTH_ERROR');
  }
}

// update health item
export const updateHealthItem = async (id: string, input: HealthInputUpdateType, config: HealthConfigType): Promise<Model> => {
  if (config.disabled) {
    throw new ExpectedError('DISABLED_HEALTH_TYPE');
  }

  const HealthItem = healthModels[config.modelID];
  let data = { ...input, updatedOn: moment().toISOString() }

  try {
    const [rows, [ updatedItem ]]: any = await HealthItem.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('UPDATE_HEALTH_ERROR');
  }
}

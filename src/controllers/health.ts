import * as moment from 'moment';
import * as uuid from 'uuid';
import { Op } from 'sequelize';
import { healthModels } from '../models';
import { ExpectedError } from '../utils/errors';
import { addToDuration } from '../utils/date';
import { isWithinInterval, getValidSources } from '../utils/sample';
import { HealthConfigType } from '../types';
import { HealthType, HealthInputType, HealthInputSampleType } from '../types/generated';
import { Model } from 'sequelize-typescript';

export const isValidSample = (sample: HealthInputSampleType, input: HealthInputType, config: HealthConfigType): boolean => {
  // not within defined interval
  if (config.interval && !isWithinInterval(config.interval, sample.date, input.sampledOn)) {
    return false;
  }

  // not from valid source
  if (input.validSources || config.defaultValidSource) {
    const validSources: string[] = getValidSources(input.validSources, config.defaultValidSource);

    if (validSources && validSources.indexOf(sample.source) < 0) {
      return false;
    }
  }

  return true;
}

export const reduceSampleData = (samples: HealthInputSampleType[], input: HealthInputType, healthData: HealthType, config: HealthConfigType): HealthType => {
  let output: HealthType = healthData;
  
  samples.forEach((sample: HealthInputSampleType) => {
    if (!isValidSample(sample, input, config)) {
      return;
    }

    output.value += Number(sample.value);

    if (!output.sampledOn) {
      output.sampledOn = sample.date;
    }

    if (output.sources.indexOf(sample.source) === -1) {
      output.sources.push(sample.source);
    }

    if (sample.duration) {
      output.totalDuration = addToDuration(`${sample.duration}`, output.totalDuration);
    }
  });

  return output;
}

export const aggregateHealthData = (input: HealthInputType, config: HealthConfigType): HealthType => {
  const sampledOn = !!input.sampledOn && moment(input.sampledOn).isValid() ? input.sampledOn : null;
  const samples: HealthInputSampleType[] = input.hasOwnProperty('sampleList')
    ? input.sampleList
    : input.sample
    ? [input.sample]
    : [];

  let output: HealthType = {
    id: uuid(),
    unit: input.unit,
    value: 0,
    sampledOn,
    sources: [],
    totalDuration: '0.00:00:00'
  };

  return reduceSampleData(samples, input, output, config);
}

export const findHealthById = (id: string, config: HealthConfigType): Promise<Model> => {
  return healthModels[config.modelID].findOne({ where: { id } });
}

export const findHealthByDate = (date: Date, config: any): Promise<Model> => {
  const start = moment(date).startOf('day').toDate();
  const end = moment(date).endOf('day').toDate();
  return healthModels[config.modelID].findOne({ 
    where: { 
      sampledOn: { [Op.gte]: start, [Op.lte]: end } 
    } 
  });
}

export const addHealthItem = async (input: HealthInputType, config: HealthConfigType): Promise<HealthType> => {
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE');
  }

  const data: HealthType = aggregateHealthData(input, config);
  const HealthItem = healthModels[config.modelID];

  try {
    const res: any = await HealthItem.create(data);
    return res.dataValues;
  } catch (err) {
    console.error(err);
    throw new ExpectedError('ADD_HEALTH_ERROR');
  }
}

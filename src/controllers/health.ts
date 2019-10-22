import * as moment from 'moment';
import * as uuid from 'uuid';
import { Op } from 'sequelize';
import { healthModels } from '../models';
import { ExpectedError } from '../utils/errors';
import { addToDuration } from '../utils/date';
import { isWithinInterval } from '../utils/sample';
import { HealthConfigType } from '../types';
import { HealthType, HealthInputType, HealthInputSampleType } from '../types/generated';

export const reduceSampleData = (samples: HealthInputSampleType[], input: HealthType, config: HealthConfigType): HealthType => {
  let output: HealthType = input;

  samples.forEach((sample: HealthInputSampleType) => {
    if (config.interval && !isWithinInterval(config.interval, sample.date, output.sampledOn)) {
      return;
    }

    const value = Number(sample.value);
    output.value += value;

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
  const sampledOn = !!input.sampledOn && moment.isDate(input.sampledOn) ? input.sampledOn : null;
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

  return reduceSampleData(samples, output, config);
}

export const findHealthById = (id: string, config: HealthConfigType): Promise<HealthType> => {
  return healthModels[config.modelID].findOne({ where: { id } });
}

export const findHealthByDate = (date: Date, config: any): Promise<HealthType> => {
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

  const data = aggregateHealthData(input, config);
  const HealthItem = healthModels[config.modelID];

  try {
    const res: any = await HealthItem.create(data);
    return res.dataValues;
  } catch (err) {
    console.error(err);
    throw new ExpectedError('ADD_HEALTH_ERROR');
  }
}

import * as moment from 'moment';
import * as uuid from 'uuid';
import { Op } from 'sequelize';
import { healthModels } from '../models';
import { ExpectedError } from '../utils/errors';
import { addToDuration } from '../utils/date';

type SampleType = {
  date?: Date,
  source?: string
  value?: number,
  duration?: number,
  unit?: string
}

export const reduceSampleData = (samples: SampleType[], input: any, config: any): any => {
  let output = input;

  samples.forEach((sample: SampleType) => {
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

export const aggregateHealthData = (input: any, config: any): any => {
  const sampledOn = !!input.date && moment.isDate(input.date) ? input.date : null;
  const samples = input.hasOwnProperty('sampleList')
    ? input.sampleList
    : input.sample
    ? [input.sample]
    : [];

  let output = {
    unit: input.unit,
    value: 0,
    sampledOn,
    sources: [],
    totalDuration: '0.00:00:00'
  };

  return reduceSampleData(samples, output, config);
}

export const findHealthById = (id: string, config: any): any => {
  return healthModels[config.modelID].findOne({ where: { id } });
}

export const findHealthByDate = (date: Date, config: any): any => {
  const start = moment(date).startOf('day').toDate();
  const end = moment(date).endOf('day').toDate();
  return healthModels[config.modelID].findOne({ 
    where: { 
      sampledOn: { [Op.gte]: start, [Op.lte]: end } 
    } 
  });
}

export const addHealthItem = async (input: any, config: any): Promise<any> => {
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE');
  }

  const data = aggregateHealthData(input, config);
  const HealthItem = healthModels[config.modelID];

  console.log('input:');
  console.log(data);

  try {
    const res: any = await HealthItem.create(data);
    return res.dataValues;
  } catch (err) {
    console.log(err);
    throw new ExpectedError('ADD_HEALTH_ERROR');
  }
}

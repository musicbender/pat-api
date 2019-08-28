import * as moment from 'moment';
import * as uuid from 'uuid';
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

export const reduceSampleData = (samples: SampleType[], input: any) => {
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

export const aggregateHealthData = (input) => {
  const { unit } = input;
  const createdOn = !!input.date && moment.isDate(input.date) ? input.date : Date.now();
  const samples = input.hasOwnProperty('sampleList')
    ? input.sampleList
    : input.sample
    ? [input.sample]
    : [];

  let output = {
    id: uuid(),
    unit,
    value: 0,
    createdOn,
    sampledOn: null,
    sources: [],
    totalDuration: '0.00:00:00'
  };

  return reduceSampleData(samples, output);
}

export const findHealthById = (id: string, config: any): any => {
//   return mongoose.model(config.modelID).findOne({ id });
}

export const findHealthByDate = (date: Date, config: any): any => {
  const start = moment(date).startOf('day');
  const end = moment(date).endOf('day');
//   return mongoose.model(config.modelID).findOne({ date: { $gte: start, $lte: end }})
}

export const addHealthItem = async (input: any, config: any): Promise<any> => {
  if (!input.type || input.type !== config.healthkitID) {
    throw new ExpectedError('INVALID_HEALTH_TYPE');
  }

  const data = aggregateHealthData(input);
  const HealthItem = healthModels[config.modelID];

  try {
    const res: any = await HealthItem.create(data);
    console.log(res.dataValues)
    return res.dataValues;
    
  } catch (err) {
    console.error(err);
    throw new ExpectedError('ADD_HEALTH_ERROR');
  }
}

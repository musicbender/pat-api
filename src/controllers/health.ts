import * as moment from 'moment';
import mongoose from 'mongoose';
import { ExpectedError } from '../utils/errors';

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
    unit,
    value: 0,
    createdOn,
    sampledOn: null,
    sources: []
  };

  return reduceSampleData(samples, output);
}

export const findHealthById = (_id: string, type: string) => {
  return mongoose.model(type).findOne({ _id });
}

export const findHealthByDate = (date: Date, type: string) => {
  const start = moment(date).startOf('day');
  const end = moment(date).endOf('day');
  return mongoose.model(type).findOne({ date: { $gte: start, $lte: end }})
}

export const addHealthItem = async (input: any, type: string) => {
  if (!input.type || input.type !== type) {
    throw new ExpectedError('INVALID_HEALTH_TYPE');
  }

  const data = aggregateHealthData(input);
  const HealthItem = mongoose.model(type)
  const newHealthItem = new HealthItem(data);

  try {
    const savedHealthItem = await newHealthItem.save();
    return savedHealthItem;
  } catch (err) {
    throw new ExpectedError('ADD_HEALTH_ERROR');
  }
}

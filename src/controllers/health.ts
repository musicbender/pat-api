import * as moment from 'moment';
import mongoose from 'mongoose';
import { Step } from '../models/health';
import * as healthModel from '../models/health';

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

    if (!output.sampleDate) {
      output.sampledOn = sample.date;
    }

    if (output.sources.indexOf(sample.source) === -1) {
      output.sources.push(sample.source);
    }
  });

  return output;
}

export const aggregateHealthData = (input) => {
  const { unit, date } = input;
  const createdOn = !!date && moment.isDate(date) ? date : Date.now();
  const samples = input.hasOwnProperty('sampleList')
    ? input.sampleList
    : input.sample
    ? [input.sample]
    : [];

  let output = {
    unit,
    createdOn,
    value: 0,
    sampleDate: null,
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

export const addHealthItem = (input: any, type: string) => {
  return new Promise((resolve, reject) => {

    console.log(`input in controller:`);
    console.log(input);

    if (!input.type || input.type !== type) {
      throw new Error('INVALID_HEALTH_TYPE');
    }

    const data = aggregateHealthData(input);
    const HealthItem = mongoose.model(type)
    const newHealthItem = new HealthItem(data);

    newHealthItem.save((err, result) => {
      if (err) reject('ADD_HEALTH_ERROR');
      resolve(result);
    })
  });
}

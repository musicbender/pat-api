import * as moment from 'moment';
import * as uuid from 'uuid'
import Step from '../models/step';

export const aggregateStepData = ({ stepData, date }) => {
  const { unit, samples } = stepData[0].data;
  let count = 0;
  let output = {
    _id: uuid(),
    unit,
    createdOn: date || Date.now(),
    stepCount: 0,
    sampleDate: null,
    sources: []
  };

  samples.forEach((sample) => {
    output.sources += sample.value;

    if (!output.sampleDate) {
      output.sampleDate = sample.date
    }

    if (output.sources.indexOf(sample.source) == -1) {
      output.sources.push(sample.source);
    }
  });

  return output;
}

export const findStepById = (_id: String) => {
  return Step.findOne({ _id });
}

export const findStepByDate = (date: Date) => {
  const start = moment(date).startOf('day');
  const end = moment(date).endOf('day');
  return Step.findOne({ date: { $gte: start, $lte: end }})
}

export const addAStep = (input: any) => {
  return new Promise((resolve, reject) => {
    const data = aggregateStepData(input);
    const newStep = new Step(data);
    newStep.save((err, result) => {
      if (err) reject('ADD_STEP_ERROR')
      resolve(result);
    })
  });
}

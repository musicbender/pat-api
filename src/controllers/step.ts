import moment from 'moment';
import Step from '../models/step';

//--//--//--// PRIVATE //--//--//--//
const aggrigateStepData = (stepData) => {
  return;
}

//--//--//--// PUBLIC //--//--//--//
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
    const newStep = new Step(input);
    newStep.save((err, result) => {
      if (err) reject('ADD_STEP_ERROR')
      resolve(result);
    })
  });
}

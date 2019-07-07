import moment from 'moment';
import Step from '../models/step';

export const findStepById = (_id: String) => {
  return Step.findOne({ _id });
}

export const findStepByDate = (date: Date) => {
  const start = moment(date).startOf('day');
  const end = moment(date).endOf('day');
  return Step.findOne({ date: { $gte: start, $lte: end }})
}

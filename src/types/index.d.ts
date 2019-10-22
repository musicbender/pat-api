import * as moment from 'moment';

export enum HealthInterval {
  'days',
  'month',
  'year',
  false
}

export type SampleType = {
  date?: Date,
  source?: string
  value?: number,
  duration?: number,
  unit?: string
}

export type HealthConfigType = {
  id: string,
  healthkitID?: string,
  modelID: string,
  interval?: moment.unitOfTime.StartOf
}
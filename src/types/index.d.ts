import * as moment from 'moment';

// enums
export enum HealthInterval {
  'days',
  'month',
  'year',
  false
}

export enum SourcesEnum {
  "Pat's iPhone",
  "Pat's Apple Watch"
}

// types
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

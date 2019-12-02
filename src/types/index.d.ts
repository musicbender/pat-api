import * as moment from 'moment';
import { HealthType, HealthInputType, HealthInputSampleType } from '../types/generated';

// enums
export enum HealthInterval {
  'days',
  'month',
  'year',
  false
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
  interval?: moment.unitOfTime.StartOf,
  defaultValidSource?: string,
  valueType: string,
}

export type ValidSampleOptionsType = {
  sample: HealthInputSampleType, 
  input: HealthInputType, 
  config: HealthConfigType,
  validSources: string[]
}

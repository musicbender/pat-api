import * as moment from 'moment';
import { HealthKitInputType, HealthKitInputSampleType, UnitType } from '../types/generated';

// enums
export enum FindOutterValuesTypes {
  'highest',
  'lowest'
}

// types
export type ValidSources = "*" | "pat-iphone" | "pat-apple-watch" | "Shortcuts" | "Blood Oxygen";

export type SampleType = {
  date?: Date,
  source?: string
  value?: number,
  duration?: number,
  unit?: string
}

export type HealthKitConfigType = {
  id: string,
  healthkitID?: string,
  modelID: string,
  interval?: moment.unitOfTime.StartOf,
  defaultValidSources?: ValidSources[],
  valueType: string,
  defaultUnit: UnitType,
  disabled?: boolean
}

export type ValidSampleOptionsType = {
  sample: HealthKitInputSampleType, 
  input: HealthKitInputType, 
  config: HealthKitConfigType,
  validSources: string[]
}

export type HealthKitQueryOptions = {
  type: string, 
  name?: string,
  description?: string,
}

export type HealthKitAddOptions = {
  type: string, 
  name: string,
  description?: string
}

export type HealthKitUpdateOptions = {
  type: string, 
  name: string,
  description?: string
}
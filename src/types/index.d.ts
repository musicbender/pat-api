import * as moment from 'moment';
import { HealthKitType, HealthKitInputType, HealthKitInputSampleType, UnitType } from '../types/generated';

// generated types
export * from './generated';

// enums
export enum HealthInterval {
  'days',
  'month',
  'year',
  false
}

export enum FindOutterValuesTypes {
  'highest',
  'lowest'
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
  defaultUnit: UnitType,
  disabled?: boolean
}

export type ValidSampleOptionsType = {
  sample: HealthKitInputSampleType, 
  input: HealthKitInputType, 
  config: HealthConfigType,
  validSources: string[]
}

export type DatabaseConfigOptions = {
  externalAccess?: boolean
}

export type DbSSLConfigType = {
  key?: string,
  cert?: string,
  ca?: string
}

export type DbSSLType = {
  key?: Buffer,
  cert?: Buffer,
  ca?: Buffer
}

export type TestItem = {
  assert: any,
  expected: any,
  description?: string
}

import * as moment from 'moment';
import { UnitType } from '../types/generated';

// enums
export enum HealthInterval {
  'days',
  'month',
  'year',
  false
}

// types
export type HealthConfigType = {
  id: string,
  modelID: string,
  unit: UnitType,
  interval?: moment.unitOfTime.StartOf,
  disabled?: boolean
}

export type HealthQueryOptions = {
  type: string, 
  name?: string,
  description?: string,
}

export type HealthAddOptions = {
  type: string, 
  name: string,
  description?: string
}

export type HealthUpdateOptions = {
  type: string, 
  name: string,
  description?: string
}
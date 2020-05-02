import * as moment from 'moment';
import { 
  UnitType,
  HealthType,
  HealthInputType,
  HealthInputUpdateType,
  BloodPressureType,
  BloodPressureInputType,
  BloodPressureInputUpdateType,
 } from '.';
import { DateInterval } from './global';

// types
export type HealthConfigType = {
  id: string,
  modelID: string,
  unit: UnitType,
  interval?: DateInterval,
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

export type HealthTypes = HealthType | BloodPressureType;

export type HealthInputTypes = HealthInputType | BloodPressureInputType;

export type HealthInputUpdateTypes = HealthInputUpdateType | BloodPressureInputUpdateType;
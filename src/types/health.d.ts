import { DateInterval } from './global';
import { 
  UnitType,
  HealthType,
  HealthInputType,
  HealthInputUpdateType,
  BloodPressureType,
  BloodPressureInputType,
  BloodPressureInputUpdateType,
  MigraineType,
  MigraineInputType,
  MigraineInputUpdateType,
 } from '.';

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

export type HealthTypes = HealthType | BloodPressureType | MigraineType;

export type HealthInputTypes = HealthInputType | BloodPressureInputType | MigraineInputType;

export type HealthInputUpdateTypes = HealthInputUpdateType | BloodPressureInputUpdateType | MigraineInputUpdateType;
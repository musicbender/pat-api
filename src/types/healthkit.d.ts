import * as moment from 'moment';
import { HealthKitType, HealthKitInputType, HealthKitInputSampleType, UnitType } from './generated';
import { HealthTypes } from './health';

// enums
export enum FindOutterValuesTypes {
  'highest',
  'lowest',
}

// types
export type SampleType = {
  date?: Date;
  source?: string;
  value?: number;
  duration?: number;
  unit?: string;
};

export type HealthKitConfigType = {
  id: string;
  healthkitID?: string;
  modelID: string;
  interval?: moment.unitOfTime.StartOf;
  defaultValidSources?: string[];
  valueType: string;
  defaultUnit: UnitType;
  disabled?: boolean;
};

export type ValidSampleOptionsType = {
  sample: HealthKitInputSampleType;
  input: HealthKitInputType;
  config: HealthKitConfigType;
  validSources: string[];
};

export type HealthKitQueryOptions = {
  type: string;
  name?: string;
  description?: string;
};

export type HealthKitAddOptions = {
  type: string;
  name: string;
  description?: string;
};

export type HealthKitUpdateOptions = {
  type: string;
  name: string;
  description?: string;
};

export type HealthKitItemType = {
  healthkitType: string;
};

export type HealthKitTypeWithItemType = HealthKitType & HealthKitItemType;

export type HealthkitInputAndConfig = {
  input: HealthKitInputType;
  config: HealthKitConfigType;
};

export type HealthKitCombined = HealthTypes | HealthKitType;

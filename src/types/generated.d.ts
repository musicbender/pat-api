import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};









export type AddActiveEnergyError = {
  __typename?: 'addActiveEnergyError',
  errorCode?: Maybe<AddActiveEnergyErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddActiveEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addActiveEnergy */
export type AddActiveEnergyResponse = {
  __typename?: 'addActiveEnergyResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addActiveEnergy */
export type AddActiveEnergyUnion = AddActiveEnergyResponse | AddActiveEnergyError;

export type AddCaffeineError = {
  __typename?: 'addCaffeineError',
  errorCode?: Maybe<AddCaffeineErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddCaffeineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addCaffeine */
export type AddCaffeineResponse = {
  __typename?: 'addCaffeineResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addCaffeine */
export type AddCaffeineUnion = AddCaffeineResponse | AddCaffeineError;

export type AddFlightsClimbedError = {
  __typename?: 'addFlightsClimbedError',
  errorCode?: Maybe<AddFlightsClimbedErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddFlightsClimbedErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addFlightsClimbed */
export type AddFlightsClimbedResponse = {
  __typename?: 'addFlightsClimbedResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addFlightsClimbed */
export type AddFlightsClimbedUnion = AddFlightsClimbedResponse | AddFlightsClimbedError;

export type AddHealthKitError = {
  __typename?: 'addHealthKitError',
  errorCode?: Maybe<AddHealthKitErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddHealthKitErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addHealthKit */
export type AddHealthKitResponse = {
  __typename?: 'addHealthKitResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for addHealthKit */
export type AddHealthKitUnion = AddHealthKitResponse | AddHealthKitError;

export type AddHeartRateError = {
  __typename?: 'addHeartRateError',
  errorCode?: Maybe<AddHeartRateErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addHeartRate */
export type AddHeartRateResponse = {
  __typename?: 'addHeartRateResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addHeartRate */
export type AddHeartRateUnion = AddHeartRateResponse | AddHeartRateError;

export type AddHeartRateVariabilityError = {
  __typename?: 'addHeartRateVariabilityError',
  errorCode?: Maybe<AddHeartRateVariabilityErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddHeartRateVariabilityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addHeartRateVariability */
export type AddHeartRateVariabilityResponse = {
  __typename?: 'addHeartRateVariabilityResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addHeartRateVariability */
export type AddHeartRateVariabilityUnion = AddHeartRateVariabilityResponse | AddHeartRateVariabilityError;

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type AddRestingEnergyError = {
  __typename?: 'addRestingEnergyError',
  errorCode?: Maybe<AddRestingEnergyErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddRestingEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addRestingEnergy */
export type AddRestingEnergyResponse = {
  __typename?: 'addRestingEnergyResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addRestingEnergy */
export type AddRestingEnergyUnion = AddRestingEnergyResponse | AddRestingEnergyError;

export type AddRestingHeartRateError = {
  __typename?: 'addRestingHeartRateError',
  errorCode?: Maybe<AddRestingHeartRateErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddRestingHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addRestingHeartRate */
export type AddRestingHeartRateResponse = {
  __typename?: 'addRestingHeartRateResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addRestingHeartRate */
export type AddRestingHeartRateUnion = AddRestingHeartRateResponse | AddRestingHeartRateError;

export type AddSleepAnalysisError = {
  __typename?: 'addSleepAnalysisError',
  errorCode?: Maybe<AddSleepAnalysisErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddSleepAnalysisErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addSleepAnalysis */
export type AddSleepAnalysisResponse = {
  __typename?: 'addSleepAnalysisResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addSleepAnalysis */
export type AddSleepAnalysisUnion = AddSleepAnalysisResponse | AddSleepAnalysisError;

export type AddStepError = {
  __typename?: 'addStepError',
  errorCode?: Maybe<AddStepErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddStepErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addStep */
export type AddStepResponse = {
  __typename?: 'addStepResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addStep */
export type AddStepUnion = AddStepResponse | AddStepError;

export type AddSwimmingDistanceError = {
  __typename?: 'addSwimmingDistanceError',
  errorCode?: Maybe<AddSwimmingDistanceErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddSwimmingDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addSwimmingDistance */
export type AddSwimmingDistanceResponse = {
  __typename?: 'addSwimmingDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addSwimmingDistance */
export type AddSwimmingDistanceUnion = AddSwimmingDistanceResponse | AddSwimmingDistanceError;

export type AddWalkingHeartRateAverageError = {
  __typename?: 'addWalkingHeartRateAverageError',
  errorCode?: Maybe<AddWalkingHeartRateAverageErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddWalkingHeartRateAverageErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addWalkingHeartRateAverage */
export type AddWalkingHeartRateAverageResponse = {
  __typename?: 'addWalkingHeartRateAverageResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addWalkingHeartRateAverage */
export type AddWalkingHeartRateAverageUnion = AddWalkingHeartRateAverageResponse | AddWalkingHeartRateAverageError;

export type AddWalkingRunningDistanceError = {
  __typename?: 'addWalkingRunningDistanceError',
  errorCode?: Maybe<AddWalkingRunningDistanceErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddWalkingRunningDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for addWalkingRunningDistance */
export type AddWalkingRunningDistanceResponse = {
  __typename?: 'addWalkingRunningDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addWalkingRunningDistance */
export type AddWalkingRunningDistanceUnion = AddWalkingRunningDistanceResponse | AddWalkingRunningDistanceError;


/** Sample item in health data */
export type HealthKitInputSampleType = {
  date?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  value: Scalars['String'],
  duration?: Maybe<Scalars['String']>,
};

/** Health data input */
export type HealthKitInputType = {
  type: Scalars['String'],
  unit?: Maybe<UnitType>,
  sampleList?: Maybe<Array<Maybe<HealthKitInputSampleType>>>,
  sample?: Maybe<HealthKitInputSampleType>,
  sampledOn?: Maybe<Scalars['String']>,
  validSources?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** Health data input for updating */
export type HealthKitInputUpdateType = {
  value?: Maybe<Scalars['Float']>,
  valueType?: Maybe<Scalars['String']>,
  totalSampleValue?: Maybe<Scalars['Float']>,
  averageSampleValue?: Maybe<Scalars['Float']>,
  highestSampleValue?: Maybe<Scalars['Float']>,
  lowestSampleValue?: Maybe<Scalars['Float']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  sources?: Maybe<Array<Maybe<Scalars['String']>>>,
  unit?: Maybe<UnitType>,
  totalDuration?: Maybe<Scalars['String']>,
};

/** Health data */
export type HealthKitType = {
  __typename?: 'HealthKitType',
  id?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Float']>,
  valueType?: Maybe<Scalars['String']>,
  totalSampleValue?: Maybe<Scalars['Float']>,
  averageSampleValue?: Maybe<Scalars['Float']>,
  highestSampleValue?: Maybe<Scalars['Float']>,
  lowestSampleValue?: Maybe<Scalars['Float']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  sources?: Maybe<Array<Maybe<Scalars['String']>>>,
  unit?: Maybe<UnitType>,
  totalDuration?: Maybe<Scalars['String']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  /** Add a Step node */
  addStep?: Maybe<AddStepUnion>,
  /** Update a Step node */
  updateStep?: Maybe<UpdateStepUnion>,
  /** Add a FlightsClimbed node */
  addFlightsClimbed?: Maybe<AddFlightsClimbedUnion>,
  /** Update a FlightsClimbed node */
  updateFlightsClimbed?: Maybe<UpdateFlightsClimbedUnion>,
  /** Add a HeartRate node */
  addHeartRate?: Maybe<AddHeartRateUnion>,
  /** Update a HeartRate node */
  updateHeartRate?: Maybe<UpdateHeartRateUnion>,
  /** Add a HeartRateVariability node */
  addHeartRateVariability?: Maybe<AddHeartRateVariabilityUnion>,
  /** Update a HeartRateVariability node */
  updateHeartRateVariability?: Maybe<UpdateHeartRateVariabilityUnion>,
  /** Add multiple HealthKit data types */
  addHealthKit?: Maybe<AddHealthKitUnion>,
  /** Add a ActiveEnergy node */
  addActiveEnergy?: Maybe<AddActiveEnergyUnion>,
  /** Update a ActiveEnergy node */
  updateActiveEnergy?: Maybe<UpdateActiveEnergyUnion>,
  /** Add a Caffeine node */
  addCaffeine?: Maybe<AddCaffeineUnion>,
  /** Update a Caffeine node */
  updateCaffeine?: Maybe<UpdateCaffeineUnion>,
  /** Add a RestingEnergy node */
  addRestingEnergy?: Maybe<AddRestingEnergyUnion>,
  /** Update a RestingEnergy node */
  updateRestingEnergy?: Maybe<UpdateRestingEnergyUnion>,
  /** Add a RestingHeartRate node */
  addRestingHeartRate?: Maybe<AddRestingHeartRateUnion>,
  /** Update a RestingHeartRate node */
  updateRestingHeartRate?: Maybe<UpdateRestingHeartRateUnion>,
  /** Add a SleepAnalysis node */
  addSleepAnalysis?: Maybe<AddSleepAnalysisUnion>,
  /** Update a SleepAnalysis node */
  updateSleepAnalysis?: Maybe<UpdateSleepAnalysisUnion>,
  /** Add a SwimmingDistance node */
  addSwimmingDistance?: Maybe<AddSwimmingDistanceUnion>,
  /** Update a SwimmingDistance node */
  updateSwimmingDistance?: Maybe<UpdateSwimmingDistanceUnion>,
  /** Add a WalkingHeartRateAverage node */
  addWalkingHeartRateAverage?: Maybe<AddWalkingHeartRateAverageUnion>,
  /** Update a WalkingHeartRateAverage node */
  updateWalkingHeartRateAverage?: Maybe<UpdateWalkingHeartRateAverageUnion>,
  /** Add a WalkingRunningDistance node */
  addWalkingRunningDistance?: Maybe<AddWalkingRunningDistanceUnion>,
  /** Update a WalkingRunningDistance node */
  updateWalkingRunningDistance?: Maybe<UpdateWalkingRunningDistanceUnion>,
};


export type MutationAddStepArgs = {
  input: HealthKitInputType
};


export type MutationUpdateStepArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddFlightsClimbedArgs = {
  input: HealthKitInputType
};


export type MutationUpdateFlightsClimbedArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddHeartRateArgs = {
  input: HealthKitInputType
};


export type MutationUpdateHeartRateArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddHeartRateVariabilityArgs = {
  input: HealthKitInputType
};


export type MutationUpdateHeartRateVariabilityArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddHealthKitArgs = {
  input?: Maybe<Array<Maybe<HealthKitInputType>>>
};


export type MutationAddActiveEnergyArgs = {
  input: HealthKitInputType
};


export type MutationUpdateActiveEnergyArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddCaffeineArgs = {
  input: HealthKitInputType
};


export type MutationUpdateCaffeineArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddRestingEnergyArgs = {
  input: HealthKitInputType
};


export type MutationUpdateRestingEnergyArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddRestingHeartRateArgs = {
  input: HealthKitInputType
};


export type MutationUpdateRestingHeartRateArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddSleepAnalysisArgs = {
  input: HealthKitInputType
};


export type MutationUpdateSleepAnalysisArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddSwimmingDistanceArgs = {
  input: HealthKitInputType
};


export type MutationUpdateSwimmingDistanceArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddWalkingHeartRateAverageArgs = {
  input: HealthKitInputType
};


export type MutationUpdateWalkingHeartRateAverageArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddWalkingRunningDistanceArgs = {
  input: HealthKitInputType
};


export type MutationUpdateWalkingRunningDistanceArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};

export type RootQueryType = {
  __typename?: 'RootQueryType',
  /** Get a single step count by either _id or date, _id taking priority */
  step?: Maybe<HealthKitType>,
  /** Get a single flights climbed count by either _id or date, _id taking priority */
  flightsClimbed?: Maybe<HealthKitType>,
  /** Get a single heartrate average by either _id or date, _id taking priority */
  heartrate?: Maybe<HealthKitType>,
  /** Get a single heartrate-variability average by either _id or date, _id taking priority */
  heartrateVariability?: Maybe<HealthKitType>,
  /** Get a single active energy count by either _id or date, _id taking priority */
  activeEnergy?: Maybe<HealthKitType>,
  /** Get a single caffeine count by either _id or date, _id taking priority */
  caffeine?: Maybe<HealthKitType>,
  /** Get a single resting energy count by either _id or date, _id taking priority */
  restingEnergy?: Maybe<HealthKitType>,
  /** Get a single resting-heartrate count by either _id or date, _id taking priority */
  restingHeartrate?: Maybe<HealthKitType>,
  /** Get a single sleep-analysis count by either _id or date, _id taking priority */
  sleepAnalysis?: Maybe<HealthKitType>,
  /** Get a single swimming-distance count by either _id or date, _id taking priority */
  swimmingDistance?: Maybe<HealthKitType>,
  /** Get a single walking heartrate average by either _id or date, _id taking priority */
  walkingHeartrateAverage?: Maybe<HealthKitType>,
  /** Get a single walking-running-distance count by either _id or date, _id taking priority */
  walkingRunningDistance?: Maybe<HealthKitType>,
};


export type RootQueryTypeStepArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeFlightsClimbedArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeHeartrateArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeHeartrateVariabilityArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeActiveEnergyArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeCaffeineArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeRestingEnergyArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeRestingHeartrateArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeSleepAnalysisArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeSwimmingDistanceArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeWalkingHeartrateAverageArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeWalkingRunningDistanceArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};

/** Acceptable units of measurment */
export enum UnitType {
  Cm = 'cm',
  Kg = 'kg',
  Lbs = 'lbs',
  Count = 'count',
  Km = 'km',
  Ft = 'ft',
  Mi = 'mi',
  Kcal = 'kcal',
  Percent = 'percent',
  CountMin = 'count_min',
  DegC = 'degC',
  MmHg = 'mmHg',
  MgDL = 'mg_dL',
  McS = 'mcS',
  L = 'L',
  LMin = 'L_min',
  Ml = 'ml',
  Mcg = 'mcg',
  G = 'g',
  Mg = 'mg',
  Ms = 'ms',
  Bpm = 'bpm',
  Min = 'min',
  Hrs = 'hrs'
}

export type UpdateActiveEnergyError = {
  __typename?: 'updateActiveEnergyError',
  errorCode?: Maybe<UpdateActiveEnergyErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateActiveEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateActiveEnergy */
export type UpdateActiveEnergyResponse = {
  __typename?: 'updateActiveEnergyResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateActiveEnergy */
export type UpdateActiveEnergyUnion = UpdateActiveEnergyResponse | UpdateActiveEnergyError;

export type UpdateCaffeineError = {
  __typename?: 'updateCaffeineError',
  errorCode?: Maybe<UpdateCaffeineErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateCaffeineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateCaffeine */
export type UpdateCaffeineResponse = {
  __typename?: 'updateCaffeineResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateCaffeine */
export type UpdateCaffeineUnion = UpdateCaffeineResponse | UpdateCaffeineError;

export type UpdateFlightsClimbedError = {
  __typename?: 'updateFlightsClimbedError',
  errorCode?: Maybe<UpdateFlightsClimbedErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateFlightsClimbedErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateFlightsClimbed */
export type UpdateFlightsClimbedResponse = {
  __typename?: 'updateFlightsClimbedResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateFlightsClimbed */
export type UpdateFlightsClimbedUnion = UpdateFlightsClimbedResponse | UpdateFlightsClimbedError;

export type UpdateHeartRateError = {
  __typename?: 'updateHeartRateError',
  errorCode?: Maybe<UpdateHeartRateErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateHeartRate */
export type UpdateHeartRateResponse = {
  __typename?: 'updateHeartRateResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateHeartRate */
export type UpdateHeartRateUnion = UpdateHeartRateResponse | UpdateHeartRateError;

export type UpdateHeartRateVariabilityError = {
  __typename?: 'updateHeartRateVariabilityError',
  errorCode?: Maybe<UpdateHeartRateVariabilityErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateHeartRateVariabilityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateHeartRateVariability */
export type UpdateHeartRateVariabilityResponse = {
  __typename?: 'updateHeartRateVariabilityResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateHeartRateVariability */
export type UpdateHeartRateVariabilityUnion = UpdateHeartRateVariabilityResponse | UpdateHeartRateVariabilityError;

export type UpdateRestingEnergyError = {
  __typename?: 'updateRestingEnergyError',
  errorCode?: Maybe<UpdateRestingEnergyErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateRestingEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateRestingEnergy */
export type UpdateRestingEnergyResponse = {
  __typename?: 'updateRestingEnergyResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateRestingEnergy */
export type UpdateRestingEnergyUnion = UpdateRestingEnergyResponse | UpdateRestingEnergyError;

export type UpdateRestingHeartRateError = {
  __typename?: 'updateRestingHeartRateError',
  errorCode?: Maybe<UpdateRestingHeartRateErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateRestingHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateRestingHeartRate */
export type UpdateRestingHeartRateResponse = {
  __typename?: 'updateRestingHeartRateResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateRestingHeartRate */
export type UpdateRestingHeartRateUnion = UpdateRestingHeartRateResponse | UpdateRestingHeartRateError;

export type UpdateSleepAnalysisError = {
  __typename?: 'updateSleepAnalysisError',
  errorCode?: Maybe<UpdateSleepAnalysisErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateSleepAnalysisErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateSleepAnalysis */
export type UpdateSleepAnalysisResponse = {
  __typename?: 'updateSleepAnalysisResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateSleepAnalysis */
export type UpdateSleepAnalysisUnion = UpdateSleepAnalysisResponse | UpdateSleepAnalysisError;

export type UpdateStepError = {
  __typename?: 'updateStepError',
  errorCode?: Maybe<UpdateStepErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateStepErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateStep */
export type UpdateStepResponse = {
  __typename?: 'updateStepResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateStep */
export type UpdateStepUnion = UpdateStepResponse | UpdateStepError;

export type UpdateSwimmingDistanceError = {
  __typename?: 'updateSwimmingDistanceError',
  errorCode?: Maybe<UpdateSwimmingDistanceErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateSwimmingDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateSwimmingDistance */
export type UpdateSwimmingDistanceResponse = {
  __typename?: 'updateSwimmingDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateSwimmingDistance */
export type UpdateSwimmingDistanceUnion = UpdateSwimmingDistanceResponse | UpdateSwimmingDistanceError;

export type UpdateWalkingHeartRateAverageError = {
  __typename?: 'updateWalkingHeartRateAverageError',
  errorCode?: Maybe<UpdateWalkingHeartRateAverageErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateWalkingHeartRateAverageErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateWalkingHeartRateAverage */
export type UpdateWalkingHeartRateAverageResponse = {
  __typename?: 'updateWalkingHeartRateAverageResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateWalkingHeartRateAverage */
export type UpdateWalkingHeartRateAverageUnion = UpdateWalkingHeartRateAverageResponse | UpdateWalkingHeartRateAverageError;

export type UpdateWalkingRunningDistanceError = {
  __typename?: 'updateWalkingRunningDistanceError',
  errorCode?: Maybe<UpdateWalkingRunningDistanceErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateWalkingRunningDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Response data for updateWalkingRunningDistance */
export type UpdateWalkingRunningDistanceResponse = {
  __typename?: 'updateWalkingRunningDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateWalkingRunningDistance */
export type UpdateWalkingRunningDistanceUnion = UpdateWalkingRunningDistanceResponse | UpdateWalkingRunningDistanceError;



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  RootQueryType: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  HealthKitType: ResolverTypeWrapper<HealthKitType>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  UnitType: UnitType,
  Mutation: ResolverTypeWrapper<{}>,
  HealthKitInputType: HealthKitInputType,
  HealthKitInputSampleType: HealthKitInputSampleType,
  addStepUnion: ResolversTypes['addStepResponse'] | ResolversTypes['addStepError'],
  addStepResponse: ResolverTypeWrapper<AddStepResponse>,
  addStepError: ResolverTypeWrapper<AddStepError>,
  addStepErrorErrorCodesType: AddStepErrorErrorCodesType,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  HealthKitInputUpdateType: HealthKitInputUpdateType,
  updateStepUnion: ResolversTypes['updateStepResponse'] | ResolversTypes['updateStepError'],
  updateStepResponse: ResolverTypeWrapper<UpdateStepResponse>,
  updateStepError: ResolverTypeWrapper<UpdateStepError>,
  updateStepErrorErrorCodesType: UpdateStepErrorErrorCodesType,
  addFlightsClimbedUnion: ResolversTypes['addFlightsClimbedResponse'] | ResolversTypes['addFlightsClimbedError'],
  addFlightsClimbedResponse: ResolverTypeWrapper<AddFlightsClimbedResponse>,
  addFlightsClimbedError: ResolverTypeWrapper<AddFlightsClimbedError>,
  addFlightsClimbedErrorErrorCodesType: AddFlightsClimbedErrorErrorCodesType,
  updateFlightsClimbedUnion: ResolversTypes['updateFlightsClimbedResponse'] | ResolversTypes['updateFlightsClimbedError'],
  updateFlightsClimbedResponse: ResolverTypeWrapper<UpdateFlightsClimbedResponse>,
  updateFlightsClimbedError: ResolverTypeWrapper<UpdateFlightsClimbedError>,
  updateFlightsClimbedErrorErrorCodesType: UpdateFlightsClimbedErrorErrorCodesType,
  addHeartRateUnion: ResolversTypes['addHeartRateResponse'] | ResolversTypes['addHeartRateError'],
  addHeartRateResponse: ResolverTypeWrapper<AddHeartRateResponse>,
  addHeartRateError: ResolverTypeWrapper<AddHeartRateError>,
  addHeartRateErrorErrorCodesType: AddHeartRateErrorErrorCodesType,
  updateHeartRateUnion: ResolversTypes['updateHeartRateResponse'] | ResolversTypes['updateHeartRateError'],
  updateHeartRateResponse: ResolverTypeWrapper<UpdateHeartRateResponse>,
  updateHeartRateError: ResolverTypeWrapper<UpdateHeartRateError>,
  updateHeartRateErrorErrorCodesType: UpdateHeartRateErrorErrorCodesType,
  addHeartRateVariabilityUnion: ResolversTypes['addHeartRateVariabilityResponse'] | ResolversTypes['addHeartRateVariabilityError'],
  addHeartRateVariabilityResponse: ResolverTypeWrapper<AddHeartRateVariabilityResponse>,
  addHeartRateVariabilityError: ResolverTypeWrapper<AddHeartRateVariabilityError>,
  addHeartRateVariabilityErrorErrorCodesType: AddHeartRateVariabilityErrorErrorCodesType,
  updateHeartRateVariabilityUnion: ResolversTypes['updateHeartRateVariabilityResponse'] | ResolversTypes['updateHeartRateVariabilityError'],
  updateHeartRateVariabilityResponse: ResolverTypeWrapper<UpdateHeartRateVariabilityResponse>,
  updateHeartRateVariabilityError: ResolverTypeWrapper<UpdateHeartRateVariabilityError>,
  updateHeartRateVariabilityErrorErrorCodesType: UpdateHeartRateVariabilityErrorErrorCodesType,
  addHealthKitUnion: ResolversTypes['addHealthKitResponse'] | ResolversTypes['addHealthKitError'],
  addHealthKitResponse: ResolverTypeWrapper<AddHealthKitResponse>,
  addHealthKitError: ResolverTypeWrapper<AddHealthKitError>,
  addHealthKitErrorErrorCodesType: AddHealthKitErrorErrorCodesType,
  addActiveEnergyUnion: ResolversTypes['addActiveEnergyResponse'] | ResolversTypes['addActiveEnergyError'],
  addActiveEnergyResponse: ResolverTypeWrapper<AddActiveEnergyResponse>,
  addActiveEnergyError: ResolverTypeWrapper<AddActiveEnergyError>,
  addActiveEnergyErrorErrorCodesType: AddActiveEnergyErrorErrorCodesType,
  updateActiveEnergyUnion: ResolversTypes['updateActiveEnergyResponse'] | ResolversTypes['updateActiveEnergyError'],
  updateActiveEnergyResponse: ResolverTypeWrapper<UpdateActiveEnergyResponse>,
  updateActiveEnergyError: ResolverTypeWrapper<UpdateActiveEnergyError>,
  updateActiveEnergyErrorErrorCodesType: UpdateActiveEnergyErrorErrorCodesType,
  addCaffeineUnion: ResolversTypes['addCaffeineResponse'] | ResolversTypes['addCaffeineError'],
  addCaffeineResponse: ResolverTypeWrapper<AddCaffeineResponse>,
  addCaffeineError: ResolverTypeWrapper<AddCaffeineError>,
  addCaffeineErrorErrorCodesType: AddCaffeineErrorErrorCodesType,
  updateCaffeineUnion: ResolversTypes['updateCaffeineResponse'] | ResolversTypes['updateCaffeineError'],
  updateCaffeineResponse: ResolverTypeWrapper<UpdateCaffeineResponse>,
  updateCaffeineError: ResolverTypeWrapper<UpdateCaffeineError>,
  updateCaffeineErrorErrorCodesType: UpdateCaffeineErrorErrorCodesType,
  addRestingEnergyUnion: ResolversTypes['addRestingEnergyResponse'] | ResolversTypes['addRestingEnergyError'],
  addRestingEnergyResponse: ResolverTypeWrapper<AddRestingEnergyResponse>,
  addRestingEnergyError: ResolverTypeWrapper<AddRestingEnergyError>,
  addRestingEnergyErrorErrorCodesType: AddRestingEnergyErrorErrorCodesType,
  updateRestingEnergyUnion: ResolversTypes['updateRestingEnergyResponse'] | ResolversTypes['updateRestingEnergyError'],
  updateRestingEnergyResponse: ResolverTypeWrapper<UpdateRestingEnergyResponse>,
  updateRestingEnergyError: ResolverTypeWrapper<UpdateRestingEnergyError>,
  updateRestingEnergyErrorErrorCodesType: UpdateRestingEnergyErrorErrorCodesType,
  addRestingHeartRateUnion: ResolversTypes['addRestingHeartRateResponse'] | ResolversTypes['addRestingHeartRateError'],
  addRestingHeartRateResponse: ResolverTypeWrapper<AddRestingHeartRateResponse>,
  addRestingHeartRateError: ResolverTypeWrapper<AddRestingHeartRateError>,
  addRestingHeartRateErrorErrorCodesType: AddRestingHeartRateErrorErrorCodesType,
  updateRestingHeartRateUnion: ResolversTypes['updateRestingHeartRateResponse'] | ResolversTypes['updateRestingHeartRateError'],
  updateRestingHeartRateResponse: ResolverTypeWrapper<UpdateRestingHeartRateResponse>,
  updateRestingHeartRateError: ResolverTypeWrapper<UpdateRestingHeartRateError>,
  updateRestingHeartRateErrorErrorCodesType: UpdateRestingHeartRateErrorErrorCodesType,
  addSleepAnalysisUnion: ResolversTypes['addSleepAnalysisResponse'] | ResolversTypes['addSleepAnalysisError'],
  addSleepAnalysisResponse: ResolverTypeWrapper<AddSleepAnalysisResponse>,
  addSleepAnalysisError: ResolverTypeWrapper<AddSleepAnalysisError>,
  addSleepAnalysisErrorErrorCodesType: AddSleepAnalysisErrorErrorCodesType,
  updateSleepAnalysisUnion: ResolversTypes['updateSleepAnalysisResponse'] | ResolversTypes['updateSleepAnalysisError'],
  updateSleepAnalysisResponse: ResolverTypeWrapper<UpdateSleepAnalysisResponse>,
  updateSleepAnalysisError: ResolverTypeWrapper<UpdateSleepAnalysisError>,
  updateSleepAnalysisErrorErrorCodesType: UpdateSleepAnalysisErrorErrorCodesType,
  addSwimmingDistanceUnion: ResolversTypes['addSwimmingDistanceResponse'] | ResolversTypes['addSwimmingDistanceError'],
  addSwimmingDistanceResponse: ResolverTypeWrapper<AddSwimmingDistanceResponse>,
  addSwimmingDistanceError: ResolverTypeWrapper<AddSwimmingDistanceError>,
  addSwimmingDistanceErrorErrorCodesType: AddSwimmingDistanceErrorErrorCodesType,
  updateSwimmingDistanceUnion: ResolversTypes['updateSwimmingDistanceResponse'] | ResolversTypes['updateSwimmingDistanceError'],
  updateSwimmingDistanceResponse: ResolverTypeWrapper<UpdateSwimmingDistanceResponse>,
  updateSwimmingDistanceError: ResolverTypeWrapper<UpdateSwimmingDistanceError>,
  updateSwimmingDistanceErrorErrorCodesType: UpdateSwimmingDistanceErrorErrorCodesType,
  addWalkingHeartRateAverageUnion: ResolversTypes['addWalkingHeartRateAverageResponse'] | ResolversTypes['addWalkingHeartRateAverageError'],
  addWalkingHeartRateAverageResponse: ResolverTypeWrapper<AddWalkingHeartRateAverageResponse>,
  addWalkingHeartRateAverageError: ResolverTypeWrapper<AddWalkingHeartRateAverageError>,
  addWalkingHeartRateAverageErrorErrorCodesType: AddWalkingHeartRateAverageErrorErrorCodesType,
  updateWalkingHeartRateAverageUnion: ResolversTypes['updateWalkingHeartRateAverageResponse'] | ResolversTypes['updateWalkingHeartRateAverageError'],
  updateWalkingHeartRateAverageResponse: ResolverTypeWrapper<UpdateWalkingHeartRateAverageResponse>,
  updateWalkingHeartRateAverageError: ResolverTypeWrapper<UpdateWalkingHeartRateAverageError>,
  updateWalkingHeartRateAverageErrorErrorCodesType: UpdateWalkingHeartRateAverageErrorErrorCodesType,
  addWalkingRunningDistanceUnion: ResolversTypes['addWalkingRunningDistanceResponse'] | ResolversTypes['addWalkingRunningDistanceError'],
  addWalkingRunningDistanceResponse: ResolverTypeWrapper<AddWalkingRunningDistanceResponse>,
  addWalkingRunningDistanceError: ResolverTypeWrapper<AddWalkingRunningDistanceError>,
  addWalkingRunningDistanceErrorErrorCodesType: AddWalkingRunningDistanceErrorErrorCodesType,
  updateWalkingRunningDistanceUnion: ResolversTypes['updateWalkingRunningDistanceResponse'] | ResolversTypes['updateWalkingRunningDistanceError'],
  updateWalkingRunningDistanceResponse: ResolverTypeWrapper<UpdateWalkingRunningDistanceResponse>,
  updateWalkingRunningDistanceError: ResolverTypeWrapper<UpdateWalkingRunningDistanceError>,
  updateWalkingRunningDistanceErrorErrorCodesType: UpdateWalkingRunningDistanceErrorErrorCodesType,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  AdditionalEntityFields: AdditionalEntityFields,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootQueryType: {},
  String: Scalars['String'],
  Date: Scalars['Date'],
  HealthKitType: HealthKitType,
  Float: Scalars['Float'],
  UnitType: UnitType,
  Mutation: {},
  HealthKitInputType: HealthKitInputType,
  HealthKitInputSampleType: HealthKitInputSampleType,
  addStepUnion: ResolversTypes['addStepResponse'] | ResolversTypes['addStepError'],
  addStepResponse: AddStepResponse,
  addStepError: AddStepError,
  addStepErrorErrorCodesType: AddStepErrorErrorCodesType,
  ID: Scalars['ID'],
  HealthKitInputUpdateType: HealthKitInputUpdateType,
  updateStepUnion: ResolversTypes['updateStepResponse'] | ResolversTypes['updateStepError'],
  updateStepResponse: UpdateStepResponse,
  updateStepError: UpdateStepError,
  updateStepErrorErrorCodesType: UpdateStepErrorErrorCodesType,
  addFlightsClimbedUnion: ResolversTypes['addFlightsClimbedResponse'] | ResolversTypes['addFlightsClimbedError'],
  addFlightsClimbedResponse: AddFlightsClimbedResponse,
  addFlightsClimbedError: AddFlightsClimbedError,
  addFlightsClimbedErrorErrorCodesType: AddFlightsClimbedErrorErrorCodesType,
  updateFlightsClimbedUnion: ResolversTypes['updateFlightsClimbedResponse'] | ResolversTypes['updateFlightsClimbedError'],
  updateFlightsClimbedResponse: UpdateFlightsClimbedResponse,
  updateFlightsClimbedError: UpdateFlightsClimbedError,
  updateFlightsClimbedErrorErrorCodesType: UpdateFlightsClimbedErrorErrorCodesType,
  addHeartRateUnion: ResolversTypes['addHeartRateResponse'] | ResolversTypes['addHeartRateError'],
  addHeartRateResponse: AddHeartRateResponse,
  addHeartRateError: AddHeartRateError,
  addHeartRateErrorErrorCodesType: AddHeartRateErrorErrorCodesType,
  updateHeartRateUnion: ResolversTypes['updateHeartRateResponse'] | ResolversTypes['updateHeartRateError'],
  updateHeartRateResponse: UpdateHeartRateResponse,
  updateHeartRateError: UpdateHeartRateError,
  updateHeartRateErrorErrorCodesType: UpdateHeartRateErrorErrorCodesType,
  addHeartRateVariabilityUnion: ResolversTypes['addHeartRateVariabilityResponse'] | ResolversTypes['addHeartRateVariabilityError'],
  addHeartRateVariabilityResponse: AddHeartRateVariabilityResponse,
  addHeartRateVariabilityError: AddHeartRateVariabilityError,
  addHeartRateVariabilityErrorErrorCodesType: AddHeartRateVariabilityErrorErrorCodesType,
  updateHeartRateVariabilityUnion: ResolversTypes['updateHeartRateVariabilityResponse'] | ResolversTypes['updateHeartRateVariabilityError'],
  updateHeartRateVariabilityResponse: UpdateHeartRateVariabilityResponse,
  updateHeartRateVariabilityError: UpdateHeartRateVariabilityError,
  updateHeartRateVariabilityErrorErrorCodesType: UpdateHeartRateVariabilityErrorErrorCodesType,
  addHealthKitUnion: ResolversTypes['addHealthKitResponse'] | ResolversTypes['addHealthKitError'],
  addHealthKitResponse: AddHealthKitResponse,
  addHealthKitError: AddHealthKitError,
  addHealthKitErrorErrorCodesType: AddHealthKitErrorErrorCodesType,
  addActiveEnergyUnion: ResolversTypes['addActiveEnergyResponse'] | ResolversTypes['addActiveEnergyError'],
  addActiveEnergyResponse: AddActiveEnergyResponse,
  addActiveEnergyError: AddActiveEnergyError,
  addActiveEnergyErrorErrorCodesType: AddActiveEnergyErrorErrorCodesType,
  updateActiveEnergyUnion: ResolversTypes['updateActiveEnergyResponse'] | ResolversTypes['updateActiveEnergyError'],
  updateActiveEnergyResponse: UpdateActiveEnergyResponse,
  updateActiveEnergyError: UpdateActiveEnergyError,
  updateActiveEnergyErrorErrorCodesType: UpdateActiveEnergyErrorErrorCodesType,
  addCaffeineUnion: ResolversTypes['addCaffeineResponse'] | ResolversTypes['addCaffeineError'],
  addCaffeineResponse: AddCaffeineResponse,
  addCaffeineError: AddCaffeineError,
  addCaffeineErrorErrorCodesType: AddCaffeineErrorErrorCodesType,
  updateCaffeineUnion: ResolversTypes['updateCaffeineResponse'] | ResolversTypes['updateCaffeineError'],
  updateCaffeineResponse: UpdateCaffeineResponse,
  updateCaffeineError: UpdateCaffeineError,
  updateCaffeineErrorErrorCodesType: UpdateCaffeineErrorErrorCodesType,
  addRestingEnergyUnion: ResolversTypes['addRestingEnergyResponse'] | ResolversTypes['addRestingEnergyError'],
  addRestingEnergyResponse: AddRestingEnergyResponse,
  addRestingEnergyError: AddRestingEnergyError,
  addRestingEnergyErrorErrorCodesType: AddRestingEnergyErrorErrorCodesType,
  updateRestingEnergyUnion: ResolversTypes['updateRestingEnergyResponse'] | ResolversTypes['updateRestingEnergyError'],
  updateRestingEnergyResponse: UpdateRestingEnergyResponse,
  updateRestingEnergyError: UpdateRestingEnergyError,
  updateRestingEnergyErrorErrorCodesType: UpdateRestingEnergyErrorErrorCodesType,
  addRestingHeartRateUnion: ResolversTypes['addRestingHeartRateResponse'] | ResolversTypes['addRestingHeartRateError'],
  addRestingHeartRateResponse: AddRestingHeartRateResponse,
  addRestingHeartRateError: AddRestingHeartRateError,
  addRestingHeartRateErrorErrorCodesType: AddRestingHeartRateErrorErrorCodesType,
  updateRestingHeartRateUnion: ResolversTypes['updateRestingHeartRateResponse'] | ResolversTypes['updateRestingHeartRateError'],
  updateRestingHeartRateResponse: UpdateRestingHeartRateResponse,
  updateRestingHeartRateError: UpdateRestingHeartRateError,
  updateRestingHeartRateErrorErrorCodesType: UpdateRestingHeartRateErrorErrorCodesType,
  addSleepAnalysisUnion: ResolversTypes['addSleepAnalysisResponse'] | ResolversTypes['addSleepAnalysisError'],
  addSleepAnalysisResponse: AddSleepAnalysisResponse,
  addSleepAnalysisError: AddSleepAnalysisError,
  addSleepAnalysisErrorErrorCodesType: AddSleepAnalysisErrorErrorCodesType,
  updateSleepAnalysisUnion: ResolversTypes['updateSleepAnalysisResponse'] | ResolversTypes['updateSleepAnalysisError'],
  updateSleepAnalysisResponse: UpdateSleepAnalysisResponse,
  updateSleepAnalysisError: UpdateSleepAnalysisError,
  updateSleepAnalysisErrorErrorCodesType: UpdateSleepAnalysisErrorErrorCodesType,
  addSwimmingDistanceUnion: ResolversTypes['addSwimmingDistanceResponse'] | ResolversTypes['addSwimmingDistanceError'],
  addSwimmingDistanceResponse: AddSwimmingDistanceResponse,
  addSwimmingDistanceError: AddSwimmingDistanceError,
  addSwimmingDistanceErrorErrorCodesType: AddSwimmingDistanceErrorErrorCodesType,
  updateSwimmingDistanceUnion: ResolversTypes['updateSwimmingDistanceResponse'] | ResolversTypes['updateSwimmingDistanceError'],
  updateSwimmingDistanceResponse: UpdateSwimmingDistanceResponse,
  updateSwimmingDistanceError: UpdateSwimmingDistanceError,
  updateSwimmingDistanceErrorErrorCodesType: UpdateSwimmingDistanceErrorErrorCodesType,
  addWalkingHeartRateAverageUnion: ResolversTypes['addWalkingHeartRateAverageResponse'] | ResolversTypes['addWalkingHeartRateAverageError'],
  addWalkingHeartRateAverageResponse: AddWalkingHeartRateAverageResponse,
  addWalkingHeartRateAverageError: AddWalkingHeartRateAverageError,
  addWalkingHeartRateAverageErrorErrorCodesType: AddWalkingHeartRateAverageErrorErrorCodesType,
  updateWalkingHeartRateAverageUnion: ResolversTypes['updateWalkingHeartRateAverageResponse'] | ResolversTypes['updateWalkingHeartRateAverageError'],
  updateWalkingHeartRateAverageResponse: UpdateWalkingHeartRateAverageResponse,
  updateWalkingHeartRateAverageError: UpdateWalkingHeartRateAverageError,
  updateWalkingHeartRateAverageErrorErrorCodesType: UpdateWalkingHeartRateAverageErrorErrorCodesType,
  addWalkingRunningDistanceUnion: ResolversTypes['addWalkingRunningDistanceResponse'] | ResolversTypes['addWalkingRunningDistanceError'],
  addWalkingRunningDistanceResponse: AddWalkingRunningDistanceResponse,
  addWalkingRunningDistanceError: AddWalkingRunningDistanceError,
  addWalkingRunningDistanceErrorErrorCodesType: AddWalkingRunningDistanceErrorErrorCodesType,
  updateWalkingRunningDistanceUnion: ResolversTypes['updateWalkingRunningDistanceResponse'] | ResolversTypes['updateWalkingRunningDistanceError'],
  updateWalkingRunningDistanceResponse: UpdateWalkingRunningDistanceResponse,
  updateWalkingRunningDistanceError: UpdateWalkingRunningDistanceError,
  updateWalkingRunningDistanceErrorErrorCodesType: UpdateWalkingRunningDistanceErrorErrorCodesType,
  Boolean: Scalars['Boolean'],
  AdditionalEntityFields: AdditionalEntityFields,
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = {   discriminatorField?: Maybe<Maybe<Scalars['String']>>,
  additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = {   discriminatorField?: Maybe<Scalars['String']>,
  additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = {   embedded?: Maybe<Maybe<Scalars['Boolean']>>,
  additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = {   overrideType?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = {   overrideType?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = {   path?: Maybe<Scalars['String']> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddActiveEnergyErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addActiveEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addActiveEnergyErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddActiveEnergyResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addActiveEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddActiveEnergyUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addActiveEnergyUnion']> = {
  __resolveType: TypeResolveFn<'addActiveEnergyResponse' | 'addActiveEnergyError', ParentType, ContextType>
};

export type AddCaffeineErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addCaffeineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addCaffeineErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddCaffeineResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addCaffeineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddCaffeineUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addCaffeineUnion']> = {
  __resolveType: TypeResolveFn<'addCaffeineResponse' | 'addCaffeineError', ParentType, ContextType>
};

export type AddFlightsClimbedErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addFlightsClimbedError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addFlightsClimbedErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddFlightsClimbedResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addFlightsClimbedResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddFlightsClimbedUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addFlightsClimbedUnion']> = {
  __resolveType: TypeResolveFn<'addFlightsClimbedResponse' | 'addFlightsClimbedError', ParentType, ContextType>
};

export type AddHealthKitErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addHealthKitError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHealthKitErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddHealthKitResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addHealthKitResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type AddHealthKitUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addHealthKitUnion']> = {
  __resolveType: TypeResolveFn<'addHealthKitResponse' | 'addHealthKitError', ParentType, ContextType>
};

export type AddHeartRateErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHeartRateErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddHeartRateResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddHeartRateUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'addHeartRateResponse' | 'addHeartRateError', ParentType, ContextType>
};

export type AddHeartRateVariabilityErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateVariabilityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHeartRateVariabilityErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddHeartRateVariabilityResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateVariabilityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddHeartRateVariabilityUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateVariabilityUnion']> = {
  __resolveType: TypeResolveFn<'addHeartRateVariabilityResponse' | 'addHeartRateVariabilityError', ParentType, ContextType>
};

export type AddRestingEnergyErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addRestingEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addRestingEnergyErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddRestingEnergyResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addRestingEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddRestingEnergyUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addRestingEnergyUnion']> = {
  __resolveType: TypeResolveFn<'addRestingEnergyResponse' | 'addRestingEnergyError', ParentType, ContextType>
};

export type AddRestingHeartRateErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addRestingHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addRestingHeartRateErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddRestingHeartRateResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addRestingHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddRestingHeartRateUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addRestingHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'addRestingHeartRateResponse' | 'addRestingHeartRateError', ParentType, ContextType>
};

export type AddSleepAnalysisErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addSleepAnalysisError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addSleepAnalysisErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddSleepAnalysisResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addSleepAnalysisResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddSleepAnalysisUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addSleepAnalysisUnion']> = {
  __resolveType: TypeResolveFn<'addSleepAnalysisResponse' | 'addSleepAnalysisError', ParentType, ContextType>
};

export type AddStepErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addStepError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addStepErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddStepResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addStepResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddStepUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addStepUnion']> = {
  __resolveType: TypeResolveFn<'addStepResponse' | 'addStepError', ParentType, ContextType>
};

export type AddSwimmingDistanceErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addSwimmingDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addSwimmingDistanceErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddSwimmingDistanceResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addSwimmingDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddSwimmingDistanceUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addSwimmingDistanceUnion']> = {
  __resolveType: TypeResolveFn<'addSwimmingDistanceResponse' | 'addSwimmingDistanceError', ParentType, ContextType>
};

export type AddWalkingHeartRateAverageErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addWalkingHeartRateAverageError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addWalkingHeartRateAverageErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddWalkingHeartRateAverageResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addWalkingHeartRateAverageResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddWalkingHeartRateAverageUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addWalkingHeartRateAverageUnion']> = {
  __resolveType: TypeResolveFn<'addWalkingHeartRateAverageResponse' | 'addWalkingHeartRateAverageError', ParentType, ContextType>
};

export type AddWalkingRunningDistanceErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addWalkingRunningDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addWalkingRunningDistanceErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddWalkingRunningDistanceResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addWalkingRunningDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddWalkingRunningDistanceUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addWalkingRunningDistanceUnion']> = {
  __resolveType: TypeResolveFn<'addWalkingRunningDistanceResponse' | 'addWalkingRunningDistanceError', ParentType, ContextType>
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type HealthKitTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['HealthKitType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  valueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  totalSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  averageSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  highestSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lowestSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>,
  totalDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType = ResolversParentTypes['Mutation']> = {
  addStep?: Resolver<Maybe<ResolversTypes['addStepUnion']>, ParentType, ContextType, MutationAddStepArgs>,
  updateStep?: Resolver<Maybe<ResolversTypes['updateStepUnion']>, ParentType, ContextType, MutationUpdateStepArgs>,
  addFlightsClimbed?: Resolver<Maybe<ResolversTypes['addFlightsClimbedUnion']>, ParentType, ContextType, MutationAddFlightsClimbedArgs>,
  updateFlightsClimbed?: Resolver<Maybe<ResolversTypes['updateFlightsClimbedUnion']>, ParentType, ContextType, MutationUpdateFlightsClimbedArgs>,
  addHeartRate?: Resolver<Maybe<ResolversTypes['addHeartRateUnion']>, ParentType, ContextType, MutationAddHeartRateArgs>,
  updateHeartRate?: Resolver<Maybe<ResolversTypes['updateHeartRateUnion']>, ParentType, ContextType, MutationUpdateHeartRateArgs>,
  addHeartRateVariability?: Resolver<Maybe<ResolversTypes['addHeartRateVariabilityUnion']>, ParentType, ContextType, MutationAddHeartRateVariabilityArgs>,
  updateHeartRateVariability?: Resolver<Maybe<ResolversTypes['updateHeartRateVariabilityUnion']>, ParentType, ContextType, MutationUpdateHeartRateVariabilityArgs>,
  addHealthKit?: Resolver<Maybe<ResolversTypes['addHealthKitUnion']>, ParentType, ContextType, MutationAddHealthKitArgs>,
  addActiveEnergy?: Resolver<Maybe<ResolversTypes['addActiveEnergyUnion']>, ParentType, ContextType, MutationAddActiveEnergyArgs>,
  updateActiveEnergy?: Resolver<Maybe<ResolversTypes['updateActiveEnergyUnion']>, ParentType, ContextType, MutationUpdateActiveEnergyArgs>,
  addCaffeine?: Resolver<Maybe<ResolversTypes['addCaffeineUnion']>, ParentType, ContextType, MutationAddCaffeineArgs>,
  updateCaffeine?: Resolver<Maybe<ResolversTypes['updateCaffeineUnion']>, ParentType, ContextType, MutationUpdateCaffeineArgs>,
  addRestingEnergy?: Resolver<Maybe<ResolversTypes['addRestingEnergyUnion']>, ParentType, ContextType, MutationAddRestingEnergyArgs>,
  updateRestingEnergy?: Resolver<Maybe<ResolversTypes['updateRestingEnergyUnion']>, ParentType, ContextType, MutationUpdateRestingEnergyArgs>,
  addRestingHeartRate?: Resolver<Maybe<ResolversTypes['addRestingHeartRateUnion']>, ParentType, ContextType, MutationAddRestingHeartRateArgs>,
  updateRestingHeartRate?: Resolver<Maybe<ResolversTypes['updateRestingHeartRateUnion']>, ParentType, ContextType, MutationUpdateRestingHeartRateArgs>,
  addSleepAnalysis?: Resolver<Maybe<ResolversTypes['addSleepAnalysisUnion']>, ParentType, ContextType, MutationAddSleepAnalysisArgs>,
  updateSleepAnalysis?: Resolver<Maybe<ResolversTypes['updateSleepAnalysisUnion']>, ParentType, ContextType, MutationUpdateSleepAnalysisArgs>,
  addSwimmingDistance?: Resolver<Maybe<ResolversTypes['addSwimmingDistanceUnion']>, ParentType, ContextType, MutationAddSwimmingDistanceArgs>,
  updateSwimmingDistance?: Resolver<Maybe<ResolversTypes['updateSwimmingDistanceUnion']>, ParentType, ContextType, MutationUpdateSwimmingDistanceArgs>,
  addWalkingHeartRateAverage?: Resolver<Maybe<ResolversTypes['addWalkingHeartRateAverageUnion']>, ParentType, ContextType, MutationAddWalkingHeartRateAverageArgs>,
  updateWalkingHeartRateAverage?: Resolver<Maybe<ResolversTypes['updateWalkingHeartRateAverageUnion']>, ParentType, ContextType, MutationUpdateWalkingHeartRateAverageArgs>,
  addWalkingRunningDistance?: Resolver<Maybe<ResolversTypes['addWalkingRunningDistanceUnion']>, ParentType, ContextType, MutationAddWalkingRunningDistanceArgs>,
  updateWalkingRunningDistance?: Resolver<Maybe<ResolversTypes['updateWalkingRunningDistanceUnion']>, ParentType, ContextType, MutationUpdateWalkingRunningDistanceArgs>,
};

export type RootQueryTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['RootQueryType']> = {
  step?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeStepArgs>,
  flightsClimbed?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeFlightsClimbedArgs>,
  heartrate?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeHeartrateArgs>,
  heartrateVariability?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeHeartrateVariabilityArgs>,
  activeEnergy?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeActiveEnergyArgs>,
  caffeine?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeCaffeineArgs>,
  restingEnergy?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeRestingEnergyArgs>,
  restingHeartrate?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeRestingHeartrateArgs>,
  sleepAnalysis?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeSleepAnalysisArgs>,
  swimmingDistance?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeSwimmingDistanceArgs>,
  walkingHeartrateAverage?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeWalkingHeartrateAverageArgs>,
  walkingRunningDistance?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType, RootQueryTypeWalkingRunningDistanceArgs>,
};

export type UpdateActiveEnergyErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateActiveEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateActiveEnergyErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateActiveEnergyResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateActiveEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateActiveEnergyUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateActiveEnergyUnion']> = {
  __resolveType: TypeResolveFn<'updateActiveEnergyResponse' | 'updateActiveEnergyError', ParentType, ContextType>
};

export type UpdateCaffeineErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateCaffeineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateCaffeineErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateCaffeineResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateCaffeineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateCaffeineUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateCaffeineUnion']> = {
  __resolveType: TypeResolveFn<'updateCaffeineResponse' | 'updateCaffeineError', ParentType, ContextType>
};

export type UpdateFlightsClimbedErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateFlightsClimbedError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateFlightsClimbedErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateFlightsClimbedResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateFlightsClimbedResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateFlightsClimbedUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateFlightsClimbedUnion']> = {
  __resolveType: TypeResolveFn<'updateFlightsClimbedResponse' | 'updateFlightsClimbedError', ParentType, ContextType>
};

export type UpdateHeartRateErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateHeartRateErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateHeartRateResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateHeartRateUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'updateHeartRateResponse' | 'updateHeartRateError', ParentType, ContextType>
};

export type UpdateHeartRateVariabilityErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateVariabilityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateHeartRateVariabilityErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateHeartRateVariabilityResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateVariabilityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateHeartRateVariabilityUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateVariabilityUnion']> = {
  __resolveType: TypeResolveFn<'updateHeartRateVariabilityResponse' | 'updateHeartRateVariabilityError', ParentType, ContextType>
};

export type UpdateRestingEnergyErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateRestingEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateRestingEnergyErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateRestingEnergyResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateRestingEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateRestingEnergyUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateRestingEnergyUnion']> = {
  __resolveType: TypeResolveFn<'updateRestingEnergyResponse' | 'updateRestingEnergyError', ParentType, ContextType>
};

export type UpdateRestingHeartRateErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateRestingHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateRestingHeartRateErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateRestingHeartRateResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateRestingHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateRestingHeartRateUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateRestingHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'updateRestingHeartRateResponse' | 'updateRestingHeartRateError', ParentType, ContextType>
};

export type UpdateSleepAnalysisErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateSleepAnalysisError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateSleepAnalysisErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateSleepAnalysisResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateSleepAnalysisResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateSleepAnalysisUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateSleepAnalysisUnion']> = {
  __resolveType: TypeResolveFn<'updateSleepAnalysisResponse' | 'updateSleepAnalysisError', ParentType, ContextType>
};

export type UpdateStepErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateStepError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateStepErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateStepResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateStepResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateStepUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateStepUnion']> = {
  __resolveType: TypeResolveFn<'updateStepResponse' | 'updateStepError', ParentType, ContextType>
};

export type UpdateSwimmingDistanceErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateSwimmingDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateSwimmingDistanceErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateSwimmingDistanceResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateSwimmingDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateSwimmingDistanceUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateSwimmingDistanceUnion']> = {
  __resolveType: TypeResolveFn<'updateSwimmingDistanceResponse' | 'updateSwimmingDistanceError', ParentType, ContextType>
};

export type UpdateWalkingHeartRateAverageErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWalkingHeartRateAverageError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateWalkingHeartRateAverageErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateWalkingHeartRateAverageResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWalkingHeartRateAverageResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateWalkingHeartRateAverageUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWalkingHeartRateAverageUnion']> = {
  __resolveType: TypeResolveFn<'updateWalkingHeartRateAverageResponse' | 'updateWalkingHeartRateAverageError', ParentType, ContextType>
};

export type UpdateWalkingRunningDistanceErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWalkingRunningDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateWalkingRunningDistanceErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateWalkingRunningDistanceResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWalkingRunningDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateWalkingRunningDistanceUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWalkingRunningDistanceUnion']> = {
  __resolveType: TypeResolveFn<'updateWalkingRunningDistanceResponse' | 'updateWalkingRunningDistanceError', ParentType, ContextType>
};

export type Resolvers<ContextType = any> = {
  addActiveEnergyError?: AddActiveEnergyErrorResolvers<ContextType>,
  addActiveEnergyResponse?: AddActiveEnergyResponseResolvers<ContextType>,
  addActiveEnergyUnion?: AddActiveEnergyUnionResolvers,
  addCaffeineError?: AddCaffeineErrorResolvers<ContextType>,
  addCaffeineResponse?: AddCaffeineResponseResolvers<ContextType>,
  addCaffeineUnion?: AddCaffeineUnionResolvers,
  addFlightsClimbedError?: AddFlightsClimbedErrorResolvers<ContextType>,
  addFlightsClimbedResponse?: AddFlightsClimbedResponseResolvers<ContextType>,
  addFlightsClimbedUnion?: AddFlightsClimbedUnionResolvers,
  addHealthKitError?: AddHealthKitErrorResolvers<ContextType>,
  addHealthKitResponse?: AddHealthKitResponseResolvers<ContextType>,
  addHealthKitUnion?: AddHealthKitUnionResolvers,
  addHeartRateError?: AddHeartRateErrorResolvers<ContextType>,
  addHeartRateResponse?: AddHeartRateResponseResolvers<ContextType>,
  addHeartRateUnion?: AddHeartRateUnionResolvers,
  addHeartRateVariabilityError?: AddHeartRateVariabilityErrorResolvers<ContextType>,
  addHeartRateVariabilityResponse?: AddHeartRateVariabilityResponseResolvers<ContextType>,
  addHeartRateVariabilityUnion?: AddHeartRateVariabilityUnionResolvers,
  addRestingEnergyError?: AddRestingEnergyErrorResolvers<ContextType>,
  addRestingEnergyResponse?: AddRestingEnergyResponseResolvers<ContextType>,
  addRestingEnergyUnion?: AddRestingEnergyUnionResolvers,
  addRestingHeartRateError?: AddRestingHeartRateErrorResolvers<ContextType>,
  addRestingHeartRateResponse?: AddRestingHeartRateResponseResolvers<ContextType>,
  addRestingHeartRateUnion?: AddRestingHeartRateUnionResolvers,
  addSleepAnalysisError?: AddSleepAnalysisErrorResolvers<ContextType>,
  addSleepAnalysisResponse?: AddSleepAnalysisResponseResolvers<ContextType>,
  addSleepAnalysisUnion?: AddSleepAnalysisUnionResolvers,
  addStepError?: AddStepErrorResolvers<ContextType>,
  addStepResponse?: AddStepResponseResolvers<ContextType>,
  addStepUnion?: AddStepUnionResolvers,
  addSwimmingDistanceError?: AddSwimmingDistanceErrorResolvers<ContextType>,
  addSwimmingDistanceResponse?: AddSwimmingDistanceResponseResolvers<ContextType>,
  addSwimmingDistanceUnion?: AddSwimmingDistanceUnionResolvers,
  addWalkingHeartRateAverageError?: AddWalkingHeartRateAverageErrorResolvers<ContextType>,
  addWalkingHeartRateAverageResponse?: AddWalkingHeartRateAverageResponseResolvers<ContextType>,
  addWalkingHeartRateAverageUnion?: AddWalkingHeartRateAverageUnionResolvers,
  addWalkingRunningDistanceError?: AddWalkingRunningDistanceErrorResolvers<ContextType>,
  addWalkingRunningDistanceResponse?: AddWalkingRunningDistanceResponseResolvers<ContextType>,
  addWalkingRunningDistanceUnion?: AddWalkingRunningDistanceUnionResolvers,
  Date?: GraphQLScalarType,
  HealthKitType?: HealthKitTypeResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  RootQueryType?: RootQueryTypeResolvers<ContextType>,
  updateActiveEnergyError?: UpdateActiveEnergyErrorResolvers<ContextType>,
  updateActiveEnergyResponse?: UpdateActiveEnergyResponseResolvers<ContextType>,
  updateActiveEnergyUnion?: UpdateActiveEnergyUnionResolvers,
  updateCaffeineError?: UpdateCaffeineErrorResolvers<ContextType>,
  updateCaffeineResponse?: UpdateCaffeineResponseResolvers<ContextType>,
  updateCaffeineUnion?: UpdateCaffeineUnionResolvers,
  updateFlightsClimbedError?: UpdateFlightsClimbedErrorResolvers<ContextType>,
  updateFlightsClimbedResponse?: UpdateFlightsClimbedResponseResolvers<ContextType>,
  updateFlightsClimbedUnion?: UpdateFlightsClimbedUnionResolvers,
  updateHeartRateError?: UpdateHeartRateErrorResolvers<ContextType>,
  updateHeartRateResponse?: UpdateHeartRateResponseResolvers<ContextType>,
  updateHeartRateUnion?: UpdateHeartRateUnionResolvers,
  updateHeartRateVariabilityError?: UpdateHeartRateVariabilityErrorResolvers<ContextType>,
  updateHeartRateVariabilityResponse?: UpdateHeartRateVariabilityResponseResolvers<ContextType>,
  updateHeartRateVariabilityUnion?: UpdateHeartRateVariabilityUnionResolvers,
  updateRestingEnergyError?: UpdateRestingEnergyErrorResolvers<ContextType>,
  updateRestingEnergyResponse?: UpdateRestingEnergyResponseResolvers<ContextType>,
  updateRestingEnergyUnion?: UpdateRestingEnergyUnionResolvers,
  updateRestingHeartRateError?: UpdateRestingHeartRateErrorResolvers<ContextType>,
  updateRestingHeartRateResponse?: UpdateRestingHeartRateResponseResolvers<ContextType>,
  updateRestingHeartRateUnion?: UpdateRestingHeartRateUnionResolvers,
  updateSleepAnalysisError?: UpdateSleepAnalysisErrorResolvers<ContextType>,
  updateSleepAnalysisResponse?: UpdateSleepAnalysisResponseResolvers<ContextType>,
  updateSleepAnalysisUnion?: UpdateSleepAnalysisUnionResolvers,
  updateStepError?: UpdateStepErrorResolvers<ContextType>,
  updateStepResponse?: UpdateStepResponseResolvers<ContextType>,
  updateStepUnion?: UpdateStepUnionResolvers,
  updateSwimmingDistanceError?: UpdateSwimmingDistanceErrorResolvers<ContextType>,
  updateSwimmingDistanceResponse?: UpdateSwimmingDistanceResponseResolvers<ContextType>,
  updateSwimmingDistanceUnion?: UpdateSwimmingDistanceUnionResolvers,
  updateWalkingHeartRateAverageError?: UpdateWalkingHeartRateAverageErrorResolvers<ContextType>,
  updateWalkingHeartRateAverageResponse?: UpdateWalkingHeartRateAverageResponseResolvers<ContextType>,
  updateWalkingHeartRateAverageUnion?: UpdateWalkingHeartRateAverageUnionResolvers,
  updateWalkingRunningDistanceError?: UpdateWalkingRunningDistanceErrorResolvers<ContextType>,
  updateWalkingRunningDistanceResponse?: UpdateWalkingRunningDistanceResponseResolvers<ContextType>,
  updateWalkingRunningDistanceUnion?: UpdateWalkingRunningDistanceUnionResolvers,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>,
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>,
  entity?: EntityDirectiveResolver<any, any, ContextType>,
  column?: ColumnDirectiveResolver<any, any, ContextType>,
  id?: IdDirectiveResolver<any, any, ContextType>,
  link?: LinkDirectiveResolver<any, any, ContextType>,
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>,
  map?: MapDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};

export type ActiveEnergyAllError = {
  __typename?: 'activeEnergyAllError',
  errorCode?: Maybe<ActiveEnergyAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum ActiveEnergyAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for activeEnergyAll */
export type ActiveEnergyAllResponse = {
  __typename?: 'activeEnergyAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for activeEnergyAll */
export type ActiveEnergyAllUnion = ActiveEnergyAllResponse | ActiveEnergyAllError;

export type ActiveEnergyError = {
  __typename?: 'activeEnergyError',
  errorCode?: Maybe<ActiveEnergyErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum ActiveEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for activeEnergy */
export type ActiveEnergyResponse = {
  __typename?: 'activeEnergyResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for activeEnergy */
export type ActiveEnergyUnion = ActiveEnergyResponse | ActiveEnergyError;

export type ActivityAllError = {
  __typename?: 'activityAllError',
  errorCode?: Maybe<ActivityAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum ActivityAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for activityAll */
export type ActivityAllResponse = {
  __typename?: 'activityAllResponse',
  response?: Maybe<Array<Maybe<ActivityType>>>,
};

/** Return either be response data or error data for activityAll */
export type ActivityAllUnion = ActivityAllResponse | ActivityAllError;

export type ActivityError = {
  __typename?: 'activityError',
  errorCode?: Maybe<ActivityErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum ActivityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Fitness activity input */
export type ActivityInputType = {
  sampledOn?: Maybe<Scalars['String']>,
  energy?: Maybe<Scalars['Float']>,
  energyUnit?: Maybe<Scalars['String']>,
  energyGoal?: Maybe<Scalars['Float']>,
  energyProgress?: Maybe<Scalars['Float']>,
  energyComplete?: Maybe<Scalars['Boolean']>,
  standHours?: Maybe<Scalars['Float']>,
  standProgress?: Maybe<Scalars['Float']>,
  standGoal?: Maybe<Scalars['Float']>,
  standComplete?: Maybe<Scalars['Boolean']>,
  exerciseMinutes?: Maybe<Scalars['Float']>,
  exerciseGoal?: Maybe<Scalars['Float']>,
  exerciseProgress?: Maybe<Scalars['Float']>,
  exerciseComplete?: Maybe<Scalars['Boolean']>,
  ringsProgress?: Maybe<Scalars['Float']>,
  ringsComplete?: Maybe<Scalars['Boolean']>,
};

/** Fitness activity update input */
export type ActivityInputUpdateType = {
  sampledOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  energy?: Maybe<Scalars['Float']>,
  energyUnit?: Maybe<Scalars['String']>,
  energyGoal?: Maybe<Scalars['Float']>,
  energyProgress?: Maybe<Scalars['Float']>,
  energyComplete?: Maybe<Scalars['Boolean']>,
  standHours?: Maybe<Scalars['Float']>,
  standProgress?: Maybe<Scalars['Float']>,
  standGoal?: Maybe<Scalars['Float']>,
  standComplete?: Maybe<Scalars['Boolean']>,
  exerciseMinutes?: Maybe<Scalars['Float']>,
  exerciseGoal?: Maybe<Scalars['Float']>,
  exerciseProgress?: Maybe<Scalars['Float']>,
  exerciseComplete?: Maybe<Scalars['Boolean']>,
  ringsProgress?: Maybe<Scalars['Float']>,
  ringsComplete?: Maybe<Scalars['Boolean']>,
};

/** Response data for activity */
export type ActivityResponse = {
  __typename?: 'activityResponse',
  response?: Maybe<ActivityType>,
};

/** Fitness activity sample */
export type ActivityType = {
  __typename?: 'ActivityType',
  id?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  energy?: Maybe<Scalars['Float']>,
  energyUnit?: Maybe<Scalars['String']>,
  energyGoal?: Maybe<Scalars['Float']>,
  energyProgress?: Maybe<Scalars['Float']>,
  energyComplete?: Maybe<Scalars['Boolean']>,
  standHours?: Maybe<Scalars['Float']>,
  standProgress?: Maybe<Scalars['Float']>,
  standGoal?: Maybe<Scalars['Float']>,
  standComplete?: Maybe<Scalars['Boolean']>,
  exerciseMinutes?: Maybe<Scalars['Float']>,
  exerciseGoal?: Maybe<Scalars['Float']>,
  exerciseProgress?: Maybe<Scalars['Float']>,
  exerciseComplete?: Maybe<Scalars['Boolean']>,
  ringsProgress?: Maybe<Scalars['Float']>,
  ringsComplete?: Maybe<Scalars['Boolean']>,
};

/** Return either be response data or error data for activity */
export type ActivityUnion = ActivityResponse | ActivityError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addActiveEnergy */
export type AddActiveEnergyResponse = {
  __typename?: 'addActiveEnergyResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addActiveEnergy */
export type AddActiveEnergyUnion = AddActiveEnergyResponse | AddActiveEnergyError;

export type AddActivityError = {
  __typename?: 'addActivityError',
  errorCode?: Maybe<AddActivityErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddActivityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addActivity */
export type AddActivityResponse = {
  __typename?: 'addActivityResponse',
  response?: Maybe<ActivityType>,
};

/** Return either be response data or error data for addActivity */
export type AddActivityUnion = AddActivityResponse | AddActivityError;

export type AddAnxietyError = {
  __typename?: 'addAnxietyError',
  errorCode?: Maybe<AddAnxietyErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddAnxietyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addAnxiety */
export type AddAnxietyResponse = {
  __typename?: 'addAnxietyResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for addAnxiety */
export type AddAnxietyUnion = AddAnxietyResponse | AddAnxietyError;

export type AddAverageMpgError = {
  __typename?: 'addAverageMPGError',
  errorCode?: Maybe<AddAverageMpgErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddAverageMpgErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addAverageMPG */
export type AddAverageMpgResponse = {
  __typename?: 'addAverageMPGResponse',
  response?: Maybe<AverageMpgType>,
};

/** Return either be response data or error data for addAverageMPG */
export type AddAverageMpgUnion = AddAverageMpgResponse | AddAverageMpgError;

export type AddBloodPressureError = {
  __typename?: 'addBloodPressureError',
  errorCode?: Maybe<AddBloodPressureErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddBloodPressureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addBloodPressure */
export type AddBloodPressureResponse = {
  __typename?: 'addBloodPressureResponse',
  response?: Maybe<BloodPressureType>,
};

/** Return either be response data or error data for addBloodPressure */
export type AddBloodPressureUnion = AddBloodPressureResponse | AddBloodPressureError;

export type AddBodyTemperatureError = {
  __typename?: 'addBodyTemperatureError',
  errorCode?: Maybe<AddBodyTemperatureErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddBodyTemperatureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addBodyTemperature */
export type AddBodyTemperatureResponse = {
  __typename?: 'addBodyTemperatureResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for addBodyTemperature */
export type AddBodyTemperatureUnion = AddBodyTemperatureResponse | AddBodyTemperatureError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addCaffeine */
export type AddCaffeineResponse = {
  __typename?: 'addCaffeineResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addCaffeine */
export type AddCaffeineUnion = AddCaffeineResponse | AddCaffeineError;

export type AddCbcError = {
  __typename?: 'addCbcError',
  errorCode?: Maybe<AddCbcErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddCbcErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addCbc */
export type AddCbcResponse = {
  __typename?: 'addCbcResponse',
  response?: Maybe<CbcType>,
};

/** Return either be response data or error data for addCbc */
export type AddCbcUnion = AddCbcResponse | AddCbcError;

export type AddCollectionError = {
  __typename?: 'addCollectionError',
  errorCode?: Maybe<AddCollectionErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddCollectionErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addCollection */
export type AddCollectionResponse = {
  __typename?: 'addCollectionResponse',
  response?: Maybe<CollectionType>,
};

/** Return either be response data or error data for addCollection */
export type AddCollectionUnion = AddCollectionResponse | AddCollectionError;

export type AddDrivingScoreError = {
  __typename?: 'addDrivingScoreError',
  errorCode?: Maybe<AddDrivingScoreErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddDrivingScoreErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addDrivingScore */
export type AddDrivingScoreResponse = {
  __typename?: 'addDrivingScoreResponse',
  response?: Maybe<DrivingScoreType>,
};

/** Return either be response data or error data for addDrivingScore */
export type AddDrivingScoreUnion = AddDrivingScoreResponse | AddDrivingScoreError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addHealthKit */
export type AddHealthKitResponse = {
  __typename?: 'addHealthKitResponse',
  response?: Maybe<Array<Maybe<HealthKitUnionType>>>,
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addHeartRateVariability */
export type AddHeartRateVariabilityResponse = {
  __typename?: 'addHeartRateVariabilityResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addHeartRateVariability */
export type AddHeartRateVariabilityUnion = AddHeartRateVariabilityResponse | AddHeartRateVariabilityError;

export type AddHeightError = {
  __typename?: 'addHeightError',
  errorCode?: Maybe<AddHeightErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddHeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addHeight */
export type AddHeightResponse = {
  __typename?: 'addHeightResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for addHeight */
export type AddHeightUnion = AddHeightResponse | AddHeightError;

export type AddMigraineError = {
  __typename?: 'addMigraineError',
  errorCode?: Maybe<AddMigraineErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddMigraineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addMigraine */
export type AddMigraineResponse = {
  __typename?: 'addMigraineResponse',
  response?: Maybe<MigraineType>,
};

/** Return either be response data or error data for addMigraine */
export type AddMigraineUnion = AddMigraineResponse | AddMigraineError;

export type AddOxygenSaturationError = {
  __typename?: 'addOxygenSaturationError',
  errorCode?: Maybe<AddOxygenSaturationErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddOxygenSaturationErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addOxygenSaturation */
export type AddOxygenSaturationResponse = {
  __typename?: 'addOxygenSaturationResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addOxygenSaturation */
export type AddOxygenSaturationUnion = AddOxygenSaturationResponse | AddOxygenSaturationError;

export type AddPlateletsError = {
  __typename?: 'addPlateletsError',
  errorCode?: Maybe<AddPlateletsErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddPlateletsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addPlatelets */
export type AddPlateletsResponse = {
  __typename?: 'addPlateletsResponse',
  response?: Maybe<PlateletType>,
};

/** Return either be response data or error data for addPlatelets */
export type AddPlateletsUnion = AddPlateletsResponse | AddPlateletsError;

export type AddRefuelError = {
  __typename?: 'addRefuelError',
  errorCode?: Maybe<AddRefuelErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddRefuelErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addRefuel */
export type AddRefuelResponse = {
  __typename?: 'addRefuelResponse',
  response?: Maybe<RefuelType>,
};

/** Return either be response data or error data for addRefuel */
export type AddRefuelUnion = AddRefuelResponse | AddRefuelError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addSleepAnalysis */
export type AddSleepAnalysisResponse = {
  __typename?: 'addSleepAnalysisResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addSleepAnalysis */
export type AddSleepAnalysisUnion = AddSleepAnalysisResponse | AddSleepAnalysisError;

export type AddSteinError = {
  __typename?: 'addSteinError',
  errorCode?: Maybe<AddSteinErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddSteinErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addStein */
export type AddSteinResponse = {
  __typename?: 'addSteinResponse',
  response?: Maybe<CollectionType>,
};

/** Return either be response data or error data for addStein */
export type AddSteinUnion = AddSteinResponse | AddSteinError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addSwimmingDistance */
export type AddSwimmingDistanceResponse = {
  __typename?: 'addSwimmingDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addSwimmingDistance */
export type AddSwimmingDistanceUnion = AddSwimmingDistanceResponse | AddSwimmingDistanceError;

export type AddWaistCircumferenceError = {
  __typename?: 'addWaistCircumferenceError',
  errorCode?: Maybe<AddWaistCircumferenceErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddWaistCircumferenceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addWaistCircumference */
export type AddWaistCircumferenceResponse = {
  __typename?: 'addWaistCircumferenceResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for addWaistCircumference */
export type AddWaistCircumferenceUnion = AddWaistCircumferenceResponse | AddWaistCircumferenceError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addWalkingRunningDistance */
export type AddWalkingRunningDistanceResponse = {
  __typename?: 'addWalkingRunningDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for addWalkingRunningDistance */
export type AddWalkingRunningDistanceUnion = AddWalkingRunningDistanceResponse | AddWalkingRunningDistanceError;

export type AddWeightError = {
  __typename?: 'addWeightError',
  errorCode?: Maybe<AddWeightErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddWeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for addWeight */
export type AddWeightResponse = {
  __typename?: 'addWeightResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for addWeight */
export type AddWeightUnion = AddWeightResponse | AddWeightError;

export type AnxietyAllError = {
  __typename?: 'anxietyAllError',
  errorCode?: Maybe<AnxietyAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AnxietyAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for anxietyAll */
export type AnxietyAllResponse = {
  __typename?: 'anxietyAllResponse',
  response?: Maybe<Array<Maybe<HealthType>>>,
};

/** Return either be response data or error data for anxietyAll */
export type AnxietyAllUnion = AnxietyAllResponse | AnxietyAllError;

export type AnxietyError = {
  __typename?: 'anxietyError',
  errorCode?: Maybe<AnxietyErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AnxietyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for anxiety */
export type AnxietyResponse = {
  __typename?: 'anxietyResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for anxiety */
export type AnxietyUnion = AnxietyResponse | AnxietyError;

export type AverageMpgAllError = {
  __typename?: 'AverageMPGAllError',
  errorCode?: Maybe<AverageMpgAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AverageMpgAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for AverageMPGAll */
export type AverageMpgAllResponse = {
  __typename?: 'AverageMPGAllResponse',
  response?: Maybe<Array<Maybe<AverageMpgType>>>,
};

/** Return either be response data or error data for AverageMPGAll */
export type AverageMpgAllUnion = AverageMpgAllResponse | AverageMpgAllError;

export type AverageMpgError = {
  __typename?: 'AverageMPGError',
  errorCode?: Maybe<AverageMpgErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AverageMpgErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Average MPG data input */
export type AverageMpgInputType = {
  value: Scalars['Float'],
  vehicle?: Maybe<VehicleType>,
  sampledOn?: Maybe<Scalars['String']>,
};

/** Average MPG data update input */
export type AverageMpgInputUpdateType = {
  value: Scalars['Float'],
  vehicle?: Maybe<VehicleType>,
  sampledOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
};

/** Response data for AverageMPG */
export type AverageMpgResponse = {
  __typename?: 'AverageMPGResponse',
  response?: Maybe<AverageMpgType>,
};

/** Average MPG sample for car */
export type AverageMpgType = {
  __typename?: 'AverageMPGType',
  id?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Float']>,
  vehicle?: Maybe<VehicleType>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
};

/** Return either be response data or error data for AverageMPG */
export type AverageMpgUnion = AverageMpgResponse | AverageMpgError;

export type BloodPressureAllError = {
  __typename?: 'bloodPressureAllError',
  errorCode?: Maybe<BloodPressureAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum BloodPressureAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for bloodPressureAll */
export type BloodPressureAllResponse = {
  __typename?: 'bloodPressureAllResponse',
  response?: Maybe<Array<Maybe<BloodPressureType>>>,
};

/** Return either be response data or error data for bloodPressureAll */
export type BloodPressureAllUnion = BloodPressureAllResponse | BloodPressureAllError;

export type BloodPressureError = {
  __typename?: 'bloodPressureError',
  errorCode?: Maybe<BloodPressureErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum BloodPressureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** BloodPressure data input */
export type BloodPressureInputType = {
  systolic?: Maybe<Scalars['Float']>,
  diastolic?: Maybe<Scalars['Float']>,
  sampledOn?: Maybe<Scalars['String']>,
};

/** BloodPressure data input for updating */
export type BloodPressureInputUpdateType = {
  systolic?: Maybe<Scalars['Float']>,
  diastolic?: Maybe<Scalars['Float']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  unit?: Maybe<UnitType>,
};

/** Response data for bloodPressure */
export type BloodPressureResponse = {
  __typename?: 'bloodPressureResponse',
  response?: Maybe<BloodPressureType>,
};

/** BloodPressure data */
export type BloodPressureType = {
  __typename?: 'BloodPressureType',
  id?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  systolic?: Maybe<Scalars['Float']>,
  diastolic?: Maybe<Scalars['Float']>,
  unit?: Maybe<UnitType>,
};

/** Return either be response data or error data for bloodPressure */
export type BloodPressureUnion = BloodPressureResponse | BloodPressureError;

export type BodyTemperatureAllError = {
  __typename?: 'bodyTemperatureAllError',
  errorCode?: Maybe<BodyTemperatureAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum BodyTemperatureAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for bodyTemperatureAll */
export type BodyTemperatureAllResponse = {
  __typename?: 'bodyTemperatureAllResponse',
  response?: Maybe<Array<Maybe<HealthType>>>,
};

/** Return either be response data or error data for bodyTemperatureAll */
export type BodyTemperatureAllUnion = BodyTemperatureAllResponse | BodyTemperatureAllError;

export type BodyTemperatureError = {
  __typename?: 'bodyTemperatureError',
  errorCode?: Maybe<BodyTemperatureErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum BodyTemperatureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for bodyTemperature */
export type BodyTemperatureResponse = {
  __typename?: 'bodyTemperatureResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for bodyTemperature */
export type BodyTemperatureUnion = BodyTemperatureResponse | BodyTemperatureError;

export type CaffeineAllError = {
  __typename?: 'caffeineAllError',
  errorCode?: Maybe<CaffeineAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum CaffeineAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for caffeineAll */
export type CaffeineAllResponse = {
  __typename?: 'caffeineAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for caffeineAll */
export type CaffeineAllUnion = CaffeineAllResponse | CaffeineAllError;

export type CaffeineError = {
  __typename?: 'caffeineError',
  errorCode?: Maybe<CaffeineErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum CaffeineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for caffeine */
export type CaffeineResponse = {
  __typename?: 'caffeineResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for caffeine */
export type CaffeineUnion = CaffeineResponse | CaffeineError;

export type CbcAllError = {
  __typename?: 'cbcAllError',
  errorCode?: Maybe<CbcAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum CbcAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for cbcAll */
export type CbcAllResponse = {
  __typename?: 'cbcAllResponse',
  response?: Maybe<Array<Maybe<CbcType>>>,
};

/** Return either be response data or error data for cbcAll */
export type CbcAllUnion = CbcAllResponse | CbcAllError;

export type CbcError = {
  __typename?: 'cbcError',
  errorCode?: Maybe<CbcErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum CbcErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Complete blood count data input */
export type CbcInputType = {
  sampledOn?: Maybe<Scalars['String']>,
  wbcCount?: Maybe<Scalars['Float']>,
  rbcCount?: Maybe<Scalars['Float']>,
  hematrocrit?: Maybe<Scalars['Float']>,
  hgb?: Maybe<Scalars['Float']>,
  mvc?: Maybe<Scalars['Float']>,
  mch?: Maybe<Scalars['Float']>,
  mchc?: Maybe<Scalars['Float']>,
  redCellDistributionWidth?: Maybe<Scalars['Float']>,
  plateletCount?: Maybe<Scalars['Float']>,
  meanPlateletVolume?: Maybe<Scalars['Float']>,
  granulocytes?: Maybe<Scalars['Float']>,
  lymphocytes?: Maybe<Scalars['Float']>,
  monocytes?: Maybe<Scalars['Float']>,
  neutrophil?: Maybe<Scalars['Float']>,
  lymphocytePercent?: Maybe<Scalars['Float']>,
  monocytePercent?: Maybe<Scalars['Float']>,
};

/** Complete blood count data update input */
export type CbcInputUpdateType = {
  sampledOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  wbcCount?: Maybe<Scalars['Float']>,
  rbcCount?: Maybe<Scalars['Float']>,
  hematrocrit?: Maybe<Scalars['Float']>,
  hgb?: Maybe<Scalars['Float']>,
  mvc?: Maybe<Scalars['Float']>,
  mch?: Maybe<Scalars['Float']>,
  mchc?: Maybe<Scalars['Float']>,
  redCellDistributionWidth?: Maybe<Scalars['Float']>,
  plateletCount?: Maybe<Scalars['Float']>,
  meanPlateletVolume?: Maybe<Scalars['Float']>,
  granulocytes?: Maybe<Scalars['Float']>,
  lymphocytes?: Maybe<Scalars['Float']>,
  monocytes?: Maybe<Scalars['Float']>,
  neutrophil?: Maybe<Scalars['Float']>,
  lymphocytePercent?: Maybe<Scalars['Float']>,
  monocytePercent?: Maybe<Scalars['Float']>,
};

/** Response data for cbc */
export type CbcResponse = {
  __typename?: 'cbcResponse',
  response?: Maybe<CbcType>,
};

/** Complete blood count data sample */
export type CbcType = {
  __typename?: 'CbcType',
  id?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  wbcCount?: Maybe<Scalars['Float']>,
  rbcCount?: Maybe<Scalars['Float']>,
  hematrocrit?: Maybe<Scalars['Float']>,
  hgb?: Maybe<Scalars['Float']>,
  mvc?: Maybe<Scalars['Float']>,
  mch?: Maybe<Scalars['Float']>,
  mchc?: Maybe<Scalars['Float']>,
  redCellDistributionWidth?: Maybe<Scalars['Float']>,
  platelets?: Maybe<PlateletType>,
  plateletsId?: Maybe<Scalars['String']>,
  meanPlateletVolume?: Maybe<Scalars['Float']>,
  granulocytes?: Maybe<Scalars['Float']>,
  lymphocytes?: Maybe<Scalars['Float']>,
  monocytes?: Maybe<Scalars['Float']>,
  neutrophil?: Maybe<Scalars['Float']>,
  lymphocytePercent?: Maybe<Scalars['Float']>,
  monocytePercent?: Maybe<Scalars['Float']>,
};

/** Return either be response data or error data for cbc */
export type CbcUnion = CbcResponse | CbcError;

/** Collection data input for incrementing count */
export type CollectionInputIncrementType = {
  increment?: Maybe<Scalars['Int']>,
};

/** Collection data input */
export type CollectionInputType = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  count?: Maybe<Scalars['Int']>,
  sampledOn?: Maybe<Scalars['String']>,
};

/** Collection data input for updating */
export type CollectionInputUpdateType = {
  shortId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  count?: Maybe<Scalars['Int']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
};

export type CollectionsAllError = {
  __typename?: 'CollectionsAllError',
  errorCode?: Maybe<CollectionsAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum CollectionsAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for CollectionsAll */
export type CollectionsAllResponse = {
  __typename?: 'CollectionsAllResponse',
  response?: Maybe<Array<Maybe<CollectionType>>>,
};

/** Return either be response data or error data for CollectionsAll */
export type CollectionsAllUnion = CollectionsAllResponse | CollectionsAllError;

export type CollectionsError = {
  __typename?: 'CollectionsError',
  errorCode?: Maybe<CollectionsErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum CollectionsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for Collections */
export type CollectionsResponse = {
  __typename?: 'CollectionsResponse',
  response?: Maybe<CollectionType>,
};

/** Return either be response data or error data for Collections */
export type CollectionsUnion = CollectionsResponse | CollectionsError;

/** Collection data */
export type CollectionType = {
  __typename?: 'CollectionType',
  id?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  shortId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  count?: Maybe<Scalars['Int']>,
};


export type DrivingScoreAllError = {
  __typename?: 'DrivingScoreAllError',
  errorCode?: Maybe<DrivingScoreAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum DrivingScoreAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for DrivingScoreAll */
export type DrivingScoreAllResponse = {
  __typename?: 'DrivingScoreAllResponse',
  response?: Maybe<Array<Maybe<DrivingScoreType>>>,
};

/** Return either be response data or error data for DrivingScoreAll */
export type DrivingScoreAllUnion = DrivingScoreAllResponse | DrivingScoreAllError;

export type DrivingScoreError = {
  __typename?: 'DrivingScoreError',
  errorCode?: Maybe<DrivingScoreErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum DrivingScoreErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Driving score data input */
export type DrivingScoreInputType = {
  accelerationScore?: Maybe<Scalars['Int']>,
  coastingScore?: Maybe<Scalars['Int']>,
  breakingScore?: Maybe<Scalars['Int']>,
  totalScore: Scalars['Int'],
  vehicle?: Maybe<VehicleType>,
  sampledOn?: Maybe<Scalars['String']>,
};

/** Driving score input for update */
export type DrivingScoreInputUpdateType = {
  accelerationScore?: Maybe<Scalars['Int']>,
  coastingScore?: Maybe<Scalars['Int']>,
  breakingScore?: Maybe<Scalars['Int']>,
  totalScore?: Maybe<Scalars['Int']>,
  vehicle?: Maybe<VehicleType>,
  sampledOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
};

/** Response data for DrivingScore */
export type DrivingScoreResponse = {
  __typename?: 'DrivingScoreResponse',
  response?: Maybe<DrivingScoreType>,
};

/** Driving score sample for car */
export type DrivingScoreType = {
  __typename?: 'DrivingScoreType',
  id?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  accelerationScore?: Maybe<Scalars['Int']>,
  coastingScore?: Maybe<Scalars['Int']>,
  breakingScore?: Maybe<Scalars['Int']>,
  totalScore?: Maybe<Scalars['Int']>,
  vehicle?: Maybe<VehicleType>,
};

/** Return either be response data or error data for DrivingScore */
export type DrivingScoreUnion = DrivingScoreResponse | DrivingScoreError;

export type FlightsClimbedAllError = {
  __typename?: 'flightsClimbedAllError',
  errorCode?: Maybe<FlightsClimbedAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum FlightsClimbedAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for flightsClimbedAll */
export type FlightsClimbedAllResponse = {
  __typename?: 'flightsClimbedAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for flightsClimbedAll */
export type FlightsClimbedAllUnion = FlightsClimbedAllResponse | FlightsClimbedAllError;

export type FlightsClimbedError = {
  __typename?: 'flightsClimbedError',
  errorCode?: Maybe<FlightsClimbedErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum FlightsClimbedErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for flightsClimbed */
export type FlightsClimbedResponse = {
  __typename?: 'flightsClimbedResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for flightsClimbed */
export type FlightsClimbedUnion = FlightsClimbedResponse | FlightsClimbedError;

/** Health data input */
export type HealthInputType = {
  value?: Maybe<Scalars['Float']>,
  sampledOn?: Maybe<Scalars['String']>,
};

/** Health data input for updating */
export type HealthInputUpdateType = {
  value?: Maybe<Scalars['Float']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  unit?: Maybe<UnitType>,
};

/** Sample item in health data */
export type HealthKitInputSampleType = {
  date?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  value: Scalars['String'],
  duration?: Maybe<Scalars['String']>,
};

/** Health data input */
export type HealthKitInputType = {
  type?: Maybe<Scalars['String']>,
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
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Float']>,
  valueType?: Maybe<Scalars['String']>,
  totalSampleValue?: Maybe<Scalars['Float']>,
  averageSampleValue?: Maybe<Scalars['Float']>,
  highestSampleValue?: Maybe<Scalars['Float']>,
  lowestSampleValue?: Maybe<Scalars['Float']>,
  sources?: Maybe<Array<Maybe<Scalars['String']>>>,
  unit?: Maybe<UnitType>,
  totalDuration?: Maybe<Scalars['String']>,
};

/** Return either HealthKittype item or Blood Pressure item */
export type HealthKitUnionType = HealthKitType | BloodPressureType;

/** Health data */
export type HealthType = {
  __typename?: 'HealthType',
  id?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Float']>,
  unit?: Maybe<UnitType>,
};

export type HeartrateAllError = {
  __typename?: 'heartrateAllError',
  errorCode?: Maybe<HeartrateAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum HeartrateAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for heartrateAll */
export type HeartrateAllResponse = {
  __typename?: 'heartrateAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for heartrateAll */
export type HeartrateAllUnion = HeartrateAllResponse | HeartrateAllError;

export type HeartrateError = {
  __typename?: 'heartrateError',
  errorCode?: Maybe<HeartrateErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum HeartrateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for heartrate */
export type HeartrateResponse = {
  __typename?: 'heartrateResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for heartrate */
export type HeartrateUnion = HeartrateResponse | HeartrateError;

export type HeartrateVariabilityAllError = {
  __typename?: 'heartrateVariabilityAllError',
  errorCode?: Maybe<HeartrateVariabilityAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum HeartrateVariabilityAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for heartrateVariabilityAll */
export type HeartrateVariabilityAllResponse = {
  __typename?: 'heartrateVariabilityAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for heartrateVariabilityAll */
export type HeartrateVariabilityAllUnion = HeartrateVariabilityAllResponse | HeartrateVariabilityAllError;

export type HeartrateVariabilityError = {
  __typename?: 'heartrateVariabilityError',
  errorCode?: Maybe<HeartrateVariabilityErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum HeartrateVariabilityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for heartrateVariability */
export type HeartrateVariabilityResponse = {
  __typename?: 'heartrateVariabilityResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for heartrateVariability */
export type HeartrateVariabilityUnion = HeartrateVariabilityResponse | HeartrateVariabilityError;

export type HeightAllError = {
  __typename?: 'heightAllError',
  errorCode?: Maybe<HeightAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum HeightAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for heightAll */
export type HeightAllResponse = {
  __typename?: 'heightAllResponse',
  response?: Maybe<Array<Maybe<HealthType>>>,
};

/** Return either be response data or error data for heightAll */
export type HeightAllUnion = HeightAllResponse | HeightAllError;

export type HeightError = {
  __typename?: 'heightError',
  errorCode?: Maybe<HeightErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum HeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for height */
export type HeightResponse = {
  __typename?: 'heightResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for height */
export type HeightUnion = HeightResponse | HeightError;

export type IncrementCollectionError = {
  __typename?: 'incrementCollectionError',
  errorCode?: Maybe<IncrementCollectionErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum IncrementCollectionErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for incrementCollection */
export type IncrementCollectionResponse = {
  __typename?: 'incrementCollectionResponse',
  response?: Maybe<CollectionType>,
};

/** Return either be response data or error data for incrementCollection */
export type IncrementCollectionUnion = IncrementCollectionResponse | IncrementCollectionError;

export type IncrementSteinError = {
  __typename?: 'incrementSteinError',
  errorCode?: Maybe<IncrementSteinErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum IncrementSteinErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for incrementStein */
export type IncrementSteinResponse = {
  __typename?: 'incrementSteinResponse',
  response?: Maybe<CollectionType>,
};

/** Return either be response data or error data for incrementStein */
export type IncrementSteinUnion = IncrementSteinResponse | IncrementSteinError;

export type MigraineAllError = {
  __typename?: 'migraineAllError',
  errorCode?: Maybe<MigraineAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum MigraineAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for migraineAll */
export type MigraineAllResponse = {
  __typename?: 'migraineAllResponse',
  response?: Maybe<Array<Maybe<MigraineType>>>,
};

/** Return either be response data or error data for migraineAll */
export type MigraineAllUnion = MigraineAllResponse | MigraineAllError;

export type MigraineError = {
  __typename?: 'migraineError',
  errorCode?: Maybe<MigraineErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum MigraineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Migraine data input */
export type MigraineInputType = {
  painLevel?: Maybe<Scalars['Int']>,
  auraLevel?: Maybe<Scalars['Int']>,
  nauseaLevel?: Maybe<Scalars['Int']>,
  auraTags?: Maybe<Array<Maybe<Scalars['String']>>>,
  description?: Maybe<Scalars['String']>,
  totalDuration?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
};

/** Migraine data input for updating */
export type MigraineInputUpdateType = {
  painLevel?: Maybe<Scalars['Int']>,
  auraLevel?: Maybe<Scalars['Int']>,
  nauseaLevel?: Maybe<Scalars['Int']>,
  auraTags?: Maybe<Array<Maybe<Scalars['String']>>>,
  description?: Maybe<Scalars['String']>,
  totalDuration?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
};

/** Response data for migraine */
export type MigraineResponse = {
  __typename?: 'migraineResponse',
  response?: Maybe<MigraineType>,
};

/** Migraine data */
export type MigraineType = {
  __typename?: 'MigraineType',
  id?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  painLevel?: Maybe<Scalars['Int']>,
  auraLevel?: Maybe<Scalars['Int']>,
  nauseaLevel?: Maybe<Scalars['Int']>,
  auraTags?: Maybe<Array<Maybe<Scalars['String']>>>,
  description?: Maybe<Scalars['String']>,
  totalDuration?: Maybe<Scalars['String']>,
};

/** Return either be response data or error data for migraine */
export type MigraineUnion = MigraineResponse | MigraineError;

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
  /** Add a OxygenSaturation node */
  addOxygenSaturation?: Maybe<AddOxygenSaturationUnion>,
  /** Update a OxygenSaturation node */
  updateOxygenSaturation?: Maybe<UpdateOxygenSaturationUnion>,
  /** Add a Activity node */
  addActivity?: Maybe<AddActivityUnion>,
  /** Update a Activity node */
  updateActivity?: Maybe<UpdateActivityUnion>,
  /** Add a Weight node */
  addWeight?: Maybe<AddWeightUnion>,
  /** Update a Weight node */
  updateWeight?: Maybe<UpdateWeightUnion>,
  /** Add a Height node */
  addHeight?: Maybe<AddHeightUnion>,
  /** Update a Height node */
  updateHeight?: Maybe<UpdateHeightUnion>,
  /** Add a BodyTemperature node */
  addBodyTemperature?: Maybe<AddBodyTemperatureUnion>,
  /** Update a BodyTemperature node */
  updateBodyTemperature?: Maybe<UpdateBodyTemperatureUnion>,
  /** Add a WaistCircumference node */
  addWaistCircumference?: Maybe<AddWaistCircumferenceUnion>,
  /** Update a WaistCircumference node */
  updateWaistCircumference?: Maybe<UpdateWaistCircumferenceUnion>,
  /** Add a Cbc node */
  addCbc?: Maybe<AddCbcUnion>,
  /** Update a Cbc node */
  updateCbc?: Maybe<UpdateCbcUnion>,
  /** Add a Platelets node */
  addPlatelets?: Maybe<AddPlateletsUnion>,
  /** Update a Platelets node */
  updatePlatelets?: Maybe<UpdatePlateletsUnion>,
  /** Add a BloodPressure node */
  addBloodPressure?: Maybe<AddBloodPressureUnion>,
  /** Update a BloodPressure node */
  updateBloodPressure?: Maybe<UpdateBloodPressureUnion>,
  /** Add a Anxiety node */
  addAnxiety?: Maybe<AddAnxietyUnion>,
  /** Update a Anxiety node */
  updateAnxiety?: Maybe<UpdateAnxietyUnion>,
  /** Add a Migraine node */
  addMigraine?: Maybe<AddMigraineUnion>,
  /** Update a Migraine node */
  updateMigraine?: Maybe<UpdateMigraineUnion>,
  /** Add a AverageMPG node */
  addAverageMPG?: Maybe<AddAverageMpgUnion>,
  /** Update a AverageMPG node */
  updateAverageMPG?: Maybe<UpdateAverageMpgUnion>,
  /** Add a DrivingScore node */
  addDrivingScore?: Maybe<AddDrivingScoreUnion>,
  /** Update a DrivingScore node */
  updateDrivingScore?: Maybe<UpdateDrivingScoreUnion>,
  /** Add a Refuel node */
  addRefuel?: Maybe<AddRefuelUnion>,
  /** Update a Refuel node */
  updateRefuel?: Maybe<UpdateRefuelUnion>,
  /** Add a Collection node */
  addCollection?: Maybe<AddCollectionUnion>,
  /** Update a Collection node */
  updateCollection?: Maybe<UpdateCollectionUnion>,
  /** Increment a Collection node */
  incrementCollection?: Maybe<IncrementCollectionUnion>,
  /** Add a Stein node */
  addStein?: Maybe<AddSteinUnion>,
  /** Update a Stein node */
  updateStein?: Maybe<UpdateSteinUnion>,
  /** Increment a Stein node */
  incrementStein?: Maybe<IncrementSteinUnion>,
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


export type MutationAddOxygenSaturationArgs = {
  input: HealthKitInputType
};


export type MutationUpdateOxygenSaturationArgs = {
  id: Scalars['ID'],
  input: HealthKitInputUpdateType
};


export type MutationAddActivityArgs = {
  input: ActivityInputType
};


export type MutationUpdateActivityArgs = {
  id: Scalars['ID'],
  input: ActivityInputUpdateType
};


export type MutationAddWeightArgs = {
  input: HealthInputType
};


export type MutationUpdateWeightArgs = {
  id: Scalars['ID'],
  input: HealthInputUpdateType
};


export type MutationAddHeightArgs = {
  input: HealthInputType
};


export type MutationUpdateHeightArgs = {
  id: Scalars['ID'],
  input: HealthInputUpdateType
};


export type MutationAddBodyTemperatureArgs = {
  input: HealthInputType
};


export type MutationUpdateBodyTemperatureArgs = {
  id: Scalars['ID'],
  input: HealthInputUpdateType
};


export type MutationAddWaistCircumferenceArgs = {
  input: HealthInputType
};


export type MutationUpdateWaistCircumferenceArgs = {
  id: Scalars['ID'],
  input: HealthInputUpdateType
};


export type MutationAddCbcArgs = {
  input: CbcInputType
};


export type MutationUpdateCbcArgs = {
  id: Scalars['ID'],
  input: CbcInputUpdateType
};


export type MutationAddPlateletsArgs = {
  input: PlateletInputType
};


export type MutationUpdatePlateletsArgs = {
  id: Scalars['ID'],
  input: PlateletInputUpdateType
};


export type MutationAddBloodPressureArgs = {
  input: BloodPressureInputType
};


export type MutationUpdateBloodPressureArgs = {
  id: Scalars['ID'],
  input: BloodPressureInputUpdateType
};


export type MutationAddAnxietyArgs = {
  input: HealthInputType
};


export type MutationUpdateAnxietyArgs = {
  id: Scalars['ID'],
  input: HealthInputUpdateType
};


export type MutationAddMigraineArgs = {
  input: MigraineInputType
};


export type MutationUpdateMigraineArgs = {
  id: Scalars['ID'],
  input: MigraineInputUpdateType
};


export type MutationAddAverageMpgArgs = {
  input: AverageMpgInputType
};


export type MutationUpdateAverageMpgArgs = {
  id: Scalars['ID'],
  input: AverageMpgInputUpdateType
};


export type MutationAddDrivingScoreArgs = {
  input: DrivingScoreInputType
};


export type MutationUpdateDrivingScoreArgs = {
  id: Scalars['ID'],
  input: DrivingScoreInputUpdateType
};


export type MutationAddRefuelArgs = {
  input: RefuelInputType
};


export type MutationUpdateRefuelArgs = {
  id: Scalars['ID'],
  input: RefuelInputUpdaetType
};


export type MutationAddCollectionArgs = {
  input: CollectionInputType
};


export type MutationUpdateCollectionArgs = {
  id: Scalars['ID'],
  input: CollectionInputUpdateType
};


export type MutationIncrementCollectionArgs = {
  id: Scalars['ID'],
  input?: Maybe<CollectionInputIncrementType>
};


export type MutationAddSteinArgs = {
  input: CollectionInputType
};


export type MutationUpdateSteinArgs = {
  id: Scalars['ID'],
  input: CollectionInputUpdateType
};


export type MutationIncrementSteinArgs = {
  id: Scalars['ID'],
  input?: Maybe<CollectionInputIncrementType>
};

export type OxygenSaturationAllError = {
  __typename?: 'oxygenSaturationAllError',
  errorCode?: Maybe<OxygenSaturationAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum OxygenSaturationAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for oxygenSaturationAll */
export type OxygenSaturationAllResponse = {
  __typename?: 'oxygenSaturationAllResponse',
  response?: Maybe<Array<Maybe<HealthType>>>,
};

/** Return either be response data or error data for oxygenSaturationAll */
export type OxygenSaturationAllUnion = OxygenSaturationAllResponse | OxygenSaturationAllError;

export type OxygenSaturationError = {
  __typename?: 'oxygenSaturationError',
  errorCode?: Maybe<OxygenSaturationErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum OxygenSaturationErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for oxygenSaturation */
export type OxygenSaturationResponse = {
  __typename?: 'oxygenSaturationResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for oxygenSaturation */
export type OxygenSaturationUnion = OxygenSaturationResponse | OxygenSaturationError;

/** Health data input */
export type PlateletInputType = {
  value: Scalars['Float'],
  sampledOn?: Maybe<Scalars['String']>,
};

/** Health data input for updating */
export type PlateletInputUpdateType = {
  value?: Maybe<Scalars['Float']>,
  unit?: Maybe<UnitType>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
};

export type PlateletsAllError = {
  __typename?: 'plateletsAllError',
  errorCode?: Maybe<PlateletsAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum PlateletsAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for plateletsAll */
export type PlateletsAllResponse = {
  __typename?: 'plateletsAllResponse',
  response?: Maybe<Array<Maybe<PlateletType>>>,
};

/** Return either be response data or error data for plateletsAll */
export type PlateletsAllUnion = PlateletsAllResponse | PlateletsAllError;

export type PlateletsError = {
  __typename?: 'plateletsError',
  errorCode?: Maybe<PlateletsErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum PlateletsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for platelets */
export type PlateletsResponse = {
  __typename?: 'plateletsResponse',
  response?: Maybe<PlateletType>,
};

/** Return either be response data or error data for platelets */
export type PlateletsUnion = PlateletsResponse | PlateletsError;

/** Health data */
export type PlateletType = {
  __typename?: 'PlateletType',
  id?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Float']>,
  unit?: Maybe<UnitType>,
  cbc?: Maybe<CbcType>,
  cbcId?: Maybe<Scalars['String']>,
};

export type RefuelAllError = {
  __typename?: 'RefuelAllError',
  errorCode?: Maybe<RefuelAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum RefuelAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for RefuelAll */
export type RefuelAllResponse = {
  __typename?: 'RefuelAllResponse',
  response?: Maybe<Array<Maybe<RefuelType>>>,
};

/** Return either be response data or error data for RefuelAll */
export type RefuelAllUnion = RefuelAllResponse | RefuelAllError;

export type RefuelError = {
  __typename?: 'RefuelError',
  errorCode?: Maybe<RefuelErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum RefuelErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Car gas refuel data input */
export type RefuelInputType = {
  gallons: Scalars['Float'],
  cost?: Maybe<Scalars['Float']>,
  vehicle?: Maybe<VehicleType>,
  sampledOn?: Maybe<Scalars['String']>,
};

/** Car gas refuel input for updating */
export type RefuelInputUpdaetType = {
  gallons?: Maybe<Scalars['Float']>,
  cost?: Maybe<Scalars['Float']>,
  vehicle?: Maybe<VehicleType>,
  sampledOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
};

/** Response data for Refuel */
export type RefuelResponse = {
  __typename?: 'RefuelResponse',
  response?: Maybe<RefuelType>,
};

/** Car gas refuel sample for car */
export type RefuelType = {
  __typename?: 'RefuelType',
  id?: Maybe<Scalars['String']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  configID?: Maybe<Scalars['String']>,
  gallons?: Maybe<Scalars['Float']>,
  cost?: Maybe<Scalars['Float']>,
  vehicle?: Maybe<VehicleType>,
};

/** Return either be response data or error data for Refuel */
export type RefuelUnion = RefuelResponse | RefuelError;

export type RestingEnergyAllError = {
  __typename?: 'restingEnergyAllError',
  errorCode?: Maybe<RestingEnergyAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum RestingEnergyAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for restingEnergyAll */
export type RestingEnergyAllResponse = {
  __typename?: 'restingEnergyAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for restingEnergyAll */
export type RestingEnergyAllUnion = RestingEnergyAllResponse | RestingEnergyAllError;

export type RestingEnergyError = {
  __typename?: 'restingEnergyError',
  errorCode?: Maybe<RestingEnergyErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum RestingEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for restingEnergy */
export type RestingEnergyResponse = {
  __typename?: 'restingEnergyResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for restingEnergy */
export type RestingEnergyUnion = RestingEnergyResponse | RestingEnergyError;

export type RestingHeartrateAllError = {
  __typename?: 'restingHeartrateAllError',
  errorCode?: Maybe<RestingHeartrateAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum RestingHeartrateAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for restingHeartrateAll */
export type RestingHeartrateAllResponse = {
  __typename?: 'restingHeartrateAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for restingHeartrateAll */
export type RestingHeartrateAllUnion = RestingHeartrateAllResponse | RestingHeartrateAllError;

export type RestingHeartrateError = {
  __typename?: 'restingHeartrateError',
  errorCode?: Maybe<RestingHeartrateErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum RestingHeartrateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for restingHeartrate */
export type RestingHeartrateResponse = {
  __typename?: 'restingHeartrateResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for restingHeartrate */
export type RestingHeartrateUnion = RestingHeartrateResponse | RestingHeartrateError;

export type RootQueryType = {
  __typename?: 'RootQueryType',
  /** Get a single steps entry by either _id or date, _id taking priority */
  step?: Maybe<StepsUnion>,
  /** Get a multiple steps entries */
  stepAll?: Maybe<StepsAllUnion>,
  /** Get a single flightsClimbed entry by either _id or date, _id taking priority */
  flightsClimbed?: Maybe<FlightsClimbedUnion>,
  /** Get a multiple flightsClimbed entries */
  flightsClimbedAll?: Maybe<FlightsClimbedAllUnion>,
  /** Get a single heartrate entry by either _id or date, _id taking priority */
  heartrate?: Maybe<HeartrateUnion>,
  /** Get a multiple heartrate entries */
  heartrateAll?: Maybe<HeartrateAllUnion>,
  /** Get a single heartrateVariability entry by either _id or date, _id taking priority */
  heartrateVariability?: Maybe<HeartrateVariabilityUnion>,
  /** Get a multiple heartrateVariability entries */
  heartrateVariabilityAll?: Maybe<HeartrateVariabilityAllUnion>,
  /** Get a single activeEnergy entry by either _id or date, _id taking priority */
  activeEnergy?: Maybe<ActiveEnergyUnion>,
  /** Get a multiple activeEnergy entries */
  activeEnergyAll?: Maybe<ActiveEnergyAllUnion>,
  /** Get a single caffeine entry by either _id or date, _id taking priority */
  caffeine?: Maybe<CaffeineUnion>,
  /** Get a multiple caffeine entries */
  caffeineAll?: Maybe<CaffeineAllUnion>,
  /** Get a single restingEnergy entry by either _id or date, _id taking priority */
  restingEnergy?: Maybe<RestingEnergyUnion>,
  /** Get a multiple restingEnergy entries */
  restingEnergyAll?: Maybe<RestingEnergyAllUnion>,
  /** Get a single restingHeartrate entry by either _id or date, _id taking priority */
  restingHeartrate?: Maybe<RestingHeartrateUnion>,
  /** Get a multiple restingHeartrate entries */
  restingHeartrateAll?: Maybe<RestingHeartrateAllUnion>,
  /** Get a single sleepAnalysis entry by either _id or date, _id taking priority */
  sleepAnalysis?: Maybe<SleepAnalysisUnion>,
  /** Get a multiple sleepAnalysis entries */
  sleepAnalysisAll?: Maybe<SleepAnalysisAllUnion>,
  /** Get a single swimmingDistance entry by either _id or date, _id taking priority */
  swimmingDistance?: Maybe<SwimmingDistanceUnion>,
  /** Get a multiple swimmingDistance entries */
  swimmingDistanceAll?: Maybe<SwimmingDistanceAllUnion>,
  /** Get a single walkingHeartrateAverage entry by either _id or date, _id taking priority */
  walkingHeartrateAverage?: Maybe<WalkingHeartrateAverageUnion>,
  /** Get a multiple walkingHeartrateAverage entries */
  walkingHeartrateAverageAll?: Maybe<WalkingHeartrateAverageAllUnion>,
  /** Get a single walkingRunningDistance entry by either _id or date, _id taking priority */
  walkingRunningDistance?: Maybe<WalkingRunningDistanceUnion>,
  /** Get a multiple walkingRunningDistance entries */
  walkingRunningDistanceAll?: Maybe<WalkingRunningDistanceAllUnion>,
  /** Get a single oxygenSaturation entry by either _id or date, _id taking priority */
  oxygenSaturation?: Maybe<OxygenSaturationUnion>,
  /** Get a multiple oxygenSaturation entries */
  oxygenSaturationAll?: Maybe<OxygenSaturationAllUnion>,
  /** Get a single activity entry by either _id or date, _id taking priority */
  activity?: Maybe<ActivityUnion>,
  /** Get a multiple activity entries */
  activityAll?: Maybe<ActivityAllUnion>,
  /** Get a single weight entry by either _id or date, _id taking priority */
  weight?: Maybe<WeightUnion>,
  /** Get a multiple weight entries */
  weightAll?: Maybe<WeightAllUnion>,
  /** Get a single height entry by either _id or date, _id taking priority */
  height?: Maybe<HeightUnion>,
  /** Get a multiple height entries */
  heightAll?: Maybe<HeightAllUnion>,
  /** Get a single bodyTemperature entry by either _id or date, _id taking priority */
  bodyTemperature?: Maybe<BodyTemperatureUnion>,
  /** Get a multiple bodyTemperature entries */
  bodyTemperatureAll?: Maybe<BodyTemperatureAllUnion>,
  /** Get a single waistCircumference entry by either _id or date, _id taking priority */
  waistCircumference?: Maybe<WaistCircumferenceUnion>,
  /** Get a multiple waistCircumference entries */
  waistCircumferenceAll?: Maybe<WaistCircumferenceAllUnion>,
  /** Get a single cbc entry by either _id or date, _id taking priority */
  cbc?: Maybe<CbcUnion>,
  /** Get a multiple cbc entries */
  cbcAll?: Maybe<CbcAllUnion>,
  /** Get a single platelets entry by either _id or date, _id taking priority */
  platelets?: Maybe<PlateletsUnion>,
  /** Get a multiple platelets entries */
  plateletsAll?: Maybe<PlateletsAllUnion>,
  /** Get a single bloodPressure entry by either _id or date, _id taking priority */
  bloodPressure?: Maybe<BloodPressureUnion>,
  /** Get a multiple bloodPressure entries */
  bloodPressureAll?: Maybe<BloodPressureAllUnion>,
  /** Get a single anxiety entry by either _id or date, _id taking priority */
  anxiety?: Maybe<AnxietyUnion>,
  /** Get a multiple anxiety entries */
  anxietyAll?: Maybe<AnxietyAllUnion>,
  /** Get a single migraine entry by either _id or date, _id taking priority */
  migraine?: Maybe<MigraineUnion>,
  /** Get a multiple migraine entries */
  migraineAll?: Maybe<MigraineAllUnion>,
  /** Get a single AverageMPG entry by either _id or date, _id taking priority */
  averageMPG?: Maybe<AverageMpgUnion>,
  /** Get a multiple AverageMPG entries */
  averageMPGAll?: Maybe<AverageMpgAllUnion>,
  /** Get a single DrivingScore entry by either _id or date, _id taking priority */
  drivingScore?: Maybe<DrivingScoreUnion>,
  /** Get a multiple DrivingScore entries */
  drivingScoreAll?: Maybe<DrivingScoreAllUnion>,
  /** Get a single Refuel entry by either _id or date, _id taking priority */
  refuel?: Maybe<RefuelUnion>,
  /** Get a multiple Refuel entries */
  refuelAll?: Maybe<RefuelAllUnion>,
  /** Get a single Collections entry by either _id or date, _id taking priority */
  collections?: Maybe<CollectionsUnion>,
  /** Get a multiple Collections entries */
  collectionsAll?: Maybe<CollectionsAllUnion>,
  /** Get a single Steins entry by either _id or date, _id taking priority */
  steins?: Maybe<SteinsUnion>,
  /** Get a multiple Steins entries */
  steinsAll?: Maybe<SteinsAllUnion>,
};


export type RootQueryTypeStepArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeStepAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeFlightsClimbedArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeFlightsClimbedAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeHeartrateArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeHeartrateAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeHeartrateVariabilityArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeHeartrateVariabilityAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeActiveEnergyArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeActiveEnergyAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeCaffeineArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeCaffeineAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeRestingEnergyArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeRestingEnergyAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeRestingHeartrateArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeRestingHeartrateAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeSleepAnalysisArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeSleepAnalysisAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeSwimmingDistanceArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeSwimmingDistanceAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeWalkingHeartrateAverageArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeWalkingHeartrateAverageAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeWalkingRunningDistanceArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeWalkingRunningDistanceAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeOxygenSaturationArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeOxygenSaturationAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeActivityArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeActivityAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeWeightArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeWeightAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeHeightArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeHeightAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeBodyTemperatureArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeBodyTemperatureAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeWaistCircumferenceArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeWaistCircumferenceAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeCbcArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeCbcAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypePlateletsArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypePlateletsAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeBloodPressureArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeBloodPressureAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeAnxietyArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeAnxietyAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeMigraineArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeMigraineAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeAverageMpgArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeAverageMpgAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeDrivingScoreArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeDrivingScoreAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeRefuelArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeRefuelAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeCollectionsArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeCollectionsAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};


export type RootQueryTypeSteinsArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};


export type RootQueryTypeSteinsAllArgs = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Date']>,
  before?: Maybe<Scalars['Date']>,
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateBy?: Maybe<Scalars['String']>
};

export type SleepAnalysisAllError = {
  __typename?: 'sleepAnalysisAllError',
  errorCode?: Maybe<SleepAnalysisAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum SleepAnalysisAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for sleepAnalysisAll */
export type SleepAnalysisAllResponse = {
  __typename?: 'sleepAnalysisAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for sleepAnalysisAll */
export type SleepAnalysisAllUnion = SleepAnalysisAllResponse | SleepAnalysisAllError;

export type SleepAnalysisError = {
  __typename?: 'sleepAnalysisError',
  errorCode?: Maybe<SleepAnalysisErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum SleepAnalysisErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for sleepAnalysis */
export type SleepAnalysisResponse = {
  __typename?: 'sleepAnalysisResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for sleepAnalysis */
export type SleepAnalysisUnion = SleepAnalysisResponse | SleepAnalysisError;

export type SteinsAllError = {
  __typename?: 'SteinsAllError',
  errorCode?: Maybe<SteinsAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum SteinsAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for SteinsAll */
export type SteinsAllResponse = {
  __typename?: 'SteinsAllResponse',
  response?: Maybe<Array<Maybe<CollectionType>>>,
};

/** Return either be response data or error data for SteinsAll */
export type SteinsAllUnion = SteinsAllResponse | SteinsAllError;

export type SteinsError = {
  __typename?: 'SteinsError',
  errorCode?: Maybe<SteinsErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum SteinsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for Steins */
export type SteinsResponse = {
  __typename?: 'SteinsResponse',
  response?: Maybe<CollectionType>,
};

/** Return either be response data or error data for Steins */
export type SteinsUnion = SteinsResponse | SteinsError;

export type StepsAllError = {
  __typename?: 'stepsAllError',
  errorCode?: Maybe<StepsAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum StepsAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for stepsAll */
export type StepsAllResponse = {
  __typename?: 'stepsAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for stepsAll */
export type StepsAllUnion = StepsAllResponse | StepsAllError;

export type StepsError = {
  __typename?: 'stepsError',
  errorCode?: Maybe<StepsErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum StepsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for steps */
export type StepsResponse = {
  __typename?: 'stepsResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for steps */
export type StepsUnion = StepsResponse | StepsError;

export type SwimmingDistanceAllError = {
  __typename?: 'swimmingDistanceAllError',
  errorCode?: Maybe<SwimmingDistanceAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum SwimmingDistanceAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for swimmingDistanceAll */
export type SwimmingDistanceAllResponse = {
  __typename?: 'swimmingDistanceAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for swimmingDistanceAll */
export type SwimmingDistanceAllUnion = SwimmingDistanceAllResponse | SwimmingDistanceAllError;

export type SwimmingDistanceError = {
  __typename?: 'swimmingDistanceError',
  errorCode?: Maybe<SwimmingDistanceErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum SwimmingDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for swimmingDistance */
export type SwimmingDistanceResponse = {
  __typename?: 'swimmingDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for swimmingDistance */
export type SwimmingDistanceUnion = SwimmingDistanceResponse | SwimmingDistanceError;

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
  Hrs = 'hrs',
  DegreesF = 'degreesF',
  ThousandUL = 'Thousand_uL',
  AnxietyRating = 'anxietyRating'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateActiveEnergy */
export type UpdateActiveEnergyResponse = {
  __typename?: 'updateActiveEnergyResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateActiveEnergy */
export type UpdateActiveEnergyUnion = UpdateActiveEnergyResponse | UpdateActiveEnergyError;

export type UpdateActivityError = {
  __typename?: 'updateActivityError',
  errorCode?: Maybe<UpdateActivityErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateActivityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateActivity */
export type UpdateActivityResponse = {
  __typename?: 'updateActivityResponse',
  response?: Maybe<ActivityType>,
};

/** Return either be response data or error data for updateActivity */
export type UpdateActivityUnion = UpdateActivityResponse | UpdateActivityError;

export type UpdateAnxietyError = {
  __typename?: 'updateAnxietyError',
  errorCode?: Maybe<UpdateAnxietyErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateAnxietyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateAnxiety */
export type UpdateAnxietyResponse = {
  __typename?: 'updateAnxietyResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for updateAnxiety */
export type UpdateAnxietyUnion = UpdateAnxietyResponse | UpdateAnxietyError;

export type UpdateAverageMpgError = {
  __typename?: 'updateAverageMPGError',
  errorCode?: Maybe<UpdateAverageMpgErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateAverageMpgErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateAverageMPG */
export type UpdateAverageMpgResponse = {
  __typename?: 'updateAverageMPGResponse',
  response?: Maybe<AverageMpgType>,
};

/** Return either be response data or error data for updateAverageMPG */
export type UpdateAverageMpgUnion = UpdateAverageMpgResponse | UpdateAverageMpgError;

export type UpdateBloodPressureError = {
  __typename?: 'updateBloodPressureError',
  errorCode?: Maybe<UpdateBloodPressureErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateBloodPressureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateBloodPressure */
export type UpdateBloodPressureResponse = {
  __typename?: 'updateBloodPressureResponse',
  response?: Maybe<BloodPressureType>,
};

/** Return either be response data or error data for updateBloodPressure */
export type UpdateBloodPressureUnion = UpdateBloodPressureResponse | UpdateBloodPressureError;

export type UpdateBodyTemperatureError = {
  __typename?: 'updateBodyTemperatureError',
  errorCode?: Maybe<UpdateBodyTemperatureErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateBodyTemperatureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateBodyTemperature */
export type UpdateBodyTemperatureResponse = {
  __typename?: 'updateBodyTemperatureResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for updateBodyTemperature */
export type UpdateBodyTemperatureUnion = UpdateBodyTemperatureResponse | UpdateBodyTemperatureError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateCaffeine */
export type UpdateCaffeineResponse = {
  __typename?: 'updateCaffeineResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateCaffeine */
export type UpdateCaffeineUnion = UpdateCaffeineResponse | UpdateCaffeineError;

export type UpdateCbcError = {
  __typename?: 'updateCbcError',
  errorCode?: Maybe<UpdateCbcErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateCbcErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateCbc */
export type UpdateCbcResponse = {
  __typename?: 'updateCbcResponse',
  response?: Maybe<CbcType>,
};

/** Return either be response data or error data for updateCbc */
export type UpdateCbcUnion = UpdateCbcResponse | UpdateCbcError;

export type UpdateCollectionError = {
  __typename?: 'updateCollectionError',
  errorCode?: Maybe<UpdateCollectionErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateCollectionErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateCollection */
export type UpdateCollectionResponse = {
  __typename?: 'updateCollectionResponse',
  response?: Maybe<CollectionType>,
};

/** Return either be response data or error data for updateCollection */
export type UpdateCollectionUnion = UpdateCollectionResponse | UpdateCollectionError;

export type UpdateDrivingScoreError = {
  __typename?: 'updateDrivingScoreError',
  errorCode?: Maybe<UpdateDrivingScoreErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateDrivingScoreErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateDrivingScore */
export type UpdateDrivingScoreResponse = {
  __typename?: 'updateDrivingScoreResponse',
  response?: Maybe<DrivingScoreType>,
};

/** Return either be response data or error data for updateDrivingScore */
export type UpdateDrivingScoreUnion = UpdateDrivingScoreResponse | UpdateDrivingScoreError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateHeartRateVariability */
export type UpdateHeartRateVariabilityResponse = {
  __typename?: 'updateHeartRateVariabilityResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateHeartRateVariability */
export type UpdateHeartRateVariabilityUnion = UpdateHeartRateVariabilityResponse | UpdateHeartRateVariabilityError;

export type UpdateHeightError = {
  __typename?: 'updateHeightError',
  errorCode?: Maybe<UpdateHeightErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateHeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateHeight */
export type UpdateHeightResponse = {
  __typename?: 'updateHeightResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for updateHeight */
export type UpdateHeightUnion = UpdateHeightResponse | UpdateHeightError;

export type UpdateMigraineError = {
  __typename?: 'updateMigraineError',
  errorCode?: Maybe<UpdateMigraineErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateMigraineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateMigraine */
export type UpdateMigraineResponse = {
  __typename?: 'updateMigraineResponse',
  response?: Maybe<MigraineType>,
};

/** Return either be response data or error data for updateMigraine */
export type UpdateMigraineUnion = UpdateMigraineResponse | UpdateMigraineError;

export type UpdateOxygenSaturationError = {
  __typename?: 'updateOxygenSaturationError',
  errorCode?: Maybe<UpdateOxygenSaturationErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateOxygenSaturationErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateOxygenSaturation */
export type UpdateOxygenSaturationResponse = {
  __typename?: 'updateOxygenSaturationResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateOxygenSaturation */
export type UpdateOxygenSaturationUnion = UpdateOxygenSaturationResponse | UpdateOxygenSaturationError;

export type UpdatePlateletsError = {
  __typename?: 'updatePlateletsError',
  errorCode?: Maybe<UpdatePlateletsErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdatePlateletsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updatePlatelets */
export type UpdatePlateletsResponse = {
  __typename?: 'updatePlateletsResponse',
  response?: Maybe<PlateletType>,
};

/** Return either be response data or error data for updatePlatelets */
export type UpdatePlateletsUnion = UpdatePlateletsResponse | UpdatePlateletsError;

export type UpdateRefuelError = {
  __typename?: 'updateRefuelError',
  errorCode?: Maybe<UpdateRefuelErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateRefuelErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateRefuel */
export type UpdateRefuelResponse = {
  __typename?: 'updateRefuelResponse',
  response?: Maybe<RefuelType>,
};

/** Return either be response data or error data for updateRefuel */
export type UpdateRefuelUnion = UpdateRefuelResponse | UpdateRefuelError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateSleepAnalysis */
export type UpdateSleepAnalysisResponse = {
  __typename?: 'updateSleepAnalysisResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateSleepAnalysis */
export type UpdateSleepAnalysisUnion = UpdateSleepAnalysisResponse | UpdateSleepAnalysisError;

export type UpdateSteinError = {
  __typename?: 'updateSteinError',
  errorCode?: Maybe<UpdateSteinErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateSteinErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateStein */
export type UpdateSteinResponse = {
  __typename?: 'updateSteinResponse',
  response?: Maybe<CollectionType>,
};

/** Return either be response data or error data for updateStein */
export type UpdateSteinUnion = UpdateSteinResponse | UpdateSteinError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateSwimmingDistance */
export type UpdateSwimmingDistanceResponse = {
  __typename?: 'updateSwimmingDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateSwimmingDistance */
export type UpdateSwimmingDistanceUnion = UpdateSwimmingDistanceResponse | UpdateSwimmingDistanceError;

export type UpdateWaistCircumferenceError = {
  __typename?: 'updateWaistCircumferenceError',
  errorCode?: Maybe<UpdateWaistCircumferenceErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateWaistCircumferenceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateWaistCircumference */
export type UpdateWaistCircumferenceResponse = {
  __typename?: 'updateWaistCircumferenceResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for updateWaistCircumference */
export type UpdateWaistCircumferenceUnion = UpdateWaistCircumferenceResponse | UpdateWaistCircumferenceError;

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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
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
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateWalkingRunningDistance */
export type UpdateWalkingRunningDistanceResponse = {
  __typename?: 'updateWalkingRunningDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for updateWalkingRunningDistance */
export type UpdateWalkingRunningDistanceUnion = UpdateWalkingRunningDistanceResponse | UpdateWalkingRunningDistanceError;

export type UpdateWeightError = {
  __typename?: 'updateWeightError',
  errorCode?: Maybe<UpdateWeightErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateWeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for updateWeight */
export type UpdateWeightResponse = {
  __typename?: 'updateWeightResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for updateWeight */
export type UpdateWeightUnion = UpdateWeightResponse | UpdateWeightError;

/** Acceptable vehicles for car data */
export enum VehicleType {
  PriusPrime = 'priusPrime',
  Crv = 'crv'
}

export type WaistCircumferenceAllError = {
  __typename?: 'waistCircumferenceAllError',
  errorCode?: Maybe<WaistCircumferenceAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum WaistCircumferenceAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for waistCircumferenceAll */
export type WaistCircumferenceAllResponse = {
  __typename?: 'waistCircumferenceAllResponse',
  response?: Maybe<Array<Maybe<HealthType>>>,
};

/** Return either be response data or error data for waistCircumferenceAll */
export type WaistCircumferenceAllUnion = WaistCircumferenceAllResponse | WaistCircumferenceAllError;

export type WaistCircumferenceError = {
  __typename?: 'waistCircumferenceError',
  errorCode?: Maybe<WaistCircumferenceErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum WaistCircumferenceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for waistCircumference */
export type WaistCircumferenceResponse = {
  __typename?: 'waistCircumferenceResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for waistCircumference */
export type WaistCircumferenceUnion = WaistCircumferenceResponse | WaistCircumferenceError;

export type WalkingHeartrateAverageAllError = {
  __typename?: 'walkingHeartrateAverageAllError',
  errorCode?: Maybe<WalkingHeartrateAverageAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum WalkingHeartrateAverageAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for walkingHeartrateAverageAll */
export type WalkingHeartrateAverageAllResponse = {
  __typename?: 'walkingHeartrateAverageAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for walkingHeartrateAverageAll */
export type WalkingHeartrateAverageAllUnion = WalkingHeartrateAverageAllResponse | WalkingHeartrateAverageAllError;

export type WalkingHeartrateAverageError = {
  __typename?: 'walkingHeartrateAverageError',
  errorCode?: Maybe<WalkingHeartrateAverageErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum WalkingHeartrateAverageErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for walkingHeartrateAverage */
export type WalkingHeartrateAverageResponse = {
  __typename?: 'walkingHeartrateAverageResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for walkingHeartrateAverage */
export type WalkingHeartrateAverageUnion = WalkingHeartrateAverageResponse | WalkingHeartrateAverageError;

export type WalkingRunningDistanceAllError = {
  __typename?: 'walkingRunningDistanceAllError',
  errorCode?: Maybe<WalkingRunningDistanceAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum WalkingRunningDistanceAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for walkingRunningDistanceAll */
export type WalkingRunningDistanceAllResponse = {
  __typename?: 'walkingRunningDistanceAllResponse',
  response?: Maybe<Array<Maybe<HealthKitType>>>,
};

/** Return either be response data or error data for walkingRunningDistanceAll */
export type WalkingRunningDistanceAllUnion = WalkingRunningDistanceAllResponse | WalkingRunningDistanceAllError;

export type WalkingRunningDistanceError = {
  __typename?: 'walkingRunningDistanceError',
  errorCode?: Maybe<WalkingRunningDistanceErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum WalkingRunningDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for walkingRunningDistance */
export type WalkingRunningDistanceResponse = {
  __typename?: 'walkingRunningDistanceResponse',
  response?: Maybe<HealthKitType>,
};

/** Return either be response data or error data for walkingRunningDistance */
export type WalkingRunningDistanceUnion = WalkingRunningDistanceResponse | WalkingRunningDistanceError;

export type WeightAllError = {
  __typename?: 'weightAllError',
  errorCode?: Maybe<WeightAllErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum WeightAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for weightAll */
export type WeightAllResponse = {
  __typename?: 'weightAllResponse',
  response?: Maybe<Array<Maybe<HealthType>>>,
};

/** Return either be response data or error data for weightAll */
export type WeightAllUnion = WeightAllResponse | WeightAllError;

export type WeightError = {
  __typename?: 'weightError',
  errorCode?: Maybe<WeightErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum WeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to add healthkit item */
  AddHealthkitError = 'ADD_HEALTHKIT_ERROR',
  /** An error occured trying to replace a healthkit item */
  ReplaceHealthkitError = 'REPLACE_HEALTHKIT_ERROR',
  /** An error occured trying to update a healthkit item */
  UpdateHealthkitError = 'UPDATE_HEALTHKIT_ERROR',
  /** Not a valid healthkit type */
  InvalidHealthkitType = 'INVALID_HEALTHKIT_TYPE',
  /** Healthkit type has been disabled */
  DisabledHealthkitType = 'DISABLED_HEALTHKIT_TYPE',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** An error occured trying to replace a health item */
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  /** An error occured trying to update a health item */
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  /** Health type has been disabled */
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT',
  /** Car type has been disabled */
  DisabledCarType = 'DISABLED_CAR_TYPE',
  /** An error occured trying to add car average mpg */
  AddCarError = 'ADD_CAR_ERROR',
  /** An error occured trying to update a car average mpg item */
  UpdateCarError = 'UPDATE_CAR_ERROR',
  /** CBC type has been disabled */
  DisabledCbcType = 'DISABLED_CBC_TYPE',
  /** An error occured trying to add CBC item */
  AddCbcError = 'ADD_CBC_ERROR',
  /** An error occured trying to update a CBC item */
  UpdateCbcError = 'UPDATE_CBC_ERROR',
  /** This collection type has been disabled */
  DisabledCollectionType = 'DISABLED_COLLECTION_TYPE',
  /** An error occured trying to add collection item */
  AddCollectionError = 'ADD_COLLECTION_ERROR',
  /** An error occured trying to update a collection item */
  UpdateCollectionError = 'UPDATE_COLLECTION_ERROR',
  /** An error occured trying to increment a collection item */
  IncrementCollectionError = 'INCREMENT_COLLECTION_ERROR'
}

/** Response data for weight */
export type WeightResponse = {
  __typename?: 'weightResponse',
  response?: Maybe<HealthType>,
};

/** Return either be response data or error data for weight */
export type WeightUnion = WeightResponse | WeightError;



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
  stepsUnion: ResolversTypes['stepsResponse'] | ResolversTypes['stepsError'],
  stepsResponse: ResolverTypeWrapper<StepsResponse>,
  HealthKitType: ResolverTypeWrapper<HealthKitType>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  UnitType: UnitType,
  stepsError: ResolverTypeWrapper<StepsError>,
  stepsErrorErrorCodesType: StepsErrorErrorCodesType,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  stepsAllUnion: ResolversTypes['stepsAllResponse'] | ResolversTypes['stepsAllError'],
  stepsAllResponse: ResolverTypeWrapper<StepsAllResponse>,
  stepsAllError: ResolverTypeWrapper<StepsAllError>,
  stepsAllErrorErrorCodesType: StepsAllErrorErrorCodesType,
  flightsClimbedUnion: ResolversTypes['flightsClimbedResponse'] | ResolversTypes['flightsClimbedError'],
  flightsClimbedResponse: ResolverTypeWrapper<FlightsClimbedResponse>,
  flightsClimbedError: ResolverTypeWrapper<FlightsClimbedError>,
  flightsClimbedErrorErrorCodesType: FlightsClimbedErrorErrorCodesType,
  flightsClimbedAllUnion: ResolversTypes['flightsClimbedAllResponse'] | ResolversTypes['flightsClimbedAllError'],
  flightsClimbedAllResponse: ResolverTypeWrapper<FlightsClimbedAllResponse>,
  flightsClimbedAllError: ResolverTypeWrapper<FlightsClimbedAllError>,
  flightsClimbedAllErrorErrorCodesType: FlightsClimbedAllErrorErrorCodesType,
  heartrateUnion: ResolversTypes['heartrateResponse'] | ResolversTypes['heartrateError'],
  heartrateResponse: ResolverTypeWrapper<HeartrateResponse>,
  heartrateError: ResolverTypeWrapper<HeartrateError>,
  heartrateErrorErrorCodesType: HeartrateErrorErrorCodesType,
  heartrateAllUnion: ResolversTypes['heartrateAllResponse'] | ResolversTypes['heartrateAllError'],
  heartrateAllResponse: ResolverTypeWrapper<HeartrateAllResponse>,
  heartrateAllError: ResolverTypeWrapper<HeartrateAllError>,
  heartrateAllErrorErrorCodesType: HeartrateAllErrorErrorCodesType,
  heartrateVariabilityUnion: ResolversTypes['heartrateVariabilityResponse'] | ResolversTypes['heartrateVariabilityError'],
  heartrateVariabilityResponse: ResolverTypeWrapper<HeartrateVariabilityResponse>,
  heartrateVariabilityError: ResolverTypeWrapper<HeartrateVariabilityError>,
  heartrateVariabilityErrorErrorCodesType: HeartrateVariabilityErrorErrorCodesType,
  heartrateVariabilityAllUnion: ResolversTypes['heartrateVariabilityAllResponse'] | ResolversTypes['heartrateVariabilityAllError'],
  heartrateVariabilityAllResponse: ResolverTypeWrapper<HeartrateVariabilityAllResponse>,
  heartrateVariabilityAllError: ResolverTypeWrapper<HeartrateVariabilityAllError>,
  heartrateVariabilityAllErrorErrorCodesType: HeartrateVariabilityAllErrorErrorCodesType,
  activeEnergyUnion: ResolversTypes['activeEnergyResponse'] | ResolversTypes['activeEnergyError'],
  activeEnergyResponse: ResolverTypeWrapper<ActiveEnergyResponse>,
  activeEnergyError: ResolverTypeWrapper<ActiveEnergyError>,
  activeEnergyErrorErrorCodesType: ActiveEnergyErrorErrorCodesType,
  activeEnergyAllUnion: ResolversTypes['activeEnergyAllResponse'] | ResolversTypes['activeEnergyAllError'],
  activeEnergyAllResponse: ResolverTypeWrapper<ActiveEnergyAllResponse>,
  activeEnergyAllError: ResolverTypeWrapper<ActiveEnergyAllError>,
  activeEnergyAllErrorErrorCodesType: ActiveEnergyAllErrorErrorCodesType,
  caffeineUnion: ResolversTypes['caffeineResponse'] | ResolversTypes['caffeineError'],
  caffeineResponse: ResolverTypeWrapper<CaffeineResponse>,
  caffeineError: ResolverTypeWrapper<CaffeineError>,
  caffeineErrorErrorCodesType: CaffeineErrorErrorCodesType,
  caffeineAllUnion: ResolversTypes['caffeineAllResponse'] | ResolversTypes['caffeineAllError'],
  caffeineAllResponse: ResolverTypeWrapper<CaffeineAllResponse>,
  caffeineAllError: ResolverTypeWrapper<CaffeineAllError>,
  caffeineAllErrorErrorCodesType: CaffeineAllErrorErrorCodesType,
  restingEnergyUnion: ResolversTypes['restingEnergyResponse'] | ResolversTypes['restingEnergyError'],
  restingEnergyResponse: ResolverTypeWrapper<RestingEnergyResponse>,
  restingEnergyError: ResolverTypeWrapper<RestingEnergyError>,
  restingEnergyErrorErrorCodesType: RestingEnergyErrorErrorCodesType,
  restingEnergyAllUnion: ResolversTypes['restingEnergyAllResponse'] | ResolversTypes['restingEnergyAllError'],
  restingEnergyAllResponse: ResolverTypeWrapper<RestingEnergyAllResponse>,
  restingEnergyAllError: ResolverTypeWrapper<RestingEnergyAllError>,
  restingEnergyAllErrorErrorCodesType: RestingEnergyAllErrorErrorCodesType,
  restingHeartrateUnion: ResolversTypes['restingHeartrateResponse'] | ResolversTypes['restingHeartrateError'],
  restingHeartrateResponse: ResolverTypeWrapper<RestingHeartrateResponse>,
  restingHeartrateError: ResolverTypeWrapper<RestingHeartrateError>,
  restingHeartrateErrorErrorCodesType: RestingHeartrateErrorErrorCodesType,
  restingHeartrateAllUnion: ResolversTypes['restingHeartrateAllResponse'] | ResolversTypes['restingHeartrateAllError'],
  restingHeartrateAllResponse: ResolverTypeWrapper<RestingHeartrateAllResponse>,
  restingHeartrateAllError: ResolverTypeWrapper<RestingHeartrateAllError>,
  restingHeartrateAllErrorErrorCodesType: RestingHeartrateAllErrorErrorCodesType,
  sleepAnalysisUnion: ResolversTypes['sleepAnalysisResponse'] | ResolversTypes['sleepAnalysisError'],
  sleepAnalysisResponse: ResolverTypeWrapper<SleepAnalysisResponse>,
  sleepAnalysisError: ResolverTypeWrapper<SleepAnalysisError>,
  sleepAnalysisErrorErrorCodesType: SleepAnalysisErrorErrorCodesType,
  sleepAnalysisAllUnion: ResolversTypes['sleepAnalysisAllResponse'] | ResolversTypes['sleepAnalysisAllError'],
  sleepAnalysisAllResponse: ResolverTypeWrapper<SleepAnalysisAllResponse>,
  sleepAnalysisAllError: ResolverTypeWrapper<SleepAnalysisAllError>,
  sleepAnalysisAllErrorErrorCodesType: SleepAnalysisAllErrorErrorCodesType,
  swimmingDistanceUnion: ResolversTypes['swimmingDistanceResponse'] | ResolversTypes['swimmingDistanceError'],
  swimmingDistanceResponse: ResolverTypeWrapper<SwimmingDistanceResponse>,
  swimmingDistanceError: ResolverTypeWrapper<SwimmingDistanceError>,
  swimmingDistanceErrorErrorCodesType: SwimmingDistanceErrorErrorCodesType,
  swimmingDistanceAllUnion: ResolversTypes['swimmingDistanceAllResponse'] | ResolversTypes['swimmingDistanceAllError'],
  swimmingDistanceAllResponse: ResolverTypeWrapper<SwimmingDistanceAllResponse>,
  swimmingDistanceAllError: ResolverTypeWrapper<SwimmingDistanceAllError>,
  swimmingDistanceAllErrorErrorCodesType: SwimmingDistanceAllErrorErrorCodesType,
  walkingHeartrateAverageUnion: ResolversTypes['walkingHeartrateAverageResponse'] | ResolversTypes['walkingHeartrateAverageError'],
  walkingHeartrateAverageResponse: ResolverTypeWrapper<WalkingHeartrateAverageResponse>,
  walkingHeartrateAverageError: ResolverTypeWrapper<WalkingHeartrateAverageError>,
  walkingHeartrateAverageErrorErrorCodesType: WalkingHeartrateAverageErrorErrorCodesType,
  walkingHeartrateAverageAllUnion: ResolversTypes['walkingHeartrateAverageAllResponse'] | ResolversTypes['walkingHeartrateAverageAllError'],
  walkingHeartrateAverageAllResponse: ResolverTypeWrapper<WalkingHeartrateAverageAllResponse>,
  walkingHeartrateAverageAllError: ResolverTypeWrapper<WalkingHeartrateAverageAllError>,
  walkingHeartrateAverageAllErrorErrorCodesType: WalkingHeartrateAverageAllErrorErrorCodesType,
  walkingRunningDistanceUnion: ResolversTypes['walkingRunningDistanceResponse'] | ResolversTypes['walkingRunningDistanceError'],
  walkingRunningDistanceResponse: ResolverTypeWrapper<WalkingRunningDistanceResponse>,
  walkingRunningDistanceError: ResolverTypeWrapper<WalkingRunningDistanceError>,
  walkingRunningDistanceErrorErrorCodesType: WalkingRunningDistanceErrorErrorCodesType,
  walkingRunningDistanceAllUnion: ResolversTypes['walkingRunningDistanceAllResponse'] | ResolversTypes['walkingRunningDistanceAllError'],
  walkingRunningDistanceAllResponse: ResolverTypeWrapper<WalkingRunningDistanceAllResponse>,
  walkingRunningDistanceAllError: ResolverTypeWrapper<WalkingRunningDistanceAllError>,
  walkingRunningDistanceAllErrorErrorCodesType: WalkingRunningDistanceAllErrorErrorCodesType,
  oxygenSaturationUnion: ResolversTypes['oxygenSaturationResponse'] | ResolversTypes['oxygenSaturationError'],
  oxygenSaturationResponse: ResolverTypeWrapper<OxygenSaturationResponse>,
  HealthType: ResolverTypeWrapper<HealthType>,
  oxygenSaturationError: ResolverTypeWrapper<OxygenSaturationError>,
  oxygenSaturationErrorErrorCodesType: OxygenSaturationErrorErrorCodesType,
  oxygenSaturationAllUnion: ResolversTypes['oxygenSaturationAllResponse'] | ResolversTypes['oxygenSaturationAllError'],
  oxygenSaturationAllResponse: ResolverTypeWrapper<OxygenSaturationAllResponse>,
  oxygenSaturationAllError: ResolverTypeWrapper<OxygenSaturationAllError>,
  oxygenSaturationAllErrorErrorCodesType: OxygenSaturationAllErrorErrorCodesType,
  activityUnion: ResolversTypes['activityResponse'] | ResolversTypes['activityError'],
  activityResponse: ResolverTypeWrapper<ActivityResponse>,
  ActivityType: ResolverTypeWrapper<ActivityType>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  activityError: ResolverTypeWrapper<ActivityError>,
  activityErrorErrorCodesType: ActivityErrorErrorCodesType,
  activityAllUnion: ResolversTypes['activityAllResponse'] | ResolversTypes['activityAllError'],
  activityAllResponse: ResolverTypeWrapper<ActivityAllResponse>,
  activityAllError: ResolverTypeWrapper<ActivityAllError>,
  activityAllErrorErrorCodesType: ActivityAllErrorErrorCodesType,
  weightUnion: ResolversTypes['weightResponse'] | ResolversTypes['weightError'],
  weightResponse: ResolverTypeWrapper<WeightResponse>,
  weightError: ResolverTypeWrapper<WeightError>,
  weightErrorErrorCodesType: WeightErrorErrorCodesType,
  weightAllUnion: ResolversTypes['weightAllResponse'] | ResolversTypes['weightAllError'],
  weightAllResponse: ResolverTypeWrapper<WeightAllResponse>,
  weightAllError: ResolverTypeWrapper<WeightAllError>,
  weightAllErrorErrorCodesType: WeightAllErrorErrorCodesType,
  heightUnion: ResolversTypes['heightResponse'] | ResolversTypes['heightError'],
  heightResponse: ResolverTypeWrapper<HeightResponse>,
  heightError: ResolverTypeWrapper<HeightError>,
  heightErrorErrorCodesType: HeightErrorErrorCodesType,
  heightAllUnion: ResolversTypes['heightAllResponse'] | ResolversTypes['heightAllError'],
  heightAllResponse: ResolverTypeWrapper<HeightAllResponse>,
  heightAllError: ResolverTypeWrapper<HeightAllError>,
  heightAllErrorErrorCodesType: HeightAllErrorErrorCodesType,
  bodyTemperatureUnion: ResolversTypes['bodyTemperatureResponse'] | ResolversTypes['bodyTemperatureError'],
  bodyTemperatureResponse: ResolverTypeWrapper<BodyTemperatureResponse>,
  bodyTemperatureError: ResolverTypeWrapper<BodyTemperatureError>,
  bodyTemperatureErrorErrorCodesType: BodyTemperatureErrorErrorCodesType,
  bodyTemperatureAllUnion: ResolversTypes['bodyTemperatureAllResponse'] | ResolversTypes['bodyTemperatureAllError'],
  bodyTemperatureAllResponse: ResolverTypeWrapper<BodyTemperatureAllResponse>,
  bodyTemperatureAllError: ResolverTypeWrapper<BodyTemperatureAllError>,
  bodyTemperatureAllErrorErrorCodesType: BodyTemperatureAllErrorErrorCodesType,
  waistCircumferenceUnion: ResolversTypes['waistCircumferenceResponse'] | ResolversTypes['waistCircumferenceError'],
  waistCircumferenceResponse: ResolverTypeWrapper<WaistCircumferenceResponse>,
  waistCircumferenceError: ResolverTypeWrapper<WaistCircumferenceError>,
  waistCircumferenceErrorErrorCodesType: WaistCircumferenceErrorErrorCodesType,
  waistCircumferenceAllUnion: ResolversTypes['waistCircumferenceAllResponse'] | ResolversTypes['waistCircumferenceAllError'],
  waistCircumferenceAllResponse: ResolverTypeWrapper<WaistCircumferenceAllResponse>,
  waistCircumferenceAllError: ResolverTypeWrapper<WaistCircumferenceAllError>,
  waistCircumferenceAllErrorErrorCodesType: WaistCircumferenceAllErrorErrorCodesType,
  cbcUnion: ResolversTypes['cbcResponse'] | ResolversTypes['cbcError'],
  cbcResponse: ResolverTypeWrapper<CbcResponse>,
  CbcType: ResolverTypeWrapper<CbcType>,
  PlateletType: ResolverTypeWrapper<PlateletType>,
  cbcError: ResolverTypeWrapper<CbcError>,
  cbcErrorErrorCodesType: CbcErrorErrorCodesType,
  cbcAllUnion: ResolversTypes['cbcAllResponse'] | ResolversTypes['cbcAllError'],
  cbcAllResponse: ResolverTypeWrapper<CbcAllResponse>,
  cbcAllError: ResolverTypeWrapper<CbcAllError>,
  cbcAllErrorErrorCodesType: CbcAllErrorErrorCodesType,
  plateletsUnion: ResolversTypes['plateletsResponse'] | ResolversTypes['plateletsError'],
  plateletsResponse: ResolverTypeWrapper<PlateletsResponse>,
  plateletsError: ResolverTypeWrapper<PlateletsError>,
  plateletsErrorErrorCodesType: PlateletsErrorErrorCodesType,
  plateletsAllUnion: ResolversTypes['plateletsAllResponse'] | ResolversTypes['plateletsAllError'],
  plateletsAllResponse: ResolverTypeWrapper<PlateletsAllResponse>,
  plateletsAllError: ResolverTypeWrapper<PlateletsAllError>,
  plateletsAllErrorErrorCodesType: PlateletsAllErrorErrorCodesType,
  bloodPressureUnion: ResolversTypes['bloodPressureResponse'] | ResolversTypes['bloodPressureError'],
  bloodPressureResponse: ResolverTypeWrapper<BloodPressureResponse>,
  BloodPressureType: ResolverTypeWrapper<BloodPressureType>,
  bloodPressureError: ResolverTypeWrapper<BloodPressureError>,
  bloodPressureErrorErrorCodesType: BloodPressureErrorErrorCodesType,
  bloodPressureAllUnion: ResolversTypes['bloodPressureAllResponse'] | ResolversTypes['bloodPressureAllError'],
  bloodPressureAllResponse: ResolverTypeWrapper<BloodPressureAllResponse>,
  bloodPressureAllError: ResolverTypeWrapper<BloodPressureAllError>,
  bloodPressureAllErrorErrorCodesType: BloodPressureAllErrorErrorCodesType,
  anxietyUnion: ResolversTypes['anxietyResponse'] | ResolversTypes['anxietyError'],
  anxietyResponse: ResolverTypeWrapper<AnxietyResponse>,
  anxietyError: ResolverTypeWrapper<AnxietyError>,
  anxietyErrorErrorCodesType: AnxietyErrorErrorCodesType,
  anxietyAllUnion: ResolversTypes['anxietyAllResponse'] | ResolversTypes['anxietyAllError'],
  anxietyAllResponse: ResolverTypeWrapper<AnxietyAllResponse>,
  anxietyAllError: ResolverTypeWrapper<AnxietyAllError>,
  anxietyAllErrorErrorCodesType: AnxietyAllErrorErrorCodesType,
  migraineUnion: ResolversTypes['migraineResponse'] | ResolversTypes['migraineError'],
  migraineResponse: ResolverTypeWrapper<MigraineResponse>,
  MigraineType: ResolverTypeWrapper<MigraineType>,
  migraineError: ResolverTypeWrapper<MigraineError>,
  migraineErrorErrorCodesType: MigraineErrorErrorCodesType,
  migraineAllUnion: ResolversTypes['migraineAllResponse'] | ResolversTypes['migraineAllError'],
  migraineAllResponse: ResolverTypeWrapper<MigraineAllResponse>,
  migraineAllError: ResolverTypeWrapper<MigraineAllError>,
  migraineAllErrorErrorCodesType: MigraineAllErrorErrorCodesType,
  AverageMPGUnion: ResolversTypes['AverageMPGResponse'] | ResolversTypes['AverageMPGError'],
  AverageMPGResponse: ResolverTypeWrapper<AverageMpgResponse>,
  AverageMPGType: ResolverTypeWrapper<AverageMpgType>,
  VehicleType: VehicleType,
  AverageMPGError: ResolverTypeWrapper<AverageMpgError>,
  AverageMPGErrorErrorCodesType: AverageMpgErrorErrorCodesType,
  AverageMPGAllUnion: ResolversTypes['AverageMPGAllResponse'] | ResolversTypes['AverageMPGAllError'],
  AverageMPGAllResponse: ResolverTypeWrapper<AverageMpgAllResponse>,
  AverageMPGAllError: ResolverTypeWrapper<AverageMpgAllError>,
  AverageMPGAllErrorErrorCodesType: AverageMpgAllErrorErrorCodesType,
  DrivingScoreUnion: ResolversTypes['DrivingScoreResponse'] | ResolversTypes['DrivingScoreError'],
  DrivingScoreResponse: ResolverTypeWrapper<DrivingScoreResponse>,
  DrivingScoreType: ResolverTypeWrapper<DrivingScoreType>,
  DrivingScoreError: ResolverTypeWrapper<DrivingScoreError>,
  DrivingScoreErrorErrorCodesType: DrivingScoreErrorErrorCodesType,
  DrivingScoreAllUnion: ResolversTypes['DrivingScoreAllResponse'] | ResolversTypes['DrivingScoreAllError'],
  DrivingScoreAllResponse: ResolverTypeWrapper<DrivingScoreAllResponse>,
  DrivingScoreAllError: ResolverTypeWrapper<DrivingScoreAllError>,
  DrivingScoreAllErrorErrorCodesType: DrivingScoreAllErrorErrorCodesType,
  RefuelUnion: ResolversTypes['RefuelResponse'] | ResolversTypes['RefuelError'],
  RefuelResponse: ResolverTypeWrapper<RefuelResponse>,
  RefuelType: ResolverTypeWrapper<RefuelType>,
  RefuelError: ResolverTypeWrapper<RefuelError>,
  RefuelErrorErrorCodesType: RefuelErrorErrorCodesType,
  RefuelAllUnion: ResolversTypes['RefuelAllResponse'] | ResolversTypes['RefuelAllError'],
  RefuelAllResponse: ResolverTypeWrapper<RefuelAllResponse>,
  RefuelAllError: ResolverTypeWrapper<RefuelAllError>,
  RefuelAllErrorErrorCodesType: RefuelAllErrorErrorCodesType,
  CollectionsUnion: ResolversTypes['CollectionsResponse'] | ResolversTypes['CollectionsError'],
  CollectionsResponse: ResolverTypeWrapper<CollectionsResponse>,
  CollectionType: ResolverTypeWrapper<CollectionType>,
  CollectionsError: ResolverTypeWrapper<CollectionsError>,
  CollectionsErrorErrorCodesType: CollectionsErrorErrorCodesType,
  CollectionsAllUnion: ResolversTypes['CollectionsAllResponse'] | ResolversTypes['CollectionsAllError'],
  CollectionsAllResponse: ResolverTypeWrapper<CollectionsAllResponse>,
  CollectionsAllError: ResolverTypeWrapper<CollectionsAllError>,
  CollectionsAllErrorErrorCodesType: CollectionsAllErrorErrorCodesType,
  SteinsUnion: ResolversTypes['SteinsResponse'] | ResolversTypes['SteinsError'],
  SteinsResponse: ResolverTypeWrapper<SteinsResponse>,
  SteinsError: ResolverTypeWrapper<SteinsError>,
  SteinsErrorErrorCodesType: SteinsErrorErrorCodesType,
  SteinsAllUnion: ResolversTypes['SteinsAllResponse'] | ResolversTypes['SteinsAllError'],
  SteinsAllResponse: ResolverTypeWrapper<SteinsAllResponse>,
  SteinsAllError: ResolverTypeWrapper<SteinsAllError>,
  SteinsAllErrorErrorCodesType: SteinsAllErrorErrorCodesType,
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
  addHealthKitResponse: ResolverTypeWrapper<Omit<AddHealthKitResponse, 'response'> & { response?: Maybe<Array<Maybe<ResolversTypes['HealthKitUnionType']>>> }>,
  HealthKitUnionType: ResolversTypes['HealthKitType'] | ResolversTypes['BloodPressureType'],
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
  addOxygenSaturationUnion: ResolversTypes['addOxygenSaturationResponse'] | ResolversTypes['addOxygenSaturationError'],
  addOxygenSaturationResponse: ResolverTypeWrapper<AddOxygenSaturationResponse>,
  addOxygenSaturationError: ResolverTypeWrapper<AddOxygenSaturationError>,
  addOxygenSaturationErrorErrorCodesType: AddOxygenSaturationErrorErrorCodesType,
  updateOxygenSaturationUnion: ResolversTypes['updateOxygenSaturationResponse'] | ResolversTypes['updateOxygenSaturationError'],
  updateOxygenSaturationResponse: ResolverTypeWrapper<UpdateOxygenSaturationResponse>,
  updateOxygenSaturationError: ResolverTypeWrapper<UpdateOxygenSaturationError>,
  updateOxygenSaturationErrorErrorCodesType: UpdateOxygenSaturationErrorErrorCodesType,
  ActivityInputType: ActivityInputType,
  addActivityUnion: ResolversTypes['addActivityResponse'] | ResolversTypes['addActivityError'],
  addActivityResponse: ResolverTypeWrapper<AddActivityResponse>,
  addActivityError: ResolverTypeWrapper<AddActivityError>,
  addActivityErrorErrorCodesType: AddActivityErrorErrorCodesType,
  ActivityInputUpdateType: ActivityInputUpdateType,
  updateActivityUnion: ResolversTypes['updateActivityResponse'] | ResolversTypes['updateActivityError'],
  updateActivityResponse: ResolverTypeWrapper<UpdateActivityResponse>,
  updateActivityError: ResolverTypeWrapper<UpdateActivityError>,
  updateActivityErrorErrorCodesType: UpdateActivityErrorErrorCodesType,
  HealthInputType: HealthInputType,
  addWeightUnion: ResolversTypes['addWeightResponse'] | ResolversTypes['addWeightError'],
  addWeightResponse: ResolverTypeWrapper<AddWeightResponse>,
  addWeightError: ResolverTypeWrapper<AddWeightError>,
  addWeightErrorErrorCodesType: AddWeightErrorErrorCodesType,
  HealthInputUpdateType: HealthInputUpdateType,
  updateWeightUnion: ResolversTypes['updateWeightResponse'] | ResolversTypes['updateWeightError'],
  updateWeightResponse: ResolverTypeWrapper<UpdateWeightResponse>,
  updateWeightError: ResolverTypeWrapper<UpdateWeightError>,
  updateWeightErrorErrorCodesType: UpdateWeightErrorErrorCodesType,
  addHeightUnion: ResolversTypes['addHeightResponse'] | ResolversTypes['addHeightError'],
  addHeightResponse: ResolverTypeWrapper<AddHeightResponse>,
  addHeightError: ResolverTypeWrapper<AddHeightError>,
  addHeightErrorErrorCodesType: AddHeightErrorErrorCodesType,
  updateHeightUnion: ResolversTypes['updateHeightResponse'] | ResolversTypes['updateHeightError'],
  updateHeightResponse: ResolverTypeWrapper<UpdateHeightResponse>,
  updateHeightError: ResolverTypeWrapper<UpdateHeightError>,
  updateHeightErrorErrorCodesType: UpdateHeightErrorErrorCodesType,
  addBodyTemperatureUnion: ResolversTypes['addBodyTemperatureResponse'] | ResolversTypes['addBodyTemperatureError'],
  addBodyTemperatureResponse: ResolverTypeWrapper<AddBodyTemperatureResponse>,
  addBodyTemperatureError: ResolverTypeWrapper<AddBodyTemperatureError>,
  addBodyTemperatureErrorErrorCodesType: AddBodyTemperatureErrorErrorCodesType,
  updateBodyTemperatureUnion: ResolversTypes['updateBodyTemperatureResponse'] | ResolversTypes['updateBodyTemperatureError'],
  updateBodyTemperatureResponse: ResolverTypeWrapper<UpdateBodyTemperatureResponse>,
  updateBodyTemperatureError: ResolverTypeWrapper<UpdateBodyTemperatureError>,
  updateBodyTemperatureErrorErrorCodesType: UpdateBodyTemperatureErrorErrorCodesType,
  addWaistCircumferenceUnion: ResolversTypes['addWaistCircumferenceResponse'] | ResolversTypes['addWaistCircumferenceError'],
  addWaistCircumferenceResponse: ResolverTypeWrapper<AddWaistCircumferenceResponse>,
  addWaistCircumferenceError: ResolverTypeWrapper<AddWaistCircumferenceError>,
  addWaistCircumferenceErrorErrorCodesType: AddWaistCircumferenceErrorErrorCodesType,
  updateWaistCircumferenceUnion: ResolversTypes['updateWaistCircumferenceResponse'] | ResolversTypes['updateWaistCircumferenceError'],
  updateWaistCircumferenceResponse: ResolverTypeWrapper<UpdateWaistCircumferenceResponse>,
  updateWaistCircumferenceError: ResolverTypeWrapper<UpdateWaistCircumferenceError>,
  updateWaistCircumferenceErrorErrorCodesType: UpdateWaistCircumferenceErrorErrorCodesType,
  CbcInputType: CbcInputType,
  addCbcUnion: ResolversTypes['addCbcResponse'] | ResolversTypes['addCbcError'],
  addCbcResponse: ResolverTypeWrapper<AddCbcResponse>,
  addCbcError: ResolverTypeWrapper<AddCbcError>,
  addCbcErrorErrorCodesType: AddCbcErrorErrorCodesType,
  CbcInputUpdateType: CbcInputUpdateType,
  updateCbcUnion: ResolversTypes['updateCbcResponse'] | ResolversTypes['updateCbcError'],
  updateCbcResponse: ResolverTypeWrapper<UpdateCbcResponse>,
  updateCbcError: ResolverTypeWrapper<UpdateCbcError>,
  updateCbcErrorErrorCodesType: UpdateCbcErrorErrorCodesType,
  PlateletInputType: PlateletInputType,
  addPlateletsUnion: ResolversTypes['addPlateletsResponse'] | ResolversTypes['addPlateletsError'],
  addPlateletsResponse: ResolverTypeWrapper<AddPlateletsResponse>,
  addPlateletsError: ResolverTypeWrapper<AddPlateletsError>,
  addPlateletsErrorErrorCodesType: AddPlateletsErrorErrorCodesType,
  PlateletInputUpdateType: PlateletInputUpdateType,
  updatePlateletsUnion: ResolversTypes['updatePlateletsResponse'] | ResolversTypes['updatePlateletsError'],
  updatePlateletsResponse: ResolverTypeWrapper<UpdatePlateletsResponse>,
  updatePlateletsError: ResolverTypeWrapper<UpdatePlateletsError>,
  updatePlateletsErrorErrorCodesType: UpdatePlateletsErrorErrorCodesType,
  BloodPressureInputType: BloodPressureInputType,
  addBloodPressureUnion: ResolversTypes['addBloodPressureResponse'] | ResolversTypes['addBloodPressureError'],
  addBloodPressureResponse: ResolverTypeWrapper<AddBloodPressureResponse>,
  addBloodPressureError: ResolverTypeWrapper<AddBloodPressureError>,
  addBloodPressureErrorErrorCodesType: AddBloodPressureErrorErrorCodesType,
  BloodPressureInputUpdateType: BloodPressureInputUpdateType,
  updateBloodPressureUnion: ResolversTypes['updateBloodPressureResponse'] | ResolversTypes['updateBloodPressureError'],
  updateBloodPressureResponse: ResolverTypeWrapper<UpdateBloodPressureResponse>,
  updateBloodPressureError: ResolverTypeWrapper<UpdateBloodPressureError>,
  updateBloodPressureErrorErrorCodesType: UpdateBloodPressureErrorErrorCodesType,
  addAnxietyUnion: ResolversTypes['addAnxietyResponse'] | ResolversTypes['addAnxietyError'],
  addAnxietyResponse: ResolverTypeWrapper<AddAnxietyResponse>,
  addAnxietyError: ResolverTypeWrapper<AddAnxietyError>,
  addAnxietyErrorErrorCodesType: AddAnxietyErrorErrorCodesType,
  updateAnxietyUnion: ResolversTypes['updateAnxietyResponse'] | ResolversTypes['updateAnxietyError'],
  updateAnxietyResponse: ResolverTypeWrapper<UpdateAnxietyResponse>,
  updateAnxietyError: ResolverTypeWrapper<UpdateAnxietyError>,
  updateAnxietyErrorErrorCodesType: UpdateAnxietyErrorErrorCodesType,
  MigraineInputType: MigraineInputType,
  addMigraineUnion: ResolversTypes['addMigraineResponse'] | ResolversTypes['addMigraineError'],
  addMigraineResponse: ResolverTypeWrapper<AddMigraineResponse>,
  addMigraineError: ResolverTypeWrapper<AddMigraineError>,
  addMigraineErrorErrorCodesType: AddMigraineErrorErrorCodesType,
  MigraineInputUpdateType: MigraineInputUpdateType,
  updateMigraineUnion: ResolversTypes['updateMigraineResponse'] | ResolversTypes['updateMigraineError'],
  updateMigraineResponse: ResolverTypeWrapper<UpdateMigraineResponse>,
  updateMigraineError: ResolverTypeWrapper<UpdateMigraineError>,
  updateMigraineErrorErrorCodesType: UpdateMigraineErrorErrorCodesType,
  AverageMPGInputType: AverageMpgInputType,
  addAverageMPGUnion: ResolversTypes['addAverageMPGResponse'] | ResolversTypes['addAverageMPGError'],
  addAverageMPGResponse: ResolverTypeWrapper<AddAverageMpgResponse>,
  addAverageMPGError: ResolverTypeWrapper<AddAverageMpgError>,
  addAverageMPGErrorErrorCodesType: AddAverageMpgErrorErrorCodesType,
  AverageMPGInputUpdateType: AverageMpgInputUpdateType,
  updateAverageMPGUnion: ResolversTypes['updateAverageMPGResponse'] | ResolversTypes['updateAverageMPGError'],
  updateAverageMPGResponse: ResolverTypeWrapper<UpdateAverageMpgResponse>,
  updateAverageMPGError: ResolverTypeWrapper<UpdateAverageMpgError>,
  updateAverageMPGErrorErrorCodesType: UpdateAverageMpgErrorErrorCodesType,
  DrivingScoreInputType: DrivingScoreInputType,
  addDrivingScoreUnion: ResolversTypes['addDrivingScoreResponse'] | ResolversTypes['addDrivingScoreError'],
  addDrivingScoreResponse: ResolverTypeWrapper<AddDrivingScoreResponse>,
  addDrivingScoreError: ResolverTypeWrapper<AddDrivingScoreError>,
  addDrivingScoreErrorErrorCodesType: AddDrivingScoreErrorErrorCodesType,
  DrivingScoreInputUpdateType: DrivingScoreInputUpdateType,
  updateDrivingScoreUnion: ResolversTypes['updateDrivingScoreResponse'] | ResolversTypes['updateDrivingScoreError'],
  updateDrivingScoreResponse: ResolverTypeWrapper<UpdateDrivingScoreResponse>,
  updateDrivingScoreError: ResolverTypeWrapper<UpdateDrivingScoreError>,
  updateDrivingScoreErrorErrorCodesType: UpdateDrivingScoreErrorErrorCodesType,
  RefuelInputType: RefuelInputType,
  addRefuelUnion: ResolversTypes['addRefuelResponse'] | ResolversTypes['addRefuelError'],
  addRefuelResponse: ResolverTypeWrapper<AddRefuelResponse>,
  addRefuelError: ResolverTypeWrapper<AddRefuelError>,
  addRefuelErrorErrorCodesType: AddRefuelErrorErrorCodesType,
  RefuelInputUpdaetType: RefuelInputUpdaetType,
  updateRefuelUnion: ResolversTypes['updateRefuelResponse'] | ResolversTypes['updateRefuelError'],
  updateRefuelResponse: ResolverTypeWrapper<UpdateRefuelResponse>,
  updateRefuelError: ResolverTypeWrapper<UpdateRefuelError>,
  updateRefuelErrorErrorCodesType: UpdateRefuelErrorErrorCodesType,
  CollectionInputType: CollectionInputType,
  addCollectionUnion: ResolversTypes['addCollectionResponse'] | ResolversTypes['addCollectionError'],
  addCollectionResponse: ResolverTypeWrapper<AddCollectionResponse>,
  addCollectionError: ResolverTypeWrapper<AddCollectionError>,
  addCollectionErrorErrorCodesType: AddCollectionErrorErrorCodesType,
  CollectionInputUpdateType: CollectionInputUpdateType,
  updateCollectionUnion: ResolversTypes['updateCollectionResponse'] | ResolversTypes['updateCollectionError'],
  updateCollectionResponse: ResolverTypeWrapper<UpdateCollectionResponse>,
  updateCollectionError: ResolverTypeWrapper<UpdateCollectionError>,
  updateCollectionErrorErrorCodesType: UpdateCollectionErrorErrorCodesType,
  CollectionInputIncrementType: CollectionInputIncrementType,
  incrementCollectionUnion: ResolversTypes['incrementCollectionResponse'] | ResolversTypes['incrementCollectionError'],
  incrementCollectionResponse: ResolverTypeWrapper<IncrementCollectionResponse>,
  incrementCollectionError: ResolverTypeWrapper<IncrementCollectionError>,
  incrementCollectionErrorErrorCodesType: IncrementCollectionErrorErrorCodesType,
  addSteinUnion: ResolversTypes['addSteinResponse'] | ResolversTypes['addSteinError'],
  addSteinResponse: ResolverTypeWrapper<AddSteinResponse>,
  addSteinError: ResolverTypeWrapper<AddSteinError>,
  addSteinErrorErrorCodesType: AddSteinErrorErrorCodesType,
  updateSteinUnion: ResolversTypes['updateSteinResponse'] | ResolversTypes['updateSteinError'],
  updateSteinResponse: ResolverTypeWrapper<UpdateSteinResponse>,
  updateSteinError: ResolverTypeWrapper<UpdateSteinError>,
  updateSteinErrorErrorCodesType: UpdateSteinErrorErrorCodesType,
  incrementSteinUnion: ResolversTypes['incrementSteinResponse'] | ResolversTypes['incrementSteinError'],
  incrementSteinResponse: ResolverTypeWrapper<IncrementSteinResponse>,
  incrementSteinError: ResolverTypeWrapper<IncrementSteinError>,
  incrementSteinErrorErrorCodesType: IncrementSteinErrorErrorCodesType,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootQueryType: {},
  String: Scalars['String'],
  Date: Scalars['Date'],
  stepsUnion: ResolversTypes['stepsResponse'] | ResolversTypes['stepsError'],
  stepsResponse: StepsResponse,
  HealthKitType: HealthKitType,
  Float: Scalars['Float'],
  UnitType: UnitType,
  stepsError: StepsError,
  stepsErrorErrorCodesType: StepsErrorErrorCodesType,
  Int: Scalars['Int'],
  stepsAllUnion: ResolversTypes['stepsAllResponse'] | ResolversTypes['stepsAllError'],
  stepsAllResponse: StepsAllResponse,
  stepsAllError: StepsAllError,
  stepsAllErrorErrorCodesType: StepsAllErrorErrorCodesType,
  flightsClimbedUnion: ResolversTypes['flightsClimbedResponse'] | ResolversTypes['flightsClimbedError'],
  flightsClimbedResponse: FlightsClimbedResponse,
  flightsClimbedError: FlightsClimbedError,
  flightsClimbedErrorErrorCodesType: FlightsClimbedErrorErrorCodesType,
  flightsClimbedAllUnion: ResolversTypes['flightsClimbedAllResponse'] | ResolversTypes['flightsClimbedAllError'],
  flightsClimbedAllResponse: FlightsClimbedAllResponse,
  flightsClimbedAllError: FlightsClimbedAllError,
  flightsClimbedAllErrorErrorCodesType: FlightsClimbedAllErrorErrorCodesType,
  heartrateUnion: ResolversTypes['heartrateResponse'] | ResolversTypes['heartrateError'],
  heartrateResponse: HeartrateResponse,
  heartrateError: HeartrateError,
  heartrateErrorErrorCodesType: HeartrateErrorErrorCodesType,
  heartrateAllUnion: ResolversTypes['heartrateAllResponse'] | ResolversTypes['heartrateAllError'],
  heartrateAllResponse: HeartrateAllResponse,
  heartrateAllError: HeartrateAllError,
  heartrateAllErrorErrorCodesType: HeartrateAllErrorErrorCodesType,
  heartrateVariabilityUnion: ResolversTypes['heartrateVariabilityResponse'] | ResolversTypes['heartrateVariabilityError'],
  heartrateVariabilityResponse: HeartrateVariabilityResponse,
  heartrateVariabilityError: HeartrateVariabilityError,
  heartrateVariabilityErrorErrorCodesType: HeartrateVariabilityErrorErrorCodesType,
  heartrateVariabilityAllUnion: ResolversTypes['heartrateVariabilityAllResponse'] | ResolversTypes['heartrateVariabilityAllError'],
  heartrateVariabilityAllResponse: HeartrateVariabilityAllResponse,
  heartrateVariabilityAllError: HeartrateVariabilityAllError,
  heartrateVariabilityAllErrorErrorCodesType: HeartrateVariabilityAllErrorErrorCodesType,
  activeEnergyUnion: ResolversTypes['activeEnergyResponse'] | ResolversTypes['activeEnergyError'],
  activeEnergyResponse: ActiveEnergyResponse,
  activeEnergyError: ActiveEnergyError,
  activeEnergyErrorErrorCodesType: ActiveEnergyErrorErrorCodesType,
  activeEnergyAllUnion: ResolversTypes['activeEnergyAllResponse'] | ResolversTypes['activeEnergyAllError'],
  activeEnergyAllResponse: ActiveEnergyAllResponse,
  activeEnergyAllError: ActiveEnergyAllError,
  activeEnergyAllErrorErrorCodesType: ActiveEnergyAllErrorErrorCodesType,
  caffeineUnion: ResolversTypes['caffeineResponse'] | ResolversTypes['caffeineError'],
  caffeineResponse: CaffeineResponse,
  caffeineError: CaffeineError,
  caffeineErrorErrorCodesType: CaffeineErrorErrorCodesType,
  caffeineAllUnion: ResolversTypes['caffeineAllResponse'] | ResolversTypes['caffeineAllError'],
  caffeineAllResponse: CaffeineAllResponse,
  caffeineAllError: CaffeineAllError,
  caffeineAllErrorErrorCodesType: CaffeineAllErrorErrorCodesType,
  restingEnergyUnion: ResolversTypes['restingEnergyResponse'] | ResolversTypes['restingEnergyError'],
  restingEnergyResponse: RestingEnergyResponse,
  restingEnergyError: RestingEnergyError,
  restingEnergyErrorErrorCodesType: RestingEnergyErrorErrorCodesType,
  restingEnergyAllUnion: ResolversTypes['restingEnergyAllResponse'] | ResolversTypes['restingEnergyAllError'],
  restingEnergyAllResponse: RestingEnergyAllResponse,
  restingEnergyAllError: RestingEnergyAllError,
  restingEnergyAllErrorErrorCodesType: RestingEnergyAllErrorErrorCodesType,
  restingHeartrateUnion: ResolversTypes['restingHeartrateResponse'] | ResolversTypes['restingHeartrateError'],
  restingHeartrateResponse: RestingHeartrateResponse,
  restingHeartrateError: RestingHeartrateError,
  restingHeartrateErrorErrorCodesType: RestingHeartrateErrorErrorCodesType,
  restingHeartrateAllUnion: ResolversTypes['restingHeartrateAllResponse'] | ResolversTypes['restingHeartrateAllError'],
  restingHeartrateAllResponse: RestingHeartrateAllResponse,
  restingHeartrateAllError: RestingHeartrateAllError,
  restingHeartrateAllErrorErrorCodesType: RestingHeartrateAllErrorErrorCodesType,
  sleepAnalysisUnion: ResolversTypes['sleepAnalysisResponse'] | ResolversTypes['sleepAnalysisError'],
  sleepAnalysisResponse: SleepAnalysisResponse,
  sleepAnalysisError: SleepAnalysisError,
  sleepAnalysisErrorErrorCodesType: SleepAnalysisErrorErrorCodesType,
  sleepAnalysisAllUnion: ResolversTypes['sleepAnalysisAllResponse'] | ResolversTypes['sleepAnalysisAllError'],
  sleepAnalysisAllResponse: SleepAnalysisAllResponse,
  sleepAnalysisAllError: SleepAnalysisAllError,
  sleepAnalysisAllErrorErrorCodesType: SleepAnalysisAllErrorErrorCodesType,
  swimmingDistanceUnion: ResolversTypes['swimmingDistanceResponse'] | ResolversTypes['swimmingDistanceError'],
  swimmingDistanceResponse: SwimmingDistanceResponse,
  swimmingDistanceError: SwimmingDistanceError,
  swimmingDistanceErrorErrorCodesType: SwimmingDistanceErrorErrorCodesType,
  swimmingDistanceAllUnion: ResolversTypes['swimmingDistanceAllResponse'] | ResolversTypes['swimmingDistanceAllError'],
  swimmingDistanceAllResponse: SwimmingDistanceAllResponse,
  swimmingDistanceAllError: SwimmingDistanceAllError,
  swimmingDistanceAllErrorErrorCodesType: SwimmingDistanceAllErrorErrorCodesType,
  walkingHeartrateAverageUnion: ResolversTypes['walkingHeartrateAverageResponse'] | ResolversTypes['walkingHeartrateAverageError'],
  walkingHeartrateAverageResponse: WalkingHeartrateAverageResponse,
  walkingHeartrateAverageError: WalkingHeartrateAverageError,
  walkingHeartrateAverageErrorErrorCodesType: WalkingHeartrateAverageErrorErrorCodesType,
  walkingHeartrateAverageAllUnion: ResolversTypes['walkingHeartrateAverageAllResponse'] | ResolversTypes['walkingHeartrateAverageAllError'],
  walkingHeartrateAverageAllResponse: WalkingHeartrateAverageAllResponse,
  walkingHeartrateAverageAllError: WalkingHeartrateAverageAllError,
  walkingHeartrateAverageAllErrorErrorCodesType: WalkingHeartrateAverageAllErrorErrorCodesType,
  walkingRunningDistanceUnion: ResolversTypes['walkingRunningDistanceResponse'] | ResolversTypes['walkingRunningDistanceError'],
  walkingRunningDistanceResponse: WalkingRunningDistanceResponse,
  walkingRunningDistanceError: WalkingRunningDistanceError,
  walkingRunningDistanceErrorErrorCodesType: WalkingRunningDistanceErrorErrorCodesType,
  walkingRunningDistanceAllUnion: ResolversTypes['walkingRunningDistanceAllResponse'] | ResolversTypes['walkingRunningDistanceAllError'],
  walkingRunningDistanceAllResponse: WalkingRunningDistanceAllResponse,
  walkingRunningDistanceAllError: WalkingRunningDistanceAllError,
  walkingRunningDistanceAllErrorErrorCodesType: WalkingRunningDistanceAllErrorErrorCodesType,
  oxygenSaturationUnion: ResolversTypes['oxygenSaturationResponse'] | ResolversTypes['oxygenSaturationError'],
  oxygenSaturationResponse: OxygenSaturationResponse,
  HealthType: HealthType,
  oxygenSaturationError: OxygenSaturationError,
  oxygenSaturationErrorErrorCodesType: OxygenSaturationErrorErrorCodesType,
  oxygenSaturationAllUnion: ResolversTypes['oxygenSaturationAllResponse'] | ResolversTypes['oxygenSaturationAllError'],
  oxygenSaturationAllResponse: OxygenSaturationAllResponse,
  oxygenSaturationAllError: OxygenSaturationAllError,
  oxygenSaturationAllErrorErrorCodesType: OxygenSaturationAllErrorErrorCodesType,
  activityUnion: ResolversTypes['activityResponse'] | ResolversTypes['activityError'],
  activityResponse: ActivityResponse,
  ActivityType: ActivityType,
  Boolean: Scalars['Boolean'],
  activityError: ActivityError,
  activityErrorErrorCodesType: ActivityErrorErrorCodesType,
  activityAllUnion: ResolversTypes['activityAllResponse'] | ResolversTypes['activityAllError'],
  activityAllResponse: ActivityAllResponse,
  activityAllError: ActivityAllError,
  activityAllErrorErrorCodesType: ActivityAllErrorErrorCodesType,
  weightUnion: ResolversTypes['weightResponse'] | ResolversTypes['weightError'],
  weightResponse: WeightResponse,
  weightError: WeightError,
  weightErrorErrorCodesType: WeightErrorErrorCodesType,
  weightAllUnion: ResolversTypes['weightAllResponse'] | ResolversTypes['weightAllError'],
  weightAllResponse: WeightAllResponse,
  weightAllError: WeightAllError,
  weightAllErrorErrorCodesType: WeightAllErrorErrorCodesType,
  heightUnion: ResolversTypes['heightResponse'] | ResolversTypes['heightError'],
  heightResponse: HeightResponse,
  heightError: HeightError,
  heightErrorErrorCodesType: HeightErrorErrorCodesType,
  heightAllUnion: ResolversTypes['heightAllResponse'] | ResolversTypes['heightAllError'],
  heightAllResponse: HeightAllResponse,
  heightAllError: HeightAllError,
  heightAllErrorErrorCodesType: HeightAllErrorErrorCodesType,
  bodyTemperatureUnion: ResolversTypes['bodyTemperatureResponse'] | ResolversTypes['bodyTemperatureError'],
  bodyTemperatureResponse: BodyTemperatureResponse,
  bodyTemperatureError: BodyTemperatureError,
  bodyTemperatureErrorErrorCodesType: BodyTemperatureErrorErrorCodesType,
  bodyTemperatureAllUnion: ResolversTypes['bodyTemperatureAllResponse'] | ResolversTypes['bodyTemperatureAllError'],
  bodyTemperatureAllResponse: BodyTemperatureAllResponse,
  bodyTemperatureAllError: BodyTemperatureAllError,
  bodyTemperatureAllErrorErrorCodesType: BodyTemperatureAllErrorErrorCodesType,
  waistCircumferenceUnion: ResolversTypes['waistCircumferenceResponse'] | ResolversTypes['waistCircumferenceError'],
  waistCircumferenceResponse: WaistCircumferenceResponse,
  waistCircumferenceError: WaistCircumferenceError,
  waistCircumferenceErrorErrorCodesType: WaistCircumferenceErrorErrorCodesType,
  waistCircumferenceAllUnion: ResolversTypes['waistCircumferenceAllResponse'] | ResolversTypes['waistCircumferenceAllError'],
  waistCircumferenceAllResponse: WaistCircumferenceAllResponse,
  waistCircumferenceAllError: WaistCircumferenceAllError,
  waistCircumferenceAllErrorErrorCodesType: WaistCircumferenceAllErrorErrorCodesType,
  cbcUnion: ResolversTypes['cbcResponse'] | ResolversTypes['cbcError'],
  cbcResponse: CbcResponse,
  CbcType: CbcType,
  PlateletType: PlateletType,
  cbcError: CbcError,
  cbcErrorErrorCodesType: CbcErrorErrorCodesType,
  cbcAllUnion: ResolversTypes['cbcAllResponse'] | ResolversTypes['cbcAllError'],
  cbcAllResponse: CbcAllResponse,
  cbcAllError: CbcAllError,
  cbcAllErrorErrorCodesType: CbcAllErrorErrorCodesType,
  plateletsUnion: ResolversTypes['plateletsResponse'] | ResolversTypes['plateletsError'],
  plateletsResponse: PlateletsResponse,
  plateletsError: PlateletsError,
  plateletsErrorErrorCodesType: PlateletsErrorErrorCodesType,
  plateletsAllUnion: ResolversTypes['plateletsAllResponse'] | ResolversTypes['plateletsAllError'],
  plateletsAllResponse: PlateletsAllResponse,
  plateletsAllError: PlateletsAllError,
  plateletsAllErrorErrorCodesType: PlateletsAllErrorErrorCodesType,
  bloodPressureUnion: ResolversTypes['bloodPressureResponse'] | ResolversTypes['bloodPressureError'],
  bloodPressureResponse: BloodPressureResponse,
  BloodPressureType: BloodPressureType,
  bloodPressureError: BloodPressureError,
  bloodPressureErrorErrorCodesType: BloodPressureErrorErrorCodesType,
  bloodPressureAllUnion: ResolversTypes['bloodPressureAllResponse'] | ResolversTypes['bloodPressureAllError'],
  bloodPressureAllResponse: BloodPressureAllResponse,
  bloodPressureAllError: BloodPressureAllError,
  bloodPressureAllErrorErrorCodesType: BloodPressureAllErrorErrorCodesType,
  anxietyUnion: ResolversTypes['anxietyResponse'] | ResolversTypes['anxietyError'],
  anxietyResponse: AnxietyResponse,
  anxietyError: AnxietyError,
  anxietyErrorErrorCodesType: AnxietyErrorErrorCodesType,
  anxietyAllUnion: ResolversTypes['anxietyAllResponse'] | ResolversTypes['anxietyAllError'],
  anxietyAllResponse: AnxietyAllResponse,
  anxietyAllError: AnxietyAllError,
  anxietyAllErrorErrorCodesType: AnxietyAllErrorErrorCodesType,
  migraineUnion: ResolversTypes['migraineResponse'] | ResolversTypes['migraineError'],
  migraineResponse: MigraineResponse,
  MigraineType: MigraineType,
  migraineError: MigraineError,
  migraineErrorErrorCodesType: MigraineErrorErrorCodesType,
  migraineAllUnion: ResolversTypes['migraineAllResponse'] | ResolversTypes['migraineAllError'],
  migraineAllResponse: MigraineAllResponse,
  migraineAllError: MigraineAllError,
  migraineAllErrorErrorCodesType: MigraineAllErrorErrorCodesType,
  AverageMPGUnion: ResolversTypes['AverageMPGResponse'] | ResolversTypes['AverageMPGError'],
  AverageMPGResponse: AverageMpgResponse,
  AverageMPGType: AverageMpgType,
  VehicleType: VehicleType,
  AverageMPGError: AverageMpgError,
  AverageMPGErrorErrorCodesType: AverageMpgErrorErrorCodesType,
  AverageMPGAllUnion: ResolversTypes['AverageMPGAllResponse'] | ResolversTypes['AverageMPGAllError'],
  AverageMPGAllResponse: AverageMpgAllResponse,
  AverageMPGAllError: AverageMpgAllError,
  AverageMPGAllErrorErrorCodesType: AverageMpgAllErrorErrorCodesType,
  DrivingScoreUnion: ResolversTypes['DrivingScoreResponse'] | ResolversTypes['DrivingScoreError'],
  DrivingScoreResponse: DrivingScoreResponse,
  DrivingScoreType: DrivingScoreType,
  DrivingScoreError: DrivingScoreError,
  DrivingScoreErrorErrorCodesType: DrivingScoreErrorErrorCodesType,
  DrivingScoreAllUnion: ResolversTypes['DrivingScoreAllResponse'] | ResolversTypes['DrivingScoreAllError'],
  DrivingScoreAllResponse: DrivingScoreAllResponse,
  DrivingScoreAllError: DrivingScoreAllError,
  DrivingScoreAllErrorErrorCodesType: DrivingScoreAllErrorErrorCodesType,
  RefuelUnion: ResolversTypes['RefuelResponse'] | ResolversTypes['RefuelError'],
  RefuelResponse: RefuelResponse,
  RefuelType: RefuelType,
  RefuelError: RefuelError,
  RefuelErrorErrorCodesType: RefuelErrorErrorCodesType,
  RefuelAllUnion: ResolversTypes['RefuelAllResponse'] | ResolversTypes['RefuelAllError'],
  RefuelAllResponse: RefuelAllResponse,
  RefuelAllError: RefuelAllError,
  RefuelAllErrorErrorCodesType: RefuelAllErrorErrorCodesType,
  CollectionsUnion: ResolversTypes['CollectionsResponse'] | ResolversTypes['CollectionsError'],
  CollectionsResponse: CollectionsResponse,
  CollectionType: CollectionType,
  CollectionsError: CollectionsError,
  CollectionsErrorErrorCodesType: CollectionsErrorErrorCodesType,
  CollectionsAllUnion: ResolversTypes['CollectionsAllResponse'] | ResolversTypes['CollectionsAllError'],
  CollectionsAllResponse: CollectionsAllResponse,
  CollectionsAllError: CollectionsAllError,
  CollectionsAllErrorErrorCodesType: CollectionsAllErrorErrorCodesType,
  SteinsUnion: ResolversTypes['SteinsResponse'] | ResolversTypes['SteinsError'],
  SteinsResponse: SteinsResponse,
  SteinsError: SteinsError,
  SteinsErrorErrorCodesType: SteinsErrorErrorCodesType,
  SteinsAllUnion: ResolversTypes['SteinsAllResponse'] | ResolversTypes['SteinsAllError'],
  SteinsAllResponse: SteinsAllResponse,
  SteinsAllError: SteinsAllError,
  SteinsAllErrorErrorCodesType: SteinsAllErrorErrorCodesType,
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
  addHealthKitResponse: Omit<AddHealthKitResponse, 'response'> & { response?: Maybe<Array<Maybe<ResolversTypes['HealthKitUnionType']>>> },
  HealthKitUnionType: ResolversTypes['HealthKitType'] | ResolversTypes['BloodPressureType'],
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
  addOxygenSaturationUnion: ResolversTypes['addOxygenSaturationResponse'] | ResolversTypes['addOxygenSaturationError'],
  addOxygenSaturationResponse: AddOxygenSaturationResponse,
  addOxygenSaturationError: AddOxygenSaturationError,
  addOxygenSaturationErrorErrorCodesType: AddOxygenSaturationErrorErrorCodesType,
  updateOxygenSaturationUnion: ResolversTypes['updateOxygenSaturationResponse'] | ResolversTypes['updateOxygenSaturationError'],
  updateOxygenSaturationResponse: UpdateOxygenSaturationResponse,
  updateOxygenSaturationError: UpdateOxygenSaturationError,
  updateOxygenSaturationErrorErrorCodesType: UpdateOxygenSaturationErrorErrorCodesType,
  ActivityInputType: ActivityInputType,
  addActivityUnion: ResolversTypes['addActivityResponse'] | ResolversTypes['addActivityError'],
  addActivityResponse: AddActivityResponse,
  addActivityError: AddActivityError,
  addActivityErrorErrorCodesType: AddActivityErrorErrorCodesType,
  ActivityInputUpdateType: ActivityInputUpdateType,
  updateActivityUnion: ResolversTypes['updateActivityResponse'] | ResolversTypes['updateActivityError'],
  updateActivityResponse: UpdateActivityResponse,
  updateActivityError: UpdateActivityError,
  updateActivityErrorErrorCodesType: UpdateActivityErrorErrorCodesType,
  HealthInputType: HealthInputType,
  addWeightUnion: ResolversTypes['addWeightResponse'] | ResolversTypes['addWeightError'],
  addWeightResponse: AddWeightResponse,
  addWeightError: AddWeightError,
  addWeightErrorErrorCodesType: AddWeightErrorErrorCodesType,
  HealthInputUpdateType: HealthInputUpdateType,
  updateWeightUnion: ResolversTypes['updateWeightResponse'] | ResolversTypes['updateWeightError'],
  updateWeightResponse: UpdateWeightResponse,
  updateWeightError: UpdateWeightError,
  updateWeightErrorErrorCodesType: UpdateWeightErrorErrorCodesType,
  addHeightUnion: ResolversTypes['addHeightResponse'] | ResolversTypes['addHeightError'],
  addHeightResponse: AddHeightResponse,
  addHeightError: AddHeightError,
  addHeightErrorErrorCodesType: AddHeightErrorErrorCodesType,
  updateHeightUnion: ResolversTypes['updateHeightResponse'] | ResolversTypes['updateHeightError'],
  updateHeightResponse: UpdateHeightResponse,
  updateHeightError: UpdateHeightError,
  updateHeightErrorErrorCodesType: UpdateHeightErrorErrorCodesType,
  addBodyTemperatureUnion: ResolversTypes['addBodyTemperatureResponse'] | ResolversTypes['addBodyTemperatureError'],
  addBodyTemperatureResponse: AddBodyTemperatureResponse,
  addBodyTemperatureError: AddBodyTemperatureError,
  addBodyTemperatureErrorErrorCodesType: AddBodyTemperatureErrorErrorCodesType,
  updateBodyTemperatureUnion: ResolversTypes['updateBodyTemperatureResponse'] | ResolversTypes['updateBodyTemperatureError'],
  updateBodyTemperatureResponse: UpdateBodyTemperatureResponse,
  updateBodyTemperatureError: UpdateBodyTemperatureError,
  updateBodyTemperatureErrorErrorCodesType: UpdateBodyTemperatureErrorErrorCodesType,
  addWaistCircumferenceUnion: ResolversTypes['addWaistCircumferenceResponse'] | ResolversTypes['addWaistCircumferenceError'],
  addWaistCircumferenceResponse: AddWaistCircumferenceResponse,
  addWaistCircumferenceError: AddWaistCircumferenceError,
  addWaistCircumferenceErrorErrorCodesType: AddWaistCircumferenceErrorErrorCodesType,
  updateWaistCircumferenceUnion: ResolversTypes['updateWaistCircumferenceResponse'] | ResolversTypes['updateWaistCircumferenceError'],
  updateWaistCircumferenceResponse: UpdateWaistCircumferenceResponse,
  updateWaistCircumferenceError: UpdateWaistCircumferenceError,
  updateWaistCircumferenceErrorErrorCodesType: UpdateWaistCircumferenceErrorErrorCodesType,
  CbcInputType: CbcInputType,
  addCbcUnion: ResolversTypes['addCbcResponse'] | ResolversTypes['addCbcError'],
  addCbcResponse: AddCbcResponse,
  addCbcError: AddCbcError,
  addCbcErrorErrorCodesType: AddCbcErrorErrorCodesType,
  CbcInputUpdateType: CbcInputUpdateType,
  updateCbcUnion: ResolversTypes['updateCbcResponse'] | ResolversTypes['updateCbcError'],
  updateCbcResponse: UpdateCbcResponse,
  updateCbcError: UpdateCbcError,
  updateCbcErrorErrorCodesType: UpdateCbcErrorErrorCodesType,
  PlateletInputType: PlateletInputType,
  addPlateletsUnion: ResolversTypes['addPlateletsResponse'] | ResolversTypes['addPlateletsError'],
  addPlateletsResponse: AddPlateletsResponse,
  addPlateletsError: AddPlateletsError,
  addPlateletsErrorErrorCodesType: AddPlateletsErrorErrorCodesType,
  PlateletInputUpdateType: PlateletInputUpdateType,
  updatePlateletsUnion: ResolversTypes['updatePlateletsResponse'] | ResolversTypes['updatePlateletsError'],
  updatePlateletsResponse: UpdatePlateletsResponse,
  updatePlateletsError: UpdatePlateletsError,
  updatePlateletsErrorErrorCodesType: UpdatePlateletsErrorErrorCodesType,
  BloodPressureInputType: BloodPressureInputType,
  addBloodPressureUnion: ResolversTypes['addBloodPressureResponse'] | ResolversTypes['addBloodPressureError'],
  addBloodPressureResponse: AddBloodPressureResponse,
  addBloodPressureError: AddBloodPressureError,
  addBloodPressureErrorErrorCodesType: AddBloodPressureErrorErrorCodesType,
  BloodPressureInputUpdateType: BloodPressureInputUpdateType,
  updateBloodPressureUnion: ResolversTypes['updateBloodPressureResponse'] | ResolversTypes['updateBloodPressureError'],
  updateBloodPressureResponse: UpdateBloodPressureResponse,
  updateBloodPressureError: UpdateBloodPressureError,
  updateBloodPressureErrorErrorCodesType: UpdateBloodPressureErrorErrorCodesType,
  addAnxietyUnion: ResolversTypes['addAnxietyResponse'] | ResolversTypes['addAnxietyError'],
  addAnxietyResponse: AddAnxietyResponse,
  addAnxietyError: AddAnxietyError,
  addAnxietyErrorErrorCodesType: AddAnxietyErrorErrorCodesType,
  updateAnxietyUnion: ResolversTypes['updateAnxietyResponse'] | ResolversTypes['updateAnxietyError'],
  updateAnxietyResponse: UpdateAnxietyResponse,
  updateAnxietyError: UpdateAnxietyError,
  updateAnxietyErrorErrorCodesType: UpdateAnxietyErrorErrorCodesType,
  MigraineInputType: MigraineInputType,
  addMigraineUnion: ResolversTypes['addMigraineResponse'] | ResolversTypes['addMigraineError'],
  addMigraineResponse: AddMigraineResponse,
  addMigraineError: AddMigraineError,
  addMigraineErrorErrorCodesType: AddMigraineErrorErrorCodesType,
  MigraineInputUpdateType: MigraineInputUpdateType,
  updateMigraineUnion: ResolversTypes['updateMigraineResponse'] | ResolversTypes['updateMigraineError'],
  updateMigraineResponse: UpdateMigraineResponse,
  updateMigraineError: UpdateMigraineError,
  updateMigraineErrorErrorCodesType: UpdateMigraineErrorErrorCodesType,
  AverageMPGInputType: AverageMpgInputType,
  addAverageMPGUnion: ResolversTypes['addAverageMPGResponse'] | ResolversTypes['addAverageMPGError'],
  addAverageMPGResponse: AddAverageMpgResponse,
  addAverageMPGError: AddAverageMpgError,
  addAverageMPGErrorErrorCodesType: AddAverageMpgErrorErrorCodesType,
  AverageMPGInputUpdateType: AverageMpgInputUpdateType,
  updateAverageMPGUnion: ResolversTypes['updateAverageMPGResponse'] | ResolversTypes['updateAverageMPGError'],
  updateAverageMPGResponse: UpdateAverageMpgResponse,
  updateAverageMPGError: UpdateAverageMpgError,
  updateAverageMPGErrorErrorCodesType: UpdateAverageMpgErrorErrorCodesType,
  DrivingScoreInputType: DrivingScoreInputType,
  addDrivingScoreUnion: ResolversTypes['addDrivingScoreResponse'] | ResolversTypes['addDrivingScoreError'],
  addDrivingScoreResponse: AddDrivingScoreResponse,
  addDrivingScoreError: AddDrivingScoreError,
  addDrivingScoreErrorErrorCodesType: AddDrivingScoreErrorErrorCodesType,
  DrivingScoreInputUpdateType: DrivingScoreInputUpdateType,
  updateDrivingScoreUnion: ResolversTypes['updateDrivingScoreResponse'] | ResolversTypes['updateDrivingScoreError'],
  updateDrivingScoreResponse: UpdateDrivingScoreResponse,
  updateDrivingScoreError: UpdateDrivingScoreError,
  updateDrivingScoreErrorErrorCodesType: UpdateDrivingScoreErrorErrorCodesType,
  RefuelInputType: RefuelInputType,
  addRefuelUnion: ResolversTypes['addRefuelResponse'] | ResolversTypes['addRefuelError'],
  addRefuelResponse: AddRefuelResponse,
  addRefuelError: AddRefuelError,
  addRefuelErrorErrorCodesType: AddRefuelErrorErrorCodesType,
  RefuelInputUpdaetType: RefuelInputUpdaetType,
  updateRefuelUnion: ResolversTypes['updateRefuelResponse'] | ResolversTypes['updateRefuelError'],
  updateRefuelResponse: UpdateRefuelResponse,
  updateRefuelError: UpdateRefuelError,
  updateRefuelErrorErrorCodesType: UpdateRefuelErrorErrorCodesType,
  CollectionInputType: CollectionInputType,
  addCollectionUnion: ResolversTypes['addCollectionResponse'] | ResolversTypes['addCollectionError'],
  addCollectionResponse: AddCollectionResponse,
  addCollectionError: AddCollectionError,
  addCollectionErrorErrorCodesType: AddCollectionErrorErrorCodesType,
  CollectionInputUpdateType: CollectionInputUpdateType,
  updateCollectionUnion: ResolversTypes['updateCollectionResponse'] | ResolversTypes['updateCollectionError'],
  updateCollectionResponse: UpdateCollectionResponse,
  updateCollectionError: UpdateCollectionError,
  updateCollectionErrorErrorCodesType: UpdateCollectionErrorErrorCodesType,
  CollectionInputIncrementType: CollectionInputIncrementType,
  incrementCollectionUnion: ResolversTypes['incrementCollectionResponse'] | ResolversTypes['incrementCollectionError'],
  incrementCollectionResponse: IncrementCollectionResponse,
  incrementCollectionError: IncrementCollectionError,
  incrementCollectionErrorErrorCodesType: IncrementCollectionErrorErrorCodesType,
  addSteinUnion: ResolversTypes['addSteinResponse'] | ResolversTypes['addSteinError'],
  addSteinResponse: AddSteinResponse,
  addSteinError: AddSteinError,
  addSteinErrorErrorCodesType: AddSteinErrorErrorCodesType,
  updateSteinUnion: ResolversTypes['updateSteinResponse'] | ResolversTypes['updateSteinError'],
  updateSteinResponse: UpdateSteinResponse,
  updateSteinError: UpdateSteinError,
  updateSteinErrorErrorCodesType: UpdateSteinErrorErrorCodesType,
  incrementSteinUnion: ResolversTypes['incrementSteinResponse'] | ResolversTypes['incrementSteinError'],
  incrementSteinResponse: IncrementSteinResponse,
  incrementSteinError: IncrementSteinError,
  incrementSteinErrorErrorCodesType: IncrementSteinErrorErrorCodesType,
};

export type ActiveEnergyAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['activeEnergyAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['activeEnergyAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ActiveEnergyAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['activeEnergyAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type ActiveEnergyAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['activeEnergyAllUnion']> = {
  __resolveType: TypeResolveFn<'activeEnergyAllResponse' | 'activeEnergyAllError', ParentType, ContextType>
};

export type ActiveEnergyErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['activeEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['activeEnergyErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ActiveEnergyResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['activeEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type ActiveEnergyUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['activeEnergyUnion']> = {
  __resolveType: TypeResolveFn<'activeEnergyResponse' | 'activeEnergyError', ParentType, ContextType>
};

export type ActivityAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['activityAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['activityAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ActivityAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['activityAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityType']>>>, ParentType, ContextType>,
};

export type ActivityAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['activityAllUnion']> = {
  __resolveType: TypeResolveFn<'activityAllResponse' | 'activityAllError', ParentType, ContextType>
};

export type ActivityErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['activityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['activityErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ActivityResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['activityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>,
};

export type ActivityTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['ActivityType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  energy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  energyUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  energyGoal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  energyProgress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  energyComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  standHours?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  standProgress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  standGoal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  standComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  exerciseMinutes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  exerciseGoal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  exerciseProgress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  exerciseComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  ringsProgress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  ringsComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type ActivityUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['activityUnion']> = {
  __resolveType: TypeResolveFn<'activityResponse' | 'activityError', ParentType, ContextType>
};

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

export type AddActivityErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addActivityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addActivityErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddActivityResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addActivityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>,
};

export type AddActivityUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addActivityUnion']> = {
  __resolveType: TypeResolveFn<'addActivityResponse' | 'addActivityError', ParentType, ContextType>
};

export type AddAnxietyErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addAnxietyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addAnxietyErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddAnxietyResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addAnxietyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AddAnxietyUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addAnxietyUnion']> = {
  __resolveType: TypeResolveFn<'addAnxietyResponse' | 'addAnxietyError', ParentType, ContextType>
};

export type AddAverageMpgErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addAverageMPGError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addAverageMPGErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddAverageMpgResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addAverageMPGResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['AverageMPGType']>, ParentType, ContextType>,
};

export type AddAverageMpgUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addAverageMPGUnion']> = {
  __resolveType: TypeResolveFn<'addAverageMPGResponse' | 'addAverageMPGError', ParentType, ContextType>
};

export type AddBloodPressureErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addBloodPressureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addBloodPressureErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddBloodPressureResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addBloodPressureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['BloodPressureType']>, ParentType, ContextType>,
};

export type AddBloodPressureUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addBloodPressureUnion']> = {
  __resolveType: TypeResolveFn<'addBloodPressureResponse' | 'addBloodPressureError', ParentType, ContextType>
};

export type AddBodyTemperatureErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addBodyTemperatureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addBodyTemperatureErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddBodyTemperatureResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addBodyTemperatureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AddBodyTemperatureUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addBodyTemperatureUnion']> = {
  __resolveType: TypeResolveFn<'addBodyTemperatureResponse' | 'addBodyTemperatureError', ParentType, ContextType>
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

export type AddCbcErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addCbcError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addCbcErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddCbcResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addCbcResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CbcType']>, ParentType, ContextType>,
};

export type AddCbcUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addCbcUnion']> = {
  __resolveType: TypeResolveFn<'addCbcResponse' | 'addCbcError', ParentType, ContextType>
};

export type AddCollectionErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addCollectionError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addCollectionErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddCollectionResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addCollectionResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>,
};

export type AddCollectionUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addCollectionUnion']> = {
  __resolveType: TypeResolveFn<'addCollectionResponse' | 'addCollectionError', ParentType, ContextType>
};

export type AddDrivingScoreErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addDrivingScoreError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addDrivingScoreErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddDrivingScoreResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addDrivingScoreResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DrivingScoreType']>, ParentType, ContextType>,
};

export type AddDrivingScoreUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addDrivingScoreUnion']> = {
  __resolveType: TypeResolveFn<'addDrivingScoreResponse' | 'addDrivingScoreError', ParentType, ContextType>
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
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitUnionType']>>>, ParentType, ContextType>,
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

export type AddHeightErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHeightErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddHeightResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AddHeightUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeightUnion']> = {
  __resolveType: TypeResolveFn<'addHeightResponse' | 'addHeightError', ParentType, ContextType>
};

export type AddMigraineErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addMigraineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addMigraineErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddMigraineResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addMigraineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['MigraineType']>, ParentType, ContextType>,
};

export type AddMigraineUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addMigraineUnion']> = {
  __resolveType: TypeResolveFn<'addMigraineResponse' | 'addMigraineError', ParentType, ContextType>
};

export type AddOxygenSaturationErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addOxygenSaturationError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addOxygenSaturationErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddOxygenSaturationResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addOxygenSaturationResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type AddOxygenSaturationUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addOxygenSaturationUnion']> = {
  __resolveType: TypeResolveFn<'addOxygenSaturationResponse' | 'addOxygenSaturationError', ParentType, ContextType>
};

export type AddPlateletsErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addPlateletsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addPlateletsErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddPlateletsResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addPlateletsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['PlateletType']>, ParentType, ContextType>,
};

export type AddPlateletsUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addPlateletsUnion']> = {
  __resolveType: TypeResolveFn<'addPlateletsResponse' | 'addPlateletsError', ParentType, ContextType>
};

export type AddRefuelErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addRefuelError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addRefuelErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddRefuelResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addRefuelResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['RefuelType']>, ParentType, ContextType>,
};

export type AddRefuelUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addRefuelUnion']> = {
  __resolveType: TypeResolveFn<'addRefuelResponse' | 'addRefuelError', ParentType, ContextType>
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

export type AddSteinErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addSteinError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addSteinErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddSteinResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addSteinResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>,
};

export type AddSteinUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addSteinUnion']> = {
  __resolveType: TypeResolveFn<'addSteinResponse' | 'addSteinError', ParentType, ContextType>
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

export type AddWaistCircumferenceErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addWaistCircumferenceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addWaistCircumferenceErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddWaistCircumferenceResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addWaistCircumferenceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AddWaistCircumferenceUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addWaistCircumferenceUnion']> = {
  __resolveType: TypeResolveFn<'addWaistCircumferenceResponse' | 'addWaistCircumferenceError', ParentType, ContextType>
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

export type AddWeightErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addWeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addWeightErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddWeightResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addWeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AddWeightUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addWeightUnion']> = {
  __resolveType: TypeResolveFn<'addWeightResponse' | 'addWeightError', ParentType, ContextType>
};

export type AnxietyAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['anxietyAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['anxietyAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AnxietyAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['anxietyAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>,
};

export type AnxietyAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['anxietyAllUnion']> = {
  __resolveType: TypeResolveFn<'anxietyAllResponse' | 'anxietyAllError', ParentType, ContextType>
};

export type AnxietyErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['anxietyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['anxietyErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AnxietyResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['anxietyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AnxietyUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['anxietyUnion']> = {
  __resolveType: TypeResolveFn<'anxietyResponse' | 'anxietyError', ParentType, ContextType>
};

export type AverageMpgAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['AverageMPGAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['AverageMPGAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AverageMpgAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['AverageMPGAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageMPGType']>>>, ParentType, ContextType>,
};

export type AverageMpgAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['AverageMPGAllUnion']> = {
  __resolveType: TypeResolveFn<'AverageMPGAllResponse' | 'AverageMPGAllError', ParentType, ContextType>
};

export type AverageMpgErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['AverageMPGError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['AverageMPGErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AverageMpgResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['AverageMPGResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['AverageMPGType']>, ParentType, ContextType>,
};

export type AverageMpgTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['AverageMPGType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vehicle?: Resolver<Maybe<ResolversTypes['VehicleType']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AverageMpgUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['AverageMPGUnion']> = {
  __resolveType: TypeResolveFn<'AverageMPGResponse' | 'AverageMPGError', ParentType, ContextType>
};

export type BloodPressureAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['bloodPressureAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['bloodPressureAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type BloodPressureAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['bloodPressureAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['BloodPressureType']>>>, ParentType, ContextType>,
};

export type BloodPressureAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['bloodPressureAllUnion']> = {
  __resolveType: TypeResolveFn<'bloodPressureAllResponse' | 'bloodPressureAllError', ParentType, ContextType>
};

export type BloodPressureErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['bloodPressureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['bloodPressureErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type BloodPressureResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['bloodPressureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['BloodPressureType']>, ParentType, ContextType>,
};

export type BloodPressureTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['BloodPressureType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  systolic?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  diastolic?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>,
};

export type BloodPressureUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['bloodPressureUnion']> = {
  __resolveType: TypeResolveFn<'bloodPressureResponse' | 'bloodPressureError', ParentType, ContextType>
};

export type BodyTemperatureAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['bodyTemperatureAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['bodyTemperatureAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type BodyTemperatureAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['bodyTemperatureAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>,
};

export type BodyTemperatureAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['bodyTemperatureAllUnion']> = {
  __resolveType: TypeResolveFn<'bodyTemperatureAllResponse' | 'bodyTemperatureAllError', ParentType, ContextType>
};

export type BodyTemperatureErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['bodyTemperatureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['bodyTemperatureErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type BodyTemperatureResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['bodyTemperatureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type BodyTemperatureUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['bodyTemperatureUnion']> = {
  __resolveType: TypeResolveFn<'bodyTemperatureResponse' | 'bodyTemperatureError', ParentType, ContextType>
};

export type CaffeineAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['caffeineAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['caffeineAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CaffeineAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['caffeineAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type CaffeineAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['caffeineAllUnion']> = {
  __resolveType: TypeResolveFn<'caffeineAllResponse' | 'caffeineAllError', ParentType, ContextType>
};

export type CaffeineErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['caffeineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['caffeineErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CaffeineResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['caffeineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type CaffeineUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['caffeineUnion']> = {
  __resolveType: TypeResolveFn<'caffeineResponse' | 'caffeineError', ParentType, ContextType>
};

export type CbcAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['cbcAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['cbcAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CbcAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['cbcAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['CbcType']>>>, ParentType, ContextType>,
};

export type CbcAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['cbcAllUnion']> = {
  __resolveType: TypeResolveFn<'cbcAllResponse' | 'cbcAllError', ParentType, ContextType>
};

export type CbcErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['cbcError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['cbcErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CbcResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['cbcResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CbcType']>, ParentType, ContextType>,
};

export type CbcTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['CbcType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  wbcCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  rbcCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  hematrocrit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  hgb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mvc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mch?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mchc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  redCellDistributionWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  platelets?: Resolver<Maybe<ResolversTypes['PlateletType']>, ParentType, ContextType>,
  plateletsId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  meanPlateletVolume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  granulocytes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lymphocytes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  monocytes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  neutrophil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lymphocytePercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  monocytePercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
};

export type CbcUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['cbcUnion']> = {
  __resolveType: TypeResolveFn<'cbcResponse' | 'cbcError', ParentType, ContextType>
};

export type CollectionsAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['CollectionsAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['CollectionsAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CollectionsAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['CollectionsAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['CollectionType']>>>, ParentType, ContextType>,
};

export type CollectionsAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['CollectionsAllUnion']> = {
  __resolveType: TypeResolveFn<'CollectionsAllResponse' | 'CollectionsAllError', ParentType, ContextType>
};

export type CollectionsErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['CollectionsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['CollectionsErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CollectionsResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['CollectionsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>,
};

export type CollectionsUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['CollectionsUnion']> = {
  __resolveType: TypeResolveFn<'CollectionsResponse' | 'CollectionsError', ParentType, ContextType>
};

export type CollectionTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['CollectionType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  shortId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type DrivingScoreAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['DrivingScoreAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['DrivingScoreAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type DrivingScoreAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['DrivingScoreAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['DrivingScoreType']>>>, ParentType, ContextType>,
};

export type DrivingScoreAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['DrivingScoreAllUnion']> = {
  __resolveType: TypeResolveFn<'DrivingScoreAllResponse' | 'DrivingScoreAllError', ParentType, ContextType>
};

export type DrivingScoreErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['DrivingScoreError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['DrivingScoreErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type DrivingScoreResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['DrivingScoreResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DrivingScoreType']>, ParentType, ContextType>,
};

export type DrivingScoreTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['DrivingScoreType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  accelerationScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  coastingScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  breakingScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  totalScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  vehicle?: Resolver<Maybe<ResolversTypes['VehicleType']>, ParentType, ContextType>,
};

export type DrivingScoreUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['DrivingScoreUnion']> = {
  __resolveType: TypeResolveFn<'DrivingScoreResponse' | 'DrivingScoreError', ParentType, ContextType>
};

export type FlightsClimbedAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['flightsClimbedAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['flightsClimbedAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type FlightsClimbedAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['flightsClimbedAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type FlightsClimbedAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['flightsClimbedAllUnion']> = {
  __resolveType: TypeResolveFn<'flightsClimbedAllResponse' | 'flightsClimbedAllError', ParentType, ContextType>
};

export type FlightsClimbedErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['flightsClimbedError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['flightsClimbedErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type FlightsClimbedResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['flightsClimbedResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type FlightsClimbedUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['flightsClimbedUnion']> = {
  __resolveType: TypeResolveFn<'flightsClimbedResponse' | 'flightsClimbedError', ParentType, ContextType>
};

export type HealthKitTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['HealthKitType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  valueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  totalSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  averageSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  highestSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lowestSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>,
  totalDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type HealthKitUnionTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['HealthKitUnionType']> = {
  __resolveType: TypeResolveFn<'HealthKitType' | 'BloodPressureType', ParentType, ContextType>
};

export type HealthTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['HealthType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>,
};

export type HeartrateAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heartrateAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type HeartrateAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type HeartrateAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateAllUnion']> = {
  __resolveType: TypeResolveFn<'heartrateAllResponse' | 'heartrateAllError', ParentType, ContextType>
};

export type HeartrateErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heartrateErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type HeartrateResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type HeartrateUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateUnion']> = {
  __resolveType: TypeResolveFn<'heartrateResponse' | 'heartrateError', ParentType, ContextType>
};

export type HeartrateVariabilityAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateVariabilityAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heartrateVariabilityAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type HeartrateVariabilityAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateVariabilityAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type HeartrateVariabilityAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateVariabilityAllUnion']> = {
  __resolveType: TypeResolveFn<'heartrateVariabilityAllResponse' | 'heartrateVariabilityAllError', ParentType, ContextType>
};

export type HeartrateVariabilityErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateVariabilityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heartrateVariabilityErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type HeartrateVariabilityResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateVariabilityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type HeartrateVariabilityUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['heartrateVariabilityUnion']> = {
  __resolveType: TypeResolveFn<'heartrateVariabilityResponse' | 'heartrateVariabilityError', ParentType, ContextType>
};

export type HeightAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['heightAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heightAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type HeightAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['heightAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>,
};

export type HeightAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['heightAllUnion']> = {
  __resolveType: TypeResolveFn<'heightAllResponse' | 'heightAllError', ParentType, ContextType>
};

export type HeightErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['heightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heightErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type HeightResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['heightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type HeightUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['heightUnion']> = {
  __resolveType: TypeResolveFn<'heightResponse' | 'heightError', ParentType, ContextType>
};

export type IncrementCollectionErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['incrementCollectionError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['incrementCollectionErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type IncrementCollectionResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['incrementCollectionResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>,
};

export type IncrementCollectionUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['incrementCollectionUnion']> = {
  __resolveType: TypeResolveFn<'incrementCollectionResponse' | 'incrementCollectionError', ParentType, ContextType>
};

export type IncrementSteinErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['incrementSteinError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['incrementSteinErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type IncrementSteinResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['incrementSteinResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>,
};

export type IncrementSteinUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['incrementSteinUnion']> = {
  __resolveType: TypeResolveFn<'incrementSteinResponse' | 'incrementSteinError', ParentType, ContextType>
};

export type MigraineAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['migraineAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['migraineAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MigraineAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['migraineAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['MigraineType']>>>, ParentType, ContextType>,
};

export type MigraineAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['migraineAllUnion']> = {
  __resolveType: TypeResolveFn<'migraineAllResponse' | 'migraineAllError', ParentType, ContextType>
};

export type MigraineErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['migraineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['migraineErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MigraineResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['migraineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['MigraineType']>, ParentType, ContextType>,
};

export type MigraineTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['MigraineType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  painLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  auraLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  nauseaLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  auraTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  totalDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MigraineUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['migraineUnion']> = {
  __resolveType: TypeResolveFn<'migraineResponse' | 'migraineError', ParentType, ContextType>
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
  addOxygenSaturation?: Resolver<Maybe<ResolversTypes['addOxygenSaturationUnion']>, ParentType, ContextType, MutationAddOxygenSaturationArgs>,
  updateOxygenSaturation?: Resolver<Maybe<ResolversTypes['updateOxygenSaturationUnion']>, ParentType, ContextType, MutationUpdateOxygenSaturationArgs>,
  addActivity?: Resolver<Maybe<ResolversTypes['addActivityUnion']>, ParentType, ContextType, MutationAddActivityArgs>,
  updateActivity?: Resolver<Maybe<ResolversTypes['updateActivityUnion']>, ParentType, ContextType, MutationUpdateActivityArgs>,
  addWeight?: Resolver<Maybe<ResolversTypes['addWeightUnion']>, ParentType, ContextType, MutationAddWeightArgs>,
  updateWeight?: Resolver<Maybe<ResolversTypes['updateWeightUnion']>, ParentType, ContextType, MutationUpdateWeightArgs>,
  addHeight?: Resolver<Maybe<ResolversTypes['addHeightUnion']>, ParentType, ContextType, MutationAddHeightArgs>,
  updateHeight?: Resolver<Maybe<ResolversTypes['updateHeightUnion']>, ParentType, ContextType, MutationUpdateHeightArgs>,
  addBodyTemperature?: Resolver<Maybe<ResolversTypes['addBodyTemperatureUnion']>, ParentType, ContextType, MutationAddBodyTemperatureArgs>,
  updateBodyTemperature?: Resolver<Maybe<ResolversTypes['updateBodyTemperatureUnion']>, ParentType, ContextType, MutationUpdateBodyTemperatureArgs>,
  addWaistCircumference?: Resolver<Maybe<ResolversTypes['addWaistCircumferenceUnion']>, ParentType, ContextType, MutationAddWaistCircumferenceArgs>,
  updateWaistCircumference?: Resolver<Maybe<ResolversTypes['updateWaistCircumferenceUnion']>, ParentType, ContextType, MutationUpdateWaistCircumferenceArgs>,
  addCbc?: Resolver<Maybe<ResolversTypes['addCbcUnion']>, ParentType, ContextType, MutationAddCbcArgs>,
  updateCbc?: Resolver<Maybe<ResolversTypes['updateCbcUnion']>, ParentType, ContextType, MutationUpdateCbcArgs>,
  addPlatelets?: Resolver<Maybe<ResolversTypes['addPlateletsUnion']>, ParentType, ContextType, MutationAddPlateletsArgs>,
  updatePlatelets?: Resolver<Maybe<ResolversTypes['updatePlateletsUnion']>, ParentType, ContextType, MutationUpdatePlateletsArgs>,
  addBloodPressure?: Resolver<Maybe<ResolversTypes['addBloodPressureUnion']>, ParentType, ContextType, MutationAddBloodPressureArgs>,
  updateBloodPressure?: Resolver<Maybe<ResolversTypes['updateBloodPressureUnion']>, ParentType, ContextType, MutationUpdateBloodPressureArgs>,
  addAnxiety?: Resolver<Maybe<ResolversTypes['addAnxietyUnion']>, ParentType, ContextType, MutationAddAnxietyArgs>,
  updateAnxiety?: Resolver<Maybe<ResolversTypes['updateAnxietyUnion']>, ParentType, ContextType, MutationUpdateAnxietyArgs>,
  addMigraine?: Resolver<Maybe<ResolversTypes['addMigraineUnion']>, ParentType, ContextType, MutationAddMigraineArgs>,
  updateMigraine?: Resolver<Maybe<ResolversTypes['updateMigraineUnion']>, ParentType, ContextType, MutationUpdateMigraineArgs>,
  addAverageMPG?: Resolver<Maybe<ResolversTypes['addAverageMPGUnion']>, ParentType, ContextType, MutationAddAverageMpgArgs>,
  updateAverageMPG?: Resolver<Maybe<ResolversTypes['updateAverageMPGUnion']>, ParentType, ContextType, MutationUpdateAverageMpgArgs>,
  addDrivingScore?: Resolver<Maybe<ResolversTypes['addDrivingScoreUnion']>, ParentType, ContextType, MutationAddDrivingScoreArgs>,
  updateDrivingScore?: Resolver<Maybe<ResolversTypes['updateDrivingScoreUnion']>, ParentType, ContextType, MutationUpdateDrivingScoreArgs>,
  addRefuel?: Resolver<Maybe<ResolversTypes['addRefuelUnion']>, ParentType, ContextType, MutationAddRefuelArgs>,
  updateRefuel?: Resolver<Maybe<ResolversTypes['updateRefuelUnion']>, ParentType, ContextType, MutationUpdateRefuelArgs>,
  addCollection?: Resolver<Maybe<ResolversTypes['addCollectionUnion']>, ParentType, ContextType, MutationAddCollectionArgs>,
  updateCollection?: Resolver<Maybe<ResolversTypes['updateCollectionUnion']>, ParentType, ContextType, MutationUpdateCollectionArgs>,
  incrementCollection?: Resolver<Maybe<ResolversTypes['incrementCollectionUnion']>, ParentType, ContextType, MutationIncrementCollectionArgs>,
  addStein?: Resolver<Maybe<ResolversTypes['addSteinUnion']>, ParentType, ContextType, MutationAddSteinArgs>,
  updateStein?: Resolver<Maybe<ResolversTypes['updateSteinUnion']>, ParentType, ContextType, MutationUpdateSteinArgs>,
  incrementStein?: Resolver<Maybe<ResolversTypes['incrementSteinUnion']>, ParentType, ContextType, MutationIncrementSteinArgs>,
};

export type OxygenSaturationAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['oxygenSaturationAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['oxygenSaturationAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type OxygenSaturationAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['oxygenSaturationAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>,
};

export type OxygenSaturationAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['oxygenSaturationAllUnion']> = {
  __resolveType: TypeResolveFn<'oxygenSaturationAllResponse' | 'oxygenSaturationAllError', ParentType, ContextType>
};

export type OxygenSaturationErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['oxygenSaturationError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['oxygenSaturationErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type OxygenSaturationResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['oxygenSaturationResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type OxygenSaturationUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['oxygenSaturationUnion']> = {
  __resolveType: TypeResolveFn<'oxygenSaturationResponse' | 'oxygenSaturationError', ParentType, ContextType>
};

export type PlateletsAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['plateletsAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['plateletsAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type PlateletsAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['plateletsAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlateletType']>>>, ParentType, ContextType>,
};

export type PlateletsAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['plateletsAllUnion']> = {
  __resolveType: TypeResolveFn<'plateletsAllResponse' | 'plateletsAllError', ParentType, ContextType>
};

export type PlateletsErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['plateletsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['plateletsErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type PlateletsResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['plateletsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['PlateletType']>, ParentType, ContextType>,
};

export type PlateletsUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['plateletsUnion']> = {
  __resolveType: TypeResolveFn<'plateletsResponse' | 'plateletsError', ParentType, ContextType>
};

export type PlateletTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['PlateletType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>,
  cbc?: Resolver<Maybe<ResolversTypes['CbcType']>, ParentType, ContextType>,
  cbcId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type RefuelAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['RefuelAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['RefuelAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type RefuelAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['RefuelAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['RefuelType']>>>, ParentType, ContextType>,
};

export type RefuelAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['RefuelAllUnion']> = {
  __resolveType: TypeResolveFn<'RefuelAllResponse' | 'RefuelAllError', ParentType, ContextType>
};

export type RefuelErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['RefuelError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['RefuelErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type RefuelResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['RefuelResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['RefuelType']>, ParentType, ContextType>,
};

export type RefuelTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['RefuelType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  gallons?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  cost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  vehicle?: Resolver<Maybe<ResolversTypes['VehicleType']>, ParentType, ContextType>,
};

export type RefuelUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['RefuelUnion']> = {
  __resolveType: TypeResolveFn<'RefuelResponse' | 'RefuelError', ParentType, ContextType>
};

export type RestingEnergyAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['restingEnergyAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['restingEnergyAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type RestingEnergyAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['restingEnergyAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type RestingEnergyAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['restingEnergyAllUnion']> = {
  __resolveType: TypeResolveFn<'restingEnergyAllResponse' | 'restingEnergyAllError', ParentType, ContextType>
};

export type RestingEnergyErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['restingEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['restingEnergyErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type RestingEnergyResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['restingEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type RestingEnergyUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['restingEnergyUnion']> = {
  __resolveType: TypeResolveFn<'restingEnergyResponse' | 'restingEnergyError', ParentType, ContextType>
};

export type RestingHeartrateAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['restingHeartrateAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['restingHeartrateAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type RestingHeartrateAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['restingHeartrateAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type RestingHeartrateAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['restingHeartrateAllUnion']> = {
  __resolveType: TypeResolveFn<'restingHeartrateAllResponse' | 'restingHeartrateAllError', ParentType, ContextType>
};

export type RestingHeartrateErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['restingHeartrateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['restingHeartrateErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type RestingHeartrateResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['restingHeartrateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type RestingHeartrateUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['restingHeartrateUnion']> = {
  __resolveType: TypeResolveFn<'restingHeartrateResponse' | 'restingHeartrateError', ParentType, ContextType>
};

export type RootQueryTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['RootQueryType']> = {
  step?: Resolver<Maybe<ResolversTypes['stepsUnion']>, ParentType, ContextType, RootQueryTypeStepArgs>,
  stepAll?: Resolver<Maybe<ResolversTypes['stepsAllUnion']>, ParentType, ContextType, RootQueryTypeStepAllArgs>,
  flightsClimbed?: Resolver<Maybe<ResolversTypes['flightsClimbedUnion']>, ParentType, ContextType, RootQueryTypeFlightsClimbedArgs>,
  flightsClimbedAll?: Resolver<Maybe<ResolversTypes['flightsClimbedAllUnion']>, ParentType, ContextType, RootQueryTypeFlightsClimbedAllArgs>,
  heartrate?: Resolver<Maybe<ResolversTypes['heartrateUnion']>, ParentType, ContextType, RootQueryTypeHeartrateArgs>,
  heartrateAll?: Resolver<Maybe<ResolversTypes['heartrateAllUnion']>, ParentType, ContextType, RootQueryTypeHeartrateAllArgs>,
  heartrateVariability?: Resolver<Maybe<ResolversTypes['heartrateVariabilityUnion']>, ParentType, ContextType, RootQueryTypeHeartrateVariabilityArgs>,
  heartrateVariabilityAll?: Resolver<Maybe<ResolversTypes['heartrateVariabilityAllUnion']>, ParentType, ContextType, RootQueryTypeHeartrateVariabilityAllArgs>,
  activeEnergy?: Resolver<Maybe<ResolversTypes['activeEnergyUnion']>, ParentType, ContextType, RootQueryTypeActiveEnergyArgs>,
  activeEnergyAll?: Resolver<Maybe<ResolversTypes['activeEnergyAllUnion']>, ParentType, ContextType, RootQueryTypeActiveEnergyAllArgs>,
  caffeine?: Resolver<Maybe<ResolversTypes['caffeineUnion']>, ParentType, ContextType, RootQueryTypeCaffeineArgs>,
  caffeineAll?: Resolver<Maybe<ResolversTypes['caffeineAllUnion']>, ParentType, ContextType, RootQueryTypeCaffeineAllArgs>,
  restingEnergy?: Resolver<Maybe<ResolversTypes['restingEnergyUnion']>, ParentType, ContextType, RootQueryTypeRestingEnergyArgs>,
  restingEnergyAll?: Resolver<Maybe<ResolversTypes['restingEnergyAllUnion']>, ParentType, ContextType, RootQueryTypeRestingEnergyAllArgs>,
  restingHeartrate?: Resolver<Maybe<ResolversTypes['restingHeartrateUnion']>, ParentType, ContextType, RootQueryTypeRestingHeartrateArgs>,
  restingHeartrateAll?: Resolver<Maybe<ResolversTypes['restingHeartrateAllUnion']>, ParentType, ContextType, RootQueryTypeRestingHeartrateAllArgs>,
  sleepAnalysis?: Resolver<Maybe<ResolversTypes['sleepAnalysisUnion']>, ParentType, ContextType, RootQueryTypeSleepAnalysisArgs>,
  sleepAnalysisAll?: Resolver<Maybe<ResolversTypes['sleepAnalysisAllUnion']>, ParentType, ContextType, RootQueryTypeSleepAnalysisAllArgs>,
  swimmingDistance?: Resolver<Maybe<ResolversTypes['swimmingDistanceUnion']>, ParentType, ContextType, RootQueryTypeSwimmingDistanceArgs>,
  swimmingDistanceAll?: Resolver<Maybe<ResolversTypes['swimmingDistanceAllUnion']>, ParentType, ContextType, RootQueryTypeSwimmingDistanceAllArgs>,
  walkingHeartrateAverage?: Resolver<Maybe<ResolversTypes['walkingHeartrateAverageUnion']>, ParentType, ContextType, RootQueryTypeWalkingHeartrateAverageArgs>,
  walkingHeartrateAverageAll?: Resolver<Maybe<ResolversTypes['walkingHeartrateAverageAllUnion']>, ParentType, ContextType, RootQueryTypeWalkingHeartrateAverageAllArgs>,
  walkingRunningDistance?: Resolver<Maybe<ResolversTypes['walkingRunningDistanceUnion']>, ParentType, ContextType, RootQueryTypeWalkingRunningDistanceArgs>,
  walkingRunningDistanceAll?: Resolver<Maybe<ResolversTypes['walkingRunningDistanceAllUnion']>, ParentType, ContextType, RootQueryTypeWalkingRunningDistanceAllArgs>,
  oxygenSaturation?: Resolver<Maybe<ResolversTypes['oxygenSaturationUnion']>, ParentType, ContextType, RootQueryTypeOxygenSaturationArgs>,
  oxygenSaturationAll?: Resolver<Maybe<ResolversTypes['oxygenSaturationAllUnion']>, ParentType, ContextType, RootQueryTypeOxygenSaturationAllArgs>,
  activity?: Resolver<Maybe<ResolversTypes['activityUnion']>, ParentType, ContextType, RootQueryTypeActivityArgs>,
  activityAll?: Resolver<Maybe<ResolversTypes['activityAllUnion']>, ParentType, ContextType, RootQueryTypeActivityAllArgs>,
  weight?: Resolver<Maybe<ResolversTypes['weightUnion']>, ParentType, ContextType, RootQueryTypeWeightArgs>,
  weightAll?: Resolver<Maybe<ResolversTypes['weightAllUnion']>, ParentType, ContextType, RootQueryTypeWeightAllArgs>,
  height?: Resolver<Maybe<ResolversTypes['heightUnion']>, ParentType, ContextType, RootQueryTypeHeightArgs>,
  heightAll?: Resolver<Maybe<ResolversTypes['heightAllUnion']>, ParentType, ContextType, RootQueryTypeHeightAllArgs>,
  bodyTemperature?: Resolver<Maybe<ResolversTypes['bodyTemperatureUnion']>, ParentType, ContextType, RootQueryTypeBodyTemperatureArgs>,
  bodyTemperatureAll?: Resolver<Maybe<ResolversTypes['bodyTemperatureAllUnion']>, ParentType, ContextType, RootQueryTypeBodyTemperatureAllArgs>,
  waistCircumference?: Resolver<Maybe<ResolversTypes['waistCircumferenceUnion']>, ParentType, ContextType, RootQueryTypeWaistCircumferenceArgs>,
  waistCircumferenceAll?: Resolver<Maybe<ResolversTypes['waistCircumferenceAllUnion']>, ParentType, ContextType, RootQueryTypeWaistCircumferenceAllArgs>,
  cbc?: Resolver<Maybe<ResolversTypes['cbcUnion']>, ParentType, ContextType, RootQueryTypeCbcArgs>,
  cbcAll?: Resolver<Maybe<ResolversTypes['cbcAllUnion']>, ParentType, ContextType, RootQueryTypeCbcAllArgs>,
  platelets?: Resolver<Maybe<ResolversTypes['plateletsUnion']>, ParentType, ContextType, RootQueryTypePlateletsArgs>,
  plateletsAll?: Resolver<Maybe<ResolversTypes['plateletsAllUnion']>, ParentType, ContextType, RootQueryTypePlateletsAllArgs>,
  bloodPressure?: Resolver<Maybe<ResolversTypes['bloodPressureUnion']>, ParentType, ContextType, RootQueryTypeBloodPressureArgs>,
  bloodPressureAll?: Resolver<Maybe<ResolversTypes['bloodPressureAllUnion']>, ParentType, ContextType, RootQueryTypeBloodPressureAllArgs>,
  anxiety?: Resolver<Maybe<ResolversTypes['anxietyUnion']>, ParentType, ContextType, RootQueryTypeAnxietyArgs>,
  anxietyAll?: Resolver<Maybe<ResolversTypes['anxietyAllUnion']>, ParentType, ContextType, RootQueryTypeAnxietyAllArgs>,
  migraine?: Resolver<Maybe<ResolversTypes['migraineUnion']>, ParentType, ContextType, RootQueryTypeMigraineArgs>,
  migraineAll?: Resolver<Maybe<ResolversTypes['migraineAllUnion']>, ParentType, ContextType, RootQueryTypeMigraineAllArgs>,
  averageMPG?: Resolver<Maybe<ResolversTypes['AverageMPGUnion']>, ParentType, ContextType, RootQueryTypeAverageMpgArgs>,
  averageMPGAll?: Resolver<Maybe<ResolversTypes['AverageMPGAllUnion']>, ParentType, ContextType, RootQueryTypeAverageMpgAllArgs>,
  drivingScore?: Resolver<Maybe<ResolversTypes['DrivingScoreUnion']>, ParentType, ContextType, RootQueryTypeDrivingScoreArgs>,
  drivingScoreAll?: Resolver<Maybe<ResolversTypes['DrivingScoreAllUnion']>, ParentType, ContextType, RootQueryTypeDrivingScoreAllArgs>,
  refuel?: Resolver<Maybe<ResolversTypes['RefuelUnion']>, ParentType, ContextType, RootQueryTypeRefuelArgs>,
  refuelAll?: Resolver<Maybe<ResolversTypes['RefuelAllUnion']>, ParentType, ContextType, RootQueryTypeRefuelAllArgs>,
  collections?: Resolver<Maybe<ResolversTypes['CollectionsUnion']>, ParentType, ContextType, RootQueryTypeCollectionsArgs>,
  collectionsAll?: Resolver<Maybe<ResolversTypes['CollectionsAllUnion']>, ParentType, ContextType, RootQueryTypeCollectionsAllArgs>,
  steins?: Resolver<Maybe<ResolversTypes['SteinsUnion']>, ParentType, ContextType, RootQueryTypeSteinsArgs>,
  steinsAll?: Resolver<Maybe<ResolversTypes['SteinsAllUnion']>, ParentType, ContextType, RootQueryTypeSteinsAllArgs>,
};

export type SleepAnalysisAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['sleepAnalysisAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['sleepAnalysisAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SleepAnalysisAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['sleepAnalysisAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type SleepAnalysisAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['sleepAnalysisAllUnion']> = {
  __resolveType: TypeResolveFn<'sleepAnalysisAllResponse' | 'sleepAnalysisAllError', ParentType, ContextType>
};

export type SleepAnalysisErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['sleepAnalysisError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['sleepAnalysisErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SleepAnalysisResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['sleepAnalysisResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type SleepAnalysisUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['sleepAnalysisUnion']> = {
  __resolveType: TypeResolveFn<'sleepAnalysisResponse' | 'sleepAnalysisError', ParentType, ContextType>
};

export type SteinsAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['SteinsAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['SteinsAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SteinsAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['SteinsAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['CollectionType']>>>, ParentType, ContextType>,
};

export type SteinsAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['SteinsAllUnion']> = {
  __resolveType: TypeResolveFn<'SteinsAllResponse' | 'SteinsAllError', ParentType, ContextType>
};

export type SteinsErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['SteinsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['SteinsErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SteinsResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['SteinsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>,
};

export type SteinsUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['SteinsUnion']> = {
  __resolveType: TypeResolveFn<'SteinsResponse' | 'SteinsError', ParentType, ContextType>
};

export type StepsAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['stepsAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['stepsAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type StepsAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['stepsAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type StepsAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['stepsAllUnion']> = {
  __resolveType: TypeResolveFn<'stepsAllResponse' | 'stepsAllError', ParentType, ContextType>
};

export type StepsErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['stepsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['stepsErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type StepsResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['stepsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type StepsUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['stepsUnion']> = {
  __resolveType: TypeResolveFn<'stepsResponse' | 'stepsError', ParentType, ContextType>
};

export type SwimmingDistanceAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['swimmingDistanceAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['swimmingDistanceAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SwimmingDistanceAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['swimmingDistanceAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type SwimmingDistanceAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['swimmingDistanceAllUnion']> = {
  __resolveType: TypeResolveFn<'swimmingDistanceAllResponse' | 'swimmingDistanceAllError', ParentType, ContextType>
};

export type SwimmingDistanceErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['swimmingDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['swimmingDistanceErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SwimmingDistanceResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['swimmingDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type SwimmingDistanceUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['swimmingDistanceUnion']> = {
  __resolveType: TypeResolveFn<'swimmingDistanceResponse' | 'swimmingDistanceError', ParentType, ContextType>
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

export type UpdateActivityErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateActivityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateActivityErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateActivityResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateActivityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>,
};

export type UpdateActivityUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateActivityUnion']> = {
  __resolveType: TypeResolveFn<'updateActivityResponse' | 'updateActivityError', ParentType, ContextType>
};

export type UpdateAnxietyErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateAnxietyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateAnxietyErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateAnxietyResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateAnxietyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type UpdateAnxietyUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateAnxietyUnion']> = {
  __resolveType: TypeResolveFn<'updateAnxietyResponse' | 'updateAnxietyError', ParentType, ContextType>
};

export type UpdateAverageMpgErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateAverageMPGError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateAverageMPGErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateAverageMpgResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateAverageMPGResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['AverageMPGType']>, ParentType, ContextType>,
};

export type UpdateAverageMpgUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateAverageMPGUnion']> = {
  __resolveType: TypeResolveFn<'updateAverageMPGResponse' | 'updateAverageMPGError', ParentType, ContextType>
};

export type UpdateBloodPressureErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateBloodPressureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateBloodPressureErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateBloodPressureResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateBloodPressureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['BloodPressureType']>, ParentType, ContextType>,
};

export type UpdateBloodPressureUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateBloodPressureUnion']> = {
  __resolveType: TypeResolveFn<'updateBloodPressureResponse' | 'updateBloodPressureError', ParentType, ContextType>
};

export type UpdateBodyTemperatureErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateBodyTemperatureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateBodyTemperatureErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateBodyTemperatureResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateBodyTemperatureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type UpdateBodyTemperatureUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateBodyTemperatureUnion']> = {
  __resolveType: TypeResolveFn<'updateBodyTemperatureResponse' | 'updateBodyTemperatureError', ParentType, ContextType>
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

export type UpdateCbcErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateCbcError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateCbcErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateCbcResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateCbcResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CbcType']>, ParentType, ContextType>,
};

export type UpdateCbcUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateCbcUnion']> = {
  __resolveType: TypeResolveFn<'updateCbcResponse' | 'updateCbcError', ParentType, ContextType>
};

export type UpdateCollectionErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateCollectionError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateCollectionErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateCollectionResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateCollectionResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>,
};

export type UpdateCollectionUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateCollectionUnion']> = {
  __resolveType: TypeResolveFn<'updateCollectionResponse' | 'updateCollectionError', ParentType, ContextType>
};

export type UpdateDrivingScoreErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateDrivingScoreError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateDrivingScoreErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateDrivingScoreResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateDrivingScoreResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DrivingScoreType']>, ParentType, ContextType>,
};

export type UpdateDrivingScoreUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateDrivingScoreUnion']> = {
  __resolveType: TypeResolveFn<'updateDrivingScoreResponse' | 'updateDrivingScoreError', ParentType, ContextType>
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

export type UpdateHeightErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateHeightErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateHeightResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type UpdateHeightUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeightUnion']> = {
  __resolveType: TypeResolveFn<'updateHeightResponse' | 'updateHeightError', ParentType, ContextType>
};

export type UpdateMigraineErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateMigraineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateMigraineErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateMigraineResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateMigraineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['MigraineType']>, ParentType, ContextType>,
};

export type UpdateMigraineUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateMigraineUnion']> = {
  __resolveType: TypeResolveFn<'updateMigraineResponse' | 'updateMigraineError', ParentType, ContextType>
};

export type UpdateOxygenSaturationErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateOxygenSaturationError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateOxygenSaturationErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateOxygenSaturationResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateOxygenSaturationResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type UpdateOxygenSaturationUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateOxygenSaturationUnion']> = {
  __resolveType: TypeResolveFn<'updateOxygenSaturationResponse' | 'updateOxygenSaturationError', ParentType, ContextType>
};

export type UpdatePlateletsErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updatePlateletsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updatePlateletsErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdatePlateletsResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updatePlateletsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['PlateletType']>, ParentType, ContextType>,
};

export type UpdatePlateletsUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updatePlateletsUnion']> = {
  __resolveType: TypeResolveFn<'updatePlateletsResponse' | 'updatePlateletsError', ParentType, ContextType>
};

export type UpdateRefuelErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateRefuelError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateRefuelErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateRefuelResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateRefuelResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['RefuelType']>, ParentType, ContextType>,
};

export type UpdateRefuelUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateRefuelUnion']> = {
  __resolveType: TypeResolveFn<'updateRefuelResponse' | 'updateRefuelError', ParentType, ContextType>
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

export type UpdateSteinErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateSteinError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateSteinErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateSteinResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateSteinResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>,
};

export type UpdateSteinUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateSteinUnion']> = {
  __resolveType: TypeResolveFn<'updateSteinResponse' | 'updateSteinError', ParentType, ContextType>
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

export type UpdateWaistCircumferenceErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWaistCircumferenceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateWaistCircumferenceErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateWaistCircumferenceResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWaistCircumferenceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type UpdateWaistCircumferenceUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWaistCircumferenceUnion']> = {
  __resolveType: TypeResolveFn<'updateWaistCircumferenceResponse' | 'updateWaistCircumferenceError', ParentType, ContextType>
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

export type UpdateWeightErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateWeightErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateWeightResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type UpdateWeightUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateWeightUnion']> = {
  __resolveType: TypeResolveFn<'updateWeightResponse' | 'updateWeightError', ParentType, ContextType>
};

export type WaistCircumferenceAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['waistCircumferenceAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['waistCircumferenceAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WaistCircumferenceAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['waistCircumferenceAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>,
};

export type WaistCircumferenceAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['waistCircumferenceAllUnion']> = {
  __resolveType: TypeResolveFn<'waistCircumferenceAllResponse' | 'waistCircumferenceAllError', ParentType, ContextType>
};

export type WaistCircumferenceErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['waistCircumferenceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['waistCircumferenceErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WaistCircumferenceResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['waistCircumferenceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type WaistCircumferenceUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['waistCircumferenceUnion']> = {
  __resolveType: TypeResolveFn<'waistCircumferenceResponse' | 'waistCircumferenceError', ParentType, ContextType>
};

export type WalkingHeartrateAverageAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingHeartrateAverageAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['walkingHeartrateAverageAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WalkingHeartrateAverageAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingHeartrateAverageAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type WalkingHeartrateAverageAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingHeartrateAverageAllUnion']> = {
  __resolveType: TypeResolveFn<'walkingHeartrateAverageAllResponse' | 'walkingHeartrateAverageAllError', ParentType, ContextType>
};

export type WalkingHeartrateAverageErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingHeartrateAverageError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['walkingHeartrateAverageErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WalkingHeartrateAverageResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingHeartrateAverageResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type WalkingHeartrateAverageUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingHeartrateAverageUnion']> = {
  __resolveType: TypeResolveFn<'walkingHeartrateAverageResponse' | 'walkingHeartrateAverageError', ParentType, ContextType>
};

export type WalkingRunningDistanceAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingRunningDistanceAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['walkingRunningDistanceAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WalkingRunningDistanceAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingRunningDistanceAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>,
};

export type WalkingRunningDistanceAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingRunningDistanceAllUnion']> = {
  __resolveType: TypeResolveFn<'walkingRunningDistanceAllResponse' | 'walkingRunningDistanceAllError', ParentType, ContextType>
};

export type WalkingRunningDistanceErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingRunningDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['walkingRunningDistanceErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WalkingRunningDistanceResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingRunningDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>,
};

export type WalkingRunningDistanceUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['walkingRunningDistanceUnion']> = {
  __resolveType: TypeResolveFn<'walkingRunningDistanceResponse' | 'walkingRunningDistanceError', ParentType, ContextType>
};

export type WeightAllErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['weightAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['weightAllErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WeightAllResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['weightAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>,
};

export type WeightAllUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['weightAllUnion']> = {
  __resolveType: TypeResolveFn<'weightAllResponse' | 'weightAllError', ParentType, ContextType>
};

export type WeightErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['weightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['weightErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WeightResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['weightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type WeightUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['weightUnion']> = {
  __resolveType: TypeResolveFn<'weightResponse' | 'weightError', ParentType, ContextType>
};

export type Resolvers<ContextType = any> = {
  activeEnergyAllError?: ActiveEnergyAllErrorResolvers<ContextType>,
  activeEnergyAllResponse?: ActiveEnergyAllResponseResolvers<ContextType>,
  activeEnergyAllUnion?: ActiveEnergyAllUnionResolvers,
  activeEnergyError?: ActiveEnergyErrorResolvers<ContextType>,
  activeEnergyResponse?: ActiveEnergyResponseResolvers<ContextType>,
  activeEnergyUnion?: ActiveEnergyUnionResolvers,
  activityAllError?: ActivityAllErrorResolvers<ContextType>,
  activityAllResponse?: ActivityAllResponseResolvers<ContextType>,
  activityAllUnion?: ActivityAllUnionResolvers,
  activityError?: ActivityErrorResolvers<ContextType>,
  activityResponse?: ActivityResponseResolvers<ContextType>,
  ActivityType?: ActivityTypeResolvers<ContextType>,
  activityUnion?: ActivityUnionResolvers,
  addActiveEnergyError?: AddActiveEnergyErrorResolvers<ContextType>,
  addActiveEnergyResponse?: AddActiveEnergyResponseResolvers<ContextType>,
  addActiveEnergyUnion?: AddActiveEnergyUnionResolvers,
  addActivityError?: AddActivityErrorResolvers<ContextType>,
  addActivityResponse?: AddActivityResponseResolvers<ContextType>,
  addActivityUnion?: AddActivityUnionResolvers,
  addAnxietyError?: AddAnxietyErrorResolvers<ContextType>,
  addAnxietyResponse?: AddAnxietyResponseResolvers<ContextType>,
  addAnxietyUnion?: AddAnxietyUnionResolvers,
  addAverageMPGError?: AddAverageMpgErrorResolvers<ContextType>,
  addAverageMPGResponse?: AddAverageMpgResponseResolvers<ContextType>,
  addAverageMPGUnion?: AddAverageMpgUnionResolvers,
  addBloodPressureError?: AddBloodPressureErrorResolvers<ContextType>,
  addBloodPressureResponse?: AddBloodPressureResponseResolvers<ContextType>,
  addBloodPressureUnion?: AddBloodPressureUnionResolvers,
  addBodyTemperatureError?: AddBodyTemperatureErrorResolvers<ContextType>,
  addBodyTemperatureResponse?: AddBodyTemperatureResponseResolvers<ContextType>,
  addBodyTemperatureUnion?: AddBodyTemperatureUnionResolvers,
  addCaffeineError?: AddCaffeineErrorResolvers<ContextType>,
  addCaffeineResponse?: AddCaffeineResponseResolvers<ContextType>,
  addCaffeineUnion?: AddCaffeineUnionResolvers,
  addCbcError?: AddCbcErrorResolvers<ContextType>,
  addCbcResponse?: AddCbcResponseResolvers<ContextType>,
  addCbcUnion?: AddCbcUnionResolvers,
  addCollectionError?: AddCollectionErrorResolvers<ContextType>,
  addCollectionResponse?: AddCollectionResponseResolvers<ContextType>,
  addCollectionUnion?: AddCollectionUnionResolvers,
  addDrivingScoreError?: AddDrivingScoreErrorResolvers<ContextType>,
  addDrivingScoreResponse?: AddDrivingScoreResponseResolvers<ContextType>,
  addDrivingScoreUnion?: AddDrivingScoreUnionResolvers,
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
  addHeightError?: AddHeightErrorResolvers<ContextType>,
  addHeightResponse?: AddHeightResponseResolvers<ContextType>,
  addHeightUnion?: AddHeightUnionResolvers,
  addMigraineError?: AddMigraineErrorResolvers<ContextType>,
  addMigraineResponse?: AddMigraineResponseResolvers<ContextType>,
  addMigraineUnion?: AddMigraineUnionResolvers,
  addOxygenSaturationError?: AddOxygenSaturationErrorResolvers<ContextType>,
  addOxygenSaturationResponse?: AddOxygenSaturationResponseResolvers<ContextType>,
  addOxygenSaturationUnion?: AddOxygenSaturationUnionResolvers,
  addPlateletsError?: AddPlateletsErrorResolvers<ContextType>,
  addPlateletsResponse?: AddPlateletsResponseResolvers<ContextType>,
  addPlateletsUnion?: AddPlateletsUnionResolvers,
  addRefuelError?: AddRefuelErrorResolvers<ContextType>,
  addRefuelResponse?: AddRefuelResponseResolvers<ContextType>,
  addRefuelUnion?: AddRefuelUnionResolvers,
  addRestingEnergyError?: AddRestingEnergyErrorResolvers<ContextType>,
  addRestingEnergyResponse?: AddRestingEnergyResponseResolvers<ContextType>,
  addRestingEnergyUnion?: AddRestingEnergyUnionResolvers,
  addRestingHeartRateError?: AddRestingHeartRateErrorResolvers<ContextType>,
  addRestingHeartRateResponse?: AddRestingHeartRateResponseResolvers<ContextType>,
  addRestingHeartRateUnion?: AddRestingHeartRateUnionResolvers,
  addSleepAnalysisError?: AddSleepAnalysisErrorResolvers<ContextType>,
  addSleepAnalysisResponse?: AddSleepAnalysisResponseResolvers<ContextType>,
  addSleepAnalysisUnion?: AddSleepAnalysisUnionResolvers,
  addSteinError?: AddSteinErrorResolvers<ContextType>,
  addSteinResponse?: AddSteinResponseResolvers<ContextType>,
  addSteinUnion?: AddSteinUnionResolvers,
  addStepError?: AddStepErrorResolvers<ContextType>,
  addStepResponse?: AddStepResponseResolvers<ContextType>,
  addStepUnion?: AddStepUnionResolvers,
  addSwimmingDistanceError?: AddSwimmingDistanceErrorResolvers<ContextType>,
  addSwimmingDistanceResponse?: AddSwimmingDistanceResponseResolvers<ContextType>,
  addSwimmingDistanceUnion?: AddSwimmingDistanceUnionResolvers,
  addWaistCircumferenceError?: AddWaistCircumferenceErrorResolvers<ContextType>,
  addWaistCircumferenceResponse?: AddWaistCircumferenceResponseResolvers<ContextType>,
  addWaistCircumferenceUnion?: AddWaistCircumferenceUnionResolvers,
  addWalkingHeartRateAverageError?: AddWalkingHeartRateAverageErrorResolvers<ContextType>,
  addWalkingHeartRateAverageResponse?: AddWalkingHeartRateAverageResponseResolvers<ContextType>,
  addWalkingHeartRateAverageUnion?: AddWalkingHeartRateAverageUnionResolvers,
  addWalkingRunningDistanceError?: AddWalkingRunningDistanceErrorResolvers<ContextType>,
  addWalkingRunningDistanceResponse?: AddWalkingRunningDistanceResponseResolvers<ContextType>,
  addWalkingRunningDistanceUnion?: AddWalkingRunningDistanceUnionResolvers,
  addWeightError?: AddWeightErrorResolvers<ContextType>,
  addWeightResponse?: AddWeightResponseResolvers<ContextType>,
  addWeightUnion?: AddWeightUnionResolvers,
  anxietyAllError?: AnxietyAllErrorResolvers<ContextType>,
  anxietyAllResponse?: AnxietyAllResponseResolvers<ContextType>,
  anxietyAllUnion?: AnxietyAllUnionResolvers,
  anxietyError?: AnxietyErrorResolvers<ContextType>,
  anxietyResponse?: AnxietyResponseResolvers<ContextType>,
  anxietyUnion?: AnxietyUnionResolvers,
  AverageMPGAllError?: AverageMpgAllErrorResolvers<ContextType>,
  AverageMPGAllResponse?: AverageMpgAllResponseResolvers<ContextType>,
  AverageMPGAllUnion?: AverageMpgAllUnionResolvers,
  AverageMPGError?: AverageMpgErrorResolvers<ContextType>,
  AverageMPGResponse?: AverageMpgResponseResolvers<ContextType>,
  AverageMPGType?: AverageMpgTypeResolvers<ContextType>,
  AverageMPGUnion?: AverageMpgUnionResolvers,
  bloodPressureAllError?: BloodPressureAllErrorResolvers<ContextType>,
  bloodPressureAllResponse?: BloodPressureAllResponseResolvers<ContextType>,
  bloodPressureAllUnion?: BloodPressureAllUnionResolvers,
  bloodPressureError?: BloodPressureErrorResolvers<ContextType>,
  bloodPressureResponse?: BloodPressureResponseResolvers<ContextType>,
  BloodPressureType?: BloodPressureTypeResolvers<ContextType>,
  bloodPressureUnion?: BloodPressureUnionResolvers,
  bodyTemperatureAllError?: BodyTemperatureAllErrorResolvers<ContextType>,
  bodyTemperatureAllResponse?: BodyTemperatureAllResponseResolvers<ContextType>,
  bodyTemperatureAllUnion?: BodyTemperatureAllUnionResolvers,
  bodyTemperatureError?: BodyTemperatureErrorResolvers<ContextType>,
  bodyTemperatureResponse?: BodyTemperatureResponseResolvers<ContextType>,
  bodyTemperatureUnion?: BodyTemperatureUnionResolvers,
  caffeineAllError?: CaffeineAllErrorResolvers<ContextType>,
  caffeineAllResponse?: CaffeineAllResponseResolvers<ContextType>,
  caffeineAllUnion?: CaffeineAllUnionResolvers,
  caffeineError?: CaffeineErrorResolvers<ContextType>,
  caffeineResponse?: CaffeineResponseResolvers<ContextType>,
  caffeineUnion?: CaffeineUnionResolvers,
  cbcAllError?: CbcAllErrorResolvers<ContextType>,
  cbcAllResponse?: CbcAllResponseResolvers<ContextType>,
  cbcAllUnion?: CbcAllUnionResolvers,
  cbcError?: CbcErrorResolvers<ContextType>,
  cbcResponse?: CbcResponseResolvers<ContextType>,
  CbcType?: CbcTypeResolvers<ContextType>,
  cbcUnion?: CbcUnionResolvers,
  CollectionsAllError?: CollectionsAllErrorResolvers<ContextType>,
  CollectionsAllResponse?: CollectionsAllResponseResolvers<ContextType>,
  CollectionsAllUnion?: CollectionsAllUnionResolvers,
  CollectionsError?: CollectionsErrorResolvers<ContextType>,
  CollectionsResponse?: CollectionsResponseResolvers<ContextType>,
  CollectionsUnion?: CollectionsUnionResolvers,
  CollectionType?: CollectionTypeResolvers<ContextType>,
  Date?: GraphQLScalarType,
  DrivingScoreAllError?: DrivingScoreAllErrorResolvers<ContextType>,
  DrivingScoreAllResponse?: DrivingScoreAllResponseResolvers<ContextType>,
  DrivingScoreAllUnion?: DrivingScoreAllUnionResolvers,
  DrivingScoreError?: DrivingScoreErrorResolvers<ContextType>,
  DrivingScoreResponse?: DrivingScoreResponseResolvers<ContextType>,
  DrivingScoreType?: DrivingScoreTypeResolvers<ContextType>,
  DrivingScoreUnion?: DrivingScoreUnionResolvers,
  flightsClimbedAllError?: FlightsClimbedAllErrorResolvers<ContextType>,
  flightsClimbedAllResponse?: FlightsClimbedAllResponseResolvers<ContextType>,
  flightsClimbedAllUnion?: FlightsClimbedAllUnionResolvers,
  flightsClimbedError?: FlightsClimbedErrorResolvers<ContextType>,
  flightsClimbedResponse?: FlightsClimbedResponseResolvers<ContextType>,
  flightsClimbedUnion?: FlightsClimbedUnionResolvers,
  HealthKitType?: HealthKitTypeResolvers<ContextType>,
  HealthKitUnionType?: HealthKitUnionTypeResolvers,
  HealthType?: HealthTypeResolvers<ContextType>,
  heartrateAllError?: HeartrateAllErrorResolvers<ContextType>,
  heartrateAllResponse?: HeartrateAllResponseResolvers<ContextType>,
  heartrateAllUnion?: HeartrateAllUnionResolvers,
  heartrateError?: HeartrateErrorResolvers<ContextType>,
  heartrateResponse?: HeartrateResponseResolvers<ContextType>,
  heartrateUnion?: HeartrateUnionResolvers,
  heartrateVariabilityAllError?: HeartrateVariabilityAllErrorResolvers<ContextType>,
  heartrateVariabilityAllResponse?: HeartrateVariabilityAllResponseResolvers<ContextType>,
  heartrateVariabilityAllUnion?: HeartrateVariabilityAllUnionResolvers,
  heartrateVariabilityError?: HeartrateVariabilityErrorResolvers<ContextType>,
  heartrateVariabilityResponse?: HeartrateVariabilityResponseResolvers<ContextType>,
  heartrateVariabilityUnion?: HeartrateVariabilityUnionResolvers,
  heightAllError?: HeightAllErrorResolvers<ContextType>,
  heightAllResponse?: HeightAllResponseResolvers<ContextType>,
  heightAllUnion?: HeightAllUnionResolvers,
  heightError?: HeightErrorResolvers<ContextType>,
  heightResponse?: HeightResponseResolvers<ContextType>,
  heightUnion?: HeightUnionResolvers,
  incrementCollectionError?: IncrementCollectionErrorResolvers<ContextType>,
  incrementCollectionResponse?: IncrementCollectionResponseResolvers<ContextType>,
  incrementCollectionUnion?: IncrementCollectionUnionResolvers,
  incrementSteinError?: IncrementSteinErrorResolvers<ContextType>,
  incrementSteinResponse?: IncrementSteinResponseResolvers<ContextType>,
  incrementSteinUnion?: IncrementSteinUnionResolvers,
  migraineAllError?: MigraineAllErrorResolvers<ContextType>,
  migraineAllResponse?: MigraineAllResponseResolvers<ContextType>,
  migraineAllUnion?: MigraineAllUnionResolvers,
  migraineError?: MigraineErrorResolvers<ContextType>,
  migraineResponse?: MigraineResponseResolvers<ContextType>,
  MigraineType?: MigraineTypeResolvers<ContextType>,
  migraineUnion?: MigraineUnionResolvers,
  Mutation?: MutationResolvers<ContextType>,
  oxygenSaturationAllError?: OxygenSaturationAllErrorResolvers<ContextType>,
  oxygenSaturationAllResponse?: OxygenSaturationAllResponseResolvers<ContextType>,
  oxygenSaturationAllUnion?: OxygenSaturationAllUnionResolvers,
  oxygenSaturationError?: OxygenSaturationErrorResolvers<ContextType>,
  oxygenSaturationResponse?: OxygenSaturationResponseResolvers<ContextType>,
  oxygenSaturationUnion?: OxygenSaturationUnionResolvers,
  plateletsAllError?: PlateletsAllErrorResolvers<ContextType>,
  plateletsAllResponse?: PlateletsAllResponseResolvers<ContextType>,
  plateletsAllUnion?: PlateletsAllUnionResolvers,
  plateletsError?: PlateletsErrorResolvers<ContextType>,
  plateletsResponse?: PlateletsResponseResolvers<ContextType>,
  plateletsUnion?: PlateletsUnionResolvers,
  PlateletType?: PlateletTypeResolvers<ContextType>,
  RefuelAllError?: RefuelAllErrorResolvers<ContextType>,
  RefuelAllResponse?: RefuelAllResponseResolvers<ContextType>,
  RefuelAllUnion?: RefuelAllUnionResolvers,
  RefuelError?: RefuelErrorResolvers<ContextType>,
  RefuelResponse?: RefuelResponseResolvers<ContextType>,
  RefuelType?: RefuelTypeResolvers<ContextType>,
  RefuelUnion?: RefuelUnionResolvers,
  restingEnergyAllError?: RestingEnergyAllErrorResolvers<ContextType>,
  restingEnergyAllResponse?: RestingEnergyAllResponseResolvers<ContextType>,
  restingEnergyAllUnion?: RestingEnergyAllUnionResolvers,
  restingEnergyError?: RestingEnergyErrorResolvers<ContextType>,
  restingEnergyResponse?: RestingEnergyResponseResolvers<ContextType>,
  restingEnergyUnion?: RestingEnergyUnionResolvers,
  restingHeartrateAllError?: RestingHeartrateAllErrorResolvers<ContextType>,
  restingHeartrateAllResponse?: RestingHeartrateAllResponseResolvers<ContextType>,
  restingHeartrateAllUnion?: RestingHeartrateAllUnionResolvers,
  restingHeartrateError?: RestingHeartrateErrorResolvers<ContextType>,
  restingHeartrateResponse?: RestingHeartrateResponseResolvers<ContextType>,
  restingHeartrateUnion?: RestingHeartrateUnionResolvers,
  RootQueryType?: RootQueryTypeResolvers<ContextType>,
  sleepAnalysisAllError?: SleepAnalysisAllErrorResolvers<ContextType>,
  sleepAnalysisAllResponse?: SleepAnalysisAllResponseResolvers<ContextType>,
  sleepAnalysisAllUnion?: SleepAnalysisAllUnionResolvers,
  sleepAnalysisError?: SleepAnalysisErrorResolvers<ContextType>,
  sleepAnalysisResponse?: SleepAnalysisResponseResolvers<ContextType>,
  sleepAnalysisUnion?: SleepAnalysisUnionResolvers,
  SteinsAllError?: SteinsAllErrorResolvers<ContextType>,
  SteinsAllResponse?: SteinsAllResponseResolvers<ContextType>,
  SteinsAllUnion?: SteinsAllUnionResolvers,
  SteinsError?: SteinsErrorResolvers<ContextType>,
  SteinsResponse?: SteinsResponseResolvers<ContextType>,
  SteinsUnion?: SteinsUnionResolvers,
  stepsAllError?: StepsAllErrorResolvers<ContextType>,
  stepsAllResponse?: StepsAllResponseResolvers<ContextType>,
  stepsAllUnion?: StepsAllUnionResolvers,
  stepsError?: StepsErrorResolvers<ContextType>,
  stepsResponse?: StepsResponseResolvers<ContextType>,
  stepsUnion?: StepsUnionResolvers,
  swimmingDistanceAllError?: SwimmingDistanceAllErrorResolvers<ContextType>,
  swimmingDistanceAllResponse?: SwimmingDistanceAllResponseResolvers<ContextType>,
  swimmingDistanceAllUnion?: SwimmingDistanceAllUnionResolvers,
  swimmingDistanceError?: SwimmingDistanceErrorResolvers<ContextType>,
  swimmingDistanceResponse?: SwimmingDistanceResponseResolvers<ContextType>,
  swimmingDistanceUnion?: SwimmingDistanceUnionResolvers,
  updateActiveEnergyError?: UpdateActiveEnergyErrorResolvers<ContextType>,
  updateActiveEnergyResponse?: UpdateActiveEnergyResponseResolvers<ContextType>,
  updateActiveEnergyUnion?: UpdateActiveEnergyUnionResolvers,
  updateActivityError?: UpdateActivityErrorResolvers<ContextType>,
  updateActivityResponse?: UpdateActivityResponseResolvers<ContextType>,
  updateActivityUnion?: UpdateActivityUnionResolvers,
  updateAnxietyError?: UpdateAnxietyErrorResolvers<ContextType>,
  updateAnxietyResponse?: UpdateAnxietyResponseResolvers<ContextType>,
  updateAnxietyUnion?: UpdateAnxietyUnionResolvers,
  updateAverageMPGError?: UpdateAverageMpgErrorResolvers<ContextType>,
  updateAverageMPGResponse?: UpdateAverageMpgResponseResolvers<ContextType>,
  updateAverageMPGUnion?: UpdateAverageMpgUnionResolvers,
  updateBloodPressureError?: UpdateBloodPressureErrorResolvers<ContextType>,
  updateBloodPressureResponse?: UpdateBloodPressureResponseResolvers<ContextType>,
  updateBloodPressureUnion?: UpdateBloodPressureUnionResolvers,
  updateBodyTemperatureError?: UpdateBodyTemperatureErrorResolvers<ContextType>,
  updateBodyTemperatureResponse?: UpdateBodyTemperatureResponseResolvers<ContextType>,
  updateBodyTemperatureUnion?: UpdateBodyTemperatureUnionResolvers,
  updateCaffeineError?: UpdateCaffeineErrorResolvers<ContextType>,
  updateCaffeineResponse?: UpdateCaffeineResponseResolvers<ContextType>,
  updateCaffeineUnion?: UpdateCaffeineUnionResolvers,
  updateCbcError?: UpdateCbcErrorResolvers<ContextType>,
  updateCbcResponse?: UpdateCbcResponseResolvers<ContextType>,
  updateCbcUnion?: UpdateCbcUnionResolvers,
  updateCollectionError?: UpdateCollectionErrorResolvers<ContextType>,
  updateCollectionResponse?: UpdateCollectionResponseResolvers<ContextType>,
  updateCollectionUnion?: UpdateCollectionUnionResolvers,
  updateDrivingScoreError?: UpdateDrivingScoreErrorResolvers<ContextType>,
  updateDrivingScoreResponse?: UpdateDrivingScoreResponseResolvers<ContextType>,
  updateDrivingScoreUnion?: UpdateDrivingScoreUnionResolvers,
  updateFlightsClimbedError?: UpdateFlightsClimbedErrorResolvers<ContextType>,
  updateFlightsClimbedResponse?: UpdateFlightsClimbedResponseResolvers<ContextType>,
  updateFlightsClimbedUnion?: UpdateFlightsClimbedUnionResolvers,
  updateHeartRateError?: UpdateHeartRateErrorResolvers<ContextType>,
  updateHeartRateResponse?: UpdateHeartRateResponseResolvers<ContextType>,
  updateHeartRateUnion?: UpdateHeartRateUnionResolvers,
  updateHeartRateVariabilityError?: UpdateHeartRateVariabilityErrorResolvers<ContextType>,
  updateHeartRateVariabilityResponse?: UpdateHeartRateVariabilityResponseResolvers<ContextType>,
  updateHeartRateVariabilityUnion?: UpdateHeartRateVariabilityUnionResolvers,
  updateHeightError?: UpdateHeightErrorResolvers<ContextType>,
  updateHeightResponse?: UpdateHeightResponseResolvers<ContextType>,
  updateHeightUnion?: UpdateHeightUnionResolvers,
  updateMigraineError?: UpdateMigraineErrorResolvers<ContextType>,
  updateMigraineResponse?: UpdateMigraineResponseResolvers<ContextType>,
  updateMigraineUnion?: UpdateMigraineUnionResolvers,
  updateOxygenSaturationError?: UpdateOxygenSaturationErrorResolvers<ContextType>,
  updateOxygenSaturationResponse?: UpdateOxygenSaturationResponseResolvers<ContextType>,
  updateOxygenSaturationUnion?: UpdateOxygenSaturationUnionResolvers,
  updatePlateletsError?: UpdatePlateletsErrorResolvers<ContextType>,
  updatePlateletsResponse?: UpdatePlateletsResponseResolvers<ContextType>,
  updatePlateletsUnion?: UpdatePlateletsUnionResolvers,
  updateRefuelError?: UpdateRefuelErrorResolvers<ContextType>,
  updateRefuelResponse?: UpdateRefuelResponseResolvers<ContextType>,
  updateRefuelUnion?: UpdateRefuelUnionResolvers,
  updateRestingEnergyError?: UpdateRestingEnergyErrorResolvers<ContextType>,
  updateRestingEnergyResponse?: UpdateRestingEnergyResponseResolvers<ContextType>,
  updateRestingEnergyUnion?: UpdateRestingEnergyUnionResolvers,
  updateRestingHeartRateError?: UpdateRestingHeartRateErrorResolvers<ContextType>,
  updateRestingHeartRateResponse?: UpdateRestingHeartRateResponseResolvers<ContextType>,
  updateRestingHeartRateUnion?: UpdateRestingHeartRateUnionResolvers,
  updateSleepAnalysisError?: UpdateSleepAnalysisErrorResolvers<ContextType>,
  updateSleepAnalysisResponse?: UpdateSleepAnalysisResponseResolvers<ContextType>,
  updateSleepAnalysisUnion?: UpdateSleepAnalysisUnionResolvers,
  updateSteinError?: UpdateSteinErrorResolvers<ContextType>,
  updateSteinResponse?: UpdateSteinResponseResolvers<ContextType>,
  updateSteinUnion?: UpdateSteinUnionResolvers,
  updateStepError?: UpdateStepErrorResolvers<ContextType>,
  updateStepResponse?: UpdateStepResponseResolvers<ContextType>,
  updateStepUnion?: UpdateStepUnionResolvers,
  updateSwimmingDistanceError?: UpdateSwimmingDistanceErrorResolvers<ContextType>,
  updateSwimmingDistanceResponse?: UpdateSwimmingDistanceResponseResolvers<ContextType>,
  updateSwimmingDistanceUnion?: UpdateSwimmingDistanceUnionResolvers,
  updateWaistCircumferenceError?: UpdateWaistCircumferenceErrorResolvers<ContextType>,
  updateWaistCircumferenceResponse?: UpdateWaistCircumferenceResponseResolvers<ContextType>,
  updateWaistCircumferenceUnion?: UpdateWaistCircumferenceUnionResolvers,
  updateWalkingHeartRateAverageError?: UpdateWalkingHeartRateAverageErrorResolvers<ContextType>,
  updateWalkingHeartRateAverageResponse?: UpdateWalkingHeartRateAverageResponseResolvers<ContextType>,
  updateWalkingHeartRateAverageUnion?: UpdateWalkingHeartRateAverageUnionResolvers,
  updateWalkingRunningDistanceError?: UpdateWalkingRunningDistanceErrorResolvers<ContextType>,
  updateWalkingRunningDistanceResponse?: UpdateWalkingRunningDistanceResponseResolvers<ContextType>,
  updateWalkingRunningDistanceUnion?: UpdateWalkingRunningDistanceUnionResolvers,
  updateWeightError?: UpdateWeightErrorResolvers<ContextType>,
  updateWeightResponse?: UpdateWeightResponseResolvers<ContextType>,
  updateWeightUnion?: UpdateWeightUnionResolvers,
  waistCircumferenceAllError?: WaistCircumferenceAllErrorResolvers<ContextType>,
  waistCircumferenceAllResponse?: WaistCircumferenceAllResponseResolvers<ContextType>,
  waistCircumferenceAllUnion?: WaistCircumferenceAllUnionResolvers,
  waistCircumferenceError?: WaistCircumferenceErrorResolvers<ContextType>,
  waistCircumferenceResponse?: WaistCircumferenceResponseResolvers<ContextType>,
  waistCircumferenceUnion?: WaistCircumferenceUnionResolvers,
  walkingHeartrateAverageAllError?: WalkingHeartrateAverageAllErrorResolvers<ContextType>,
  walkingHeartrateAverageAllResponse?: WalkingHeartrateAverageAllResponseResolvers<ContextType>,
  walkingHeartrateAverageAllUnion?: WalkingHeartrateAverageAllUnionResolvers,
  walkingHeartrateAverageError?: WalkingHeartrateAverageErrorResolvers<ContextType>,
  walkingHeartrateAverageResponse?: WalkingHeartrateAverageResponseResolvers<ContextType>,
  walkingHeartrateAverageUnion?: WalkingHeartrateAverageUnionResolvers,
  walkingRunningDistanceAllError?: WalkingRunningDistanceAllErrorResolvers<ContextType>,
  walkingRunningDistanceAllResponse?: WalkingRunningDistanceAllResponseResolvers<ContextType>,
  walkingRunningDistanceAllUnion?: WalkingRunningDistanceAllUnionResolvers,
  walkingRunningDistanceError?: WalkingRunningDistanceErrorResolvers<ContextType>,
  walkingRunningDistanceResponse?: WalkingRunningDistanceResponseResolvers<ContextType>,
  walkingRunningDistanceUnion?: WalkingRunningDistanceUnionResolvers,
  weightAllError?: WeightAllErrorResolvers<ContextType>,
  weightAllResponse?: WeightAllResponseResolvers<ContextType>,
  weightAllUnion?: WeightAllUnionResolvers,
  weightError?: WeightErrorResolvers<ContextType>,
  weightResponse?: WeightResponseResolvers<ContextType>,
  weightUnion?: WeightUnionResolvers,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

/** Fitness activity input */
export type ActivityInputType = {
  sampledOn?: Maybe<Scalars['Date']>;
  energy?: Maybe<Scalars['Float']>;
  energyUnit?: Maybe<Scalars['String']>;
  energyGoal?: Maybe<Scalars['Float']>;
  energyProgress?: Maybe<Scalars['Float']>;
  energyComplete?: Maybe<Scalars['Boolean']>;
  standHours?: Maybe<Scalars['Float']>;
  standProgress?: Maybe<Scalars['Float']>;
  standGoal?: Maybe<Scalars['Float']>;
  standComplete?: Maybe<Scalars['Boolean']>;
  exerciseMinutes?: Maybe<Scalars['Float']>;
  exerciseGoal?: Maybe<Scalars['Float']>;
  exerciseProgress?: Maybe<Scalars['Float']>;
  exerciseComplete?: Maybe<Scalars['Boolean']>;
  ringsProgress?: Maybe<Scalars['Float']>;
  ringsComplete?: Maybe<Scalars['Boolean']>;
};

/** Fitness activity update input */
export type ActivityInputUpdateType = {
  sampledOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['String']>;
  energy?: Maybe<Scalars['Float']>;
  energyUnit?: Maybe<Scalars['String']>;
  energyGoal?: Maybe<Scalars['Float']>;
  energyProgress?: Maybe<Scalars['Float']>;
  energyComplete?: Maybe<Scalars['Boolean']>;
  standHours?: Maybe<Scalars['Float']>;
  standProgress?: Maybe<Scalars['Float']>;
  standGoal?: Maybe<Scalars['Float']>;
  standComplete?: Maybe<Scalars['Boolean']>;
  exerciseMinutes?: Maybe<Scalars['Float']>;
  exerciseGoal?: Maybe<Scalars['Float']>;
  exerciseProgress?: Maybe<Scalars['Float']>;
  exerciseComplete?: Maybe<Scalars['Boolean']>;
  ringsProgress?: Maybe<Scalars['Float']>;
  ringsComplete?: Maybe<Scalars['Boolean']>;
};

/** Fitness activity sample */
export type ActivityType = {
  __typename?: 'ActivityType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  energy?: Maybe<Scalars['Float']>;
  energyUnit?: Maybe<Scalars['String']>;
  energyGoal?: Maybe<Scalars['Float']>;
  energyProgress?: Maybe<Scalars['Float']>;
  energyComplete?: Maybe<Scalars['Boolean']>;
  standHours?: Maybe<Scalars['Float']>;
  standProgress?: Maybe<Scalars['Float']>;
  standGoal?: Maybe<Scalars['Float']>;
  standComplete?: Maybe<Scalars['Boolean']>;
  exerciseMinutes?: Maybe<Scalars['Float']>;
  exerciseGoal?: Maybe<Scalars['Float']>;
  exerciseProgress?: Maybe<Scalars['Float']>;
  exerciseComplete?: Maybe<Scalars['Boolean']>;
  ringsProgress?: Maybe<Scalars['Float']>;
  ringsComplete?: Maybe<Scalars['Boolean']>;
};

/** Average MPG data input */
export type AverageMpgInputType = {
  value: Scalars['Float'];
  vehicle?: Maybe<VehicleType>;
  sampledOn?: Maybe<Scalars['Date']>;
};

/** Average MPG data update input */
export type AverageMpgInputUpdateType = {
  value?: Maybe<Scalars['Float']>;
  vehicle?: Maybe<VehicleType>;
  sampledOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
};

/** Average MPG sample for car */
export type AverageMpgType = {
  __typename?: 'AverageMPGType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  vehicle?: Maybe<VehicleType>;
};

/** BloodPressure data input */
export type BloodPressureInputType = {
  systolic?: Maybe<Scalars['Float']>;
  diastolic?: Maybe<Scalars['Float']>;
  sampledOn?: Maybe<Scalars['Date']>;
};

/** BloodPressure data input for updating */
export type BloodPressureInputUpdateType = {
  systolic?: Maybe<Scalars['Float']>;
  diastolic?: Maybe<Scalars['Float']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  unit?: Maybe<UnitType>;
};

/** BloodPressure data */
export type BloodPressureType = {
  __typename?: 'BloodPressureType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  systolic?: Maybe<Scalars['Float']>;
  diastolic?: Maybe<Scalars['Float']>;
  unit?: Maybe<UnitType>;
};

/** Complete blood count data input */
export type CbcInputType = {
  sampledOn?: Maybe<Scalars['Date']>;
  wbcCount?: Maybe<Scalars['Float']>;
  rbcCount?: Maybe<Scalars['Float']>;
  hematrocrit?: Maybe<Scalars['Float']>;
  hgb?: Maybe<Scalars['Float']>;
  mvc?: Maybe<Scalars['Float']>;
  mch?: Maybe<Scalars['Float']>;
  mchc?: Maybe<Scalars['Float']>;
  redCellDistributionWidth?: Maybe<Scalars['Float']>;
  plateletCount?: Maybe<Scalars['Float']>;
  meanPlateletVolume?: Maybe<Scalars['Float']>;
  granulocytes?: Maybe<Scalars['Float']>;
  lymphocytes?: Maybe<Scalars['Float']>;
  monocytes?: Maybe<Scalars['Float']>;
  neutrophil?: Maybe<Scalars['Float']>;
  lymphocytePercent?: Maybe<Scalars['Float']>;
  monocytePercent?: Maybe<Scalars['Float']>;
};

/** Complete blood count data update input */
export type CbcInputUpdateType = {
  sampledOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  wbcCount?: Maybe<Scalars['Float']>;
  rbcCount?: Maybe<Scalars['Float']>;
  hematrocrit?: Maybe<Scalars['Float']>;
  hgb?: Maybe<Scalars['Float']>;
  mvc?: Maybe<Scalars['Float']>;
  mch?: Maybe<Scalars['Float']>;
  mchc?: Maybe<Scalars['Float']>;
  redCellDistributionWidth?: Maybe<Scalars['Float']>;
  plateletCount?: Maybe<Scalars['Float']>;
  meanPlateletVolume?: Maybe<Scalars['Float']>;
  granulocytes?: Maybe<Scalars['Float']>;
  lymphocytes?: Maybe<Scalars['Float']>;
  monocytes?: Maybe<Scalars['Float']>;
  neutrophil?: Maybe<Scalars['Float']>;
  lymphocytePercent?: Maybe<Scalars['Float']>;
  monocytePercent?: Maybe<Scalars['Float']>;
};

/** Complete blood count data sample */
export type CbcType = {
  __typename?: 'CbcType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  wbcCount?: Maybe<Scalars['Float']>;
  rbcCount?: Maybe<Scalars['Float']>;
  hematrocrit?: Maybe<Scalars['Float']>;
  hgb?: Maybe<Scalars['Float']>;
  mvc?: Maybe<Scalars['Float']>;
  mch?: Maybe<Scalars['Float']>;
  mchc?: Maybe<Scalars['Float']>;
  redCellDistributionWidth?: Maybe<Scalars['Float']>;
  platelets?: Maybe<PlateletType>;
  plateletsId?: Maybe<Scalars['String']>;
  meanPlateletVolume?: Maybe<Scalars['Float']>;
  granulocytes?: Maybe<Scalars['Float']>;
  lymphocytes?: Maybe<Scalars['Float']>;
  monocytes?: Maybe<Scalars['Float']>;
  neutrophil?: Maybe<Scalars['Float']>;
  lymphocytePercent?: Maybe<Scalars['Float']>;
  monocytePercent?: Maybe<Scalars['Float']>;
};

/** Collection data input for incrementing count */
export type CollectionInputIncrementType = {
  increment?: Maybe<Scalars['Int']>;
};

/** Collection data input */
export type CollectionInputType = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  count?: Maybe<Scalars['Int']>;
  sampledOn?: Maybe<Scalars['Date']>;
};

/** Collection data input for updating */
export type CollectionInputUpdateType = {
  shortId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  count?: Maybe<Scalars['Int']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
};

/** Collection data */
export type CollectionType = {
  __typename?: 'CollectionType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  shortId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  count?: Maybe<Scalars['Int']>;
};

export type CollectionsAllError = {
  __typename?: 'CollectionsAllError';
  errorCode?: Maybe<CollectionsAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum CollectionsAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'CollectionsAllResponse';
  response?: Maybe<Array<Maybe<CollectionType>>>;
};

/** Return either be response data or error data for CollectionsAll */
export type CollectionsAllUnion = CollectionsAllResponse | CollectionsAllError;

export type CollectionsError = {
  __typename?: 'CollectionsError';
  errorCode?: Maybe<CollectionsErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum CollectionsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'CollectionsResponse';
  response?: Maybe<CollectionType>;
};

/** Return either be response data or error data for Collections */
export type CollectionsUnion = CollectionsResponse | CollectionsError;


/** Item deletetion response */
export type DeleteType = {
  __typename?: 'DeleteType';
  id?: Maybe<Scalars['String']>;
  configID?: Maybe<Scalars['String']>;
};

/** Driving score data input */
export type DrivingScoreInputType = {
  accelerationScore?: Maybe<Scalars['Int']>;
  coastingScore?: Maybe<Scalars['Int']>;
  breakingScore?: Maybe<Scalars['Int']>;
  totalScore: Scalars['Int'];
  vehicle?: Maybe<VehicleType>;
  sampledOn?: Maybe<Scalars['Date']>;
};

/** Driving score input for update */
export type DrivingScoreInputUpdateType = {
  accelerationScore?: Maybe<Scalars['Int']>;
  coastingScore?: Maybe<Scalars['Int']>;
  breakingScore?: Maybe<Scalars['Int']>;
  totalScore?: Maybe<Scalars['Int']>;
  vehicle?: Maybe<VehicleType>;
  sampledOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
};

/** Driving score sample for car */
export type DrivingScoreType = {
  __typename?: 'DrivingScoreType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  accelerationScore?: Maybe<Scalars['Int']>;
  coastingScore?: Maybe<Scalars['Int']>;
  breakingScore?: Maybe<Scalars['Int']>;
  totalScore?: Maybe<Scalars['Int']>;
  vehicle?: Maybe<VehicleType>;
};

/** Health data input */
export type HealthInputType = {
  value?: Maybe<Scalars['Float']>;
  sampledOn?: Maybe<Scalars['Date']>;
};

/** Health data input for updating */
export type HealthInputUpdateType = {
  value?: Maybe<Scalars['Float']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  unit?: Maybe<UnitType>;
};

/** Sample item in health data */
export type HealthKitInputSampleType = {
  date?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  value: Scalars['String'];
  duration?: Maybe<Scalars['String']>;
};

/** Health data input */
export type HealthKitInputType = {
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<UnitType>;
  sampleList?: Maybe<Array<Maybe<HealthKitInputSampleType>>>;
  sample?: Maybe<HealthKitInputSampleType>;
  sampledOn?: Maybe<Scalars['Date']>;
  validSources?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Health data input for updating */
export type HealthKitInputUpdateType = {
  value?: Maybe<Scalars['Float']>;
  valueType?: Maybe<Scalars['String']>;
  totalSampleValue?: Maybe<Scalars['Float']>;
  averageSampleValue?: Maybe<Scalars['Float']>;
  highestSampleValue?: Maybe<Scalars['Float']>;
  lowestSampleValue?: Maybe<Scalars['Float']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  sources?: Maybe<Array<Maybe<Scalars['String']>>>;
  unit?: Maybe<UnitType>;
  totalDuration?: Maybe<Scalars['String']>;
};

/** Health data */
export type HealthKitType = {
  __typename?: 'HealthKitType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  hkid?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  valueType?: Maybe<Scalars['String']>;
  totalSampleValue?: Maybe<Scalars['Float']>;
  averageSampleValue?: Maybe<Scalars['Float']>;
  highestSampleValue?: Maybe<Scalars['Float']>;
  lowestSampleValue?: Maybe<Scalars['Float']>;
  sources?: Maybe<Array<Maybe<Scalars['String']>>>;
  unit?: Maybe<UnitType>;
  totalDuration?: Maybe<Scalars['String']>;
};

/** Return either HealthKittype item or Blood Pressure item */
export type HealthKitUnionType = HealthKitType | BloodPressureType;

/** Health data */
export type HealthType = {
  __typename?: 'HealthType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  unit?: Maybe<UnitType>;
};

/** Migraine data input */
export type MigraineInputType = {
  painLevel?: Maybe<Scalars['Int']>;
  auraLevel?: Maybe<Scalars['Int']>;
  nauseaLevel?: Maybe<Scalars['Int']>;
  auraTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  totalDuration?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
};

/** Migraine data input for updating */
export type MigraineInputUpdateType = {
  painLevel?: Maybe<Scalars['Int']>;
  auraLevel?: Maybe<Scalars['Int']>;
  nauseaLevel?: Maybe<Scalars['Int']>;
  auraTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  totalDuration?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
};

/** Migraine data */
export type MigraineType = {
  __typename?: 'MigraineType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  painLevel?: Maybe<Scalars['Int']>;
  auraLevel?: Maybe<Scalars['Int']>;
  nauseaLevel?: Maybe<Scalars['Int']>;
  auraTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  totalDuration?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a Step node */
  addStep?: Maybe<AddStepUnion>;
  /** Update a Step node */
  updateStep?: Maybe<UpdateStepUnion>;
  /** Delete a Step node */
  deleteStep?: Maybe<DeleteStepUnion>;
  /** Add a FlightsClimbed node */
  addFlightsClimbed?: Maybe<AddFlightsClimbedUnion>;
  /** Update a FlightsClimbed node */
  updateFlightsClimbed?: Maybe<UpdateFlightsClimbedUnion>;
  /** Delete a FlightsClimbed node */
  deleteFlightsClimbed?: Maybe<DeleteFlightsClimbedUnion>;
  /** Add a HeartRate node */
  addHeartRate?: Maybe<AddHeartRateUnion>;
  /** Update a HeartRate node */
  updateHeartRate?: Maybe<UpdateHeartRateUnion>;
  /** Delete a HeartRate node */
  deleteHeartRate?: Maybe<DeleteHeartRateUnion>;
  /** Add a HeartRateVariability node */
  addHeartRateVariability?: Maybe<AddHeartRateVariabilityUnion>;
  /** Update a HeartRateVariability node */
  updateHeartRateVariability?: Maybe<UpdateHeartRateVariabilityUnion>;
  /** Delete a HeartRateVariability node */
  deleteHeartRateVariability?: Maybe<DeleteHeartRateVariabilityUnion>;
  /** Add multiple HealthKit data types */
  addHealthKit?: Maybe<AddHealthKitUnion>;
  /** Add a ActiveEnergy node */
  addActiveEnergy?: Maybe<AddActiveEnergyUnion>;
  /** Update a ActiveEnergy node */
  updateActiveEnergy?: Maybe<UpdateActiveEnergyUnion>;
  /** Delete a ActiveEnergy node */
  deleteActiveEnergy?: Maybe<DeleteActiveEnergyUnion>;
  /** Add a Caffeine node */
  addCaffeine?: Maybe<AddCaffeineUnion>;
  /** Update a Caffeine node */
  updateCaffeine?: Maybe<UpdateCaffeineUnion>;
  /** Add a RestingEnergy node */
  addRestingEnergy?: Maybe<AddRestingEnergyUnion>;
  /** Update a RestingEnergy node */
  updateRestingEnergy?: Maybe<UpdateRestingEnergyUnion>;
  /** Delete a RestingEnergy node */
  deleteRestingEnergy?: Maybe<DeleteRestingEnergyUnion>;
  /** Add a RestingHeartRate node */
  addRestingHeartRate?: Maybe<AddRestingHeartRateUnion>;
  /** Update a RestingHeartRate node */
  updateRestingHeartRate?: Maybe<UpdateRestingHeartRateUnion>;
  /** Delete a RestingHeartRate node */
  deleteRestingHeartRate?: Maybe<DeleteRestingHeartRateUnion>;
  /** Add a SleepAnalysis node */
  addSleepAnalysis?: Maybe<AddSleepAnalysisUnion>;
  /** Update a SleepAnalysis node */
  updateSleepAnalysis?: Maybe<UpdateSleepAnalysisUnion>;
  /** Add a SwimmingDistance node */
  addSwimmingDistance?: Maybe<AddSwimmingDistanceUnion>;
  /** Update a SwimmingDistance node */
  updateSwimmingDistance?: Maybe<UpdateSwimmingDistanceUnion>;
  /** Add a WalkingHeartRateAverage node */
  addWalkingHeartRateAverage?: Maybe<AddWalkingHeartRateAverageUnion>;
  /** Update a WalkingHeartRateAverage node */
  updateWalkingHeartRateAverage?: Maybe<UpdateWalkingHeartRateAverageUnion>;
  /** Delete a WalkingHeartRateAverage node */
  deleteWalkingHeartRateAverage?: Maybe<DeleteWalkingHeartRateAverageUnion>;
  /** Add a WalkingRunningDistance node */
  addWalkingRunningDistance?: Maybe<AddWalkingRunningDistanceUnion>;
  /** Update a WalkingRunningDistance node */
  updateWalkingRunningDistance?: Maybe<UpdateWalkingRunningDistanceUnion>;
  /** Delete a WalkingRunningDistance node */
  deleteWalkingRunningDistance?: Maybe<DeleteWalkingRunningDistanceUnion>;
  /** Add a OxygenSaturation node */
  addOxygenSaturation?: Maybe<AddOxygenSaturationUnion>;
  /** Update a OxygenSaturation node */
  updateOxygenSaturation?: Maybe<UpdateOxygenSaturationUnion>;
  /** Delete a OxygenSaturation node */
  deleteOxygenSaturation?: Maybe<DeleteOxygenSaturationUnion>;
  /** Add a Activity node */
  addActivity?: Maybe<AddActivityUnion>;
  /** Update a Activity node */
  updateActivity?: Maybe<UpdateActivityUnion>;
  /** Delete a Activity node */
  deleteActivity?: Maybe<DeleteActivityUnion>;
  /** Add a Weight node */
  addWeight?: Maybe<AddWeightUnion>;
  /** Update a Weight node */
  updateWeight?: Maybe<UpdateWeightUnion>;
  /** Delete a Weight node */
  deleteWeight?: Maybe<DeleteWeightUnion>;
  /** Add a Height node */
  addHeight?: Maybe<AddHeightUnion>;
  /** Update a Height node */
  updateHeight?: Maybe<UpdateHeightUnion>;
  /** Delete a Height node */
  deleteHeight?: Maybe<DeleteHeightUnion>;
  /** Add a BodyTemperature node */
  addBodyTemperature?: Maybe<AddBodyTemperatureUnion>;
  /** Update a BodyTemperature node */
  updateBodyTemperature?: Maybe<UpdateBodyTemperatureUnion>;
  /** Delete a BodyTemperature node */
  deleteBodyTemperature?: Maybe<DeleteBodyTemperatureUnion>;
  /** Add a WaistCircumference node */
  addWaistCircumference?: Maybe<AddWaistCircumferenceUnion>;
  /** Update a WaistCircumference node */
  updateWaistCircumference?: Maybe<UpdateWaistCircumferenceUnion>;
  /** Delete a WaistCircumference node */
  deleteWaistCircumference?: Maybe<DeleteWaistCircumferenceUnion>;
  /** Add a Cbc node */
  addCbc?: Maybe<AddCbcUnion>;
  /** Update a Cbc node */
  updateCbc?: Maybe<UpdateCbcUnion>;
  /** Delete a Cbc node */
  deleteCbc?: Maybe<DeleteCbcUnion>;
  /** Add a Platelets node */
  addPlatelets?: Maybe<AddPlateletsUnion>;
  /** Update a Platelets node */
  updatePlatelets?: Maybe<UpdatePlateletsUnion>;
  /** Delete a Platelets node */
  deletePlatelets?: Maybe<DeletePlateletsUnion>;
  /** Add a BloodPressure node */
  addBloodPressure?: Maybe<AddBloodPressureUnion>;
  /** Update a BloodPressure node */
  updateBloodPressure?: Maybe<UpdateBloodPressureUnion>;
  /** Delete a BloodPressure node */
  deleteBloodPressure?: Maybe<DeleteBloodPressureUnion>;
  /** Add a Anxiety node */
  addAnxiety?: Maybe<AddAnxietyUnion>;
  /** Update a Anxiety node */
  updateAnxiety?: Maybe<UpdateAnxietyUnion>;
  /** Delete a Anxiety node */
  deleteAnxiety?: Maybe<DeleteAnxietyUnion>;
  /** Add a Migraine node */
  addMigraine?: Maybe<AddMigraineUnion>;
  /** Update a Migraine node */
  updateMigraine?: Maybe<UpdateMigraineUnion>;
  /** Delete a Migraine node */
  deleteMigraine?: Maybe<DeleteMigraineUnion>;
  /** Add a AverageMPG node */
  addAverageMPG?: Maybe<AddAverageMpgUnion>;
  /** Update a AverageMPG node */
  updateAverageMPG?: Maybe<UpdateAverageMpgUnion>;
  /** Delete a AverageMPG node */
  deleteAverageMPG?: Maybe<DeleteAverageMpgUnion>;
  /** Add a DrivingScore node */
  addDrivingScore?: Maybe<AddDrivingScoreUnion>;
  /** Update a DrivingScore node */
  updateDrivingScore?: Maybe<UpdateDrivingScoreUnion>;
  /** Delete a DrivingScore node */
  deleteDrivingScore?: Maybe<DeleteDrivingScoreUnion>;
  /** Add a Refuel node */
  addRefuel?: Maybe<AddRefuelUnion>;
  /** Update a Refuel node */
  updateRefuel?: Maybe<UpdateRefuelUnion>;
  /** Delete a Refuel node */
  deleteRefuel?: Maybe<DeleteRefuelUnion>;
  /** Add a Collection node */
  addCollection?: Maybe<AddCollectionUnion>;
  /** Update a Collection node */
  updateCollection?: Maybe<UpdateCollectionUnion>;
  /** Increment a Collection node */
  incrementCollection?: Maybe<IncrementCollectionUnion>;
  /** Delete a Collection node */
  deleteCollection?: Maybe<DeleteCollectionUnion>;
  /** Add a Stein node */
  addStein?: Maybe<AddSteinUnion>;
  /** Update a Stein node */
  updateStein?: Maybe<UpdateSteinUnion>;
  /** Increment a Stein node */
  incrementStein?: Maybe<IncrementSteinUnion>;
  /** Delete a Stein node */
  deleteStein?: Maybe<DeleteSteinUnion>;
};


export type MutationAddStepArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateStepArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteStepArgs = {
  id: Scalars['ID'];
};


export type MutationAddFlightsClimbedArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateFlightsClimbedArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteFlightsClimbedArgs = {
  id: Scalars['ID'];
};


export type MutationAddHeartRateArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateHeartRateArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteHeartRateArgs = {
  id: Scalars['ID'];
};


export type MutationAddHeartRateVariabilityArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateHeartRateVariabilityArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteHeartRateVariabilityArgs = {
  id: Scalars['ID'];
};


export type MutationAddHealthKitArgs = {
  input?: Maybe<Array<Maybe<HealthKitInputType>>>;
};


export type MutationAddActiveEnergyArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateActiveEnergyArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteActiveEnergyArgs = {
  id: Scalars['ID'];
};


export type MutationAddCaffeineArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateCaffeineArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationAddRestingEnergyArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateRestingEnergyArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteRestingEnergyArgs = {
  id: Scalars['ID'];
};


export type MutationAddRestingHeartRateArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateRestingHeartRateArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteRestingHeartRateArgs = {
  id: Scalars['ID'];
};


export type MutationAddSleepAnalysisArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateSleepAnalysisArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationAddSwimmingDistanceArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateSwimmingDistanceArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationAddWalkingHeartRateAverageArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateWalkingHeartRateAverageArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteWalkingHeartRateAverageArgs = {
  id: Scalars['ID'];
};


export type MutationAddWalkingRunningDistanceArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateWalkingRunningDistanceArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteWalkingRunningDistanceArgs = {
  id: Scalars['ID'];
};


export type MutationAddOxygenSaturationArgs = {
  input: HealthKitInputType;
};


export type MutationUpdateOxygenSaturationArgs = {
  id: Scalars['ID'];
  input: HealthKitInputUpdateType;
};


export type MutationDeleteOxygenSaturationArgs = {
  id: Scalars['ID'];
};


export type MutationAddActivityArgs = {
  input: ActivityInputType;
};


export type MutationUpdateActivityArgs = {
  id: Scalars['ID'];
  input: ActivityInputUpdateType;
};


export type MutationDeleteActivityArgs = {
  id: Scalars['ID'];
};


export type MutationAddWeightArgs = {
  input: HealthInputType;
};


export type MutationUpdateWeightArgs = {
  id: Scalars['ID'];
  input: HealthInputUpdateType;
};


export type MutationDeleteWeightArgs = {
  id: Scalars['ID'];
};


export type MutationAddHeightArgs = {
  input: HealthInputType;
};


export type MutationUpdateHeightArgs = {
  id: Scalars['ID'];
  input: HealthInputUpdateType;
};


export type MutationDeleteHeightArgs = {
  id: Scalars['ID'];
};


export type MutationAddBodyTemperatureArgs = {
  input: HealthInputType;
};


export type MutationUpdateBodyTemperatureArgs = {
  id: Scalars['ID'];
  input: HealthInputUpdateType;
};


export type MutationDeleteBodyTemperatureArgs = {
  id: Scalars['ID'];
};


export type MutationAddWaistCircumferenceArgs = {
  input: HealthInputType;
};


export type MutationUpdateWaistCircumferenceArgs = {
  id: Scalars['ID'];
  input: HealthInputUpdateType;
};


export type MutationDeleteWaistCircumferenceArgs = {
  id: Scalars['ID'];
};


export type MutationAddCbcArgs = {
  input: CbcInputType;
};


export type MutationUpdateCbcArgs = {
  id: Scalars['ID'];
  input: CbcInputUpdateType;
};


export type MutationDeleteCbcArgs = {
  id: Scalars['ID'];
};


export type MutationAddPlateletsArgs = {
  input: PlateletInputType;
};


export type MutationUpdatePlateletsArgs = {
  id: Scalars['ID'];
  input: PlateletInputUpdateType;
};


export type MutationDeletePlateletsArgs = {
  id: Scalars['ID'];
};


export type MutationAddBloodPressureArgs = {
  input: BloodPressureInputType;
};


export type MutationUpdateBloodPressureArgs = {
  id: Scalars['ID'];
  input: BloodPressureInputUpdateType;
};


export type MutationDeleteBloodPressureArgs = {
  id: Scalars['ID'];
};


export type MutationAddAnxietyArgs = {
  input: HealthInputType;
};


export type MutationUpdateAnxietyArgs = {
  id: Scalars['ID'];
  input: HealthInputUpdateType;
};


export type MutationDeleteAnxietyArgs = {
  id: Scalars['ID'];
};


export type MutationAddMigraineArgs = {
  input: MigraineInputType;
};


export type MutationUpdateMigraineArgs = {
  id: Scalars['ID'];
  input: MigraineInputUpdateType;
};


export type MutationDeleteMigraineArgs = {
  id: Scalars['ID'];
};


export type MutationAddAverageMpgArgs = {
  input: AverageMpgInputType;
};


export type MutationUpdateAverageMpgArgs = {
  id: Scalars['ID'];
  input: AverageMpgInputUpdateType;
};


export type MutationDeleteAverageMpgArgs = {
  id: Scalars['ID'];
};


export type MutationAddDrivingScoreArgs = {
  input: DrivingScoreInputType;
};


export type MutationUpdateDrivingScoreArgs = {
  id: Scalars['ID'];
  input: DrivingScoreInputUpdateType;
};


export type MutationDeleteDrivingScoreArgs = {
  id: Scalars['ID'];
};


export type MutationAddRefuelArgs = {
  input: RefuelInputType;
};


export type MutationUpdateRefuelArgs = {
  id: Scalars['ID'];
  input: RefuelInputUpdateType;
};


export type MutationDeleteRefuelArgs = {
  id: Scalars['ID'];
};


export type MutationAddCollectionArgs = {
  input: CollectionInputType;
};


export type MutationUpdateCollectionArgs = {
  id: Scalars['ID'];
  input: CollectionInputUpdateType;
};


export type MutationIncrementCollectionArgs = {
  id: Scalars['ID'];
  input?: Maybe<CollectionInputIncrementType>;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationAddSteinArgs = {
  input: CollectionInputType;
};


export type MutationUpdateSteinArgs = {
  id: Scalars['ID'];
  input: CollectionInputUpdateType;
};


export type MutationIncrementSteinArgs = {
  id: Scalars['ID'];
  input?: Maybe<CollectionInputIncrementType>;
};


export type MutationDeleteSteinArgs = {
  id: Scalars['ID'];
};

/** Health data input */
export type PlateletInputType = {
  value: Scalars['Float'];
  sampledOn?: Maybe<Scalars['Date']>;
};

/** Health data input for updating */
export type PlateletInputUpdateType = {
  value?: Maybe<Scalars['Float']>;
  unit?: Maybe<UnitType>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
};

/** Health data */
export type PlateletType = {
  __typename?: 'PlateletType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  unit?: Maybe<UnitType>;
  cbc?: Maybe<CbcType>;
  cbcId?: Maybe<Scalars['String']>;
};

/** Car gas refuel data input */
export type RefuelInputType = {
  gallons: Scalars['Float'];
  cost?: Maybe<Scalars['Float']>;
  vehicle?: Maybe<VehicleType>;
  sampledOn?: Maybe<Scalars['Date']>;
};

/** Car gas refuel input for updating */
export type RefuelInputUpdateType = {
  gallons?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  vehicle?: Maybe<VehicleType>;
  sampledOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
};

/** Car gas refuel sample for car */
export type RefuelType = {
  __typename?: 'RefuelType';
  id?: Maybe<Scalars['String']>;
  sampledOn?: Maybe<Scalars['Date']>;
  createdOn?: Maybe<Scalars['Date']>;
  updatedOn?: Maybe<Scalars['Date']>;
  configID?: Maybe<Scalars['String']>;
  gallons?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  vehicle?: Maybe<VehicleType>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get a single steps entry by either _id or date, _id taking priority */
  step?: Maybe<StepsUnion>;
  /** Get multiple steps entries */
  stepAll?: Maybe<StepsAllUnion>;
  /** Get a single flightsClimbed entry by either _id or date, _id taking priority */
  flightsClimbed?: Maybe<FlightsClimbedUnion>;
  /** Get multiple flightsClimbed entries */
  flightsClimbedAll?: Maybe<FlightsClimbedAllUnion>;
  /** Get a single heartrate entry by either _id or date, _id taking priority */
  heartrate?: Maybe<HeartrateUnion>;
  /** Get multiple heartrate entries */
  heartrateAll?: Maybe<HeartrateAllUnion>;
  /** Get a single heartrateVariability entry by either _id or date, _id taking priority */
  heartrateVariability?: Maybe<HeartrateVariabilityUnion>;
  /** Get multiple heartrateVariability entries */
  heartrateVariabilityAll?: Maybe<HeartrateVariabilityAllUnion>;
  /** Get a single activeEnergy entry by either _id or date, _id taking priority */
  activeEnergy?: Maybe<ActiveEnergyUnion>;
  /** Get multiple activeEnergy entries */
  activeEnergyAll?: Maybe<ActiveEnergyAllUnion>;
  /** Get a single caffeine entry by either _id or date, _id taking priority */
  caffeine?: Maybe<CaffeineUnion>;
  /** Get multiple caffeine entries */
  caffeineAll?: Maybe<CaffeineAllUnion>;
  /** Get a single restingEnergy entry by either _id or date, _id taking priority */
  restingEnergy?: Maybe<RestingEnergyUnion>;
  /** Get multiple restingEnergy entries */
  restingEnergyAll?: Maybe<RestingEnergyAllUnion>;
  /** Get a single restingHeartrate entry by either _id or date, _id taking priority */
  restingHeartrate?: Maybe<RestingHeartrateUnion>;
  /** Get multiple restingHeartrate entries */
  restingHeartrateAll?: Maybe<RestingHeartrateAllUnion>;
  /** Get a single sleepAnalysis entry by either _id or date, _id taking priority */
  sleepAnalysis?: Maybe<SleepAnalysisUnion>;
  /** Get multiple sleepAnalysis entries */
  sleepAnalysisAll?: Maybe<SleepAnalysisAllUnion>;
  /** Get a single swimmingDistance entry by either _id or date, _id taking priority */
  swimmingDistance?: Maybe<SwimmingDistanceUnion>;
  /** Get multiple swimmingDistance entries */
  swimmingDistanceAll?: Maybe<SwimmingDistanceAllUnion>;
  /** Get a single walkingHeartrateAverage entry by either _id or date, _id taking priority */
  walkingHeartrateAverage?: Maybe<WalkingHeartrateAverageUnion>;
  /** Get multiple walkingHeartrateAverage entries */
  walkingHeartrateAverageAll?: Maybe<WalkingHeartrateAverageAllUnion>;
  /** Get a single walkingRunningDistance entry by either _id or date, _id taking priority */
  walkingRunningDistance?: Maybe<WalkingRunningDistanceUnion>;
  /** Get multiple walkingRunningDistance entries */
  walkingRunningDistanceAll?: Maybe<WalkingRunningDistanceAllUnion>;
  /** Get a single oxygenSaturation entry by either _id or date, _id taking priority */
  oxygenSaturation?: Maybe<OxygenSaturationUnion>;
  /** Get multiple oxygenSaturation entries */
  oxygenSaturationAll?: Maybe<OxygenSaturationAllUnion>;
  /** Get a single activity entry by either _id or date, _id taking priority */
  activity?: Maybe<ActivityUnion>;
  /** Get multiple activity entries */
  activityAll?: Maybe<ActivityAllUnion>;
  /** Get a single weight entry by either _id or date, _id taking priority */
  weight?: Maybe<WeightUnion>;
  /** Get multiple weight entries */
  weightAll?: Maybe<WeightAllUnion>;
  /** Get a single height entry by either _id or date, _id taking priority */
  height?: Maybe<HeightUnion>;
  /** Get multiple height entries */
  heightAll?: Maybe<HeightAllUnion>;
  /** Get a single bodyTemperature entry by either _id or date, _id taking priority */
  bodyTemperature?: Maybe<BodyTemperatureUnion>;
  /** Get multiple bodyTemperature entries */
  bodyTemperatureAll?: Maybe<BodyTemperatureAllUnion>;
  /** Get a single waistCircumference entry by either _id or date, _id taking priority */
  waistCircumference?: Maybe<WaistCircumferenceUnion>;
  /** Get multiple waistCircumference entries */
  waistCircumferenceAll?: Maybe<WaistCircumferenceAllUnion>;
  /** Get a single cbc entry by either _id or date, _id taking priority */
  cbc?: Maybe<CbcUnion>;
  /** Get multiple cbc entries */
  cbcAll?: Maybe<CbcAllUnion>;
  /** Get a single platelets entry by either _id or date, _id taking priority */
  platelets?: Maybe<PlateletsUnion>;
  /** Get multiple platelets entries */
  plateletsAll?: Maybe<PlateletsAllUnion>;
  /** Get a single bloodPressure entry by either _id or date, _id taking priority */
  bloodPressure?: Maybe<BloodPressureUnion>;
  /** Get multiple bloodPressure entries */
  bloodPressureAll?: Maybe<BloodPressureAllUnion>;
  /** Get a single anxiety entry by either _id or date, _id taking priority */
  anxiety?: Maybe<AnxietyUnion>;
  /** Get multiple anxiety entries */
  anxietyAll?: Maybe<AnxietyAllUnion>;
  /** Get a single migraine entry by either _id or date, _id taking priority */
  migraine?: Maybe<MigraineUnion>;
  /** Get multiple migraine entries */
  migraineAll?: Maybe<MigraineAllUnion>;
  /** Get a single averageMPG entry by either _id or date, _id taking priority */
  averageMPG?: Maybe<AverageMpgUnion>;
  /** Get multiple averageMPG entries */
  averageMPGAll?: Maybe<AverageMpgAllUnion>;
  /** Get a single drivingScore entry by either _id or date, _id taking priority */
  drivingScore?: Maybe<DrivingScoreUnion>;
  /** Get multiple drivingScore entries */
  drivingScoreAll?: Maybe<DrivingScoreAllUnion>;
  /** Get a single refuel entry by either _id or date, _id taking priority */
  refuel?: Maybe<RefuelUnion>;
  /** Get multiple refuel entries */
  refuelAll?: Maybe<RefuelAllUnion>;
  /** Get a single Collections entry by either _id or date, _id taking priority */
  collections?: Maybe<CollectionsUnion>;
  /** Get multiple Collections entries */
  collectionsAll?: Maybe<CollectionsAllUnion>;
  /** Get a single Steins entry by either _id or date, _id taking priority */
  steins?: Maybe<SteinsUnion>;
  /** Get multiple Steins entries */
  steinsAll?: Maybe<SteinsAllUnion>;
};


export type RootQueryTypeStepArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeStepAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeFlightsClimbedArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeFlightsClimbedAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeHeartrateArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeHeartrateAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeHeartrateVariabilityArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeHeartrateVariabilityAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeActiveEnergyArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeActiveEnergyAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeCaffeineArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeCaffeineAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeRestingEnergyArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeRestingEnergyAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeRestingHeartrateArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeRestingHeartrateAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeSleepAnalysisArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeSleepAnalysisAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeSwimmingDistanceArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeSwimmingDistanceAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeWalkingHeartrateAverageArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeWalkingHeartrateAverageAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeWalkingRunningDistanceArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeWalkingRunningDistanceAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeOxygenSaturationArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeOxygenSaturationAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeActivityArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeActivityAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeWeightArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeWeightAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeHeightArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeHeightAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeBodyTemperatureArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeBodyTemperatureAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeWaistCircumferenceArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeWaistCircumferenceAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeCbcArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeCbcAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypePlateletsArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypePlateletsAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeBloodPressureArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeBloodPressureAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeAnxietyArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeAnxietyAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeMigraineArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeMigraineAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeAverageMpgArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeAverageMpgAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeDrivingScoreArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeDrivingScoreAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeRefuelArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeRefuelAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeCollectionsArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeCollectionsAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};


export type RootQueryTypeSteinsArgs = {
  id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type RootQueryTypeSteinsAllArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['Date']>;
  sortBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateBy?: Maybe<Scalars['String']>;
};

export type SteinsAllError = {
  __typename?: 'SteinsAllError';
  errorCode?: Maybe<SteinsAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum SteinsAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'SteinsAllResponse';
  response?: Maybe<Array<Maybe<CollectionType>>>;
};

/** Return either be response data or error data for SteinsAll */
export type SteinsAllUnion = SteinsAllResponse | SteinsAllError;

export type SteinsError = {
  __typename?: 'SteinsError';
  errorCode?: Maybe<SteinsErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum SteinsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'SteinsResponse';
  response?: Maybe<CollectionType>;
};

/** Return either be response data or error data for Steins */
export type SteinsUnion = SteinsResponse | SteinsError;

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

/** Acceptable vehicles for car data */
export enum VehicleType {
  PriusPrime = 'priusPrime',
  Crv = 'crv'
}

export type ActiveEnergyAllError = {
  __typename?: 'activeEnergyAllError';
  errorCode?: Maybe<ActiveEnergyAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum ActiveEnergyAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'activeEnergyAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for activeEnergyAll */
export type ActiveEnergyAllUnion = ActiveEnergyAllResponse | ActiveEnergyAllError;

export type ActiveEnergyError = {
  __typename?: 'activeEnergyError';
  errorCode?: Maybe<ActiveEnergyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum ActiveEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'activeEnergyResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for activeEnergy */
export type ActiveEnergyUnion = ActiveEnergyResponse | ActiveEnergyError;

export type ActivityAllError = {
  __typename?: 'activityAllError';
  errorCode?: Maybe<ActivityAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum ActivityAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'activityAllResponse';
  response?: Maybe<Array<Maybe<ActivityType>>>;
};

/** Return either be response data or error data for activityAll */
export type ActivityAllUnion = ActivityAllResponse | ActivityAllError;

export type ActivityError = {
  __typename?: 'activityError';
  errorCode?: Maybe<ActivityErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum ActivityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for activity */
export type ActivityResponse = {
  __typename?: 'activityResponse';
  response?: Maybe<ActivityType>;
};

/** Return either be response data or error data for activity */
export type ActivityUnion = ActivityResponse | ActivityError;

export type AddActiveEnergyError = {
  __typename?: 'addActiveEnergyError';
  errorCode?: Maybe<AddActiveEnergyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddActiveEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addActiveEnergyResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addActiveEnergy */
export type AddActiveEnergyUnion = AddActiveEnergyResponse | AddActiveEnergyError;

export type AddActivityError = {
  __typename?: 'addActivityError';
  errorCode?: Maybe<AddActivityErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddActivityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addActivityResponse';
  response?: Maybe<ActivityType>;
};

/** Return either be response data or error data for addActivity */
export type AddActivityUnion = AddActivityResponse | AddActivityError;

export type AddAnxietyError = {
  __typename?: 'addAnxietyError';
  errorCode?: Maybe<AddAnxietyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddAnxietyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addAnxietyResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for addAnxiety */
export type AddAnxietyUnion = AddAnxietyResponse | AddAnxietyError;

export type AddAverageMpgError = {
  __typename?: 'addAverageMPGError';
  errorCode?: Maybe<AddAverageMpgErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddAverageMpgErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addAverageMPGResponse';
  response?: Maybe<AverageMpgType>;
};

/** Return either be response data or error data for addAverageMPG */
export type AddAverageMpgUnion = AddAverageMpgResponse | AddAverageMpgError;

export type AddBloodPressureError = {
  __typename?: 'addBloodPressureError';
  errorCode?: Maybe<AddBloodPressureErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddBloodPressureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addBloodPressureResponse';
  response?: Maybe<BloodPressureType>;
};

/** Return either be response data or error data for addBloodPressure */
export type AddBloodPressureUnion = AddBloodPressureResponse | AddBloodPressureError;

export type AddBodyTemperatureError = {
  __typename?: 'addBodyTemperatureError';
  errorCode?: Maybe<AddBodyTemperatureErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddBodyTemperatureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addBodyTemperatureResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for addBodyTemperature */
export type AddBodyTemperatureUnion = AddBodyTemperatureResponse | AddBodyTemperatureError;

export type AddCaffeineError = {
  __typename?: 'addCaffeineError';
  errorCode?: Maybe<AddCaffeineErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddCaffeineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addCaffeineResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addCaffeine */
export type AddCaffeineUnion = AddCaffeineResponse | AddCaffeineError;

export type AddCbcError = {
  __typename?: 'addCbcError';
  errorCode?: Maybe<AddCbcErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddCbcErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addCbcResponse';
  response?: Maybe<CbcType>;
};

/** Return either be response data or error data for addCbc */
export type AddCbcUnion = AddCbcResponse | AddCbcError;

export type AddCollectionError = {
  __typename?: 'addCollectionError';
  errorCode?: Maybe<AddCollectionErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddCollectionErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addCollectionResponse';
  response?: Maybe<CollectionType>;
};

/** Return either be response data or error data for addCollection */
export type AddCollectionUnion = AddCollectionResponse | AddCollectionError;

export type AddDrivingScoreError = {
  __typename?: 'addDrivingScoreError';
  errorCode?: Maybe<AddDrivingScoreErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddDrivingScoreErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addDrivingScoreResponse';
  response?: Maybe<DrivingScoreType>;
};

/** Return either be response data or error data for addDrivingScore */
export type AddDrivingScoreUnion = AddDrivingScoreResponse | AddDrivingScoreError;

export type AddFlightsClimbedError = {
  __typename?: 'addFlightsClimbedError';
  errorCode?: Maybe<AddFlightsClimbedErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddFlightsClimbedErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addFlightsClimbedResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addFlightsClimbed */
export type AddFlightsClimbedUnion = AddFlightsClimbedResponse | AddFlightsClimbedError;

export type AddHealthKitError = {
  __typename?: 'addHealthKitError';
  errorCode?: Maybe<AddHealthKitErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddHealthKitErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addHealthKitResponse';
  response?: Maybe<Array<Maybe<HealthKitUnionType>>>;
};

/** Return either be response data or error data for addHealthKit */
export type AddHealthKitUnion = AddHealthKitResponse | AddHealthKitError;

export type AddHeartRateError = {
  __typename?: 'addHeartRateError';
  errorCode?: Maybe<AddHeartRateErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addHeartRateResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addHeartRate */
export type AddHeartRateUnion = AddHeartRateResponse | AddHeartRateError;

export type AddHeartRateVariabilityError = {
  __typename?: 'addHeartRateVariabilityError';
  errorCode?: Maybe<AddHeartRateVariabilityErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddHeartRateVariabilityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addHeartRateVariabilityResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addHeartRateVariability */
export type AddHeartRateVariabilityUnion = AddHeartRateVariabilityResponse | AddHeartRateVariabilityError;

export type AddHeightError = {
  __typename?: 'addHeightError';
  errorCode?: Maybe<AddHeightErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddHeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addHeightResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for addHeight */
export type AddHeightUnion = AddHeightResponse | AddHeightError;

export type AddMigraineError = {
  __typename?: 'addMigraineError';
  errorCode?: Maybe<AddMigraineErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddMigraineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addMigraineResponse';
  response?: Maybe<MigraineType>;
};

/** Return either be response data or error data for addMigraine */
export type AddMigraineUnion = AddMigraineResponse | AddMigraineError;

export type AddOxygenSaturationError = {
  __typename?: 'addOxygenSaturationError';
  errorCode?: Maybe<AddOxygenSaturationErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddOxygenSaturationErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addOxygenSaturationResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addOxygenSaturation */
export type AddOxygenSaturationUnion = AddOxygenSaturationResponse | AddOxygenSaturationError;

export type AddPlateletsError = {
  __typename?: 'addPlateletsError';
  errorCode?: Maybe<AddPlateletsErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddPlateletsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addPlateletsResponse';
  response?: Maybe<PlateletType>;
};

/** Return either be response data or error data for addPlatelets */
export type AddPlateletsUnion = AddPlateletsResponse | AddPlateletsError;

export type AddRefuelError = {
  __typename?: 'addRefuelError';
  errorCode?: Maybe<AddRefuelErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddRefuelErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addRefuelResponse';
  response?: Maybe<RefuelType>;
};

/** Return either be response data or error data for addRefuel */
export type AddRefuelUnion = AddRefuelResponse | AddRefuelError;

export type AddRestingEnergyError = {
  __typename?: 'addRestingEnergyError';
  errorCode?: Maybe<AddRestingEnergyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddRestingEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addRestingEnergyResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addRestingEnergy */
export type AddRestingEnergyUnion = AddRestingEnergyResponse | AddRestingEnergyError;

export type AddRestingHeartRateError = {
  __typename?: 'addRestingHeartRateError';
  errorCode?: Maybe<AddRestingHeartRateErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddRestingHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addRestingHeartRateResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addRestingHeartRate */
export type AddRestingHeartRateUnion = AddRestingHeartRateResponse | AddRestingHeartRateError;

export type AddSleepAnalysisError = {
  __typename?: 'addSleepAnalysisError';
  errorCode?: Maybe<AddSleepAnalysisErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddSleepAnalysisErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addSleepAnalysisResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addSleepAnalysis */
export type AddSleepAnalysisUnion = AddSleepAnalysisResponse | AddSleepAnalysisError;

export type AddSteinError = {
  __typename?: 'addSteinError';
  errorCode?: Maybe<AddSteinErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddSteinErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addSteinResponse';
  response?: Maybe<CollectionType>;
};

/** Return either be response data or error data for addStein */
export type AddSteinUnion = AddSteinResponse | AddSteinError;

export type AddStepError = {
  __typename?: 'addStepError';
  errorCode?: Maybe<AddStepErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddStepErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addStepResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addStep */
export type AddStepUnion = AddStepResponse | AddStepError;

export type AddSwimmingDistanceError = {
  __typename?: 'addSwimmingDistanceError';
  errorCode?: Maybe<AddSwimmingDistanceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddSwimmingDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addSwimmingDistanceResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addSwimmingDistance */
export type AddSwimmingDistanceUnion = AddSwimmingDistanceResponse | AddSwimmingDistanceError;

export type AddWaistCircumferenceError = {
  __typename?: 'addWaistCircumferenceError';
  errorCode?: Maybe<AddWaistCircumferenceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddWaistCircumferenceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addWaistCircumferenceResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for addWaistCircumference */
export type AddWaistCircumferenceUnion = AddWaistCircumferenceResponse | AddWaistCircumferenceError;

export type AddWalkingHeartRateAverageError = {
  __typename?: 'addWalkingHeartRateAverageError';
  errorCode?: Maybe<AddWalkingHeartRateAverageErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddWalkingHeartRateAverageErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addWalkingHeartRateAverageResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addWalkingHeartRateAverage */
export type AddWalkingHeartRateAverageUnion = AddWalkingHeartRateAverageResponse | AddWalkingHeartRateAverageError;

export type AddWalkingRunningDistanceError = {
  __typename?: 'addWalkingRunningDistanceError';
  errorCode?: Maybe<AddWalkingRunningDistanceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddWalkingRunningDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addWalkingRunningDistanceResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for addWalkingRunningDistance */
export type AddWalkingRunningDistanceUnion = AddWalkingRunningDistanceResponse | AddWalkingRunningDistanceError;

export type AddWeightError = {
  __typename?: 'addWeightError';
  errorCode?: Maybe<AddWeightErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AddWeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'addWeightResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for addWeight */
export type AddWeightUnion = AddWeightResponse | AddWeightError;

export type AnxietyAllError = {
  __typename?: 'anxietyAllError';
  errorCode?: Maybe<AnxietyAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AnxietyAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'anxietyAllResponse';
  response?: Maybe<Array<Maybe<HealthType>>>;
};

/** Return either be response data or error data for anxietyAll */
export type AnxietyAllUnion = AnxietyAllResponse | AnxietyAllError;

export type AnxietyError = {
  __typename?: 'anxietyError';
  errorCode?: Maybe<AnxietyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AnxietyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'anxietyResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for anxiety */
export type AnxietyUnion = AnxietyResponse | AnxietyError;

export type AverageMpgAllError = {
  __typename?: 'averageMPGAllError';
  errorCode?: Maybe<AverageMpgAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AverageMpgAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for averageMPGAll */
export type AverageMpgAllResponse = {
  __typename?: 'averageMPGAllResponse';
  response?: Maybe<Array<Maybe<AverageMpgType>>>;
};

/** Return either be response data or error data for averageMPGAll */
export type AverageMpgAllUnion = AverageMpgAllResponse | AverageMpgAllError;

export type AverageMpgError = {
  __typename?: 'averageMPGError';
  errorCode?: Maybe<AverageMpgErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum AverageMpgErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for averageMPG */
export type AverageMpgResponse = {
  __typename?: 'averageMPGResponse';
  response?: Maybe<AverageMpgType>;
};

/** Return either be response data or error data for averageMPG */
export type AverageMpgUnion = AverageMpgResponse | AverageMpgError;

export type BloodPressureAllError = {
  __typename?: 'bloodPressureAllError';
  errorCode?: Maybe<BloodPressureAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum BloodPressureAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'bloodPressureAllResponse';
  response?: Maybe<Array<Maybe<BloodPressureType>>>;
};

/** Return either be response data or error data for bloodPressureAll */
export type BloodPressureAllUnion = BloodPressureAllResponse | BloodPressureAllError;

export type BloodPressureError = {
  __typename?: 'bloodPressureError';
  errorCode?: Maybe<BloodPressureErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum BloodPressureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for bloodPressure */
export type BloodPressureResponse = {
  __typename?: 'bloodPressureResponse';
  response?: Maybe<BloodPressureType>;
};

/** Return either be response data or error data for bloodPressure */
export type BloodPressureUnion = BloodPressureResponse | BloodPressureError;

export type BodyTemperatureAllError = {
  __typename?: 'bodyTemperatureAllError';
  errorCode?: Maybe<BodyTemperatureAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum BodyTemperatureAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'bodyTemperatureAllResponse';
  response?: Maybe<Array<Maybe<HealthType>>>;
};

/** Return either be response data or error data for bodyTemperatureAll */
export type BodyTemperatureAllUnion = BodyTemperatureAllResponse | BodyTemperatureAllError;

export type BodyTemperatureError = {
  __typename?: 'bodyTemperatureError';
  errorCode?: Maybe<BodyTemperatureErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum BodyTemperatureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'bodyTemperatureResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for bodyTemperature */
export type BodyTemperatureUnion = BodyTemperatureResponse | BodyTemperatureError;

export type CaffeineAllError = {
  __typename?: 'caffeineAllError';
  errorCode?: Maybe<CaffeineAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum CaffeineAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'caffeineAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for caffeineAll */
export type CaffeineAllUnion = CaffeineAllResponse | CaffeineAllError;

export type CaffeineError = {
  __typename?: 'caffeineError';
  errorCode?: Maybe<CaffeineErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum CaffeineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'caffeineResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for caffeine */
export type CaffeineUnion = CaffeineResponse | CaffeineError;

export type CbcAllError = {
  __typename?: 'cbcAllError';
  errorCode?: Maybe<CbcAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum CbcAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'cbcAllResponse';
  response?: Maybe<Array<Maybe<CbcType>>>;
};

/** Return either be response data or error data for cbcAll */
export type CbcAllUnion = CbcAllResponse | CbcAllError;

export type CbcError = {
  __typename?: 'cbcError';
  errorCode?: Maybe<CbcErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum CbcErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for cbc */
export type CbcResponse = {
  __typename?: 'cbcResponse';
  response?: Maybe<CbcType>;
};

/** Return either be response data or error data for cbc */
export type CbcUnion = CbcResponse | CbcError;

export type DeleteActiveEnergyError = {
  __typename?: 'deleteActiveEnergyError';
  errorCode?: Maybe<DeleteActiveEnergyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteActiveEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteActiveEnergy */
export type DeleteActiveEnergyResponse = {
  __typename?: 'deleteActiveEnergyResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteActiveEnergy */
export type DeleteActiveEnergyUnion = DeleteActiveEnergyResponse | DeleteActiveEnergyError;

export type DeleteActivityError = {
  __typename?: 'deleteActivityError';
  errorCode?: Maybe<DeleteActivityErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteActivityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteActivity */
export type DeleteActivityResponse = {
  __typename?: 'deleteActivityResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteActivity */
export type DeleteActivityUnion = DeleteActivityResponse | DeleteActivityError;

export type DeleteAnxietyError = {
  __typename?: 'deleteAnxietyError';
  errorCode?: Maybe<DeleteAnxietyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteAnxietyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteAnxiety */
export type DeleteAnxietyResponse = {
  __typename?: 'deleteAnxietyResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteAnxiety */
export type DeleteAnxietyUnion = DeleteAnxietyResponse | DeleteAnxietyError;

export type DeleteAverageMpgError = {
  __typename?: 'deleteAverageMPGError';
  errorCode?: Maybe<DeleteAverageMpgErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteAverageMpgErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteAverageMPG */
export type DeleteAverageMpgResponse = {
  __typename?: 'deleteAverageMPGResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteAverageMPG */
export type DeleteAverageMpgUnion = DeleteAverageMpgResponse | DeleteAverageMpgError;

export type DeleteBloodPressureError = {
  __typename?: 'deleteBloodPressureError';
  errorCode?: Maybe<DeleteBloodPressureErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteBloodPressureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteBloodPressure */
export type DeleteBloodPressureResponse = {
  __typename?: 'deleteBloodPressureResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteBloodPressure */
export type DeleteBloodPressureUnion = DeleteBloodPressureResponse | DeleteBloodPressureError;

export type DeleteBodyTemperatureError = {
  __typename?: 'deleteBodyTemperatureError';
  errorCode?: Maybe<DeleteBodyTemperatureErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteBodyTemperatureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteBodyTemperature */
export type DeleteBodyTemperatureResponse = {
  __typename?: 'deleteBodyTemperatureResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteBodyTemperature */
export type DeleteBodyTemperatureUnion = DeleteBodyTemperatureResponse | DeleteBodyTemperatureError;

export type DeleteCbcError = {
  __typename?: 'deleteCbcError';
  errorCode?: Maybe<DeleteCbcErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteCbcErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteCbc */
export type DeleteCbcResponse = {
  __typename?: 'deleteCbcResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteCbc */
export type DeleteCbcUnion = DeleteCbcResponse | DeleteCbcError;

export type DeleteCollectionError = {
  __typename?: 'deleteCollectionError';
  errorCode?: Maybe<DeleteCollectionErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteCollectionErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteCollection */
export type DeleteCollectionResponse = {
  __typename?: 'deleteCollectionResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteCollection */
export type DeleteCollectionUnion = DeleteCollectionResponse | DeleteCollectionError;

export type DeleteDrivingScoreError = {
  __typename?: 'deleteDrivingScoreError';
  errorCode?: Maybe<DeleteDrivingScoreErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteDrivingScoreErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteDrivingScore */
export type DeleteDrivingScoreResponse = {
  __typename?: 'deleteDrivingScoreResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteDrivingScore */
export type DeleteDrivingScoreUnion = DeleteDrivingScoreResponse | DeleteDrivingScoreError;

export type DeleteFlightsClimbedError = {
  __typename?: 'deleteFlightsClimbedError';
  errorCode?: Maybe<DeleteFlightsClimbedErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteFlightsClimbedErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteFlightsClimbed */
export type DeleteFlightsClimbedResponse = {
  __typename?: 'deleteFlightsClimbedResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteFlightsClimbed */
export type DeleteFlightsClimbedUnion = DeleteFlightsClimbedResponse | DeleteFlightsClimbedError;

export type DeleteHeartRateError = {
  __typename?: 'deleteHeartRateError';
  errorCode?: Maybe<DeleteHeartRateErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteHeartRate */
export type DeleteHeartRateResponse = {
  __typename?: 'deleteHeartRateResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteHeartRate */
export type DeleteHeartRateUnion = DeleteHeartRateResponse | DeleteHeartRateError;

export type DeleteHeartRateVariabilityError = {
  __typename?: 'deleteHeartRateVariabilityError';
  errorCode?: Maybe<DeleteHeartRateVariabilityErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteHeartRateVariabilityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteHeartRateVariability */
export type DeleteHeartRateVariabilityResponse = {
  __typename?: 'deleteHeartRateVariabilityResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteHeartRateVariability */
export type DeleteHeartRateVariabilityUnion = DeleteHeartRateVariabilityResponse | DeleteHeartRateVariabilityError;

export type DeleteHeightError = {
  __typename?: 'deleteHeightError';
  errorCode?: Maybe<DeleteHeightErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteHeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteHeight */
export type DeleteHeightResponse = {
  __typename?: 'deleteHeightResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteHeight */
export type DeleteHeightUnion = DeleteHeightResponse | DeleteHeightError;

export type DeleteMigraineError = {
  __typename?: 'deleteMigraineError';
  errorCode?: Maybe<DeleteMigraineErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteMigraineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteMigraine */
export type DeleteMigraineResponse = {
  __typename?: 'deleteMigraineResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteMigraine */
export type DeleteMigraineUnion = DeleteMigraineResponse | DeleteMigraineError;

export type DeleteOxygenSaturationError = {
  __typename?: 'deleteOxygenSaturationError';
  errorCode?: Maybe<DeleteOxygenSaturationErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteOxygenSaturationErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteOxygenSaturation */
export type DeleteOxygenSaturationResponse = {
  __typename?: 'deleteOxygenSaturationResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteOxygenSaturation */
export type DeleteOxygenSaturationUnion = DeleteOxygenSaturationResponse | DeleteOxygenSaturationError;

export type DeletePlateletsError = {
  __typename?: 'deletePlateletsError';
  errorCode?: Maybe<DeletePlateletsErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeletePlateletsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deletePlatelets */
export type DeletePlateletsResponse = {
  __typename?: 'deletePlateletsResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deletePlatelets */
export type DeletePlateletsUnion = DeletePlateletsResponse | DeletePlateletsError;

export type DeleteRefuelError = {
  __typename?: 'deleteRefuelError';
  errorCode?: Maybe<DeleteRefuelErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteRefuelErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteRefuel */
export type DeleteRefuelResponse = {
  __typename?: 'deleteRefuelResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteRefuel */
export type DeleteRefuelUnion = DeleteRefuelResponse | DeleteRefuelError;

export type DeleteRestingEnergyError = {
  __typename?: 'deleteRestingEnergyError';
  errorCode?: Maybe<DeleteRestingEnergyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteRestingEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteRestingEnergy */
export type DeleteRestingEnergyResponse = {
  __typename?: 'deleteRestingEnergyResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteRestingEnergy */
export type DeleteRestingEnergyUnion = DeleteRestingEnergyResponse | DeleteRestingEnergyError;

export type DeleteRestingHeartRateError = {
  __typename?: 'deleteRestingHeartRateError';
  errorCode?: Maybe<DeleteRestingHeartRateErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteRestingHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteRestingHeartRate */
export type DeleteRestingHeartRateResponse = {
  __typename?: 'deleteRestingHeartRateResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteRestingHeartRate */
export type DeleteRestingHeartRateUnion = DeleteRestingHeartRateResponse | DeleteRestingHeartRateError;

export type DeleteSteinError = {
  __typename?: 'deleteSteinError';
  errorCode?: Maybe<DeleteSteinErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteSteinErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteStein */
export type DeleteSteinResponse = {
  __typename?: 'deleteSteinResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteStein */
export type DeleteSteinUnion = DeleteSteinResponse | DeleteSteinError;

export type DeleteStepError = {
  __typename?: 'deleteStepError';
  errorCode?: Maybe<DeleteStepErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteStepErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteStep */
export type DeleteStepResponse = {
  __typename?: 'deleteStepResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteStep */
export type DeleteStepUnion = DeleteStepResponse | DeleteStepError;

export type DeleteWaistCircumferenceError = {
  __typename?: 'deleteWaistCircumferenceError';
  errorCode?: Maybe<DeleteWaistCircumferenceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteWaistCircumferenceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteWaistCircumference */
export type DeleteWaistCircumferenceResponse = {
  __typename?: 'deleteWaistCircumferenceResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteWaistCircumference */
export type DeleteWaistCircumferenceUnion = DeleteWaistCircumferenceResponse | DeleteWaistCircumferenceError;

export type DeleteWalkingHeartRateAverageError = {
  __typename?: 'deleteWalkingHeartRateAverageError';
  errorCode?: Maybe<DeleteWalkingHeartRateAverageErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteWalkingHeartRateAverageErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteWalkingHeartRateAverage */
export type DeleteWalkingHeartRateAverageResponse = {
  __typename?: 'deleteWalkingHeartRateAverageResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteWalkingHeartRateAverage */
export type DeleteWalkingHeartRateAverageUnion = DeleteWalkingHeartRateAverageResponse | DeleteWalkingHeartRateAverageError;

export type DeleteWalkingRunningDistanceError = {
  __typename?: 'deleteWalkingRunningDistanceError';
  errorCode?: Maybe<DeleteWalkingRunningDistanceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteWalkingRunningDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteWalkingRunningDistance */
export type DeleteWalkingRunningDistanceResponse = {
  __typename?: 'deleteWalkingRunningDistanceResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteWalkingRunningDistance */
export type DeleteWalkingRunningDistanceUnion = DeleteWalkingRunningDistanceResponse | DeleteWalkingRunningDistanceError;

export type DeleteWeightError = {
  __typename?: 'deleteWeightError';
  errorCode?: Maybe<DeleteWeightErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DeleteWeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for deleteWeight */
export type DeleteWeightResponse = {
  __typename?: 'deleteWeightResponse';
  response?: Maybe<DeleteType>;
};

/** Return either be response data or error data for deleteWeight */
export type DeleteWeightUnion = DeleteWeightResponse | DeleteWeightError;

export type DrivingScoreAllError = {
  __typename?: 'drivingScoreAllError';
  errorCode?: Maybe<DrivingScoreAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DrivingScoreAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for drivingScoreAll */
export type DrivingScoreAllResponse = {
  __typename?: 'drivingScoreAllResponse';
  response?: Maybe<Array<Maybe<DrivingScoreType>>>;
};

/** Return either be response data or error data for drivingScoreAll */
export type DrivingScoreAllUnion = DrivingScoreAllResponse | DrivingScoreAllError;

export type DrivingScoreError = {
  __typename?: 'drivingScoreError';
  errorCode?: Maybe<DrivingScoreErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum DrivingScoreErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for drivingScore */
export type DrivingScoreResponse = {
  __typename?: 'drivingScoreResponse';
  response?: Maybe<DrivingScoreType>;
};

/** Return either be response data or error data for drivingScore */
export type DrivingScoreUnion = DrivingScoreResponse | DrivingScoreError;

export type FlightsClimbedAllError = {
  __typename?: 'flightsClimbedAllError';
  errorCode?: Maybe<FlightsClimbedAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum FlightsClimbedAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'flightsClimbedAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for flightsClimbedAll */
export type FlightsClimbedAllUnion = FlightsClimbedAllResponse | FlightsClimbedAllError;

export type FlightsClimbedError = {
  __typename?: 'flightsClimbedError';
  errorCode?: Maybe<FlightsClimbedErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum FlightsClimbedErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'flightsClimbedResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for flightsClimbed */
export type FlightsClimbedUnion = FlightsClimbedResponse | FlightsClimbedError;

export type HeartrateAllError = {
  __typename?: 'heartrateAllError';
  errorCode?: Maybe<HeartrateAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum HeartrateAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'heartrateAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for heartrateAll */
export type HeartrateAllUnion = HeartrateAllResponse | HeartrateAllError;

export type HeartrateError = {
  __typename?: 'heartrateError';
  errorCode?: Maybe<HeartrateErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum HeartrateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'heartrateResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for heartrate */
export type HeartrateUnion = HeartrateResponse | HeartrateError;

export type HeartrateVariabilityAllError = {
  __typename?: 'heartrateVariabilityAllError';
  errorCode?: Maybe<HeartrateVariabilityAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum HeartrateVariabilityAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'heartrateVariabilityAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for heartrateVariabilityAll */
export type HeartrateVariabilityAllUnion = HeartrateVariabilityAllResponse | HeartrateVariabilityAllError;

export type HeartrateVariabilityError = {
  __typename?: 'heartrateVariabilityError';
  errorCode?: Maybe<HeartrateVariabilityErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum HeartrateVariabilityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'heartrateVariabilityResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for heartrateVariability */
export type HeartrateVariabilityUnion = HeartrateVariabilityResponse | HeartrateVariabilityError;

export type HeightAllError = {
  __typename?: 'heightAllError';
  errorCode?: Maybe<HeightAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum HeightAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'heightAllResponse';
  response?: Maybe<Array<Maybe<HealthType>>>;
};

/** Return either be response data or error data for heightAll */
export type HeightAllUnion = HeightAllResponse | HeightAllError;

export type HeightError = {
  __typename?: 'heightError';
  errorCode?: Maybe<HeightErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum HeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'heightResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for height */
export type HeightUnion = HeightResponse | HeightError;

export type IncrementCollectionError = {
  __typename?: 'incrementCollectionError';
  errorCode?: Maybe<IncrementCollectionErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum IncrementCollectionErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'incrementCollectionResponse';
  response?: Maybe<CollectionType>;
};

/** Return either be response data or error data for incrementCollection */
export type IncrementCollectionUnion = IncrementCollectionResponse | IncrementCollectionError;

export type IncrementSteinError = {
  __typename?: 'incrementSteinError';
  errorCode?: Maybe<IncrementSteinErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum IncrementSteinErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'incrementSteinResponse';
  response?: Maybe<CollectionType>;
};

/** Return either be response data or error data for incrementStein */
export type IncrementSteinUnion = IncrementSteinResponse | IncrementSteinError;

export type MigraineAllError = {
  __typename?: 'migraineAllError';
  errorCode?: Maybe<MigraineAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum MigraineAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'migraineAllResponse';
  response?: Maybe<Array<Maybe<MigraineType>>>;
};

/** Return either be response data or error data for migraineAll */
export type MigraineAllUnion = MigraineAllResponse | MigraineAllError;

export type MigraineError = {
  __typename?: 'migraineError';
  errorCode?: Maybe<MigraineErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum MigraineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for migraine */
export type MigraineResponse = {
  __typename?: 'migraineResponse';
  response?: Maybe<MigraineType>;
};

/** Return either be response data or error data for migraine */
export type MigraineUnion = MigraineResponse | MigraineError;

export type OxygenSaturationAllError = {
  __typename?: 'oxygenSaturationAllError';
  errorCode?: Maybe<OxygenSaturationAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum OxygenSaturationAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'oxygenSaturationAllResponse';
  response?: Maybe<Array<Maybe<HealthType>>>;
};

/** Return either be response data or error data for oxygenSaturationAll */
export type OxygenSaturationAllUnion = OxygenSaturationAllResponse | OxygenSaturationAllError;

export type OxygenSaturationError = {
  __typename?: 'oxygenSaturationError';
  errorCode?: Maybe<OxygenSaturationErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum OxygenSaturationErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'oxygenSaturationResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for oxygenSaturation */
export type OxygenSaturationUnion = OxygenSaturationResponse | OxygenSaturationError;

export type PlateletsAllError = {
  __typename?: 'plateletsAllError';
  errorCode?: Maybe<PlateletsAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum PlateletsAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'plateletsAllResponse';
  response?: Maybe<Array<Maybe<PlateletType>>>;
};

/** Return either be response data or error data for plateletsAll */
export type PlateletsAllUnion = PlateletsAllResponse | PlateletsAllError;

export type PlateletsError = {
  __typename?: 'plateletsError';
  errorCode?: Maybe<PlateletsErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum PlateletsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'plateletsResponse';
  response?: Maybe<PlateletType>;
};

/** Return either be response data or error data for platelets */
export type PlateletsUnion = PlateletsResponse | PlateletsError;

export type RefuelAllError = {
  __typename?: 'refuelAllError';
  errorCode?: Maybe<RefuelAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum RefuelAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for refuelAll */
export type RefuelAllResponse = {
  __typename?: 'refuelAllResponse';
  response?: Maybe<Array<Maybe<RefuelType>>>;
};

/** Return either be response data or error data for refuelAll */
export type RefuelAllUnion = RefuelAllResponse | RefuelAllError;

export type RefuelError = {
  __typename?: 'refuelError';
  errorCode?: Maybe<RefuelErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum RefuelErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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

/** Response data for refuel */
export type RefuelResponse = {
  __typename?: 'refuelResponse';
  response?: Maybe<RefuelType>;
};

/** Return either be response data or error data for refuel */
export type RefuelUnion = RefuelResponse | RefuelError;

export type RestingEnergyAllError = {
  __typename?: 'restingEnergyAllError';
  errorCode?: Maybe<RestingEnergyAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum RestingEnergyAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'restingEnergyAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for restingEnergyAll */
export type RestingEnergyAllUnion = RestingEnergyAllResponse | RestingEnergyAllError;

export type RestingEnergyError = {
  __typename?: 'restingEnergyError';
  errorCode?: Maybe<RestingEnergyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum RestingEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'restingEnergyResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for restingEnergy */
export type RestingEnergyUnion = RestingEnergyResponse | RestingEnergyError;

export type RestingHeartrateAllError = {
  __typename?: 'restingHeartrateAllError';
  errorCode?: Maybe<RestingHeartrateAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum RestingHeartrateAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'restingHeartrateAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for restingHeartrateAll */
export type RestingHeartrateAllUnion = RestingHeartrateAllResponse | RestingHeartrateAllError;

export type RestingHeartrateError = {
  __typename?: 'restingHeartrateError';
  errorCode?: Maybe<RestingHeartrateErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum RestingHeartrateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'restingHeartrateResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for restingHeartrate */
export type RestingHeartrateUnion = RestingHeartrateResponse | RestingHeartrateError;

export type SleepAnalysisAllError = {
  __typename?: 'sleepAnalysisAllError';
  errorCode?: Maybe<SleepAnalysisAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum SleepAnalysisAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'sleepAnalysisAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for sleepAnalysisAll */
export type SleepAnalysisAllUnion = SleepAnalysisAllResponse | SleepAnalysisAllError;

export type SleepAnalysisError = {
  __typename?: 'sleepAnalysisError';
  errorCode?: Maybe<SleepAnalysisErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum SleepAnalysisErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'sleepAnalysisResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for sleepAnalysis */
export type SleepAnalysisUnion = SleepAnalysisResponse | SleepAnalysisError;

export type StepsAllError = {
  __typename?: 'stepsAllError';
  errorCode?: Maybe<StepsAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum StepsAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'stepsAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for stepsAll */
export type StepsAllUnion = StepsAllResponse | StepsAllError;

export type StepsError = {
  __typename?: 'stepsError';
  errorCode?: Maybe<StepsErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum StepsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'stepsResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for steps */
export type StepsUnion = StepsResponse | StepsError;

export type SwimmingDistanceAllError = {
  __typename?: 'swimmingDistanceAllError';
  errorCode?: Maybe<SwimmingDistanceAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum SwimmingDistanceAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'swimmingDistanceAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for swimmingDistanceAll */
export type SwimmingDistanceAllUnion = SwimmingDistanceAllResponse | SwimmingDistanceAllError;

export type SwimmingDistanceError = {
  __typename?: 'swimmingDistanceError';
  errorCode?: Maybe<SwimmingDistanceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum SwimmingDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'swimmingDistanceResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for swimmingDistance */
export type SwimmingDistanceUnion = SwimmingDistanceResponse | SwimmingDistanceError;

export type UpdateActiveEnergyError = {
  __typename?: 'updateActiveEnergyError';
  errorCode?: Maybe<UpdateActiveEnergyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateActiveEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateActiveEnergyResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateActiveEnergy */
export type UpdateActiveEnergyUnion = UpdateActiveEnergyResponse | UpdateActiveEnergyError;

export type UpdateActivityError = {
  __typename?: 'updateActivityError';
  errorCode?: Maybe<UpdateActivityErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateActivityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateActivityResponse';
  response?: Maybe<ActivityType>;
};

/** Return either be response data or error data for updateActivity */
export type UpdateActivityUnion = UpdateActivityResponse | UpdateActivityError;

export type UpdateAnxietyError = {
  __typename?: 'updateAnxietyError';
  errorCode?: Maybe<UpdateAnxietyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateAnxietyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateAnxietyResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for updateAnxiety */
export type UpdateAnxietyUnion = UpdateAnxietyResponse | UpdateAnxietyError;

export type UpdateAverageMpgError = {
  __typename?: 'updateAverageMPGError';
  errorCode?: Maybe<UpdateAverageMpgErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateAverageMpgErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateAverageMPGResponse';
  response?: Maybe<AverageMpgType>;
};

/** Return either be response data or error data for updateAverageMPG */
export type UpdateAverageMpgUnion = UpdateAverageMpgResponse | UpdateAverageMpgError;

export type UpdateBloodPressureError = {
  __typename?: 'updateBloodPressureError';
  errorCode?: Maybe<UpdateBloodPressureErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateBloodPressureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateBloodPressureResponse';
  response?: Maybe<BloodPressureType>;
};

/** Return either be response data or error data for updateBloodPressure */
export type UpdateBloodPressureUnion = UpdateBloodPressureResponse | UpdateBloodPressureError;

export type UpdateBodyTemperatureError = {
  __typename?: 'updateBodyTemperatureError';
  errorCode?: Maybe<UpdateBodyTemperatureErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateBodyTemperatureErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateBodyTemperatureResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for updateBodyTemperature */
export type UpdateBodyTemperatureUnion = UpdateBodyTemperatureResponse | UpdateBodyTemperatureError;

export type UpdateCaffeineError = {
  __typename?: 'updateCaffeineError';
  errorCode?: Maybe<UpdateCaffeineErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateCaffeineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateCaffeineResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateCaffeine */
export type UpdateCaffeineUnion = UpdateCaffeineResponse | UpdateCaffeineError;

export type UpdateCbcError = {
  __typename?: 'updateCbcError';
  errorCode?: Maybe<UpdateCbcErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateCbcErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateCbcResponse';
  response?: Maybe<CbcType>;
};

/** Return either be response data or error data for updateCbc */
export type UpdateCbcUnion = UpdateCbcResponse | UpdateCbcError;

export type UpdateCollectionError = {
  __typename?: 'updateCollectionError';
  errorCode?: Maybe<UpdateCollectionErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateCollectionErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateCollectionResponse';
  response?: Maybe<CollectionType>;
};

/** Return either be response data or error data for updateCollection */
export type UpdateCollectionUnion = UpdateCollectionResponse | UpdateCollectionError;

export type UpdateDrivingScoreError = {
  __typename?: 'updateDrivingScoreError';
  errorCode?: Maybe<UpdateDrivingScoreErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateDrivingScoreErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateDrivingScoreResponse';
  response?: Maybe<DrivingScoreType>;
};

/** Return either be response data or error data for updateDrivingScore */
export type UpdateDrivingScoreUnion = UpdateDrivingScoreResponse | UpdateDrivingScoreError;

export type UpdateFlightsClimbedError = {
  __typename?: 'updateFlightsClimbedError';
  errorCode?: Maybe<UpdateFlightsClimbedErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateFlightsClimbedErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateFlightsClimbedResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateFlightsClimbed */
export type UpdateFlightsClimbedUnion = UpdateFlightsClimbedResponse | UpdateFlightsClimbedError;

export type UpdateHeartRateError = {
  __typename?: 'updateHeartRateError';
  errorCode?: Maybe<UpdateHeartRateErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateHeartRateResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateHeartRate */
export type UpdateHeartRateUnion = UpdateHeartRateResponse | UpdateHeartRateError;

export type UpdateHeartRateVariabilityError = {
  __typename?: 'updateHeartRateVariabilityError';
  errorCode?: Maybe<UpdateHeartRateVariabilityErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateHeartRateVariabilityErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateHeartRateVariabilityResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateHeartRateVariability */
export type UpdateHeartRateVariabilityUnion = UpdateHeartRateVariabilityResponse | UpdateHeartRateVariabilityError;

export type UpdateHeightError = {
  __typename?: 'updateHeightError';
  errorCode?: Maybe<UpdateHeightErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateHeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateHeightResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for updateHeight */
export type UpdateHeightUnion = UpdateHeightResponse | UpdateHeightError;

export type UpdateMigraineError = {
  __typename?: 'updateMigraineError';
  errorCode?: Maybe<UpdateMigraineErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateMigraineErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateMigraineResponse';
  response?: Maybe<MigraineType>;
};

/** Return either be response data or error data for updateMigraine */
export type UpdateMigraineUnion = UpdateMigraineResponse | UpdateMigraineError;

export type UpdateOxygenSaturationError = {
  __typename?: 'updateOxygenSaturationError';
  errorCode?: Maybe<UpdateOxygenSaturationErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateOxygenSaturationErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateOxygenSaturationResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateOxygenSaturation */
export type UpdateOxygenSaturationUnion = UpdateOxygenSaturationResponse | UpdateOxygenSaturationError;

export type UpdatePlateletsError = {
  __typename?: 'updatePlateletsError';
  errorCode?: Maybe<UpdatePlateletsErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdatePlateletsErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updatePlateletsResponse';
  response?: Maybe<PlateletType>;
};

/** Return either be response data or error data for updatePlatelets */
export type UpdatePlateletsUnion = UpdatePlateletsResponse | UpdatePlateletsError;

export type UpdateRefuelError = {
  __typename?: 'updateRefuelError';
  errorCode?: Maybe<UpdateRefuelErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateRefuelErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateRefuelResponse';
  response?: Maybe<RefuelType>;
};

/** Return either be response data or error data for updateRefuel */
export type UpdateRefuelUnion = UpdateRefuelResponse | UpdateRefuelError;

export type UpdateRestingEnergyError = {
  __typename?: 'updateRestingEnergyError';
  errorCode?: Maybe<UpdateRestingEnergyErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateRestingEnergyErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateRestingEnergyResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateRestingEnergy */
export type UpdateRestingEnergyUnion = UpdateRestingEnergyResponse | UpdateRestingEnergyError;

export type UpdateRestingHeartRateError = {
  __typename?: 'updateRestingHeartRateError';
  errorCode?: Maybe<UpdateRestingHeartRateErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateRestingHeartRateErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateRestingHeartRateResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateRestingHeartRate */
export type UpdateRestingHeartRateUnion = UpdateRestingHeartRateResponse | UpdateRestingHeartRateError;

export type UpdateSleepAnalysisError = {
  __typename?: 'updateSleepAnalysisError';
  errorCode?: Maybe<UpdateSleepAnalysisErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateSleepAnalysisErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateSleepAnalysisResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateSleepAnalysis */
export type UpdateSleepAnalysisUnion = UpdateSleepAnalysisResponse | UpdateSleepAnalysisError;

export type UpdateSteinError = {
  __typename?: 'updateSteinError';
  errorCode?: Maybe<UpdateSteinErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateSteinErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateSteinResponse';
  response?: Maybe<CollectionType>;
};

/** Return either be response data or error data for updateStein */
export type UpdateSteinUnion = UpdateSteinResponse | UpdateSteinError;

export type UpdateStepError = {
  __typename?: 'updateStepError';
  errorCode?: Maybe<UpdateStepErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateStepErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateStepResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateStep */
export type UpdateStepUnion = UpdateStepResponse | UpdateStepError;

export type UpdateSwimmingDistanceError = {
  __typename?: 'updateSwimmingDistanceError';
  errorCode?: Maybe<UpdateSwimmingDistanceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateSwimmingDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateSwimmingDistanceResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateSwimmingDistance */
export type UpdateSwimmingDistanceUnion = UpdateSwimmingDistanceResponse | UpdateSwimmingDistanceError;

export type UpdateWaistCircumferenceError = {
  __typename?: 'updateWaistCircumferenceError';
  errorCode?: Maybe<UpdateWaistCircumferenceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateWaistCircumferenceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateWaistCircumferenceResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for updateWaistCircumference */
export type UpdateWaistCircumferenceUnion = UpdateWaistCircumferenceResponse | UpdateWaistCircumferenceError;

export type UpdateWalkingHeartRateAverageError = {
  __typename?: 'updateWalkingHeartRateAverageError';
  errorCode?: Maybe<UpdateWalkingHeartRateAverageErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateWalkingHeartRateAverageErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateWalkingHeartRateAverageResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateWalkingHeartRateAverage */
export type UpdateWalkingHeartRateAverageUnion = UpdateWalkingHeartRateAverageResponse | UpdateWalkingHeartRateAverageError;

export type UpdateWalkingRunningDistanceError = {
  __typename?: 'updateWalkingRunningDistanceError';
  errorCode?: Maybe<UpdateWalkingRunningDistanceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateWalkingRunningDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateWalkingRunningDistanceResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for updateWalkingRunningDistance */
export type UpdateWalkingRunningDistanceUnion = UpdateWalkingRunningDistanceResponse | UpdateWalkingRunningDistanceError;

export type UpdateWeightError = {
  __typename?: 'updateWeightError';
  errorCode?: Maybe<UpdateWeightErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum UpdateWeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'updateWeightResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for updateWeight */
export type UpdateWeightUnion = UpdateWeightResponse | UpdateWeightError;

export type WaistCircumferenceAllError = {
  __typename?: 'waistCircumferenceAllError';
  errorCode?: Maybe<WaistCircumferenceAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum WaistCircumferenceAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'waistCircumferenceAllResponse';
  response?: Maybe<Array<Maybe<HealthType>>>;
};

/** Return either be response data or error data for waistCircumferenceAll */
export type WaistCircumferenceAllUnion = WaistCircumferenceAllResponse | WaistCircumferenceAllError;

export type WaistCircumferenceError = {
  __typename?: 'waistCircumferenceError';
  errorCode?: Maybe<WaistCircumferenceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum WaistCircumferenceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'waistCircumferenceResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for waistCircumference */
export type WaistCircumferenceUnion = WaistCircumferenceResponse | WaistCircumferenceError;

export type WalkingHeartrateAverageAllError = {
  __typename?: 'walkingHeartrateAverageAllError';
  errorCode?: Maybe<WalkingHeartrateAverageAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum WalkingHeartrateAverageAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'walkingHeartrateAverageAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for walkingHeartrateAverageAll */
export type WalkingHeartrateAverageAllUnion = WalkingHeartrateAverageAllResponse | WalkingHeartrateAverageAllError;

export type WalkingHeartrateAverageError = {
  __typename?: 'walkingHeartrateAverageError';
  errorCode?: Maybe<WalkingHeartrateAverageErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum WalkingHeartrateAverageErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'walkingHeartrateAverageResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for walkingHeartrateAverage */
export type WalkingHeartrateAverageUnion = WalkingHeartrateAverageResponse | WalkingHeartrateAverageError;

export type WalkingRunningDistanceAllError = {
  __typename?: 'walkingRunningDistanceAllError';
  errorCode?: Maybe<WalkingRunningDistanceAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum WalkingRunningDistanceAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'walkingRunningDistanceAllResponse';
  response?: Maybe<Array<Maybe<HealthKitType>>>;
};

/** Return either be response data or error data for walkingRunningDistanceAll */
export type WalkingRunningDistanceAllUnion = WalkingRunningDistanceAllResponse | WalkingRunningDistanceAllError;

export type WalkingRunningDistanceError = {
  __typename?: 'walkingRunningDistanceError';
  errorCode?: Maybe<WalkingRunningDistanceErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum WalkingRunningDistanceErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'walkingRunningDistanceResponse';
  response?: Maybe<HealthKitType>;
};

/** Return either be response data or error data for walkingRunningDistance */
export type WalkingRunningDistanceUnion = WalkingRunningDistanceResponse | WalkingRunningDistanceError;

export type WeightAllError = {
  __typename?: 'weightAllError';
  errorCode?: Maybe<WeightAllErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum WeightAllErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'weightAllResponse';
  response?: Maybe<Array<Maybe<HealthType>>>;
};

/** Return either be response data or error data for weightAll */
export type WeightAllUnion = WeightAllResponse | WeightAllError;

export type WeightError = {
  __typename?: 'weightError';
  errorCode?: Maybe<WeightErrorErrorCodesType>;
  errorDesc?: Maybe<Scalars['String']>;
};

export enum WeightErrorErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server timeout error */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** Unable to find the thing */
  NotFound = 'NOT_FOUND',
  /** Arguments given were not valid */
  InvalidArguments = 'INVALID_ARGUMENTS',
  /** An error occured trying to delete this item */
  DeleteError = 'DELETE_ERROR',
  /** Item type has been disabled */
  DisabledType = 'DISABLED_TYPE',
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
  /** An error occured trying to update a car data item */
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
  __typename?: 'weightResponse';
  response?: Maybe<HealthType>;
};

/** Return either be response data or error data for weight */
export type WeightUnion = WeightResponse | WeightError;



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  ActivityInputType: ActivityInputType;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ActivityInputUpdateType: ActivityInputUpdateType;
  ActivityType: ResolverTypeWrapper<ActivityType>;
  AverageMPGInputType: AverageMpgInputType;
  AverageMPGInputUpdateType: AverageMpgInputUpdateType;
  AverageMPGType: ResolverTypeWrapper<AverageMpgType>;
  BloodPressureInputType: BloodPressureInputType;
  BloodPressureInputUpdateType: BloodPressureInputUpdateType;
  BloodPressureType: ResolverTypeWrapper<BloodPressureType>;
  CbcInputType: CbcInputType;
  CbcInputUpdateType: CbcInputUpdateType;
  CbcType: ResolverTypeWrapper<CbcType>;
  CollectionInputIncrementType: CollectionInputIncrementType;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CollectionInputType: CollectionInputType;
  CollectionInputUpdateType: CollectionInputUpdateType;
  CollectionType: ResolverTypeWrapper<CollectionType>;
  CollectionsAllError: ResolverTypeWrapper<CollectionsAllError>;
  CollectionsAllErrorErrorCodesType: CollectionsAllErrorErrorCodesType;
  CollectionsAllResponse: ResolverTypeWrapper<CollectionsAllResponse>;
  CollectionsAllUnion: ResolversTypes['CollectionsAllResponse'] | ResolversTypes['CollectionsAllError'];
  CollectionsError: ResolverTypeWrapper<CollectionsError>;
  CollectionsErrorErrorCodesType: CollectionsErrorErrorCodesType;
  CollectionsResponse: ResolverTypeWrapper<CollectionsResponse>;
  CollectionsUnion: ResolversTypes['CollectionsResponse'] | ResolversTypes['CollectionsError'];
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DeleteType: ResolverTypeWrapper<DeleteType>;
  DrivingScoreInputType: DrivingScoreInputType;
  DrivingScoreInputUpdateType: DrivingScoreInputUpdateType;
  DrivingScoreType: ResolverTypeWrapper<DrivingScoreType>;
  HealthInputType: HealthInputType;
  HealthInputUpdateType: HealthInputUpdateType;
  HealthKitInputSampleType: HealthKitInputSampleType;
  HealthKitInputType: HealthKitInputType;
  HealthKitInputUpdateType: HealthKitInputUpdateType;
  HealthKitType: ResolverTypeWrapper<HealthKitType>;
  HealthKitUnionType: ResolversTypes['HealthKitType'] | ResolversTypes['BloodPressureType'];
  HealthType: ResolverTypeWrapper<HealthType>;
  MigraineInputType: MigraineInputType;
  MigraineInputUpdateType: MigraineInputUpdateType;
  MigraineType: ResolverTypeWrapper<MigraineType>;
  Mutation: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  PlateletInputType: PlateletInputType;
  PlateletInputUpdateType: PlateletInputUpdateType;
  PlateletType: ResolverTypeWrapper<PlateletType>;
  RefuelInputType: RefuelInputType;
  RefuelInputUpdateType: RefuelInputUpdateType;
  RefuelType: ResolverTypeWrapper<RefuelType>;
  RootQueryType: ResolverTypeWrapper<{}>;
  SteinsAllError: ResolverTypeWrapper<SteinsAllError>;
  SteinsAllErrorErrorCodesType: SteinsAllErrorErrorCodesType;
  SteinsAllResponse: ResolverTypeWrapper<SteinsAllResponse>;
  SteinsAllUnion: ResolversTypes['SteinsAllResponse'] | ResolversTypes['SteinsAllError'];
  SteinsError: ResolverTypeWrapper<SteinsError>;
  SteinsErrorErrorCodesType: SteinsErrorErrorCodesType;
  SteinsResponse: ResolverTypeWrapper<SteinsResponse>;
  SteinsUnion: ResolversTypes['SteinsResponse'] | ResolversTypes['SteinsError'];
  UnitType: UnitType;
  VehicleType: VehicleType;
  activeEnergyAllError: ResolverTypeWrapper<ActiveEnergyAllError>;
  activeEnergyAllErrorErrorCodesType: ActiveEnergyAllErrorErrorCodesType;
  activeEnergyAllResponse: ResolverTypeWrapper<ActiveEnergyAllResponse>;
  activeEnergyAllUnion: ResolversTypes['activeEnergyAllResponse'] | ResolversTypes['activeEnergyAllError'];
  activeEnergyError: ResolverTypeWrapper<ActiveEnergyError>;
  activeEnergyErrorErrorCodesType: ActiveEnergyErrorErrorCodesType;
  activeEnergyResponse: ResolverTypeWrapper<ActiveEnergyResponse>;
  activeEnergyUnion: ResolversTypes['activeEnergyResponse'] | ResolversTypes['activeEnergyError'];
  activityAllError: ResolverTypeWrapper<ActivityAllError>;
  activityAllErrorErrorCodesType: ActivityAllErrorErrorCodesType;
  activityAllResponse: ResolverTypeWrapper<ActivityAllResponse>;
  activityAllUnion: ResolversTypes['activityAllResponse'] | ResolversTypes['activityAllError'];
  activityError: ResolverTypeWrapper<ActivityError>;
  activityErrorErrorCodesType: ActivityErrorErrorCodesType;
  activityResponse: ResolverTypeWrapper<ActivityResponse>;
  activityUnion: ResolversTypes['activityResponse'] | ResolversTypes['activityError'];
  addActiveEnergyError: ResolverTypeWrapper<AddActiveEnergyError>;
  addActiveEnergyErrorErrorCodesType: AddActiveEnergyErrorErrorCodesType;
  addActiveEnergyResponse: ResolverTypeWrapper<AddActiveEnergyResponse>;
  addActiveEnergyUnion: ResolversTypes['addActiveEnergyResponse'] | ResolversTypes['addActiveEnergyError'];
  addActivityError: ResolverTypeWrapper<AddActivityError>;
  addActivityErrorErrorCodesType: AddActivityErrorErrorCodesType;
  addActivityResponse: ResolverTypeWrapper<AddActivityResponse>;
  addActivityUnion: ResolversTypes['addActivityResponse'] | ResolversTypes['addActivityError'];
  addAnxietyError: ResolverTypeWrapper<AddAnxietyError>;
  addAnxietyErrorErrorCodesType: AddAnxietyErrorErrorCodesType;
  addAnxietyResponse: ResolverTypeWrapper<AddAnxietyResponse>;
  addAnxietyUnion: ResolversTypes['addAnxietyResponse'] | ResolversTypes['addAnxietyError'];
  addAverageMPGError: ResolverTypeWrapper<AddAverageMpgError>;
  addAverageMPGErrorErrorCodesType: AddAverageMpgErrorErrorCodesType;
  addAverageMPGResponse: ResolverTypeWrapper<AddAverageMpgResponse>;
  addAverageMPGUnion: ResolversTypes['addAverageMPGResponse'] | ResolversTypes['addAverageMPGError'];
  addBloodPressureError: ResolverTypeWrapper<AddBloodPressureError>;
  addBloodPressureErrorErrorCodesType: AddBloodPressureErrorErrorCodesType;
  addBloodPressureResponse: ResolverTypeWrapper<AddBloodPressureResponse>;
  addBloodPressureUnion: ResolversTypes['addBloodPressureResponse'] | ResolversTypes['addBloodPressureError'];
  addBodyTemperatureError: ResolverTypeWrapper<AddBodyTemperatureError>;
  addBodyTemperatureErrorErrorCodesType: AddBodyTemperatureErrorErrorCodesType;
  addBodyTemperatureResponse: ResolverTypeWrapper<AddBodyTemperatureResponse>;
  addBodyTemperatureUnion: ResolversTypes['addBodyTemperatureResponse'] | ResolversTypes['addBodyTemperatureError'];
  addCaffeineError: ResolverTypeWrapper<AddCaffeineError>;
  addCaffeineErrorErrorCodesType: AddCaffeineErrorErrorCodesType;
  addCaffeineResponse: ResolverTypeWrapper<AddCaffeineResponse>;
  addCaffeineUnion: ResolversTypes['addCaffeineResponse'] | ResolversTypes['addCaffeineError'];
  addCbcError: ResolverTypeWrapper<AddCbcError>;
  addCbcErrorErrorCodesType: AddCbcErrorErrorCodesType;
  addCbcResponse: ResolverTypeWrapper<AddCbcResponse>;
  addCbcUnion: ResolversTypes['addCbcResponse'] | ResolversTypes['addCbcError'];
  addCollectionError: ResolverTypeWrapper<AddCollectionError>;
  addCollectionErrorErrorCodesType: AddCollectionErrorErrorCodesType;
  addCollectionResponse: ResolverTypeWrapper<AddCollectionResponse>;
  addCollectionUnion: ResolversTypes['addCollectionResponse'] | ResolversTypes['addCollectionError'];
  addDrivingScoreError: ResolverTypeWrapper<AddDrivingScoreError>;
  addDrivingScoreErrorErrorCodesType: AddDrivingScoreErrorErrorCodesType;
  addDrivingScoreResponse: ResolverTypeWrapper<AddDrivingScoreResponse>;
  addDrivingScoreUnion: ResolversTypes['addDrivingScoreResponse'] | ResolversTypes['addDrivingScoreError'];
  addFlightsClimbedError: ResolverTypeWrapper<AddFlightsClimbedError>;
  addFlightsClimbedErrorErrorCodesType: AddFlightsClimbedErrorErrorCodesType;
  addFlightsClimbedResponse: ResolverTypeWrapper<AddFlightsClimbedResponse>;
  addFlightsClimbedUnion: ResolversTypes['addFlightsClimbedResponse'] | ResolversTypes['addFlightsClimbedError'];
  addHealthKitError: ResolverTypeWrapper<AddHealthKitError>;
  addHealthKitErrorErrorCodesType: AddHealthKitErrorErrorCodesType;
  addHealthKitResponse: ResolverTypeWrapper<Omit<AddHealthKitResponse, 'response'> & { response?: Maybe<Array<Maybe<ResolversTypes['HealthKitUnionType']>>> }>;
  addHealthKitUnion: ResolversTypes['addHealthKitResponse'] | ResolversTypes['addHealthKitError'];
  addHeartRateError: ResolverTypeWrapper<AddHeartRateError>;
  addHeartRateErrorErrorCodesType: AddHeartRateErrorErrorCodesType;
  addHeartRateResponse: ResolverTypeWrapper<AddHeartRateResponse>;
  addHeartRateUnion: ResolversTypes['addHeartRateResponse'] | ResolversTypes['addHeartRateError'];
  addHeartRateVariabilityError: ResolverTypeWrapper<AddHeartRateVariabilityError>;
  addHeartRateVariabilityErrorErrorCodesType: AddHeartRateVariabilityErrorErrorCodesType;
  addHeartRateVariabilityResponse: ResolverTypeWrapper<AddHeartRateVariabilityResponse>;
  addHeartRateVariabilityUnion: ResolversTypes['addHeartRateVariabilityResponse'] | ResolversTypes['addHeartRateVariabilityError'];
  addHeightError: ResolverTypeWrapper<AddHeightError>;
  addHeightErrorErrorCodesType: AddHeightErrorErrorCodesType;
  addHeightResponse: ResolverTypeWrapper<AddHeightResponse>;
  addHeightUnion: ResolversTypes['addHeightResponse'] | ResolversTypes['addHeightError'];
  addMigraineError: ResolverTypeWrapper<AddMigraineError>;
  addMigraineErrorErrorCodesType: AddMigraineErrorErrorCodesType;
  addMigraineResponse: ResolverTypeWrapper<AddMigraineResponse>;
  addMigraineUnion: ResolversTypes['addMigraineResponse'] | ResolversTypes['addMigraineError'];
  addOxygenSaturationError: ResolverTypeWrapper<AddOxygenSaturationError>;
  addOxygenSaturationErrorErrorCodesType: AddOxygenSaturationErrorErrorCodesType;
  addOxygenSaturationResponse: ResolverTypeWrapper<AddOxygenSaturationResponse>;
  addOxygenSaturationUnion: ResolversTypes['addOxygenSaturationResponse'] | ResolversTypes['addOxygenSaturationError'];
  addPlateletsError: ResolverTypeWrapper<AddPlateletsError>;
  addPlateletsErrorErrorCodesType: AddPlateletsErrorErrorCodesType;
  addPlateletsResponse: ResolverTypeWrapper<AddPlateletsResponse>;
  addPlateletsUnion: ResolversTypes['addPlateletsResponse'] | ResolversTypes['addPlateletsError'];
  addRefuelError: ResolverTypeWrapper<AddRefuelError>;
  addRefuelErrorErrorCodesType: AddRefuelErrorErrorCodesType;
  addRefuelResponse: ResolverTypeWrapper<AddRefuelResponse>;
  addRefuelUnion: ResolversTypes['addRefuelResponse'] | ResolversTypes['addRefuelError'];
  addRestingEnergyError: ResolverTypeWrapper<AddRestingEnergyError>;
  addRestingEnergyErrorErrorCodesType: AddRestingEnergyErrorErrorCodesType;
  addRestingEnergyResponse: ResolverTypeWrapper<AddRestingEnergyResponse>;
  addRestingEnergyUnion: ResolversTypes['addRestingEnergyResponse'] | ResolversTypes['addRestingEnergyError'];
  addRestingHeartRateError: ResolverTypeWrapper<AddRestingHeartRateError>;
  addRestingHeartRateErrorErrorCodesType: AddRestingHeartRateErrorErrorCodesType;
  addRestingHeartRateResponse: ResolverTypeWrapper<AddRestingHeartRateResponse>;
  addRestingHeartRateUnion: ResolversTypes['addRestingHeartRateResponse'] | ResolversTypes['addRestingHeartRateError'];
  addSleepAnalysisError: ResolverTypeWrapper<AddSleepAnalysisError>;
  addSleepAnalysisErrorErrorCodesType: AddSleepAnalysisErrorErrorCodesType;
  addSleepAnalysisResponse: ResolverTypeWrapper<AddSleepAnalysisResponse>;
  addSleepAnalysisUnion: ResolversTypes['addSleepAnalysisResponse'] | ResolversTypes['addSleepAnalysisError'];
  addSteinError: ResolverTypeWrapper<AddSteinError>;
  addSteinErrorErrorCodesType: AddSteinErrorErrorCodesType;
  addSteinResponse: ResolverTypeWrapper<AddSteinResponse>;
  addSteinUnion: ResolversTypes['addSteinResponse'] | ResolversTypes['addSteinError'];
  addStepError: ResolverTypeWrapper<AddStepError>;
  addStepErrorErrorCodesType: AddStepErrorErrorCodesType;
  addStepResponse: ResolverTypeWrapper<AddStepResponse>;
  addStepUnion: ResolversTypes['addStepResponse'] | ResolversTypes['addStepError'];
  addSwimmingDistanceError: ResolverTypeWrapper<AddSwimmingDistanceError>;
  addSwimmingDistanceErrorErrorCodesType: AddSwimmingDistanceErrorErrorCodesType;
  addSwimmingDistanceResponse: ResolverTypeWrapper<AddSwimmingDistanceResponse>;
  addSwimmingDistanceUnion: ResolversTypes['addSwimmingDistanceResponse'] | ResolversTypes['addSwimmingDistanceError'];
  addWaistCircumferenceError: ResolverTypeWrapper<AddWaistCircumferenceError>;
  addWaistCircumferenceErrorErrorCodesType: AddWaistCircumferenceErrorErrorCodesType;
  addWaistCircumferenceResponse: ResolverTypeWrapper<AddWaistCircumferenceResponse>;
  addWaistCircumferenceUnion: ResolversTypes['addWaistCircumferenceResponse'] | ResolversTypes['addWaistCircumferenceError'];
  addWalkingHeartRateAverageError: ResolverTypeWrapper<AddWalkingHeartRateAverageError>;
  addWalkingHeartRateAverageErrorErrorCodesType: AddWalkingHeartRateAverageErrorErrorCodesType;
  addWalkingHeartRateAverageResponse: ResolverTypeWrapper<AddWalkingHeartRateAverageResponse>;
  addWalkingHeartRateAverageUnion: ResolversTypes['addWalkingHeartRateAverageResponse'] | ResolversTypes['addWalkingHeartRateAverageError'];
  addWalkingRunningDistanceError: ResolverTypeWrapper<AddWalkingRunningDistanceError>;
  addWalkingRunningDistanceErrorErrorCodesType: AddWalkingRunningDistanceErrorErrorCodesType;
  addWalkingRunningDistanceResponse: ResolverTypeWrapper<AddWalkingRunningDistanceResponse>;
  addWalkingRunningDistanceUnion: ResolversTypes['addWalkingRunningDistanceResponse'] | ResolversTypes['addWalkingRunningDistanceError'];
  addWeightError: ResolverTypeWrapper<AddWeightError>;
  addWeightErrorErrorCodesType: AddWeightErrorErrorCodesType;
  addWeightResponse: ResolverTypeWrapper<AddWeightResponse>;
  addWeightUnion: ResolversTypes['addWeightResponse'] | ResolversTypes['addWeightError'];
  anxietyAllError: ResolverTypeWrapper<AnxietyAllError>;
  anxietyAllErrorErrorCodesType: AnxietyAllErrorErrorCodesType;
  anxietyAllResponse: ResolverTypeWrapper<AnxietyAllResponse>;
  anxietyAllUnion: ResolversTypes['anxietyAllResponse'] | ResolversTypes['anxietyAllError'];
  anxietyError: ResolverTypeWrapper<AnxietyError>;
  anxietyErrorErrorCodesType: AnxietyErrorErrorCodesType;
  anxietyResponse: ResolverTypeWrapper<AnxietyResponse>;
  anxietyUnion: ResolversTypes['anxietyResponse'] | ResolversTypes['anxietyError'];
  averageMPGAllError: ResolverTypeWrapper<AverageMpgAllError>;
  averageMPGAllErrorErrorCodesType: AverageMpgAllErrorErrorCodesType;
  averageMPGAllResponse: ResolverTypeWrapper<AverageMpgAllResponse>;
  averageMPGAllUnion: ResolversTypes['averageMPGAllResponse'] | ResolversTypes['averageMPGAllError'];
  averageMPGError: ResolverTypeWrapper<AverageMpgError>;
  averageMPGErrorErrorCodesType: AverageMpgErrorErrorCodesType;
  averageMPGResponse: ResolverTypeWrapper<AverageMpgResponse>;
  averageMPGUnion: ResolversTypes['averageMPGResponse'] | ResolversTypes['averageMPGError'];
  bloodPressureAllError: ResolverTypeWrapper<BloodPressureAllError>;
  bloodPressureAllErrorErrorCodesType: BloodPressureAllErrorErrorCodesType;
  bloodPressureAllResponse: ResolverTypeWrapper<BloodPressureAllResponse>;
  bloodPressureAllUnion: ResolversTypes['bloodPressureAllResponse'] | ResolversTypes['bloodPressureAllError'];
  bloodPressureError: ResolverTypeWrapper<BloodPressureError>;
  bloodPressureErrorErrorCodesType: BloodPressureErrorErrorCodesType;
  bloodPressureResponse: ResolverTypeWrapper<BloodPressureResponse>;
  bloodPressureUnion: ResolversTypes['bloodPressureResponse'] | ResolversTypes['bloodPressureError'];
  bodyTemperatureAllError: ResolverTypeWrapper<BodyTemperatureAllError>;
  bodyTemperatureAllErrorErrorCodesType: BodyTemperatureAllErrorErrorCodesType;
  bodyTemperatureAllResponse: ResolverTypeWrapper<BodyTemperatureAllResponse>;
  bodyTemperatureAllUnion: ResolversTypes['bodyTemperatureAllResponse'] | ResolversTypes['bodyTemperatureAllError'];
  bodyTemperatureError: ResolverTypeWrapper<BodyTemperatureError>;
  bodyTemperatureErrorErrorCodesType: BodyTemperatureErrorErrorCodesType;
  bodyTemperatureResponse: ResolverTypeWrapper<BodyTemperatureResponse>;
  bodyTemperatureUnion: ResolversTypes['bodyTemperatureResponse'] | ResolversTypes['bodyTemperatureError'];
  caffeineAllError: ResolverTypeWrapper<CaffeineAllError>;
  caffeineAllErrorErrorCodesType: CaffeineAllErrorErrorCodesType;
  caffeineAllResponse: ResolverTypeWrapper<CaffeineAllResponse>;
  caffeineAllUnion: ResolversTypes['caffeineAllResponse'] | ResolversTypes['caffeineAllError'];
  caffeineError: ResolverTypeWrapper<CaffeineError>;
  caffeineErrorErrorCodesType: CaffeineErrorErrorCodesType;
  caffeineResponse: ResolverTypeWrapper<CaffeineResponse>;
  caffeineUnion: ResolversTypes['caffeineResponse'] | ResolversTypes['caffeineError'];
  cbcAllError: ResolverTypeWrapper<CbcAllError>;
  cbcAllErrorErrorCodesType: CbcAllErrorErrorCodesType;
  cbcAllResponse: ResolverTypeWrapper<CbcAllResponse>;
  cbcAllUnion: ResolversTypes['cbcAllResponse'] | ResolversTypes['cbcAllError'];
  cbcError: ResolverTypeWrapper<CbcError>;
  cbcErrorErrorCodesType: CbcErrorErrorCodesType;
  cbcResponse: ResolverTypeWrapper<CbcResponse>;
  cbcUnion: ResolversTypes['cbcResponse'] | ResolversTypes['cbcError'];
  deleteActiveEnergyError: ResolverTypeWrapper<DeleteActiveEnergyError>;
  deleteActiveEnergyErrorErrorCodesType: DeleteActiveEnergyErrorErrorCodesType;
  deleteActiveEnergyResponse: ResolverTypeWrapper<DeleteActiveEnergyResponse>;
  deleteActiveEnergyUnion: ResolversTypes['deleteActiveEnergyResponse'] | ResolversTypes['deleteActiveEnergyError'];
  deleteActivityError: ResolverTypeWrapper<DeleteActivityError>;
  deleteActivityErrorErrorCodesType: DeleteActivityErrorErrorCodesType;
  deleteActivityResponse: ResolverTypeWrapper<DeleteActivityResponse>;
  deleteActivityUnion: ResolversTypes['deleteActivityResponse'] | ResolversTypes['deleteActivityError'];
  deleteAnxietyError: ResolverTypeWrapper<DeleteAnxietyError>;
  deleteAnxietyErrorErrorCodesType: DeleteAnxietyErrorErrorCodesType;
  deleteAnxietyResponse: ResolverTypeWrapper<DeleteAnxietyResponse>;
  deleteAnxietyUnion: ResolversTypes['deleteAnxietyResponse'] | ResolversTypes['deleteAnxietyError'];
  deleteAverageMPGError: ResolverTypeWrapper<DeleteAverageMpgError>;
  deleteAverageMPGErrorErrorCodesType: DeleteAverageMpgErrorErrorCodesType;
  deleteAverageMPGResponse: ResolverTypeWrapper<DeleteAverageMpgResponse>;
  deleteAverageMPGUnion: ResolversTypes['deleteAverageMPGResponse'] | ResolversTypes['deleteAverageMPGError'];
  deleteBloodPressureError: ResolverTypeWrapper<DeleteBloodPressureError>;
  deleteBloodPressureErrorErrorCodesType: DeleteBloodPressureErrorErrorCodesType;
  deleteBloodPressureResponse: ResolverTypeWrapper<DeleteBloodPressureResponse>;
  deleteBloodPressureUnion: ResolversTypes['deleteBloodPressureResponse'] | ResolversTypes['deleteBloodPressureError'];
  deleteBodyTemperatureError: ResolverTypeWrapper<DeleteBodyTemperatureError>;
  deleteBodyTemperatureErrorErrorCodesType: DeleteBodyTemperatureErrorErrorCodesType;
  deleteBodyTemperatureResponse: ResolverTypeWrapper<DeleteBodyTemperatureResponse>;
  deleteBodyTemperatureUnion: ResolversTypes['deleteBodyTemperatureResponse'] | ResolversTypes['deleteBodyTemperatureError'];
  deleteCbcError: ResolverTypeWrapper<DeleteCbcError>;
  deleteCbcErrorErrorCodesType: DeleteCbcErrorErrorCodesType;
  deleteCbcResponse: ResolverTypeWrapper<DeleteCbcResponse>;
  deleteCbcUnion: ResolversTypes['deleteCbcResponse'] | ResolversTypes['deleteCbcError'];
  deleteCollectionError: ResolverTypeWrapper<DeleteCollectionError>;
  deleteCollectionErrorErrorCodesType: DeleteCollectionErrorErrorCodesType;
  deleteCollectionResponse: ResolverTypeWrapper<DeleteCollectionResponse>;
  deleteCollectionUnion: ResolversTypes['deleteCollectionResponse'] | ResolversTypes['deleteCollectionError'];
  deleteDrivingScoreError: ResolverTypeWrapper<DeleteDrivingScoreError>;
  deleteDrivingScoreErrorErrorCodesType: DeleteDrivingScoreErrorErrorCodesType;
  deleteDrivingScoreResponse: ResolverTypeWrapper<DeleteDrivingScoreResponse>;
  deleteDrivingScoreUnion: ResolversTypes['deleteDrivingScoreResponse'] | ResolversTypes['deleteDrivingScoreError'];
  deleteFlightsClimbedError: ResolverTypeWrapper<DeleteFlightsClimbedError>;
  deleteFlightsClimbedErrorErrorCodesType: DeleteFlightsClimbedErrorErrorCodesType;
  deleteFlightsClimbedResponse: ResolverTypeWrapper<DeleteFlightsClimbedResponse>;
  deleteFlightsClimbedUnion: ResolversTypes['deleteFlightsClimbedResponse'] | ResolversTypes['deleteFlightsClimbedError'];
  deleteHeartRateError: ResolverTypeWrapper<DeleteHeartRateError>;
  deleteHeartRateErrorErrorCodesType: DeleteHeartRateErrorErrorCodesType;
  deleteHeartRateResponse: ResolverTypeWrapper<DeleteHeartRateResponse>;
  deleteHeartRateUnion: ResolversTypes['deleteHeartRateResponse'] | ResolversTypes['deleteHeartRateError'];
  deleteHeartRateVariabilityError: ResolverTypeWrapper<DeleteHeartRateVariabilityError>;
  deleteHeartRateVariabilityErrorErrorCodesType: DeleteHeartRateVariabilityErrorErrorCodesType;
  deleteHeartRateVariabilityResponse: ResolverTypeWrapper<DeleteHeartRateVariabilityResponse>;
  deleteHeartRateVariabilityUnion: ResolversTypes['deleteHeartRateVariabilityResponse'] | ResolversTypes['deleteHeartRateVariabilityError'];
  deleteHeightError: ResolverTypeWrapper<DeleteHeightError>;
  deleteHeightErrorErrorCodesType: DeleteHeightErrorErrorCodesType;
  deleteHeightResponse: ResolverTypeWrapper<DeleteHeightResponse>;
  deleteHeightUnion: ResolversTypes['deleteHeightResponse'] | ResolversTypes['deleteHeightError'];
  deleteMigraineError: ResolverTypeWrapper<DeleteMigraineError>;
  deleteMigraineErrorErrorCodesType: DeleteMigraineErrorErrorCodesType;
  deleteMigraineResponse: ResolverTypeWrapper<DeleteMigraineResponse>;
  deleteMigraineUnion: ResolversTypes['deleteMigraineResponse'] | ResolversTypes['deleteMigraineError'];
  deleteOxygenSaturationError: ResolverTypeWrapper<DeleteOxygenSaturationError>;
  deleteOxygenSaturationErrorErrorCodesType: DeleteOxygenSaturationErrorErrorCodesType;
  deleteOxygenSaturationResponse: ResolverTypeWrapper<DeleteOxygenSaturationResponse>;
  deleteOxygenSaturationUnion: ResolversTypes['deleteOxygenSaturationResponse'] | ResolversTypes['deleteOxygenSaturationError'];
  deletePlateletsError: ResolverTypeWrapper<DeletePlateletsError>;
  deletePlateletsErrorErrorCodesType: DeletePlateletsErrorErrorCodesType;
  deletePlateletsResponse: ResolverTypeWrapper<DeletePlateletsResponse>;
  deletePlateletsUnion: ResolversTypes['deletePlateletsResponse'] | ResolversTypes['deletePlateletsError'];
  deleteRefuelError: ResolverTypeWrapper<DeleteRefuelError>;
  deleteRefuelErrorErrorCodesType: DeleteRefuelErrorErrorCodesType;
  deleteRefuelResponse: ResolverTypeWrapper<DeleteRefuelResponse>;
  deleteRefuelUnion: ResolversTypes['deleteRefuelResponse'] | ResolversTypes['deleteRefuelError'];
  deleteRestingEnergyError: ResolverTypeWrapper<DeleteRestingEnergyError>;
  deleteRestingEnergyErrorErrorCodesType: DeleteRestingEnergyErrorErrorCodesType;
  deleteRestingEnergyResponse: ResolverTypeWrapper<DeleteRestingEnergyResponse>;
  deleteRestingEnergyUnion: ResolversTypes['deleteRestingEnergyResponse'] | ResolversTypes['deleteRestingEnergyError'];
  deleteRestingHeartRateError: ResolverTypeWrapper<DeleteRestingHeartRateError>;
  deleteRestingHeartRateErrorErrorCodesType: DeleteRestingHeartRateErrorErrorCodesType;
  deleteRestingHeartRateResponse: ResolverTypeWrapper<DeleteRestingHeartRateResponse>;
  deleteRestingHeartRateUnion: ResolversTypes['deleteRestingHeartRateResponse'] | ResolversTypes['deleteRestingHeartRateError'];
  deleteSteinError: ResolverTypeWrapper<DeleteSteinError>;
  deleteSteinErrorErrorCodesType: DeleteSteinErrorErrorCodesType;
  deleteSteinResponse: ResolverTypeWrapper<DeleteSteinResponse>;
  deleteSteinUnion: ResolversTypes['deleteSteinResponse'] | ResolversTypes['deleteSteinError'];
  deleteStepError: ResolverTypeWrapper<DeleteStepError>;
  deleteStepErrorErrorCodesType: DeleteStepErrorErrorCodesType;
  deleteStepResponse: ResolverTypeWrapper<DeleteStepResponse>;
  deleteStepUnion: ResolversTypes['deleteStepResponse'] | ResolversTypes['deleteStepError'];
  deleteWaistCircumferenceError: ResolverTypeWrapper<DeleteWaistCircumferenceError>;
  deleteWaistCircumferenceErrorErrorCodesType: DeleteWaistCircumferenceErrorErrorCodesType;
  deleteWaistCircumferenceResponse: ResolverTypeWrapper<DeleteWaistCircumferenceResponse>;
  deleteWaistCircumferenceUnion: ResolversTypes['deleteWaistCircumferenceResponse'] | ResolversTypes['deleteWaistCircumferenceError'];
  deleteWalkingHeartRateAverageError: ResolverTypeWrapper<DeleteWalkingHeartRateAverageError>;
  deleteWalkingHeartRateAverageErrorErrorCodesType: DeleteWalkingHeartRateAverageErrorErrorCodesType;
  deleteWalkingHeartRateAverageResponse: ResolverTypeWrapper<DeleteWalkingHeartRateAverageResponse>;
  deleteWalkingHeartRateAverageUnion: ResolversTypes['deleteWalkingHeartRateAverageResponse'] | ResolversTypes['deleteWalkingHeartRateAverageError'];
  deleteWalkingRunningDistanceError: ResolverTypeWrapper<DeleteWalkingRunningDistanceError>;
  deleteWalkingRunningDistanceErrorErrorCodesType: DeleteWalkingRunningDistanceErrorErrorCodesType;
  deleteWalkingRunningDistanceResponse: ResolverTypeWrapper<DeleteWalkingRunningDistanceResponse>;
  deleteWalkingRunningDistanceUnion: ResolversTypes['deleteWalkingRunningDistanceResponse'] | ResolversTypes['deleteWalkingRunningDistanceError'];
  deleteWeightError: ResolverTypeWrapper<DeleteWeightError>;
  deleteWeightErrorErrorCodesType: DeleteWeightErrorErrorCodesType;
  deleteWeightResponse: ResolverTypeWrapper<DeleteWeightResponse>;
  deleteWeightUnion: ResolversTypes['deleteWeightResponse'] | ResolversTypes['deleteWeightError'];
  drivingScoreAllError: ResolverTypeWrapper<DrivingScoreAllError>;
  drivingScoreAllErrorErrorCodesType: DrivingScoreAllErrorErrorCodesType;
  drivingScoreAllResponse: ResolverTypeWrapper<DrivingScoreAllResponse>;
  drivingScoreAllUnion: ResolversTypes['drivingScoreAllResponse'] | ResolversTypes['drivingScoreAllError'];
  drivingScoreError: ResolverTypeWrapper<DrivingScoreError>;
  drivingScoreErrorErrorCodesType: DrivingScoreErrorErrorCodesType;
  drivingScoreResponse: ResolverTypeWrapper<DrivingScoreResponse>;
  drivingScoreUnion: ResolversTypes['drivingScoreResponse'] | ResolversTypes['drivingScoreError'];
  flightsClimbedAllError: ResolverTypeWrapper<FlightsClimbedAllError>;
  flightsClimbedAllErrorErrorCodesType: FlightsClimbedAllErrorErrorCodesType;
  flightsClimbedAllResponse: ResolverTypeWrapper<FlightsClimbedAllResponse>;
  flightsClimbedAllUnion: ResolversTypes['flightsClimbedAllResponse'] | ResolversTypes['flightsClimbedAllError'];
  flightsClimbedError: ResolverTypeWrapper<FlightsClimbedError>;
  flightsClimbedErrorErrorCodesType: FlightsClimbedErrorErrorCodesType;
  flightsClimbedResponse: ResolverTypeWrapper<FlightsClimbedResponse>;
  flightsClimbedUnion: ResolversTypes['flightsClimbedResponse'] | ResolversTypes['flightsClimbedError'];
  heartrateAllError: ResolverTypeWrapper<HeartrateAllError>;
  heartrateAllErrorErrorCodesType: HeartrateAllErrorErrorCodesType;
  heartrateAllResponse: ResolverTypeWrapper<HeartrateAllResponse>;
  heartrateAllUnion: ResolversTypes['heartrateAllResponse'] | ResolversTypes['heartrateAllError'];
  heartrateError: ResolverTypeWrapper<HeartrateError>;
  heartrateErrorErrorCodesType: HeartrateErrorErrorCodesType;
  heartrateResponse: ResolverTypeWrapper<HeartrateResponse>;
  heartrateUnion: ResolversTypes['heartrateResponse'] | ResolversTypes['heartrateError'];
  heartrateVariabilityAllError: ResolverTypeWrapper<HeartrateVariabilityAllError>;
  heartrateVariabilityAllErrorErrorCodesType: HeartrateVariabilityAllErrorErrorCodesType;
  heartrateVariabilityAllResponse: ResolverTypeWrapper<HeartrateVariabilityAllResponse>;
  heartrateVariabilityAllUnion: ResolversTypes['heartrateVariabilityAllResponse'] | ResolversTypes['heartrateVariabilityAllError'];
  heartrateVariabilityError: ResolverTypeWrapper<HeartrateVariabilityError>;
  heartrateVariabilityErrorErrorCodesType: HeartrateVariabilityErrorErrorCodesType;
  heartrateVariabilityResponse: ResolverTypeWrapper<HeartrateVariabilityResponse>;
  heartrateVariabilityUnion: ResolversTypes['heartrateVariabilityResponse'] | ResolversTypes['heartrateVariabilityError'];
  heightAllError: ResolverTypeWrapper<HeightAllError>;
  heightAllErrorErrorCodesType: HeightAllErrorErrorCodesType;
  heightAllResponse: ResolverTypeWrapper<HeightAllResponse>;
  heightAllUnion: ResolversTypes['heightAllResponse'] | ResolversTypes['heightAllError'];
  heightError: ResolverTypeWrapper<HeightError>;
  heightErrorErrorCodesType: HeightErrorErrorCodesType;
  heightResponse: ResolverTypeWrapper<HeightResponse>;
  heightUnion: ResolversTypes['heightResponse'] | ResolversTypes['heightError'];
  incrementCollectionError: ResolverTypeWrapper<IncrementCollectionError>;
  incrementCollectionErrorErrorCodesType: IncrementCollectionErrorErrorCodesType;
  incrementCollectionResponse: ResolverTypeWrapper<IncrementCollectionResponse>;
  incrementCollectionUnion: ResolversTypes['incrementCollectionResponse'] | ResolversTypes['incrementCollectionError'];
  incrementSteinError: ResolverTypeWrapper<IncrementSteinError>;
  incrementSteinErrorErrorCodesType: IncrementSteinErrorErrorCodesType;
  incrementSteinResponse: ResolverTypeWrapper<IncrementSteinResponse>;
  incrementSteinUnion: ResolversTypes['incrementSteinResponse'] | ResolversTypes['incrementSteinError'];
  migraineAllError: ResolverTypeWrapper<MigraineAllError>;
  migraineAllErrorErrorCodesType: MigraineAllErrorErrorCodesType;
  migraineAllResponse: ResolverTypeWrapper<MigraineAllResponse>;
  migraineAllUnion: ResolversTypes['migraineAllResponse'] | ResolversTypes['migraineAllError'];
  migraineError: ResolverTypeWrapper<MigraineError>;
  migraineErrorErrorCodesType: MigraineErrorErrorCodesType;
  migraineResponse: ResolverTypeWrapper<MigraineResponse>;
  migraineUnion: ResolversTypes['migraineResponse'] | ResolversTypes['migraineError'];
  oxygenSaturationAllError: ResolverTypeWrapper<OxygenSaturationAllError>;
  oxygenSaturationAllErrorErrorCodesType: OxygenSaturationAllErrorErrorCodesType;
  oxygenSaturationAllResponse: ResolverTypeWrapper<OxygenSaturationAllResponse>;
  oxygenSaturationAllUnion: ResolversTypes['oxygenSaturationAllResponse'] | ResolversTypes['oxygenSaturationAllError'];
  oxygenSaturationError: ResolverTypeWrapper<OxygenSaturationError>;
  oxygenSaturationErrorErrorCodesType: OxygenSaturationErrorErrorCodesType;
  oxygenSaturationResponse: ResolverTypeWrapper<OxygenSaturationResponse>;
  oxygenSaturationUnion: ResolversTypes['oxygenSaturationResponse'] | ResolversTypes['oxygenSaturationError'];
  plateletsAllError: ResolverTypeWrapper<PlateletsAllError>;
  plateletsAllErrorErrorCodesType: PlateletsAllErrorErrorCodesType;
  plateletsAllResponse: ResolverTypeWrapper<PlateletsAllResponse>;
  plateletsAllUnion: ResolversTypes['plateletsAllResponse'] | ResolversTypes['plateletsAllError'];
  plateletsError: ResolverTypeWrapper<PlateletsError>;
  plateletsErrorErrorCodesType: PlateletsErrorErrorCodesType;
  plateletsResponse: ResolverTypeWrapper<PlateletsResponse>;
  plateletsUnion: ResolversTypes['plateletsResponse'] | ResolversTypes['plateletsError'];
  refuelAllError: ResolverTypeWrapper<RefuelAllError>;
  refuelAllErrorErrorCodesType: RefuelAllErrorErrorCodesType;
  refuelAllResponse: ResolverTypeWrapper<RefuelAllResponse>;
  refuelAllUnion: ResolversTypes['refuelAllResponse'] | ResolversTypes['refuelAllError'];
  refuelError: ResolverTypeWrapper<RefuelError>;
  refuelErrorErrorCodesType: RefuelErrorErrorCodesType;
  refuelResponse: ResolverTypeWrapper<RefuelResponse>;
  refuelUnion: ResolversTypes['refuelResponse'] | ResolversTypes['refuelError'];
  restingEnergyAllError: ResolverTypeWrapper<RestingEnergyAllError>;
  restingEnergyAllErrorErrorCodesType: RestingEnergyAllErrorErrorCodesType;
  restingEnergyAllResponse: ResolverTypeWrapper<RestingEnergyAllResponse>;
  restingEnergyAllUnion: ResolversTypes['restingEnergyAllResponse'] | ResolversTypes['restingEnergyAllError'];
  restingEnergyError: ResolverTypeWrapper<RestingEnergyError>;
  restingEnergyErrorErrorCodesType: RestingEnergyErrorErrorCodesType;
  restingEnergyResponse: ResolverTypeWrapper<RestingEnergyResponse>;
  restingEnergyUnion: ResolversTypes['restingEnergyResponse'] | ResolversTypes['restingEnergyError'];
  restingHeartrateAllError: ResolverTypeWrapper<RestingHeartrateAllError>;
  restingHeartrateAllErrorErrorCodesType: RestingHeartrateAllErrorErrorCodesType;
  restingHeartrateAllResponse: ResolverTypeWrapper<RestingHeartrateAllResponse>;
  restingHeartrateAllUnion: ResolversTypes['restingHeartrateAllResponse'] | ResolversTypes['restingHeartrateAllError'];
  restingHeartrateError: ResolverTypeWrapper<RestingHeartrateError>;
  restingHeartrateErrorErrorCodesType: RestingHeartrateErrorErrorCodesType;
  restingHeartrateResponse: ResolverTypeWrapper<RestingHeartrateResponse>;
  restingHeartrateUnion: ResolversTypes['restingHeartrateResponse'] | ResolversTypes['restingHeartrateError'];
  sleepAnalysisAllError: ResolverTypeWrapper<SleepAnalysisAllError>;
  sleepAnalysisAllErrorErrorCodesType: SleepAnalysisAllErrorErrorCodesType;
  sleepAnalysisAllResponse: ResolverTypeWrapper<SleepAnalysisAllResponse>;
  sleepAnalysisAllUnion: ResolversTypes['sleepAnalysisAllResponse'] | ResolversTypes['sleepAnalysisAllError'];
  sleepAnalysisError: ResolverTypeWrapper<SleepAnalysisError>;
  sleepAnalysisErrorErrorCodesType: SleepAnalysisErrorErrorCodesType;
  sleepAnalysisResponse: ResolverTypeWrapper<SleepAnalysisResponse>;
  sleepAnalysisUnion: ResolversTypes['sleepAnalysisResponse'] | ResolversTypes['sleepAnalysisError'];
  stepsAllError: ResolverTypeWrapper<StepsAllError>;
  stepsAllErrorErrorCodesType: StepsAllErrorErrorCodesType;
  stepsAllResponse: ResolverTypeWrapper<StepsAllResponse>;
  stepsAllUnion: ResolversTypes['stepsAllResponse'] | ResolversTypes['stepsAllError'];
  stepsError: ResolverTypeWrapper<StepsError>;
  stepsErrorErrorCodesType: StepsErrorErrorCodesType;
  stepsResponse: ResolverTypeWrapper<StepsResponse>;
  stepsUnion: ResolversTypes['stepsResponse'] | ResolversTypes['stepsError'];
  swimmingDistanceAllError: ResolverTypeWrapper<SwimmingDistanceAllError>;
  swimmingDistanceAllErrorErrorCodesType: SwimmingDistanceAllErrorErrorCodesType;
  swimmingDistanceAllResponse: ResolverTypeWrapper<SwimmingDistanceAllResponse>;
  swimmingDistanceAllUnion: ResolversTypes['swimmingDistanceAllResponse'] | ResolversTypes['swimmingDistanceAllError'];
  swimmingDistanceError: ResolverTypeWrapper<SwimmingDistanceError>;
  swimmingDistanceErrorErrorCodesType: SwimmingDistanceErrorErrorCodesType;
  swimmingDistanceResponse: ResolverTypeWrapper<SwimmingDistanceResponse>;
  swimmingDistanceUnion: ResolversTypes['swimmingDistanceResponse'] | ResolversTypes['swimmingDistanceError'];
  updateActiveEnergyError: ResolverTypeWrapper<UpdateActiveEnergyError>;
  updateActiveEnergyErrorErrorCodesType: UpdateActiveEnergyErrorErrorCodesType;
  updateActiveEnergyResponse: ResolverTypeWrapper<UpdateActiveEnergyResponse>;
  updateActiveEnergyUnion: ResolversTypes['updateActiveEnergyResponse'] | ResolversTypes['updateActiveEnergyError'];
  updateActivityError: ResolverTypeWrapper<UpdateActivityError>;
  updateActivityErrorErrorCodesType: UpdateActivityErrorErrorCodesType;
  updateActivityResponse: ResolverTypeWrapper<UpdateActivityResponse>;
  updateActivityUnion: ResolversTypes['updateActivityResponse'] | ResolversTypes['updateActivityError'];
  updateAnxietyError: ResolverTypeWrapper<UpdateAnxietyError>;
  updateAnxietyErrorErrorCodesType: UpdateAnxietyErrorErrorCodesType;
  updateAnxietyResponse: ResolverTypeWrapper<UpdateAnxietyResponse>;
  updateAnxietyUnion: ResolversTypes['updateAnxietyResponse'] | ResolversTypes['updateAnxietyError'];
  updateAverageMPGError: ResolverTypeWrapper<UpdateAverageMpgError>;
  updateAverageMPGErrorErrorCodesType: UpdateAverageMpgErrorErrorCodesType;
  updateAverageMPGResponse: ResolverTypeWrapper<UpdateAverageMpgResponse>;
  updateAverageMPGUnion: ResolversTypes['updateAverageMPGResponse'] | ResolversTypes['updateAverageMPGError'];
  updateBloodPressureError: ResolverTypeWrapper<UpdateBloodPressureError>;
  updateBloodPressureErrorErrorCodesType: UpdateBloodPressureErrorErrorCodesType;
  updateBloodPressureResponse: ResolverTypeWrapper<UpdateBloodPressureResponse>;
  updateBloodPressureUnion: ResolversTypes['updateBloodPressureResponse'] | ResolversTypes['updateBloodPressureError'];
  updateBodyTemperatureError: ResolverTypeWrapper<UpdateBodyTemperatureError>;
  updateBodyTemperatureErrorErrorCodesType: UpdateBodyTemperatureErrorErrorCodesType;
  updateBodyTemperatureResponse: ResolverTypeWrapper<UpdateBodyTemperatureResponse>;
  updateBodyTemperatureUnion: ResolversTypes['updateBodyTemperatureResponse'] | ResolversTypes['updateBodyTemperatureError'];
  updateCaffeineError: ResolverTypeWrapper<UpdateCaffeineError>;
  updateCaffeineErrorErrorCodesType: UpdateCaffeineErrorErrorCodesType;
  updateCaffeineResponse: ResolverTypeWrapper<UpdateCaffeineResponse>;
  updateCaffeineUnion: ResolversTypes['updateCaffeineResponse'] | ResolversTypes['updateCaffeineError'];
  updateCbcError: ResolverTypeWrapper<UpdateCbcError>;
  updateCbcErrorErrorCodesType: UpdateCbcErrorErrorCodesType;
  updateCbcResponse: ResolverTypeWrapper<UpdateCbcResponse>;
  updateCbcUnion: ResolversTypes['updateCbcResponse'] | ResolversTypes['updateCbcError'];
  updateCollectionError: ResolverTypeWrapper<UpdateCollectionError>;
  updateCollectionErrorErrorCodesType: UpdateCollectionErrorErrorCodesType;
  updateCollectionResponse: ResolverTypeWrapper<UpdateCollectionResponse>;
  updateCollectionUnion: ResolversTypes['updateCollectionResponse'] | ResolversTypes['updateCollectionError'];
  updateDrivingScoreError: ResolverTypeWrapper<UpdateDrivingScoreError>;
  updateDrivingScoreErrorErrorCodesType: UpdateDrivingScoreErrorErrorCodesType;
  updateDrivingScoreResponse: ResolverTypeWrapper<UpdateDrivingScoreResponse>;
  updateDrivingScoreUnion: ResolversTypes['updateDrivingScoreResponse'] | ResolversTypes['updateDrivingScoreError'];
  updateFlightsClimbedError: ResolverTypeWrapper<UpdateFlightsClimbedError>;
  updateFlightsClimbedErrorErrorCodesType: UpdateFlightsClimbedErrorErrorCodesType;
  updateFlightsClimbedResponse: ResolverTypeWrapper<UpdateFlightsClimbedResponse>;
  updateFlightsClimbedUnion: ResolversTypes['updateFlightsClimbedResponse'] | ResolversTypes['updateFlightsClimbedError'];
  updateHeartRateError: ResolverTypeWrapper<UpdateHeartRateError>;
  updateHeartRateErrorErrorCodesType: UpdateHeartRateErrorErrorCodesType;
  updateHeartRateResponse: ResolverTypeWrapper<UpdateHeartRateResponse>;
  updateHeartRateUnion: ResolversTypes['updateHeartRateResponse'] | ResolversTypes['updateHeartRateError'];
  updateHeartRateVariabilityError: ResolverTypeWrapper<UpdateHeartRateVariabilityError>;
  updateHeartRateVariabilityErrorErrorCodesType: UpdateHeartRateVariabilityErrorErrorCodesType;
  updateHeartRateVariabilityResponse: ResolverTypeWrapper<UpdateHeartRateVariabilityResponse>;
  updateHeartRateVariabilityUnion: ResolversTypes['updateHeartRateVariabilityResponse'] | ResolversTypes['updateHeartRateVariabilityError'];
  updateHeightError: ResolverTypeWrapper<UpdateHeightError>;
  updateHeightErrorErrorCodesType: UpdateHeightErrorErrorCodesType;
  updateHeightResponse: ResolverTypeWrapper<UpdateHeightResponse>;
  updateHeightUnion: ResolversTypes['updateHeightResponse'] | ResolversTypes['updateHeightError'];
  updateMigraineError: ResolverTypeWrapper<UpdateMigraineError>;
  updateMigraineErrorErrorCodesType: UpdateMigraineErrorErrorCodesType;
  updateMigraineResponse: ResolverTypeWrapper<UpdateMigraineResponse>;
  updateMigraineUnion: ResolversTypes['updateMigraineResponse'] | ResolversTypes['updateMigraineError'];
  updateOxygenSaturationError: ResolverTypeWrapper<UpdateOxygenSaturationError>;
  updateOxygenSaturationErrorErrorCodesType: UpdateOxygenSaturationErrorErrorCodesType;
  updateOxygenSaturationResponse: ResolverTypeWrapper<UpdateOxygenSaturationResponse>;
  updateOxygenSaturationUnion: ResolversTypes['updateOxygenSaturationResponse'] | ResolversTypes['updateOxygenSaturationError'];
  updatePlateletsError: ResolverTypeWrapper<UpdatePlateletsError>;
  updatePlateletsErrorErrorCodesType: UpdatePlateletsErrorErrorCodesType;
  updatePlateletsResponse: ResolverTypeWrapper<UpdatePlateletsResponse>;
  updatePlateletsUnion: ResolversTypes['updatePlateletsResponse'] | ResolversTypes['updatePlateletsError'];
  updateRefuelError: ResolverTypeWrapper<UpdateRefuelError>;
  updateRefuelErrorErrorCodesType: UpdateRefuelErrorErrorCodesType;
  updateRefuelResponse: ResolverTypeWrapper<UpdateRefuelResponse>;
  updateRefuelUnion: ResolversTypes['updateRefuelResponse'] | ResolversTypes['updateRefuelError'];
  updateRestingEnergyError: ResolverTypeWrapper<UpdateRestingEnergyError>;
  updateRestingEnergyErrorErrorCodesType: UpdateRestingEnergyErrorErrorCodesType;
  updateRestingEnergyResponse: ResolverTypeWrapper<UpdateRestingEnergyResponse>;
  updateRestingEnergyUnion: ResolversTypes['updateRestingEnergyResponse'] | ResolversTypes['updateRestingEnergyError'];
  updateRestingHeartRateError: ResolverTypeWrapper<UpdateRestingHeartRateError>;
  updateRestingHeartRateErrorErrorCodesType: UpdateRestingHeartRateErrorErrorCodesType;
  updateRestingHeartRateResponse: ResolverTypeWrapper<UpdateRestingHeartRateResponse>;
  updateRestingHeartRateUnion: ResolversTypes['updateRestingHeartRateResponse'] | ResolversTypes['updateRestingHeartRateError'];
  updateSleepAnalysisError: ResolverTypeWrapper<UpdateSleepAnalysisError>;
  updateSleepAnalysisErrorErrorCodesType: UpdateSleepAnalysisErrorErrorCodesType;
  updateSleepAnalysisResponse: ResolverTypeWrapper<UpdateSleepAnalysisResponse>;
  updateSleepAnalysisUnion: ResolversTypes['updateSleepAnalysisResponse'] | ResolversTypes['updateSleepAnalysisError'];
  updateSteinError: ResolverTypeWrapper<UpdateSteinError>;
  updateSteinErrorErrorCodesType: UpdateSteinErrorErrorCodesType;
  updateSteinResponse: ResolverTypeWrapper<UpdateSteinResponse>;
  updateSteinUnion: ResolversTypes['updateSteinResponse'] | ResolversTypes['updateSteinError'];
  updateStepError: ResolverTypeWrapper<UpdateStepError>;
  updateStepErrorErrorCodesType: UpdateStepErrorErrorCodesType;
  updateStepResponse: ResolverTypeWrapper<UpdateStepResponse>;
  updateStepUnion: ResolversTypes['updateStepResponse'] | ResolversTypes['updateStepError'];
  updateSwimmingDistanceError: ResolverTypeWrapper<UpdateSwimmingDistanceError>;
  updateSwimmingDistanceErrorErrorCodesType: UpdateSwimmingDistanceErrorErrorCodesType;
  updateSwimmingDistanceResponse: ResolverTypeWrapper<UpdateSwimmingDistanceResponse>;
  updateSwimmingDistanceUnion: ResolversTypes['updateSwimmingDistanceResponse'] | ResolversTypes['updateSwimmingDistanceError'];
  updateWaistCircumferenceError: ResolverTypeWrapper<UpdateWaistCircumferenceError>;
  updateWaistCircumferenceErrorErrorCodesType: UpdateWaistCircumferenceErrorErrorCodesType;
  updateWaistCircumferenceResponse: ResolverTypeWrapper<UpdateWaistCircumferenceResponse>;
  updateWaistCircumferenceUnion: ResolversTypes['updateWaistCircumferenceResponse'] | ResolversTypes['updateWaistCircumferenceError'];
  updateWalkingHeartRateAverageError: ResolverTypeWrapper<UpdateWalkingHeartRateAverageError>;
  updateWalkingHeartRateAverageErrorErrorCodesType: UpdateWalkingHeartRateAverageErrorErrorCodesType;
  updateWalkingHeartRateAverageResponse: ResolverTypeWrapper<UpdateWalkingHeartRateAverageResponse>;
  updateWalkingHeartRateAverageUnion: ResolversTypes['updateWalkingHeartRateAverageResponse'] | ResolversTypes['updateWalkingHeartRateAverageError'];
  updateWalkingRunningDistanceError: ResolverTypeWrapper<UpdateWalkingRunningDistanceError>;
  updateWalkingRunningDistanceErrorErrorCodesType: UpdateWalkingRunningDistanceErrorErrorCodesType;
  updateWalkingRunningDistanceResponse: ResolverTypeWrapper<UpdateWalkingRunningDistanceResponse>;
  updateWalkingRunningDistanceUnion: ResolversTypes['updateWalkingRunningDistanceResponse'] | ResolversTypes['updateWalkingRunningDistanceError'];
  updateWeightError: ResolverTypeWrapper<UpdateWeightError>;
  updateWeightErrorErrorCodesType: UpdateWeightErrorErrorCodesType;
  updateWeightResponse: ResolverTypeWrapper<UpdateWeightResponse>;
  updateWeightUnion: ResolversTypes['updateWeightResponse'] | ResolversTypes['updateWeightError'];
  waistCircumferenceAllError: ResolverTypeWrapper<WaistCircumferenceAllError>;
  waistCircumferenceAllErrorErrorCodesType: WaistCircumferenceAllErrorErrorCodesType;
  waistCircumferenceAllResponse: ResolverTypeWrapper<WaistCircumferenceAllResponse>;
  waistCircumferenceAllUnion: ResolversTypes['waistCircumferenceAllResponse'] | ResolversTypes['waistCircumferenceAllError'];
  waistCircumferenceError: ResolverTypeWrapper<WaistCircumferenceError>;
  waistCircumferenceErrorErrorCodesType: WaistCircumferenceErrorErrorCodesType;
  waistCircumferenceResponse: ResolverTypeWrapper<WaistCircumferenceResponse>;
  waistCircumferenceUnion: ResolversTypes['waistCircumferenceResponse'] | ResolversTypes['waistCircumferenceError'];
  walkingHeartrateAverageAllError: ResolverTypeWrapper<WalkingHeartrateAverageAllError>;
  walkingHeartrateAverageAllErrorErrorCodesType: WalkingHeartrateAverageAllErrorErrorCodesType;
  walkingHeartrateAverageAllResponse: ResolverTypeWrapper<WalkingHeartrateAverageAllResponse>;
  walkingHeartrateAverageAllUnion: ResolversTypes['walkingHeartrateAverageAllResponse'] | ResolversTypes['walkingHeartrateAverageAllError'];
  walkingHeartrateAverageError: ResolverTypeWrapper<WalkingHeartrateAverageError>;
  walkingHeartrateAverageErrorErrorCodesType: WalkingHeartrateAverageErrorErrorCodesType;
  walkingHeartrateAverageResponse: ResolverTypeWrapper<WalkingHeartrateAverageResponse>;
  walkingHeartrateAverageUnion: ResolversTypes['walkingHeartrateAverageResponse'] | ResolversTypes['walkingHeartrateAverageError'];
  walkingRunningDistanceAllError: ResolverTypeWrapper<WalkingRunningDistanceAllError>;
  walkingRunningDistanceAllErrorErrorCodesType: WalkingRunningDistanceAllErrorErrorCodesType;
  walkingRunningDistanceAllResponse: ResolverTypeWrapper<WalkingRunningDistanceAllResponse>;
  walkingRunningDistanceAllUnion: ResolversTypes['walkingRunningDistanceAllResponse'] | ResolversTypes['walkingRunningDistanceAllError'];
  walkingRunningDistanceError: ResolverTypeWrapper<WalkingRunningDistanceError>;
  walkingRunningDistanceErrorErrorCodesType: WalkingRunningDistanceErrorErrorCodesType;
  walkingRunningDistanceResponse: ResolverTypeWrapper<WalkingRunningDistanceResponse>;
  walkingRunningDistanceUnion: ResolversTypes['walkingRunningDistanceResponse'] | ResolversTypes['walkingRunningDistanceError'];
  weightAllError: ResolverTypeWrapper<WeightAllError>;
  weightAllErrorErrorCodesType: WeightAllErrorErrorCodesType;
  weightAllResponse: ResolverTypeWrapper<WeightAllResponse>;
  weightAllUnion: ResolversTypes['weightAllResponse'] | ResolversTypes['weightAllError'];
  weightError: ResolverTypeWrapper<WeightError>;
  weightErrorErrorCodesType: WeightErrorErrorCodesType;
  weightResponse: ResolverTypeWrapper<WeightResponse>;
  weightUnion: ResolversTypes['weightResponse'] | ResolversTypes['weightError'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActivityInputType: ActivityInputType;
  Float: Scalars['Float'];
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  ActivityInputUpdateType: ActivityInputUpdateType;
  ActivityType: ActivityType;
  AverageMPGInputType: AverageMpgInputType;
  AverageMPGInputUpdateType: AverageMpgInputUpdateType;
  AverageMPGType: AverageMpgType;
  BloodPressureInputType: BloodPressureInputType;
  BloodPressureInputUpdateType: BloodPressureInputUpdateType;
  BloodPressureType: BloodPressureType;
  CbcInputType: CbcInputType;
  CbcInputUpdateType: CbcInputUpdateType;
  CbcType: CbcType;
  CollectionInputIncrementType: CollectionInputIncrementType;
  Int: Scalars['Int'];
  CollectionInputType: CollectionInputType;
  CollectionInputUpdateType: CollectionInputUpdateType;
  CollectionType: CollectionType;
  CollectionsAllError: CollectionsAllError;
  CollectionsAllResponse: CollectionsAllResponse;
  CollectionsAllUnion: ResolversParentTypes['CollectionsAllResponse'] | ResolversParentTypes['CollectionsAllError'];
  CollectionsError: CollectionsError;
  CollectionsResponse: CollectionsResponse;
  CollectionsUnion: ResolversParentTypes['CollectionsResponse'] | ResolversParentTypes['CollectionsError'];
  Date: Scalars['Date'];
  DeleteType: DeleteType;
  DrivingScoreInputType: DrivingScoreInputType;
  DrivingScoreInputUpdateType: DrivingScoreInputUpdateType;
  DrivingScoreType: DrivingScoreType;
  HealthInputType: HealthInputType;
  HealthInputUpdateType: HealthInputUpdateType;
  HealthKitInputSampleType: HealthKitInputSampleType;
  HealthKitInputType: HealthKitInputType;
  HealthKitInputUpdateType: HealthKitInputUpdateType;
  HealthKitType: HealthKitType;
  HealthKitUnionType: ResolversParentTypes['HealthKitType'] | ResolversParentTypes['BloodPressureType'];
  HealthType: HealthType;
  MigraineInputType: MigraineInputType;
  MigraineInputUpdateType: MigraineInputUpdateType;
  MigraineType: MigraineType;
  Mutation: {};
  ID: Scalars['ID'];
  PlateletInputType: PlateletInputType;
  PlateletInputUpdateType: PlateletInputUpdateType;
  PlateletType: PlateletType;
  RefuelInputType: RefuelInputType;
  RefuelInputUpdateType: RefuelInputUpdateType;
  RefuelType: RefuelType;
  RootQueryType: {};
  SteinsAllError: SteinsAllError;
  SteinsAllResponse: SteinsAllResponse;
  SteinsAllUnion: ResolversParentTypes['SteinsAllResponse'] | ResolversParentTypes['SteinsAllError'];
  SteinsError: SteinsError;
  SteinsResponse: SteinsResponse;
  SteinsUnion: ResolversParentTypes['SteinsResponse'] | ResolversParentTypes['SteinsError'];
  activeEnergyAllError: ActiveEnergyAllError;
  activeEnergyAllResponse: ActiveEnergyAllResponse;
  activeEnergyAllUnion: ResolversParentTypes['activeEnergyAllResponse'] | ResolversParentTypes['activeEnergyAllError'];
  activeEnergyError: ActiveEnergyError;
  activeEnergyResponse: ActiveEnergyResponse;
  activeEnergyUnion: ResolversParentTypes['activeEnergyResponse'] | ResolversParentTypes['activeEnergyError'];
  activityAllError: ActivityAllError;
  activityAllResponse: ActivityAllResponse;
  activityAllUnion: ResolversParentTypes['activityAllResponse'] | ResolversParentTypes['activityAllError'];
  activityError: ActivityError;
  activityResponse: ActivityResponse;
  activityUnion: ResolversParentTypes['activityResponse'] | ResolversParentTypes['activityError'];
  addActiveEnergyError: AddActiveEnergyError;
  addActiveEnergyResponse: AddActiveEnergyResponse;
  addActiveEnergyUnion: ResolversParentTypes['addActiveEnergyResponse'] | ResolversParentTypes['addActiveEnergyError'];
  addActivityError: AddActivityError;
  addActivityResponse: AddActivityResponse;
  addActivityUnion: ResolversParentTypes['addActivityResponse'] | ResolversParentTypes['addActivityError'];
  addAnxietyError: AddAnxietyError;
  addAnxietyResponse: AddAnxietyResponse;
  addAnxietyUnion: ResolversParentTypes['addAnxietyResponse'] | ResolversParentTypes['addAnxietyError'];
  addAverageMPGError: AddAverageMpgError;
  addAverageMPGResponse: AddAverageMpgResponse;
  addAverageMPGUnion: ResolversParentTypes['addAverageMPGResponse'] | ResolversParentTypes['addAverageMPGError'];
  addBloodPressureError: AddBloodPressureError;
  addBloodPressureResponse: AddBloodPressureResponse;
  addBloodPressureUnion: ResolversParentTypes['addBloodPressureResponse'] | ResolversParentTypes['addBloodPressureError'];
  addBodyTemperatureError: AddBodyTemperatureError;
  addBodyTemperatureResponse: AddBodyTemperatureResponse;
  addBodyTemperatureUnion: ResolversParentTypes['addBodyTemperatureResponse'] | ResolversParentTypes['addBodyTemperatureError'];
  addCaffeineError: AddCaffeineError;
  addCaffeineResponse: AddCaffeineResponse;
  addCaffeineUnion: ResolversParentTypes['addCaffeineResponse'] | ResolversParentTypes['addCaffeineError'];
  addCbcError: AddCbcError;
  addCbcResponse: AddCbcResponse;
  addCbcUnion: ResolversParentTypes['addCbcResponse'] | ResolversParentTypes['addCbcError'];
  addCollectionError: AddCollectionError;
  addCollectionResponse: AddCollectionResponse;
  addCollectionUnion: ResolversParentTypes['addCollectionResponse'] | ResolversParentTypes['addCollectionError'];
  addDrivingScoreError: AddDrivingScoreError;
  addDrivingScoreResponse: AddDrivingScoreResponse;
  addDrivingScoreUnion: ResolversParentTypes['addDrivingScoreResponse'] | ResolversParentTypes['addDrivingScoreError'];
  addFlightsClimbedError: AddFlightsClimbedError;
  addFlightsClimbedResponse: AddFlightsClimbedResponse;
  addFlightsClimbedUnion: ResolversParentTypes['addFlightsClimbedResponse'] | ResolversParentTypes['addFlightsClimbedError'];
  addHealthKitError: AddHealthKitError;
  addHealthKitResponse: Omit<AddHealthKitResponse, 'response'> & { response?: Maybe<Array<Maybe<ResolversParentTypes['HealthKitUnionType']>>> };
  addHealthKitUnion: ResolversParentTypes['addHealthKitResponse'] | ResolversParentTypes['addHealthKitError'];
  addHeartRateError: AddHeartRateError;
  addHeartRateResponse: AddHeartRateResponse;
  addHeartRateUnion: ResolversParentTypes['addHeartRateResponse'] | ResolversParentTypes['addHeartRateError'];
  addHeartRateVariabilityError: AddHeartRateVariabilityError;
  addHeartRateVariabilityResponse: AddHeartRateVariabilityResponse;
  addHeartRateVariabilityUnion: ResolversParentTypes['addHeartRateVariabilityResponse'] | ResolversParentTypes['addHeartRateVariabilityError'];
  addHeightError: AddHeightError;
  addHeightResponse: AddHeightResponse;
  addHeightUnion: ResolversParentTypes['addHeightResponse'] | ResolversParentTypes['addHeightError'];
  addMigraineError: AddMigraineError;
  addMigraineResponse: AddMigraineResponse;
  addMigraineUnion: ResolversParentTypes['addMigraineResponse'] | ResolversParentTypes['addMigraineError'];
  addOxygenSaturationError: AddOxygenSaturationError;
  addOxygenSaturationResponse: AddOxygenSaturationResponse;
  addOxygenSaturationUnion: ResolversParentTypes['addOxygenSaturationResponse'] | ResolversParentTypes['addOxygenSaturationError'];
  addPlateletsError: AddPlateletsError;
  addPlateletsResponse: AddPlateletsResponse;
  addPlateletsUnion: ResolversParentTypes['addPlateletsResponse'] | ResolversParentTypes['addPlateletsError'];
  addRefuelError: AddRefuelError;
  addRefuelResponse: AddRefuelResponse;
  addRefuelUnion: ResolversParentTypes['addRefuelResponse'] | ResolversParentTypes['addRefuelError'];
  addRestingEnergyError: AddRestingEnergyError;
  addRestingEnergyResponse: AddRestingEnergyResponse;
  addRestingEnergyUnion: ResolversParentTypes['addRestingEnergyResponse'] | ResolversParentTypes['addRestingEnergyError'];
  addRestingHeartRateError: AddRestingHeartRateError;
  addRestingHeartRateResponse: AddRestingHeartRateResponse;
  addRestingHeartRateUnion: ResolversParentTypes['addRestingHeartRateResponse'] | ResolversParentTypes['addRestingHeartRateError'];
  addSleepAnalysisError: AddSleepAnalysisError;
  addSleepAnalysisResponse: AddSleepAnalysisResponse;
  addSleepAnalysisUnion: ResolversParentTypes['addSleepAnalysisResponse'] | ResolversParentTypes['addSleepAnalysisError'];
  addSteinError: AddSteinError;
  addSteinResponse: AddSteinResponse;
  addSteinUnion: ResolversParentTypes['addSteinResponse'] | ResolversParentTypes['addSteinError'];
  addStepError: AddStepError;
  addStepResponse: AddStepResponse;
  addStepUnion: ResolversParentTypes['addStepResponse'] | ResolversParentTypes['addStepError'];
  addSwimmingDistanceError: AddSwimmingDistanceError;
  addSwimmingDistanceResponse: AddSwimmingDistanceResponse;
  addSwimmingDistanceUnion: ResolversParentTypes['addSwimmingDistanceResponse'] | ResolversParentTypes['addSwimmingDistanceError'];
  addWaistCircumferenceError: AddWaistCircumferenceError;
  addWaistCircumferenceResponse: AddWaistCircumferenceResponse;
  addWaistCircumferenceUnion: ResolversParentTypes['addWaistCircumferenceResponse'] | ResolversParentTypes['addWaistCircumferenceError'];
  addWalkingHeartRateAverageError: AddWalkingHeartRateAverageError;
  addWalkingHeartRateAverageResponse: AddWalkingHeartRateAverageResponse;
  addWalkingHeartRateAverageUnion: ResolversParentTypes['addWalkingHeartRateAverageResponse'] | ResolversParentTypes['addWalkingHeartRateAverageError'];
  addWalkingRunningDistanceError: AddWalkingRunningDistanceError;
  addWalkingRunningDistanceResponse: AddWalkingRunningDistanceResponse;
  addWalkingRunningDistanceUnion: ResolversParentTypes['addWalkingRunningDistanceResponse'] | ResolversParentTypes['addWalkingRunningDistanceError'];
  addWeightError: AddWeightError;
  addWeightResponse: AddWeightResponse;
  addWeightUnion: ResolversParentTypes['addWeightResponse'] | ResolversParentTypes['addWeightError'];
  anxietyAllError: AnxietyAllError;
  anxietyAllResponse: AnxietyAllResponse;
  anxietyAllUnion: ResolversParentTypes['anxietyAllResponse'] | ResolversParentTypes['anxietyAllError'];
  anxietyError: AnxietyError;
  anxietyResponse: AnxietyResponse;
  anxietyUnion: ResolversParentTypes['anxietyResponse'] | ResolversParentTypes['anxietyError'];
  averageMPGAllError: AverageMpgAllError;
  averageMPGAllResponse: AverageMpgAllResponse;
  averageMPGAllUnion: ResolversParentTypes['averageMPGAllResponse'] | ResolversParentTypes['averageMPGAllError'];
  averageMPGError: AverageMpgError;
  averageMPGResponse: AverageMpgResponse;
  averageMPGUnion: ResolversParentTypes['averageMPGResponse'] | ResolversParentTypes['averageMPGError'];
  bloodPressureAllError: BloodPressureAllError;
  bloodPressureAllResponse: BloodPressureAllResponse;
  bloodPressureAllUnion: ResolversParentTypes['bloodPressureAllResponse'] | ResolversParentTypes['bloodPressureAllError'];
  bloodPressureError: BloodPressureError;
  bloodPressureResponse: BloodPressureResponse;
  bloodPressureUnion: ResolversParentTypes['bloodPressureResponse'] | ResolversParentTypes['bloodPressureError'];
  bodyTemperatureAllError: BodyTemperatureAllError;
  bodyTemperatureAllResponse: BodyTemperatureAllResponse;
  bodyTemperatureAllUnion: ResolversParentTypes['bodyTemperatureAllResponse'] | ResolversParentTypes['bodyTemperatureAllError'];
  bodyTemperatureError: BodyTemperatureError;
  bodyTemperatureResponse: BodyTemperatureResponse;
  bodyTemperatureUnion: ResolversParentTypes['bodyTemperatureResponse'] | ResolversParentTypes['bodyTemperatureError'];
  caffeineAllError: CaffeineAllError;
  caffeineAllResponse: CaffeineAllResponse;
  caffeineAllUnion: ResolversParentTypes['caffeineAllResponse'] | ResolversParentTypes['caffeineAllError'];
  caffeineError: CaffeineError;
  caffeineResponse: CaffeineResponse;
  caffeineUnion: ResolversParentTypes['caffeineResponse'] | ResolversParentTypes['caffeineError'];
  cbcAllError: CbcAllError;
  cbcAllResponse: CbcAllResponse;
  cbcAllUnion: ResolversParentTypes['cbcAllResponse'] | ResolversParentTypes['cbcAllError'];
  cbcError: CbcError;
  cbcResponse: CbcResponse;
  cbcUnion: ResolversParentTypes['cbcResponse'] | ResolversParentTypes['cbcError'];
  deleteActiveEnergyError: DeleteActiveEnergyError;
  deleteActiveEnergyResponse: DeleteActiveEnergyResponse;
  deleteActiveEnergyUnion: ResolversParentTypes['deleteActiveEnergyResponse'] | ResolversParentTypes['deleteActiveEnergyError'];
  deleteActivityError: DeleteActivityError;
  deleteActivityResponse: DeleteActivityResponse;
  deleteActivityUnion: ResolversParentTypes['deleteActivityResponse'] | ResolversParentTypes['deleteActivityError'];
  deleteAnxietyError: DeleteAnxietyError;
  deleteAnxietyResponse: DeleteAnxietyResponse;
  deleteAnxietyUnion: ResolversParentTypes['deleteAnxietyResponse'] | ResolversParentTypes['deleteAnxietyError'];
  deleteAverageMPGError: DeleteAverageMpgError;
  deleteAverageMPGResponse: DeleteAverageMpgResponse;
  deleteAverageMPGUnion: ResolversParentTypes['deleteAverageMPGResponse'] | ResolversParentTypes['deleteAverageMPGError'];
  deleteBloodPressureError: DeleteBloodPressureError;
  deleteBloodPressureResponse: DeleteBloodPressureResponse;
  deleteBloodPressureUnion: ResolversParentTypes['deleteBloodPressureResponse'] | ResolversParentTypes['deleteBloodPressureError'];
  deleteBodyTemperatureError: DeleteBodyTemperatureError;
  deleteBodyTemperatureResponse: DeleteBodyTemperatureResponse;
  deleteBodyTemperatureUnion: ResolversParentTypes['deleteBodyTemperatureResponse'] | ResolversParentTypes['deleteBodyTemperatureError'];
  deleteCbcError: DeleteCbcError;
  deleteCbcResponse: DeleteCbcResponse;
  deleteCbcUnion: ResolversParentTypes['deleteCbcResponse'] | ResolversParentTypes['deleteCbcError'];
  deleteCollectionError: DeleteCollectionError;
  deleteCollectionResponse: DeleteCollectionResponse;
  deleteCollectionUnion: ResolversParentTypes['deleteCollectionResponse'] | ResolversParentTypes['deleteCollectionError'];
  deleteDrivingScoreError: DeleteDrivingScoreError;
  deleteDrivingScoreResponse: DeleteDrivingScoreResponse;
  deleteDrivingScoreUnion: ResolversParentTypes['deleteDrivingScoreResponse'] | ResolversParentTypes['deleteDrivingScoreError'];
  deleteFlightsClimbedError: DeleteFlightsClimbedError;
  deleteFlightsClimbedResponse: DeleteFlightsClimbedResponse;
  deleteFlightsClimbedUnion: ResolversParentTypes['deleteFlightsClimbedResponse'] | ResolversParentTypes['deleteFlightsClimbedError'];
  deleteHeartRateError: DeleteHeartRateError;
  deleteHeartRateResponse: DeleteHeartRateResponse;
  deleteHeartRateUnion: ResolversParentTypes['deleteHeartRateResponse'] | ResolversParentTypes['deleteHeartRateError'];
  deleteHeartRateVariabilityError: DeleteHeartRateVariabilityError;
  deleteHeartRateVariabilityResponse: DeleteHeartRateVariabilityResponse;
  deleteHeartRateVariabilityUnion: ResolversParentTypes['deleteHeartRateVariabilityResponse'] | ResolversParentTypes['deleteHeartRateVariabilityError'];
  deleteHeightError: DeleteHeightError;
  deleteHeightResponse: DeleteHeightResponse;
  deleteHeightUnion: ResolversParentTypes['deleteHeightResponse'] | ResolversParentTypes['deleteHeightError'];
  deleteMigraineError: DeleteMigraineError;
  deleteMigraineResponse: DeleteMigraineResponse;
  deleteMigraineUnion: ResolversParentTypes['deleteMigraineResponse'] | ResolversParentTypes['deleteMigraineError'];
  deleteOxygenSaturationError: DeleteOxygenSaturationError;
  deleteOxygenSaturationResponse: DeleteOxygenSaturationResponse;
  deleteOxygenSaturationUnion: ResolversParentTypes['deleteOxygenSaturationResponse'] | ResolversParentTypes['deleteOxygenSaturationError'];
  deletePlateletsError: DeletePlateletsError;
  deletePlateletsResponse: DeletePlateletsResponse;
  deletePlateletsUnion: ResolversParentTypes['deletePlateletsResponse'] | ResolversParentTypes['deletePlateletsError'];
  deleteRefuelError: DeleteRefuelError;
  deleteRefuelResponse: DeleteRefuelResponse;
  deleteRefuelUnion: ResolversParentTypes['deleteRefuelResponse'] | ResolversParentTypes['deleteRefuelError'];
  deleteRestingEnergyError: DeleteRestingEnergyError;
  deleteRestingEnergyResponse: DeleteRestingEnergyResponse;
  deleteRestingEnergyUnion: ResolversParentTypes['deleteRestingEnergyResponse'] | ResolversParentTypes['deleteRestingEnergyError'];
  deleteRestingHeartRateError: DeleteRestingHeartRateError;
  deleteRestingHeartRateResponse: DeleteRestingHeartRateResponse;
  deleteRestingHeartRateUnion: ResolversParentTypes['deleteRestingHeartRateResponse'] | ResolversParentTypes['deleteRestingHeartRateError'];
  deleteSteinError: DeleteSteinError;
  deleteSteinResponse: DeleteSteinResponse;
  deleteSteinUnion: ResolversParentTypes['deleteSteinResponse'] | ResolversParentTypes['deleteSteinError'];
  deleteStepError: DeleteStepError;
  deleteStepResponse: DeleteStepResponse;
  deleteStepUnion: ResolversParentTypes['deleteStepResponse'] | ResolversParentTypes['deleteStepError'];
  deleteWaistCircumferenceError: DeleteWaistCircumferenceError;
  deleteWaistCircumferenceResponse: DeleteWaistCircumferenceResponse;
  deleteWaistCircumferenceUnion: ResolversParentTypes['deleteWaistCircumferenceResponse'] | ResolversParentTypes['deleteWaistCircumferenceError'];
  deleteWalkingHeartRateAverageError: DeleteWalkingHeartRateAverageError;
  deleteWalkingHeartRateAverageResponse: DeleteWalkingHeartRateAverageResponse;
  deleteWalkingHeartRateAverageUnion: ResolversParentTypes['deleteWalkingHeartRateAverageResponse'] | ResolversParentTypes['deleteWalkingHeartRateAverageError'];
  deleteWalkingRunningDistanceError: DeleteWalkingRunningDistanceError;
  deleteWalkingRunningDistanceResponse: DeleteWalkingRunningDistanceResponse;
  deleteWalkingRunningDistanceUnion: ResolversParentTypes['deleteWalkingRunningDistanceResponse'] | ResolversParentTypes['deleteWalkingRunningDistanceError'];
  deleteWeightError: DeleteWeightError;
  deleteWeightResponse: DeleteWeightResponse;
  deleteWeightUnion: ResolversParentTypes['deleteWeightResponse'] | ResolversParentTypes['deleteWeightError'];
  drivingScoreAllError: DrivingScoreAllError;
  drivingScoreAllResponse: DrivingScoreAllResponse;
  drivingScoreAllUnion: ResolversParentTypes['drivingScoreAllResponse'] | ResolversParentTypes['drivingScoreAllError'];
  drivingScoreError: DrivingScoreError;
  drivingScoreResponse: DrivingScoreResponse;
  drivingScoreUnion: ResolversParentTypes['drivingScoreResponse'] | ResolversParentTypes['drivingScoreError'];
  flightsClimbedAllError: FlightsClimbedAllError;
  flightsClimbedAllResponse: FlightsClimbedAllResponse;
  flightsClimbedAllUnion: ResolversParentTypes['flightsClimbedAllResponse'] | ResolversParentTypes['flightsClimbedAllError'];
  flightsClimbedError: FlightsClimbedError;
  flightsClimbedResponse: FlightsClimbedResponse;
  flightsClimbedUnion: ResolversParentTypes['flightsClimbedResponse'] | ResolversParentTypes['flightsClimbedError'];
  heartrateAllError: HeartrateAllError;
  heartrateAllResponse: HeartrateAllResponse;
  heartrateAllUnion: ResolversParentTypes['heartrateAllResponse'] | ResolversParentTypes['heartrateAllError'];
  heartrateError: HeartrateError;
  heartrateResponse: HeartrateResponse;
  heartrateUnion: ResolversParentTypes['heartrateResponse'] | ResolversParentTypes['heartrateError'];
  heartrateVariabilityAllError: HeartrateVariabilityAllError;
  heartrateVariabilityAllResponse: HeartrateVariabilityAllResponse;
  heartrateVariabilityAllUnion: ResolversParentTypes['heartrateVariabilityAllResponse'] | ResolversParentTypes['heartrateVariabilityAllError'];
  heartrateVariabilityError: HeartrateVariabilityError;
  heartrateVariabilityResponse: HeartrateVariabilityResponse;
  heartrateVariabilityUnion: ResolversParentTypes['heartrateVariabilityResponse'] | ResolversParentTypes['heartrateVariabilityError'];
  heightAllError: HeightAllError;
  heightAllResponse: HeightAllResponse;
  heightAllUnion: ResolversParentTypes['heightAllResponse'] | ResolversParentTypes['heightAllError'];
  heightError: HeightError;
  heightResponse: HeightResponse;
  heightUnion: ResolversParentTypes['heightResponse'] | ResolversParentTypes['heightError'];
  incrementCollectionError: IncrementCollectionError;
  incrementCollectionResponse: IncrementCollectionResponse;
  incrementCollectionUnion: ResolversParentTypes['incrementCollectionResponse'] | ResolversParentTypes['incrementCollectionError'];
  incrementSteinError: IncrementSteinError;
  incrementSteinResponse: IncrementSteinResponse;
  incrementSteinUnion: ResolversParentTypes['incrementSteinResponse'] | ResolversParentTypes['incrementSteinError'];
  migraineAllError: MigraineAllError;
  migraineAllResponse: MigraineAllResponse;
  migraineAllUnion: ResolversParentTypes['migraineAllResponse'] | ResolversParentTypes['migraineAllError'];
  migraineError: MigraineError;
  migraineResponse: MigraineResponse;
  migraineUnion: ResolversParentTypes['migraineResponse'] | ResolversParentTypes['migraineError'];
  oxygenSaturationAllError: OxygenSaturationAllError;
  oxygenSaturationAllResponse: OxygenSaturationAllResponse;
  oxygenSaturationAllUnion: ResolversParentTypes['oxygenSaturationAllResponse'] | ResolversParentTypes['oxygenSaturationAllError'];
  oxygenSaturationError: OxygenSaturationError;
  oxygenSaturationResponse: OxygenSaturationResponse;
  oxygenSaturationUnion: ResolversParentTypes['oxygenSaturationResponse'] | ResolversParentTypes['oxygenSaturationError'];
  plateletsAllError: PlateletsAllError;
  plateletsAllResponse: PlateletsAllResponse;
  plateletsAllUnion: ResolversParentTypes['plateletsAllResponse'] | ResolversParentTypes['plateletsAllError'];
  plateletsError: PlateletsError;
  plateletsResponse: PlateletsResponse;
  plateletsUnion: ResolversParentTypes['plateletsResponse'] | ResolversParentTypes['plateletsError'];
  refuelAllError: RefuelAllError;
  refuelAllResponse: RefuelAllResponse;
  refuelAllUnion: ResolversParentTypes['refuelAllResponse'] | ResolversParentTypes['refuelAllError'];
  refuelError: RefuelError;
  refuelResponse: RefuelResponse;
  refuelUnion: ResolversParentTypes['refuelResponse'] | ResolversParentTypes['refuelError'];
  restingEnergyAllError: RestingEnergyAllError;
  restingEnergyAllResponse: RestingEnergyAllResponse;
  restingEnergyAllUnion: ResolversParentTypes['restingEnergyAllResponse'] | ResolversParentTypes['restingEnergyAllError'];
  restingEnergyError: RestingEnergyError;
  restingEnergyResponse: RestingEnergyResponse;
  restingEnergyUnion: ResolversParentTypes['restingEnergyResponse'] | ResolversParentTypes['restingEnergyError'];
  restingHeartrateAllError: RestingHeartrateAllError;
  restingHeartrateAllResponse: RestingHeartrateAllResponse;
  restingHeartrateAllUnion: ResolversParentTypes['restingHeartrateAllResponse'] | ResolversParentTypes['restingHeartrateAllError'];
  restingHeartrateError: RestingHeartrateError;
  restingHeartrateResponse: RestingHeartrateResponse;
  restingHeartrateUnion: ResolversParentTypes['restingHeartrateResponse'] | ResolversParentTypes['restingHeartrateError'];
  sleepAnalysisAllError: SleepAnalysisAllError;
  sleepAnalysisAllResponse: SleepAnalysisAllResponse;
  sleepAnalysisAllUnion: ResolversParentTypes['sleepAnalysisAllResponse'] | ResolversParentTypes['sleepAnalysisAllError'];
  sleepAnalysisError: SleepAnalysisError;
  sleepAnalysisResponse: SleepAnalysisResponse;
  sleepAnalysisUnion: ResolversParentTypes['sleepAnalysisResponse'] | ResolversParentTypes['sleepAnalysisError'];
  stepsAllError: StepsAllError;
  stepsAllResponse: StepsAllResponse;
  stepsAllUnion: ResolversParentTypes['stepsAllResponse'] | ResolversParentTypes['stepsAllError'];
  stepsError: StepsError;
  stepsResponse: StepsResponse;
  stepsUnion: ResolversParentTypes['stepsResponse'] | ResolversParentTypes['stepsError'];
  swimmingDistanceAllError: SwimmingDistanceAllError;
  swimmingDistanceAllResponse: SwimmingDistanceAllResponse;
  swimmingDistanceAllUnion: ResolversParentTypes['swimmingDistanceAllResponse'] | ResolversParentTypes['swimmingDistanceAllError'];
  swimmingDistanceError: SwimmingDistanceError;
  swimmingDistanceResponse: SwimmingDistanceResponse;
  swimmingDistanceUnion: ResolversParentTypes['swimmingDistanceResponse'] | ResolversParentTypes['swimmingDistanceError'];
  updateActiveEnergyError: UpdateActiveEnergyError;
  updateActiveEnergyResponse: UpdateActiveEnergyResponse;
  updateActiveEnergyUnion: ResolversParentTypes['updateActiveEnergyResponse'] | ResolversParentTypes['updateActiveEnergyError'];
  updateActivityError: UpdateActivityError;
  updateActivityResponse: UpdateActivityResponse;
  updateActivityUnion: ResolversParentTypes['updateActivityResponse'] | ResolversParentTypes['updateActivityError'];
  updateAnxietyError: UpdateAnxietyError;
  updateAnxietyResponse: UpdateAnxietyResponse;
  updateAnxietyUnion: ResolversParentTypes['updateAnxietyResponse'] | ResolversParentTypes['updateAnxietyError'];
  updateAverageMPGError: UpdateAverageMpgError;
  updateAverageMPGResponse: UpdateAverageMpgResponse;
  updateAverageMPGUnion: ResolversParentTypes['updateAverageMPGResponse'] | ResolversParentTypes['updateAverageMPGError'];
  updateBloodPressureError: UpdateBloodPressureError;
  updateBloodPressureResponse: UpdateBloodPressureResponse;
  updateBloodPressureUnion: ResolversParentTypes['updateBloodPressureResponse'] | ResolversParentTypes['updateBloodPressureError'];
  updateBodyTemperatureError: UpdateBodyTemperatureError;
  updateBodyTemperatureResponse: UpdateBodyTemperatureResponse;
  updateBodyTemperatureUnion: ResolversParentTypes['updateBodyTemperatureResponse'] | ResolversParentTypes['updateBodyTemperatureError'];
  updateCaffeineError: UpdateCaffeineError;
  updateCaffeineResponse: UpdateCaffeineResponse;
  updateCaffeineUnion: ResolversParentTypes['updateCaffeineResponse'] | ResolversParentTypes['updateCaffeineError'];
  updateCbcError: UpdateCbcError;
  updateCbcResponse: UpdateCbcResponse;
  updateCbcUnion: ResolversParentTypes['updateCbcResponse'] | ResolversParentTypes['updateCbcError'];
  updateCollectionError: UpdateCollectionError;
  updateCollectionResponse: UpdateCollectionResponse;
  updateCollectionUnion: ResolversParentTypes['updateCollectionResponse'] | ResolversParentTypes['updateCollectionError'];
  updateDrivingScoreError: UpdateDrivingScoreError;
  updateDrivingScoreResponse: UpdateDrivingScoreResponse;
  updateDrivingScoreUnion: ResolversParentTypes['updateDrivingScoreResponse'] | ResolversParentTypes['updateDrivingScoreError'];
  updateFlightsClimbedError: UpdateFlightsClimbedError;
  updateFlightsClimbedResponse: UpdateFlightsClimbedResponse;
  updateFlightsClimbedUnion: ResolversParentTypes['updateFlightsClimbedResponse'] | ResolversParentTypes['updateFlightsClimbedError'];
  updateHeartRateError: UpdateHeartRateError;
  updateHeartRateResponse: UpdateHeartRateResponse;
  updateHeartRateUnion: ResolversParentTypes['updateHeartRateResponse'] | ResolversParentTypes['updateHeartRateError'];
  updateHeartRateVariabilityError: UpdateHeartRateVariabilityError;
  updateHeartRateVariabilityResponse: UpdateHeartRateVariabilityResponse;
  updateHeartRateVariabilityUnion: ResolversParentTypes['updateHeartRateVariabilityResponse'] | ResolversParentTypes['updateHeartRateVariabilityError'];
  updateHeightError: UpdateHeightError;
  updateHeightResponse: UpdateHeightResponse;
  updateHeightUnion: ResolversParentTypes['updateHeightResponse'] | ResolversParentTypes['updateHeightError'];
  updateMigraineError: UpdateMigraineError;
  updateMigraineResponse: UpdateMigraineResponse;
  updateMigraineUnion: ResolversParentTypes['updateMigraineResponse'] | ResolversParentTypes['updateMigraineError'];
  updateOxygenSaturationError: UpdateOxygenSaturationError;
  updateOxygenSaturationResponse: UpdateOxygenSaturationResponse;
  updateOxygenSaturationUnion: ResolversParentTypes['updateOxygenSaturationResponse'] | ResolversParentTypes['updateOxygenSaturationError'];
  updatePlateletsError: UpdatePlateletsError;
  updatePlateletsResponse: UpdatePlateletsResponse;
  updatePlateletsUnion: ResolversParentTypes['updatePlateletsResponse'] | ResolversParentTypes['updatePlateletsError'];
  updateRefuelError: UpdateRefuelError;
  updateRefuelResponse: UpdateRefuelResponse;
  updateRefuelUnion: ResolversParentTypes['updateRefuelResponse'] | ResolversParentTypes['updateRefuelError'];
  updateRestingEnergyError: UpdateRestingEnergyError;
  updateRestingEnergyResponse: UpdateRestingEnergyResponse;
  updateRestingEnergyUnion: ResolversParentTypes['updateRestingEnergyResponse'] | ResolversParentTypes['updateRestingEnergyError'];
  updateRestingHeartRateError: UpdateRestingHeartRateError;
  updateRestingHeartRateResponse: UpdateRestingHeartRateResponse;
  updateRestingHeartRateUnion: ResolversParentTypes['updateRestingHeartRateResponse'] | ResolversParentTypes['updateRestingHeartRateError'];
  updateSleepAnalysisError: UpdateSleepAnalysisError;
  updateSleepAnalysisResponse: UpdateSleepAnalysisResponse;
  updateSleepAnalysisUnion: ResolversParentTypes['updateSleepAnalysisResponse'] | ResolversParentTypes['updateSleepAnalysisError'];
  updateSteinError: UpdateSteinError;
  updateSteinResponse: UpdateSteinResponse;
  updateSteinUnion: ResolversParentTypes['updateSteinResponse'] | ResolversParentTypes['updateSteinError'];
  updateStepError: UpdateStepError;
  updateStepResponse: UpdateStepResponse;
  updateStepUnion: ResolversParentTypes['updateStepResponse'] | ResolversParentTypes['updateStepError'];
  updateSwimmingDistanceError: UpdateSwimmingDistanceError;
  updateSwimmingDistanceResponse: UpdateSwimmingDistanceResponse;
  updateSwimmingDistanceUnion: ResolversParentTypes['updateSwimmingDistanceResponse'] | ResolversParentTypes['updateSwimmingDistanceError'];
  updateWaistCircumferenceError: UpdateWaistCircumferenceError;
  updateWaistCircumferenceResponse: UpdateWaistCircumferenceResponse;
  updateWaistCircumferenceUnion: ResolversParentTypes['updateWaistCircumferenceResponse'] | ResolversParentTypes['updateWaistCircumferenceError'];
  updateWalkingHeartRateAverageError: UpdateWalkingHeartRateAverageError;
  updateWalkingHeartRateAverageResponse: UpdateWalkingHeartRateAverageResponse;
  updateWalkingHeartRateAverageUnion: ResolversParentTypes['updateWalkingHeartRateAverageResponse'] | ResolversParentTypes['updateWalkingHeartRateAverageError'];
  updateWalkingRunningDistanceError: UpdateWalkingRunningDistanceError;
  updateWalkingRunningDistanceResponse: UpdateWalkingRunningDistanceResponse;
  updateWalkingRunningDistanceUnion: ResolversParentTypes['updateWalkingRunningDistanceResponse'] | ResolversParentTypes['updateWalkingRunningDistanceError'];
  updateWeightError: UpdateWeightError;
  updateWeightResponse: UpdateWeightResponse;
  updateWeightUnion: ResolversParentTypes['updateWeightResponse'] | ResolversParentTypes['updateWeightError'];
  waistCircumferenceAllError: WaistCircumferenceAllError;
  waistCircumferenceAllResponse: WaistCircumferenceAllResponse;
  waistCircumferenceAllUnion: ResolversParentTypes['waistCircumferenceAllResponse'] | ResolversParentTypes['waistCircumferenceAllError'];
  waistCircumferenceError: WaistCircumferenceError;
  waistCircumferenceResponse: WaistCircumferenceResponse;
  waistCircumferenceUnion: ResolversParentTypes['waistCircumferenceResponse'] | ResolversParentTypes['waistCircumferenceError'];
  walkingHeartrateAverageAllError: WalkingHeartrateAverageAllError;
  walkingHeartrateAverageAllResponse: WalkingHeartrateAverageAllResponse;
  walkingHeartrateAverageAllUnion: ResolversParentTypes['walkingHeartrateAverageAllResponse'] | ResolversParentTypes['walkingHeartrateAverageAllError'];
  walkingHeartrateAverageError: WalkingHeartrateAverageError;
  walkingHeartrateAverageResponse: WalkingHeartrateAverageResponse;
  walkingHeartrateAverageUnion: ResolversParentTypes['walkingHeartrateAverageResponse'] | ResolversParentTypes['walkingHeartrateAverageError'];
  walkingRunningDistanceAllError: WalkingRunningDistanceAllError;
  walkingRunningDistanceAllResponse: WalkingRunningDistanceAllResponse;
  walkingRunningDistanceAllUnion: ResolversParentTypes['walkingRunningDistanceAllResponse'] | ResolversParentTypes['walkingRunningDistanceAllError'];
  walkingRunningDistanceError: WalkingRunningDistanceError;
  walkingRunningDistanceResponse: WalkingRunningDistanceResponse;
  walkingRunningDistanceUnion: ResolversParentTypes['walkingRunningDistanceResponse'] | ResolversParentTypes['walkingRunningDistanceError'];
  weightAllError: WeightAllError;
  weightAllResponse: WeightAllResponse;
  weightAllUnion: ResolversParentTypes['weightAllResponse'] | ResolversParentTypes['weightAllError'];
  weightError: WeightError;
  weightResponse: WeightResponse;
  weightUnion: ResolversParentTypes['weightResponse'] | ResolversParentTypes['weightError'];
};

export type ActivityTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityType'] = ResolversParentTypes['ActivityType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  energy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  energyUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  energyGoal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  energyProgress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  energyComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  standHours?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  standProgress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  standGoal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  standComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  exerciseMinutes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  exerciseGoal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  exerciseProgress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  exerciseComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ringsProgress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ringsComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageMpgTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageMPGType'] = ResolversParentTypes['AverageMPGType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vehicle?: Resolver<Maybe<ResolversTypes['VehicleType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BloodPressureTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BloodPressureType'] = ResolversParentTypes['BloodPressureType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  systolic?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diastolic?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CbcTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CbcType'] = ResolversParentTypes['CbcType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wbcCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rbcCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hematrocrit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hgb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mvc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mch?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mchc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  redCellDistributionWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  platelets?: Resolver<Maybe<ResolversTypes['PlateletType']>, ParentType, ContextType>;
  plateletsId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meanPlateletVolume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  granulocytes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lymphocytes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  monocytes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  neutrophil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lymphocytePercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  monocytePercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionType'] = ResolversParentTypes['CollectionType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionsAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsAllError'] = ResolversParentTypes['CollectionsAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['CollectionsAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionsAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsAllResponse'] = ResolversParentTypes['CollectionsAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['CollectionType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionsAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsAllUnion'] = ResolversParentTypes['CollectionsAllUnion']> = {
  __resolveType: TypeResolveFn<'CollectionsAllResponse' | 'CollectionsAllError', ParentType, ContextType>;
};

export type CollectionsErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsError'] = ResolversParentTypes['CollectionsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['CollectionsErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsResponse'] = ResolversParentTypes['CollectionsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionsUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsUnion'] = ResolversParentTypes['CollectionsUnion']> = {
  __resolveType: TypeResolveFn<'CollectionsResponse' | 'CollectionsError', ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DeleteTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteType'] = ResolversParentTypes['DeleteType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DrivingScoreTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DrivingScoreType'] = ResolversParentTypes['DrivingScoreType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accelerationScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  coastingScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  breakingScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicle?: Resolver<Maybe<ResolversTypes['VehicleType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HealthKitTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HealthKitType'] = ResolversParentTypes['HealthKitType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hkid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  valueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averageSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  highestSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lowestSampleValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>;
  totalDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HealthKitUnionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HealthKitUnionType'] = ResolversParentTypes['HealthKitUnionType']> = {
  __resolveType: TypeResolveFn<'HealthKitType' | 'BloodPressureType', ParentType, ContextType>;
};

export type HealthTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HealthType'] = ResolversParentTypes['HealthType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MigraineTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MigraineType'] = ResolversParentTypes['MigraineType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  painLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  auraLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nauseaLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  auraTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addStep?: Resolver<Maybe<ResolversTypes['addStepUnion']>, ParentType, ContextType, RequireFields<MutationAddStepArgs, 'input'>>;
  updateStep?: Resolver<Maybe<ResolversTypes['updateStepUnion']>, ParentType, ContextType, RequireFields<MutationUpdateStepArgs, 'id' | 'input'>>;
  deleteStep?: Resolver<Maybe<ResolversTypes['deleteStepUnion']>, ParentType, ContextType, RequireFields<MutationDeleteStepArgs, 'id'>>;
  addFlightsClimbed?: Resolver<Maybe<ResolversTypes['addFlightsClimbedUnion']>, ParentType, ContextType, RequireFields<MutationAddFlightsClimbedArgs, 'input'>>;
  updateFlightsClimbed?: Resolver<Maybe<ResolversTypes['updateFlightsClimbedUnion']>, ParentType, ContextType, RequireFields<MutationUpdateFlightsClimbedArgs, 'id' | 'input'>>;
  deleteFlightsClimbed?: Resolver<Maybe<ResolversTypes['deleteFlightsClimbedUnion']>, ParentType, ContextType, RequireFields<MutationDeleteFlightsClimbedArgs, 'id'>>;
  addHeartRate?: Resolver<Maybe<ResolversTypes['addHeartRateUnion']>, ParentType, ContextType, RequireFields<MutationAddHeartRateArgs, 'input'>>;
  updateHeartRate?: Resolver<Maybe<ResolversTypes['updateHeartRateUnion']>, ParentType, ContextType, RequireFields<MutationUpdateHeartRateArgs, 'id' | 'input'>>;
  deleteHeartRate?: Resolver<Maybe<ResolversTypes['deleteHeartRateUnion']>, ParentType, ContextType, RequireFields<MutationDeleteHeartRateArgs, 'id'>>;
  addHeartRateVariability?: Resolver<Maybe<ResolversTypes['addHeartRateVariabilityUnion']>, ParentType, ContextType, RequireFields<MutationAddHeartRateVariabilityArgs, 'input'>>;
  updateHeartRateVariability?: Resolver<Maybe<ResolversTypes['updateHeartRateVariabilityUnion']>, ParentType, ContextType, RequireFields<MutationUpdateHeartRateVariabilityArgs, 'id' | 'input'>>;
  deleteHeartRateVariability?: Resolver<Maybe<ResolversTypes['deleteHeartRateVariabilityUnion']>, ParentType, ContextType, RequireFields<MutationDeleteHeartRateVariabilityArgs, 'id'>>;
  addHealthKit?: Resolver<Maybe<ResolversTypes['addHealthKitUnion']>, ParentType, ContextType, RequireFields<MutationAddHealthKitArgs, never>>;
  addActiveEnergy?: Resolver<Maybe<ResolversTypes['addActiveEnergyUnion']>, ParentType, ContextType, RequireFields<MutationAddActiveEnergyArgs, 'input'>>;
  updateActiveEnergy?: Resolver<Maybe<ResolversTypes['updateActiveEnergyUnion']>, ParentType, ContextType, RequireFields<MutationUpdateActiveEnergyArgs, 'id' | 'input'>>;
  deleteActiveEnergy?: Resolver<Maybe<ResolversTypes['deleteActiveEnergyUnion']>, ParentType, ContextType, RequireFields<MutationDeleteActiveEnergyArgs, 'id'>>;
  addCaffeine?: Resolver<Maybe<ResolversTypes['addCaffeineUnion']>, ParentType, ContextType, RequireFields<MutationAddCaffeineArgs, 'input'>>;
  updateCaffeine?: Resolver<Maybe<ResolversTypes['updateCaffeineUnion']>, ParentType, ContextType, RequireFields<MutationUpdateCaffeineArgs, 'id' | 'input'>>;
  addRestingEnergy?: Resolver<Maybe<ResolversTypes['addRestingEnergyUnion']>, ParentType, ContextType, RequireFields<MutationAddRestingEnergyArgs, 'input'>>;
  updateRestingEnergy?: Resolver<Maybe<ResolversTypes['updateRestingEnergyUnion']>, ParentType, ContextType, RequireFields<MutationUpdateRestingEnergyArgs, 'id' | 'input'>>;
  deleteRestingEnergy?: Resolver<Maybe<ResolversTypes['deleteRestingEnergyUnion']>, ParentType, ContextType, RequireFields<MutationDeleteRestingEnergyArgs, 'id'>>;
  addRestingHeartRate?: Resolver<Maybe<ResolversTypes['addRestingHeartRateUnion']>, ParentType, ContextType, RequireFields<MutationAddRestingHeartRateArgs, 'input'>>;
  updateRestingHeartRate?: Resolver<Maybe<ResolversTypes['updateRestingHeartRateUnion']>, ParentType, ContextType, RequireFields<MutationUpdateRestingHeartRateArgs, 'id' | 'input'>>;
  deleteRestingHeartRate?: Resolver<Maybe<ResolversTypes['deleteRestingHeartRateUnion']>, ParentType, ContextType, RequireFields<MutationDeleteRestingHeartRateArgs, 'id'>>;
  addSleepAnalysis?: Resolver<Maybe<ResolversTypes['addSleepAnalysisUnion']>, ParentType, ContextType, RequireFields<MutationAddSleepAnalysisArgs, 'input'>>;
  updateSleepAnalysis?: Resolver<Maybe<ResolversTypes['updateSleepAnalysisUnion']>, ParentType, ContextType, RequireFields<MutationUpdateSleepAnalysisArgs, 'id' | 'input'>>;
  addSwimmingDistance?: Resolver<Maybe<ResolversTypes['addSwimmingDistanceUnion']>, ParentType, ContextType, RequireFields<MutationAddSwimmingDistanceArgs, 'input'>>;
  updateSwimmingDistance?: Resolver<Maybe<ResolversTypes['updateSwimmingDistanceUnion']>, ParentType, ContextType, RequireFields<MutationUpdateSwimmingDistanceArgs, 'id' | 'input'>>;
  addWalkingHeartRateAverage?: Resolver<Maybe<ResolversTypes['addWalkingHeartRateAverageUnion']>, ParentType, ContextType, RequireFields<MutationAddWalkingHeartRateAverageArgs, 'input'>>;
  updateWalkingHeartRateAverage?: Resolver<Maybe<ResolversTypes['updateWalkingHeartRateAverageUnion']>, ParentType, ContextType, RequireFields<MutationUpdateWalkingHeartRateAverageArgs, 'id' | 'input'>>;
  deleteWalkingHeartRateAverage?: Resolver<Maybe<ResolversTypes['deleteWalkingHeartRateAverageUnion']>, ParentType, ContextType, RequireFields<MutationDeleteWalkingHeartRateAverageArgs, 'id'>>;
  addWalkingRunningDistance?: Resolver<Maybe<ResolversTypes['addWalkingRunningDistanceUnion']>, ParentType, ContextType, RequireFields<MutationAddWalkingRunningDistanceArgs, 'input'>>;
  updateWalkingRunningDistance?: Resolver<Maybe<ResolversTypes['updateWalkingRunningDistanceUnion']>, ParentType, ContextType, RequireFields<MutationUpdateWalkingRunningDistanceArgs, 'id' | 'input'>>;
  deleteWalkingRunningDistance?: Resolver<Maybe<ResolversTypes['deleteWalkingRunningDistanceUnion']>, ParentType, ContextType, RequireFields<MutationDeleteWalkingRunningDistanceArgs, 'id'>>;
  addOxygenSaturation?: Resolver<Maybe<ResolversTypes['addOxygenSaturationUnion']>, ParentType, ContextType, RequireFields<MutationAddOxygenSaturationArgs, 'input'>>;
  updateOxygenSaturation?: Resolver<Maybe<ResolversTypes['updateOxygenSaturationUnion']>, ParentType, ContextType, RequireFields<MutationUpdateOxygenSaturationArgs, 'id' | 'input'>>;
  deleteOxygenSaturation?: Resolver<Maybe<ResolversTypes['deleteOxygenSaturationUnion']>, ParentType, ContextType, RequireFields<MutationDeleteOxygenSaturationArgs, 'id'>>;
  addActivity?: Resolver<Maybe<ResolversTypes['addActivityUnion']>, ParentType, ContextType, RequireFields<MutationAddActivityArgs, 'input'>>;
  updateActivity?: Resolver<Maybe<ResolversTypes['updateActivityUnion']>, ParentType, ContextType, RequireFields<MutationUpdateActivityArgs, 'id' | 'input'>>;
  deleteActivity?: Resolver<Maybe<ResolversTypes['deleteActivityUnion']>, ParentType, ContextType, RequireFields<MutationDeleteActivityArgs, 'id'>>;
  addWeight?: Resolver<Maybe<ResolversTypes['addWeightUnion']>, ParentType, ContextType, RequireFields<MutationAddWeightArgs, 'input'>>;
  updateWeight?: Resolver<Maybe<ResolversTypes['updateWeightUnion']>, ParentType, ContextType, RequireFields<MutationUpdateWeightArgs, 'id' | 'input'>>;
  deleteWeight?: Resolver<Maybe<ResolversTypes['deleteWeightUnion']>, ParentType, ContextType, RequireFields<MutationDeleteWeightArgs, 'id'>>;
  addHeight?: Resolver<Maybe<ResolversTypes['addHeightUnion']>, ParentType, ContextType, RequireFields<MutationAddHeightArgs, 'input'>>;
  updateHeight?: Resolver<Maybe<ResolversTypes['updateHeightUnion']>, ParentType, ContextType, RequireFields<MutationUpdateHeightArgs, 'id' | 'input'>>;
  deleteHeight?: Resolver<Maybe<ResolversTypes['deleteHeightUnion']>, ParentType, ContextType, RequireFields<MutationDeleteHeightArgs, 'id'>>;
  addBodyTemperature?: Resolver<Maybe<ResolversTypes['addBodyTemperatureUnion']>, ParentType, ContextType, RequireFields<MutationAddBodyTemperatureArgs, 'input'>>;
  updateBodyTemperature?: Resolver<Maybe<ResolversTypes['updateBodyTemperatureUnion']>, ParentType, ContextType, RequireFields<MutationUpdateBodyTemperatureArgs, 'id' | 'input'>>;
  deleteBodyTemperature?: Resolver<Maybe<ResolversTypes['deleteBodyTemperatureUnion']>, ParentType, ContextType, RequireFields<MutationDeleteBodyTemperatureArgs, 'id'>>;
  addWaistCircumference?: Resolver<Maybe<ResolversTypes['addWaistCircumferenceUnion']>, ParentType, ContextType, RequireFields<MutationAddWaistCircumferenceArgs, 'input'>>;
  updateWaistCircumference?: Resolver<Maybe<ResolversTypes['updateWaistCircumferenceUnion']>, ParentType, ContextType, RequireFields<MutationUpdateWaistCircumferenceArgs, 'id' | 'input'>>;
  deleteWaistCircumference?: Resolver<Maybe<ResolversTypes['deleteWaistCircumferenceUnion']>, ParentType, ContextType, RequireFields<MutationDeleteWaistCircumferenceArgs, 'id'>>;
  addCbc?: Resolver<Maybe<ResolversTypes['addCbcUnion']>, ParentType, ContextType, RequireFields<MutationAddCbcArgs, 'input'>>;
  updateCbc?: Resolver<Maybe<ResolversTypes['updateCbcUnion']>, ParentType, ContextType, RequireFields<MutationUpdateCbcArgs, 'id' | 'input'>>;
  deleteCbc?: Resolver<Maybe<ResolversTypes['deleteCbcUnion']>, ParentType, ContextType, RequireFields<MutationDeleteCbcArgs, 'id'>>;
  addPlatelets?: Resolver<Maybe<ResolversTypes['addPlateletsUnion']>, ParentType, ContextType, RequireFields<MutationAddPlateletsArgs, 'input'>>;
  updatePlatelets?: Resolver<Maybe<ResolversTypes['updatePlateletsUnion']>, ParentType, ContextType, RequireFields<MutationUpdatePlateletsArgs, 'id' | 'input'>>;
  deletePlatelets?: Resolver<Maybe<ResolversTypes['deletePlateletsUnion']>, ParentType, ContextType, RequireFields<MutationDeletePlateletsArgs, 'id'>>;
  addBloodPressure?: Resolver<Maybe<ResolversTypes['addBloodPressureUnion']>, ParentType, ContextType, RequireFields<MutationAddBloodPressureArgs, 'input'>>;
  updateBloodPressure?: Resolver<Maybe<ResolversTypes['updateBloodPressureUnion']>, ParentType, ContextType, RequireFields<MutationUpdateBloodPressureArgs, 'id' | 'input'>>;
  deleteBloodPressure?: Resolver<Maybe<ResolversTypes['deleteBloodPressureUnion']>, ParentType, ContextType, RequireFields<MutationDeleteBloodPressureArgs, 'id'>>;
  addAnxiety?: Resolver<Maybe<ResolversTypes['addAnxietyUnion']>, ParentType, ContextType, RequireFields<MutationAddAnxietyArgs, 'input'>>;
  updateAnxiety?: Resolver<Maybe<ResolversTypes['updateAnxietyUnion']>, ParentType, ContextType, RequireFields<MutationUpdateAnxietyArgs, 'id' | 'input'>>;
  deleteAnxiety?: Resolver<Maybe<ResolversTypes['deleteAnxietyUnion']>, ParentType, ContextType, RequireFields<MutationDeleteAnxietyArgs, 'id'>>;
  addMigraine?: Resolver<Maybe<ResolversTypes['addMigraineUnion']>, ParentType, ContextType, RequireFields<MutationAddMigraineArgs, 'input'>>;
  updateMigraine?: Resolver<Maybe<ResolversTypes['updateMigraineUnion']>, ParentType, ContextType, RequireFields<MutationUpdateMigraineArgs, 'id' | 'input'>>;
  deleteMigraine?: Resolver<Maybe<ResolversTypes['deleteMigraineUnion']>, ParentType, ContextType, RequireFields<MutationDeleteMigraineArgs, 'id'>>;
  addAverageMPG?: Resolver<Maybe<ResolversTypes['addAverageMPGUnion']>, ParentType, ContextType, RequireFields<MutationAddAverageMpgArgs, 'input'>>;
  updateAverageMPG?: Resolver<Maybe<ResolversTypes['updateAverageMPGUnion']>, ParentType, ContextType, RequireFields<MutationUpdateAverageMpgArgs, 'id' | 'input'>>;
  deleteAverageMPG?: Resolver<Maybe<ResolversTypes['deleteAverageMPGUnion']>, ParentType, ContextType, RequireFields<MutationDeleteAverageMpgArgs, 'id'>>;
  addDrivingScore?: Resolver<Maybe<ResolversTypes['addDrivingScoreUnion']>, ParentType, ContextType, RequireFields<MutationAddDrivingScoreArgs, 'input'>>;
  updateDrivingScore?: Resolver<Maybe<ResolversTypes['updateDrivingScoreUnion']>, ParentType, ContextType, RequireFields<MutationUpdateDrivingScoreArgs, 'id' | 'input'>>;
  deleteDrivingScore?: Resolver<Maybe<ResolversTypes['deleteDrivingScoreUnion']>, ParentType, ContextType, RequireFields<MutationDeleteDrivingScoreArgs, 'id'>>;
  addRefuel?: Resolver<Maybe<ResolversTypes['addRefuelUnion']>, ParentType, ContextType, RequireFields<MutationAddRefuelArgs, 'input'>>;
  updateRefuel?: Resolver<Maybe<ResolversTypes['updateRefuelUnion']>, ParentType, ContextType, RequireFields<MutationUpdateRefuelArgs, 'id' | 'input'>>;
  deleteRefuel?: Resolver<Maybe<ResolversTypes['deleteRefuelUnion']>, ParentType, ContextType, RequireFields<MutationDeleteRefuelArgs, 'id'>>;
  addCollection?: Resolver<Maybe<ResolversTypes['addCollectionUnion']>, ParentType, ContextType, RequireFields<MutationAddCollectionArgs, 'input'>>;
  updateCollection?: Resolver<Maybe<ResolversTypes['updateCollectionUnion']>, ParentType, ContextType, RequireFields<MutationUpdateCollectionArgs, 'id' | 'input'>>;
  incrementCollection?: Resolver<Maybe<ResolversTypes['incrementCollectionUnion']>, ParentType, ContextType, RequireFields<MutationIncrementCollectionArgs, 'id'>>;
  deleteCollection?: Resolver<Maybe<ResolversTypes['deleteCollectionUnion']>, ParentType, ContextType, RequireFields<MutationDeleteCollectionArgs, 'id'>>;
  addStein?: Resolver<Maybe<ResolversTypes['addSteinUnion']>, ParentType, ContextType, RequireFields<MutationAddSteinArgs, 'input'>>;
  updateStein?: Resolver<Maybe<ResolversTypes['updateSteinUnion']>, ParentType, ContextType, RequireFields<MutationUpdateSteinArgs, 'id' | 'input'>>;
  incrementStein?: Resolver<Maybe<ResolversTypes['incrementSteinUnion']>, ParentType, ContextType, RequireFields<MutationIncrementSteinArgs, 'id'>>;
  deleteStein?: Resolver<Maybe<ResolversTypes['deleteSteinUnion']>, ParentType, ContextType, RequireFields<MutationDeleteSteinArgs, 'id'>>;
};

export type PlateletTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlateletType'] = ResolversParentTypes['PlateletType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>;
  cbc?: Resolver<Maybe<ResolversTypes['CbcType']>, ParentType, ContextType>;
  cbcId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefuelTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefuelType'] = ResolversParentTypes['RefuelType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  configID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gallons?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vehicle?: Resolver<Maybe<ResolversTypes['VehicleType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RootQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQueryType'] = ResolversParentTypes['RootQueryType']> = {
  step?: Resolver<Maybe<ResolversTypes['stepsUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeStepArgs, never>>;
  stepAll?: Resolver<Maybe<ResolversTypes['stepsAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeStepAllArgs, never>>;
  flightsClimbed?: Resolver<Maybe<ResolversTypes['flightsClimbedUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeFlightsClimbedArgs, never>>;
  flightsClimbedAll?: Resolver<Maybe<ResolversTypes['flightsClimbedAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeFlightsClimbedAllArgs, never>>;
  heartrate?: Resolver<Maybe<ResolversTypes['heartrateUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeHeartrateArgs, never>>;
  heartrateAll?: Resolver<Maybe<ResolversTypes['heartrateAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeHeartrateAllArgs, never>>;
  heartrateVariability?: Resolver<Maybe<ResolversTypes['heartrateVariabilityUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeHeartrateVariabilityArgs, never>>;
  heartrateVariabilityAll?: Resolver<Maybe<ResolversTypes['heartrateVariabilityAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeHeartrateVariabilityAllArgs, never>>;
  activeEnergy?: Resolver<Maybe<ResolversTypes['activeEnergyUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeActiveEnergyArgs, never>>;
  activeEnergyAll?: Resolver<Maybe<ResolversTypes['activeEnergyAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeActiveEnergyAllArgs, never>>;
  caffeine?: Resolver<Maybe<ResolversTypes['caffeineUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeCaffeineArgs, never>>;
  caffeineAll?: Resolver<Maybe<ResolversTypes['caffeineAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeCaffeineAllArgs, never>>;
  restingEnergy?: Resolver<Maybe<ResolversTypes['restingEnergyUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeRestingEnergyArgs, never>>;
  restingEnergyAll?: Resolver<Maybe<ResolversTypes['restingEnergyAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeRestingEnergyAllArgs, never>>;
  restingHeartrate?: Resolver<Maybe<ResolversTypes['restingHeartrateUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeRestingHeartrateArgs, never>>;
  restingHeartrateAll?: Resolver<Maybe<ResolversTypes['restingHeartrateAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeRestingHeartrateAllArgs, never>>;
  sleepAnalysis?: Resolver<Maybe<ResolversTypes['sleepAnalysisUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeSleepAnalysisArgs, never>>;
  sleepAnalysisAll?: Resolver<Maybe<ResolversTypes['sleepAnalysisAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeSleepAnalysisAllArgs, never>>;
  swimmingDistance?: Resolver<Maybe<ResolversTypes['swimmingDistanceUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeSwimmingDistanceArgs, never>>;
  swimmingDistanceAll?: Resolver<Maybe<ResolversTypes['swimmingDistanceAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeSwimmingDistanceAllArgs, never>>;
  walkingHeartrateAverage?: Resolver<Maybe<ResolversTypes['walkingHeartrateAverageUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeWalkingHeartrateAverageArgs, never>>;
  walkingHeartrateAverageAll?: Resolver<Maybe<ResolversTypes['walkingHeartrateAverageAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeWalkingHeartrateAverageAllArgs, never>>;
  walkingRunningDistance?: Resolver<Maybe<ResolversTypes['walkingRunningDistanceUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeWalkingRunningDistanceArgs, never>>;
  walkingRunningDistanceAll?: Resolver<Maybe<ResolversTypes['walkingRunningDistanceAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeWalkingRunningDistanceAllArgs, never>>;
  oxygenSaturation?: Resolver<Maybe<ResolversTypes['oxygenSaturationUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeOxygenSaturationArgs, never>>;
  oxygenSaturationAll?: Resolver<Maybe<ResolversTypes['oxygenSaturationAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeOxygenSaturationAllArgs, never>>;
  activity?: Resolver<Maybe<ResolversTypes['activityUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeActivityArgs, never>>;
  activityAll?: Resolver<Maybe<ResolversTypes['activityAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeActivityAllArgs, never>>;
  weight?: Resolver<Maybe<ResolversTypes['weightUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeWeightArgs, never>>;
  weightAll?: Resolver<Maybe<ResolversTypes['weightAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeWeightAllArgs, never>>;
  height?: Resolver<Maybe<ResolversTypes['heightUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeHeightArgs, never>>;
  heightAll?: Resolver<Maybe<ResolversTypes['heightAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeHeightAllArgs, never>>;
  bodyTemperature?: Resolver<Maybe<ResolversTypes['bodyTemperatureUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeBodyTemperatureArgs, never>>;
  bodyTemperatureAll?: Resolver<Maybe<ResolversTypes['bodyTemperatureAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeBodyTemperatureAllArgs, never>>;
  waistCircumference?: Resolver<Maybe<ResolversTypes['waistCircumferenceUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeWaistCircumferenceArgs, never>>;
  waistCircumferenceAll?: Resolver<Maybe<ResolversTypes['waistCircumferenceAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeWaistCircumferenceAllArgs, never>>;
  cbc?: Resolver<Maybe<ResolversTypes['cbcUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeCbcArgs, never>>;
  cbcAll?: Resolver<Maybe<ResolversTypes['cbcAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeCbcAllArgs, never>>;
  platelets?: Resolver<Maybe<ResolversTypes['plateletsUnion']>, ParentType, ContextType, RequireFields<RootQueryTypePlateletsArgs, never>>;
  plateletsAll?: Resolver<Maybe<ResolversTypes['plateletsAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypePlateletsAllArgs, never>>;
  bloodPressure?: Resolver<Maybe<ResolversTypes['bloodPressureUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeBloodPressureArgs, never>>;
  bloodPressureAll?: Resolver<Maybe<ResolversTypes['bloodPressureAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeBloodPressureAllArgs, never>>;
  anxiety?: Resolver<Maybe<ResolversTypes['anxietyUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeAnxietyArgs, never>>;
  anxietyAll?: Resolver<Maybe<ResolversTypes['anxietyAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeAnxietyAllArgs, never>>;
  migraine?: Resolver<Maybe<ResolversTypes['migraineUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeMigraineArgs, never>>;
  migraineAll?: Resolver<Maybe<ResolversTypes['migraineAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeMigraineAllArgs, never>>;
  averageMPG?: Resolver<Maybe<ResolversTypes['averageMPGUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeAverageMpgArgs, never>>;
  averageMPGAll?: Resolver<Maybe<ResolversTypes['averageMPGAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeAverageMpgAllArgs, never>>;
  drivingScore?: Resolver<Maybe<ResolversTypes['drivingScoreUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeDrivingScoreArgs, never>>;
  drivingScoreAll?: Resolver<Maybe<ResolversTypes['drivingScoreAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeDrivingScoreAllArgs, never>>;
  refuel?: Resolver<Maybe<ResolversTypes['refuelUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeRefuelArgs, never>>;
  refuelAll?: Resolver<Maybe<ResolversTypes['refuelAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeRefuelAllArgs, never>>;
  collections?: Resolver<Maybe<ResolversTypes['CollectionsUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeCollectionsArgs, never>>;
  collectionsAll?: Resolver<Maybe<ResolversTypes['CollectionsAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeCollectionsAllArgs, never>>;
  steins?: Resolver<Maybe<ResolversTypes['SteinsUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeSteinsArgs, never>>;
  steinsAll?: Resolver<Maybe<ResolversTypes['SteinsAllUnion']>, ParentType, ContextType, RequireFields<RootQueryTypeSteinsAllArgs, never>>;
};

export type SteinsAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteinsAllError'] = ResolversParentTypes['SteinsAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['SteinsAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteinsAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteinsAllResponse'] = ResolversParentTypes['SteinsAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['CollectionType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteinsAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteinsAllUnion'] = ResolversParentTypes['SteinsAllUnion']> = {
  __resolveType: TypeResolveFn<'SteinsAllResponse' | 'SteinsAllError', ParentType, ContextType>;
};

export type SteinsErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteinsError'] = ResolversParentTypes['SteinsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['SteinsErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteinsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteinsResponse'] = ResolversParentTypes['SteinsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteinsUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteinsUnion'] = ResolversParentTypes['SteinsUnion']> = {
  __resolveType: TypeResolveFn<'SteinsResponse' | 'SteinsError', ParentType, ContextType>;
};

export type ActiveEnergyAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['activeEnergyAllError'] = ResolversParentTypes['activeEnergyAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['activeEnergyAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveEnergyAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['activeEnergyAllResponse'] = ResolversParentTypes['activeEnergyAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveEnergyAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['activeEnergyAllUnion'] = ResolversParentTypes['activeEnergyAllUnion']> = {
  __resolveType: TypeResolveFn<'activeEnergyAllResponse' | 'activeEnergyAllError', ParentType, ContextType>;
};

export type ActiveEnergyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['activeEnergyError'] = ResolversParentTypes['activeEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['activeEnergyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveEnergyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['activeEnergyResponse'] = ResolversParentTypes['activeEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveEnergyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['activeEnergyUnion'] = ResolversParentTypes['activeEnergyUnion']> = {
  __resolveType: TypeResolveFn<'activeEnergyResponse' | 'activeEnergyError', ParentType, ContextType>;
};

export type ActivityAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['activityAllError'] = ResolversParentTypes['activityAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['activityAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['activityAllResponse'] = ResolversParentTypes['activityAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['activityAllUnion'] = ResolversParentTypes['activityAllUnion']> = {
  __resolveType: TypeResolveFn<'activityAllResponse' | 'activityAllError', ParentType, ContextType>;
};

export type ActivityErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['activityError'] = ResolversParentTypes['activityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['activityErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['activityResponse'] = ResolversParentTypes['activityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['activityUnion'] = ResolversParentTypes['activityUnion']> = {
  __resolveType: TypeResolveFn<'activityResponse' | 'activityError', ParentType, ContextType>;
};

export type AddActiveEnergyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addActiveEnergyError'] = ResolversParentTypes['addActiveEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addActiveEnergyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddActiveEnergyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addActiveEnergyResponse'] = ResolversParentTypes['addActiveEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddActiveEnergyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addActiveEnergyUnion'] = ResolversParentTypes['addActiveEnergyUnion']> = {
  __resolveType: TypeResolveFn<'addActiveEnergyResponse' | 'addActiveEnergyError', ParentType, ContextType>;
};

export type AddActivityErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addActivityError'] = ResolversParentTypes['addActivityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addActivityErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddActivityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addActivityResponse'] = ResolversParentTypes['addActivityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddActivityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addActivityUnion'] = ResolversParentTypes['addActivityUnion']> = {
  __resolveType: TypeResolveFn<'addActivityResponse' | 'addActivityError', ParentType, ContextType>;
};

export type AddAnxietyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addAnxietyError'] = ResolversParentTypes['addAnxietyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addAnxietyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddAnxietyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addAnxietyResponse'] = ResolversParentTypes['addAnxietyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddAnxietyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addAnxietyUnion'] = ResolversParentTypes['addAnxietyUnion']> = {
  __resolveType: TypeResolveFn<'addAnxietyResponse' | 'addAnxietyError', ParentType, ContextType>;
};

export type AddAverageMpgErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addAverageMPGError'] = ResolversParentTypes['addAverageMPGError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addAverageMPGErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddAverageMpgResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addAverageMPGResponse'] = ResolversParentTypes['addAverageMPGResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['AverageMPGType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddAverageMpgUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addAverageMPGUnion'] = ResolversParentTypes['addAverageMPGUnion']> = {
  __resolveType: TypeResolveFn<'addAverageMPGResponse' | 'addAverageMPGError', ParentType, ContextType>;
};

export type AddBloodPressureErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addBloodPressureError'] = ResolversParentTypes['addBloodPressureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addBloodPressureErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddBloodPressureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addBloodPressureResponse'] = ResolversParentTypes['addBloodPressureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['BloodPressureType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddBloodPressureUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addBloodPressureUnion'] = ResolversParentTypes['addBloodPressureUnion']> = {
  __resolveType: TypeResolveFn<'addBloodPressureResponse' | 'addBloodPressureError', ParentType, ContextType>;
};

export type AddBodyTemperatureErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addBodyTemperatureError'] = ResolversParentTypes['addBodyTemperatureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addBodyTemperatureErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddBodyTemperatureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addBodyTemperatureResponse'] = ResolversParentTypes['addBodyTemperatureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddBodyTemperatureUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addBodyTemperatureUnion'] = ResolversParentTypes['addBodyTemperatureUnion']> = {
  __resolveType: TypeResolveFn<'addBodyTemperatureResponse' | 'addBodyTemperatureError', ParentType, ContextType>;
};

export type AddCaffeineErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCaffeineError'] = ResolversParentTypes['addCaffeineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addCaffeineErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddCaffeineResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCaffeineResponse'] = ResolversParentTypes['addCaffeineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddCaffeineUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCaffeineUnion'] = ResolversParentTypes['addCaffeineUnion']> = {
  __resolveType: TypeResolveFn<'addCaffeineResponse' | 'addCaffeineError', ParentType, ContextType>;
};

export type AddCbcErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCbcError'] = ResolversParentTypes['addCbcError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addCbcErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddCbcResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCbcResponse'] = ResolversParentTypes['addCbcResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CbcType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddCbcUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCbcUnion'] = ResolversParentTypes['addCbcUnion']> = {
  __resolveType: TypeResolveFn<'addCbcResponse' | 'addCbcError', ParentType, ContextType>;
};

export type AddCollectionErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCollectionError'] = ResolversParentTypes['addCollectionError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addCollectionErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddCollectionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCollectionResponse'] = ResolversParentTypes['addCollectionResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddCollectionUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCollectionUnion'] = ResolversParentTypes['addCollectionUnion']> = {
  __resolveType: TypeResolveFn<'addCollectionResponse' | 'addCollectionError', ParentType, ContextType>;
};

export type AddDrivingScoreErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addDrivingScoreError'] = ResolversParentTypes['addDrivingScoreError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addDrivingScoreErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddDrivingScoreResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addDrivingScoreResponse'] = ResolversParentTypes['addDrivingScoreResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DrivingScoreType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddDrivingScoreUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addDrivingScoreUnion'] = ResolversParentTypes['addDrivingScoreUnion']> = {
  __resolveType: TypeResolveFn<'addDrivingScoreResponse' | 'addDrivingScoreError', ParentType, ContextType>;
};

export type AddFlightsClimbedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addFlightsClimbedError'] = ResolversParentTypes['addFlightsClimbedError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addFlightsClimbedErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddFlightsClimbedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addFlightsClimbedResponse'] = ResolversParentTypes['addFlightsClimbedResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddFlightsClimbedUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addFlightsClimbedUnion'] = ResolversParentTypes['addFlightsClimbedUnion']> = {
  __resolveType: TypeResolveFn<'addFlightsClimbedResponse' | 'addFlightsClimbedError', ParentType, ContextType>;
};

export type AddHealthKitErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHealthKitError'] = ResolversParentTypes['addHealthKitError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHealthKitErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddHealthKitResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHealthKitResponse'] = ResolversParentTypes['addHealthKitResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitUnionType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddHealthKitUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHealthKitUnion'] = ResolversParentTypes['addHealthKitUnion']> = {
  __resolveType: TypeResolveFn<'addHealthKitResponse' | 'addHealthKitError', ParentType, ContextType>;
};

export type AddHeartRateErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHeartRateError'] = ResolversParentTypes['addHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHeartRateErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddHeartRateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHeartRateResponse'] = ResolversParentTypes['addHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddHeartRateUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHeartRateUnion'] = ResolversParentTypes['addHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'addHeartRateResponse' | 'addHeartRateError', ParentType, ContextType>;
};

export type AddHeartRateVariabilityErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHeartRateVariabilityError'] = ResolversParentTypes['addHeartRateVariabilityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHeartRateVariabilityErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddHeartRateVariabilityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHeartRateVariabilityResponse'] = ResolversParentTypes['addHeartRateVariabilityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddHeartRateVariabilityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHeartRateVariabilityUnion'] = ResolversParentTypes['addHeartRateVariabilityUnion']> = {
  __resolveType: TypeResolveFn<'addHeartRateVariabilityResponse' | 'addHeartRateVariabilityError', ParentType, ContextType>;
};

export type AddHeightErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHeightError'] = ResolversParentTypes['addHeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHeightErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddHeightResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHeightResponse'] = ResolversParentTypes['addHeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddHeightUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addHeightUnion'] = ResolversParentTypes['addHeightUnion']> = {
  __resolveType: TypeResolveFn<'addHeightResponse' | 'addHeightError', ParentType, ContextType>;
};

export type AddMigraineErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addMigraineError'] = ResolversParentTypes['addMigraineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addMigraineErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddMigraineResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addMigraineResponse'] = ResolversParentTypes['addMigraineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['MigraineType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddMigraineUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addMigraineUnion'] = ResolversParentTypes['addMigraineUnion']> = {
  __resolveType: TypeResolveFn<'addMigraineResponse' | 'addMigraineError', ParentType, ContextType>;
};

export type AddOxygenSaturationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addOxygenSaturationError'] = ResolversParentTypes['addOxygenSaturationError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addOxygenSaturationErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddOxygenSaturationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addOxygenSaturationResponse'] = ResolversParentTypes['addOxygenSaturationResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddOxygenSaturationUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addOxygenSaturationUnion'] = ResolversParentTypes['addOxygenSaturationUnion']> = {
  __resolveType: TypeResolveFn<'addOxygenSaturationResponse' | 'addOxygenSaturationError', ParentType, ContextType>;
};

export type AddPlateletsErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addPlateletsError'] = ResolversParentTypes['addPlateletsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addPlateletsErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddPlateletsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addPlateletsResponse'] = ResolversParentTypes['addPlateletsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['PlateletType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddPlateletsUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addPlateletsUnion'] = ResolversParentTypes['addPlateletsUnion']> = {
  __resolveType: TypeResolveFn<'addPlateletsResponse' | 'addPlateletsError', ParentType, ContextType>;
};

export type AddRefuelErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addRefuelError'] = ResolversParentTypes['addRefuelError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addRefuelErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddRefuelResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addRefuelResponse'] = ResolversParentTypes['addRefuelResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['RefuelType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddRefuelUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addRefuelUnion'] = ResolversParentTypes['addRefuelUnion']> = {
  __resolveType: TypeResolveFn<'addRefuelResponse' | 'addRefuelError', ParentType, ContextType>;
};

export type AddRestingEnergyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addRestingEnergyError'] = ResolversParentTypes['addRestingEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addRestingEnergyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddRestingEnergyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addRestingEnergyResponse'] = ResolversParentTypes['addRestingEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddRestingEnergyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addRestingEnergyUnion'] = ResolversParentTypes['addRestingEnergyUnion']> = {
  __resolveType: TypeResolveFn<'addRestingEnergyResponse' | 'addRestingEnergyError', ParentType, ContextType>;
};

export type AddRestingHeartRateErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addRestingHeartRateError'] = ResolversParentTypes['addRestingHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addRestingHeartRateErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddRestingHeartRateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addRestingHeartRateResponse'] = ResolversParentTypes['addRestingHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddRestingHeartRateUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addRestingHeartRateUnion'] = ResolversParentTypes['addRestingHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'addRestingHeartRateResponse' | 'addRestingHeartRateError', ParentType, ContextType>;
};

export type AddSleepAnalysisErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addSleepAnalysisError'] = ResolversParentTypes['addSleepAnalysisError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addSleepAnalysisErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddSleepAnalysisResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addSleepAnalysisResponse'] = ResolversParentTypes['addSleepAnalysisResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddSleepAnalysisUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addSleepAnalysisUnion'] = ResolversParentTypes['addSleepAnalysisUnion']> = {
  __resolveType: TypeResolveFn<'addSleepAnalysisResponse' | 'addSleepAnalysisError', ParentType, ContextType>;
};

export type AddSteinErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addSteinError'] = ResolversParentTypes['addSteinError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addSteinErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddSteinResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addSteinResponse'] = ResolversParentTypes['addSteinResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddSteinUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addSteinUnion'] = ResolversParentTypes['addSteinUnion']> = {
  __resolveType: TypeResolveFn<'addSteinResponse' | 'addSteinError', ParentType, ContextType>;
};

export type AddStepErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addStepError'] = ResolversParentTypes['addStepError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addStepErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddStepResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addStepResponse'] = ResolversParentTypes['addStepResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddStepUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addStepUnion'] = ResolversParentTypes['addStepUnion']> = {
  __resolveType: TypeResolveFn<'addStepResponse' | 'addStepError', ParentType, ContextType>;
};

export type AddSwimmingDistanceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addSwimmingDistanceError'] = ResolversParentTypes['addSwimmingDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addSwimmingDistanceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddSwimmingDistanceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addSwimmingDistanceResponse'] = ResolversParentTypes['addSwimmingDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddSwimmingDistanceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addSwimmingDistanceUnion'] = ResolversParentTypes['addSwimmingDistanceUnion']> = {
  __resolveType: TypeResolveFn<'addSwimmingDistanceResponse' | 'addSwimmingDistanceError', ParentType, ContextType>;
};

export type AddWaistCircumferenceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWaistCircumferenceError'] = ResolversParentTypes['addWaistCircumferenceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addWaistCircumferenceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWaistCircumferenceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWaistCircumferenceResponse'] = ResolversParentTypes['addWaistCircumferenceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWaistCircumferenceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWaistCircumferenceUnion'] = ResolversParentTypes['addWaistCircumferenceUnion']> = {
  __resolveType: TypeResolveFn<'addWaistCircumferenceResponse' | 'addWaistCircumferenceError', ParentType, ContextType>;
};

export type AddWalkingHeartRateAverageErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWalkingHeartRateAverageError'] = ResolversParentTypes['addWalkingHeartRateAverageError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addWalkingHeartRateAverageErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWalkingHeartRateAverageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWalkingHeartRateAverageResponse'] = ResolversParentTypes['addWalkingHeartRateAverageResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWalkingHeartRateAverageUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWalkingHeartRateAverageUnion'] = ResolversParentTypes['addWalkingHeartRateAverageUnion']> = {
  __resolveType: TypeResolveFn<'addWalkingHeartRateAverageResponse' | 'addWalkingHeartRateAverageError', ParentType, ContextType>;
};

export type AddWalkingRunningDistanceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWalkingRunningDistanceError'] = ResolversParentTypes['addWalkingRunningDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addWalkingRunningDistanceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWalkingRunningDistanceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWalkingRunningDistanceResponse'] = ResolversParentTypes['addWalkingRunningDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWalkingRunningDistanceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWalkingRunningDistanceUnion'] = ResolversParentTypes['addWalkingRunningDistanceUnion']> = {
  __resolveType: TypeResolveFn<'addWalkingRunningDistanceResponse' | 'addWalkingRunningDistanceError', ParentType, ContextType>;
};

export type AddWeightErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWeightError'] = ResolversParentTypes['addWeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addWeightErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWeightResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWeightResponse'] = ResolversParentTypes['addWeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWeightUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['addWeightUnion'] = ResolversParentTypes['addWeightUnion']> = {
  __resolveType: TypeResolveFn<'addWeightResponse' | 'addWeightError', ParentType, ContextType>;
};

export type AnxietyAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['anxietyAllError'] = ResolversParentTypes['anxietyAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['anxietyAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnxietyAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['anxietyAllResponse'] = ResolversParentTypes['anxietyAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnxietyAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['anxietyAllUnion'] = ResolversParentTypes['anxietyAllUnion']> = {
  __resolveType: TypeResolveFn<'anxietyAllResponse' | 'anxietyAllError', ParentType, ContextType>;
};

export type AnxietyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['anxietyError'] = ResolversParentTypes['anxietyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['anxietyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnxietyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['anxietyResponse'] = ResolversParentTypes['anxietyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnxietyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['anxietyUnion'] = ResolversParentTypes['anxietyUnion']> = {
  __resolveType: TypeResolveFn<'anxietyResponse' | 'anxietyError', ParentType, ContextType>;
};

export type AverageMpgAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['averageMPGAllError'] = ResolversParentTypes['averageMPGAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['averageMPGAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageMpgAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['averageMPGAllResponse'] = ResolversParentTypes['averageMPGAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageMPGType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageMpgAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['averageMPGAllUnion'] = ResolversParentTypes['averageMPGAllUnion']> = {
  __resolveType: TypeResolveFn<'averageMPGAllResponse' | 'averageMPGAllError', ParentType, ContextType>;
};

export type AverageMpgErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['averageMPGError'] = ResolversParentTypes['averageMPGError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['averageMPGErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageMpgResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['averageMPGResponse'] = ResolversParentTypes['averageMPGResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['AverageMPGType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageMpgUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['averageMPGUnion'] = ResolversParentTypes['averageMPGUnion']> = {
  __resolveType: TypeResolveFn<'averageMPGResponse' | 'averageMPGError', ParentType, ContextType>;
};

export type BloodPressureAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['bloodPressureAllError'] = ResolversParentTypes['bloodPressureAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['bloodPressureAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BloodPressureAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['bloodPressureAllResponse'] = ResolversParentTypes['bloodPressureAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['BloodPressureType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BloodPressureAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['bloodPressureAllUnion'] = ResolversParentTypes['bloodPressureAllUnion']> = {
  __resolveType: TypeResolveFn<'bloodPressureAllResponse' | 'bloodPressureAllError', ParentType, ContextType>;
};

export type BloodPressureErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['bloodPressureError'] = ResolversParentTypes['bloodPressureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['bloodPressureErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BloodPressureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['bloodPressureResponse'] = ResolversParentTypes['bloodPressureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['BloodPressureType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BloodPressureUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['bloodPressureUnion'] = ResolversParentTypes['bloodPressureUnion']> = {
  __resolveType: TypeResolveFn<'bloodPressureResponse' | 'bloodPressureError', ParentType, ContextType>;
};

export type BodyTemperatureAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['bodyTemperatureAllError'] = ResolversParentTypes['bodyTemperatureAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['bodyTemperatureAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BodyTemperatureAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['bodyTemperatureAllResponse'] = ResolversParentTypes['bodyTemperatureAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BodyTemperatureAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['bodyTemperatureAllUnion'] = ResolversParentTypes['bodyTemperatureAllUnion']> = {
  __resolveType: TypeResolveFn<'bodyTemperatureAllResponse' | 'bodyTemperatureAllError', ParentType, ContextType>;
};

export type BodyTemperatureErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['bodyTemperatureError'] = ResolversParentTypes['bodyTemperatureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['bodyTemperatureErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BodyTemperatureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['bodyTemperatureResponse'] = ResolversParentTypes['bodyTemperatureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BodyTemperatureUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['bodyTemperatureUnion'] = ResolversParentTypes['bodyTemperatureUnion']> = {
  __resolveType: TypeResolveFn<'bodyTemperatureResponse' | 'bodyTemperatureError', ParentType, ContextType>;
};

export type CaffeineAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['caffeineAllError'] = ResolversParentTypes['caffeineAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['caffeineAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaffeineAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['caffeineAllResponse'] = ResolversParentTypes['caffeineAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaffeineAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['caffeineAllUnion'] = ResolversParentTypes['caffeineAllUnion']> = {
  __resolveType: TypeResolveFn<'caffeineAllResponse' | 'caffeineAllError', ParentType, ContextType>;
};

export type CaffeineErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['caffeineError'] = ResolversParentTypes['caffeineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['caffeineErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaffeineResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['caffeineResponse'] = ResolversParentTypes['caffeineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaffeineUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['caffeineUnion'] = ResolversParentTypes['caffeineUnion']> = {
  __resolveType: TypeResolveFn<'caffeineResponse' | 'caffeineError', ParentType, ContextType>;
};

export type CbcAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['cbcAllError'] = ResolversParentTypes['cbcAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['cbcAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CbcAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['cbcAllResponse'] = ResolversParentTypes['cbcAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['CbcType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CbcAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['cbcAllUnion'] = ResolversParentTypes['cbcAllUnion']> = {
  __resolveType: TypeResolveFn<'cbcAllResponse' | 'cbcAllError', ParentType, ContextType>;
};

export type CbcErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['cbcError'] = ResolversParentTypes['cbcError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['cbcErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CbcResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['cbcResponse'] = ResolversParentTypes['cbcResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CbcType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CbcUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['cbcUnion'] = ResolversParentTypes['cbcUnion']> = {
  __resolveType: TypeResolveFn<'cbcResponse' | 'cbcError', ParentType, ContextType>;
};

export type DeleteActiveEnergyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteActiveEnergyError'] = ResolversParentTypes['deleteActiveEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteActiveEnergyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteActiveEnergyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteActiveEnergyResponse'] = ResolversParentTypes['deleteActiveEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteActiveEnergyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteActiveEnergyUnion'] = ResolversParentTypes['deleteActiveEnergyUnion']> = {
  __resolveType: TypeResolveFn<'deleteActiveEnergyResponse' | 'deleteActiveEnergyError', ParentType, ContextType>;
};

export type DeleteActivityErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteActivityError'] = ResolversParentTypes['deleteActivityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteActivityErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteActivityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteActivityResponse'] = ResolversParentTypes['deleteActivityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteActivityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteActivityUnion'] = ResolversParentTypes['deleteActivityUnion']> = {
  __resolveType: TypeResolveFn<'deleteActivityResponse' | 'deleteActivityError', ParentType, ContextType>;
};

export type DeleteAnxietyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteAnxietyError'] = ResolversParentTypes['deleteAnxietyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteAnxietyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAnxietyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteAnxietyResponse'] = ResolversParentTypes['deleteAnxietyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAnxietyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteAnxietyUnion'] = ResolversParentTypes['deleteAnxietyUnion']> = {
  __resolveType: TypeResolveFn<'deleteAnxietyResponse' | 'deleteAnxietyError', ParentType, ContextType>;
};

export type DeleteAverageMpgErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteAverageMPGError'] = ResolversParentTypes['deleteAverageMPGError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteAverageMPGErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAverageMpgResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteAverageMPGResponse'] = ResolversParentTypes['deleteAverageMPGResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAverageMpgUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteAverageMPGUnion'] = ResolversParentTypes['deleteAverageMPGUnion']> = {
  __resolveType: TypeResolveFn<'deleteAverageMPGResponse' | 'deleteAverageMPGError', ParentType, ContextType>;
};

export type DeleteBloodPressureErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteBloodPressureError'] = ResolversParentTypes['deleteBloodPressureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteBloodPressureErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteBloodPressureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteBloodPressureResponse'] = ResolversParentTypes['deleteBloodPressureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteBloodPressureUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteBloodPressureUnion'] = ResolversParentTypes['deleteBloodPressureUnion']> = {
  __resolveType: TypeResolveFn<'deleteBloodPressureResponse' | 'deleteBloodPressureError', ParentType, ContextType>;
};

export type DeleteBodyTemperatureErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteBodyTemperatureError'] = ResolversParentTypes['deleteBodyTemperatureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteBodyTemperatureErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteBodyTemperatureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteBodyTemperatureResponse'] = ResolversParentTypes['deleteBodyTemperatureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteBodyTemperatureUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteBodyTemperatureUnion'] = ResolversParentTypes['deleteBodyTemperatureUnion']> = {
  __resolveType: TypeResolveFn<'deleteBodyTemperatureResponse' | 'deleteBodyTemperatureError', ParentType, ContextType>;
};

export type DeleteCbcErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCbcError'] = ResolversParentTypes['deleteCbcError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteCbcErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCbcResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCbcResponse'] = ResolversParentTypes['deleteCbcResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCbcUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCbcUnion'] = ResolversParentTypes['deleteCbcUnion']> = {
  __resolveType: TypeResolveFn<'deleteCbcResponse' | 'deleteCbcError', ParentType, ContextType>;
};

export type DeleteCollectionErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCollectionError'] = ResolversParentTypes['deleteCollectionError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteCollectionErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCollectionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCollectionResponse'] = ResolversParentTypes['deleteCollectionResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCollectionUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCollectionUnion'] = ResolversParentTypes['deleteCollectionUnion']> = {
  __resolveType: TypeResolveFn<'deleteCollectionResponse' | 'deleteCollectionError', ParentType, ContextType>;
};

export type DeleteDrivingScoreErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteDrivingScoreError'] = ResolversParentTypes['deleteDrivingScoreError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteDrivingScoreErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteDrivingScoreResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteDrivingScoreResponse'] = ResolversParentTypes['deleteDrivingScoreResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteDrivingScoreUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteDrivingScoreUnion'] = ResolversParentTypes['deleteDrivingScoreUnion']> = {
  __resolveType: TypeResolveFn<'deleteDrivingScoreResponse' | 'deleteDrivingScoreError', ParentType, ContextType>;
};

export type DeleteFlightsClimbedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteFlightsClimbedError'] = ResolversParentTypes['deleteFlightsClimbedError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteFlightsClimbedErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteFlightsClimbedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteFlightsClimbedResponse'] = ResolversParentTypes['deleteFlightsClimbedResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteFlightsClimbedUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteFlightsClimbedUnion'] = ResolversParentTypes['deleteFlightsClimbedUnion']> = {
  __resolveType: TypeResolveFn<'deleteFlightsClimbedResponse' | 'deleteFlightsClimbedError', ParentType, ContextType>;
};

export type DeleteHeartRateErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteHeartRateError'] = ResolversParentTypes['deleteHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteHeartRateErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteHeartRateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteHeartRateResponse'] = ResolversParentTypes['deleteHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteHeartRateUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteHeartRateUnion'] = ResolversParentTypes['deleteHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'deleteHeartRateResponse' | 'deleteHeartRateError', ParentType, ContextType>;
};

export type DeleteHeartRateVariabilityErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteHeartRateVariabilityError'] = ResolversParentTypes['deleteHeartRateVariabilityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteHeartRateVariabilityErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteHeartRateVariabilityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteHeartRateVariabilityResponse'] = ResolversParentTypes['deleteHeartRateVariabilityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteHeartRateVariabilityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteHeartRateVariabilityUnion'] = ResolversParentTypes['deleteHeartRateVariabilityUnion']> = {
  __resolveType: TypeResolveFn<'deleteHeartRateVariabilityResponse' | 'deleteHeartRateVariabilityError', ParentType, ContextType>;
};

export type DeleteHeightErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteHeightError'] = ResolversParentTypes['deleteHeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteHeightErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteHeightResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteHeightResponse'] = ResolversParentTypes['deleteHeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteHeightUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteHeightUnion'] = ResolversParentTypes['deleteHeightUnion']> = {
  __resolveType: TypeResolveFn<'deleteHeightResponse' | 'deleteHeightError', ParentType, ContextType>;
};

export type DeleteMigraineErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteMigraineError'] = ResolversParentTypes['deleteMigraineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteMigraineErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteMigraineResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteMigraineResponse'] = ResolversParentTypes['deleteMigraineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteMigraineUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteMigraineUnion'] = ResolversParentTypes['deleteMigraineUnion']> = {
  __resolveType: TypeResolveFn<'deleteMigraineResponse' | 'deleteMigraineError', ParentType, ContextType>;
};

export type DeleteOxygenSaturationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteOxygenSaturationError'] = ResolversParentTypes['deleteOxygenSaturationError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteOxygenSaturationErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteOxygenSaturationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteOxygenSaturationResponse'] = ResolversParentTypes['deleteOxygenSaturationResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteOxygenSaturationUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteOxygenSaturationUnion'] = ResolversParentTypes['deleteOxygenSaturationUnion']> = {
  __resolveType: TypeResolveFn<'deleteOxygenSaturationResponse' | 'deleteOxygenSaturationError', ParentType, ContextType>;
};

export type DeletePlateletsErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deletePlateletsError'] = ResolversParentTypes['deletePlateletsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deletePlateletsErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePlateletsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deletePlateletsResponse'] = ResolversParentTypes['deletePlateletsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePlateletsUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deletePlateletsUnion'] = ResolversParentTypes['deletePlateletsUnion']> = {
  __resolveType: TypeResolveFn<'deletePlateletsResponse' | 'deletePlateletsError', ParentType, ContextType>;
};

export type DeleteRefuelErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRefuelError'] = ResolversParentTypes['deleteRefuelError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteRefuelErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteRefuelResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRefuelResponse'] = ResolversParentTypes['deleteRefuelResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteRefuelUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRefuelUnion'] = ResolversParentTypes['deleteRefuelUnion']> = {
  __resolveType: TypeResolveFn<'deleteRefuelResponse' | 'deleteRefuelError', ParentType, ContextType>;
};

export type DeleteRestingEnergyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRestingEnergyError'] = ResolversParentTypes['deleteRestingEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteRestingEnergyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteRestingEnergyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRestingEnergyResponse'] = ResolversParentTypes['deleteRestingEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteRestingEnergyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRestingEnergyUnion'] = ResolversParentTypes['deleteRestingEnergyUnion']> = {
  __resolveType: TypeResolveFn<'deleteRestingEnergyResponse' | 'deleteRestingEnergyError', ParentType, ContextType>;
};

export type DeleteRestingHeartRateErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRestingHeartRateError'] = ResolversParentTypes['deleteRestingHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteRestingHeartRateErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteRestingHeartRateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRestingHeartRateResponse'] = ResolversParentTypes['deleteRestingHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteRestingHeartRateUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRestingHeartRateUnion'] = ResolversParentTypes['deleteRestingHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'deleteRestingHeartRateResponse' | 'deleteRestingHeartRateError', ParentType, ContextType>;
};

export type DeleteSteinErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteSteinError'] = ResolversParentTypes['deleteSteinError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteSteinErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteSteinResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteSteinResponse'] = ResolversParentTypes['deleteSteinResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteSteinUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteSteinUnion'] = ResolversParentTypes['deleteSteinUnion']> = {
  __resolveType: TypeResolveFn<'deleteSteinResponse' | 'deleteSteinError', ParentType, ContextType>;
};

export type DeleteStepErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteStepError'] = ResolversParentTypes['deleteStepError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteStepErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteStepResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteStepResponse'] = ResolversParentTypes['deleteStepResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteStepUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteStepUnion'] = ResolversParentTypes['deleteStepUnion']> = {
  __resolveType: TypeResolveFn<'deleteStepResponse' | 'deleteStepError', ParentType, ContextType>;
};

export type DeleteWaistCircumferenceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWaistCircumferenceError'] = ResolversParentTypes['deleteWaistCircumferenceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteWaistCircumferenceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWaistCircumferenceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWaistCircumferenceResponse'] = ResolversParentTypes['deleteWaistCircumferenceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWaistCircumferenceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWaistCircumferenceUnion'] = ResolversParentTypes['deleteWaistCircumferenceUnion']> = {
  __resolveType: TypeResolveFn<'deleteWaistCircumferenceResponse' | 'deleteWaistCircumferenceError', ParentType, ContextType>;
};

export type DeleteWalkingHeartRateAverageErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWalkingHeartRateAverageError'] = ResolversParentTypes['deleteWalkingHeartRateAverageError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteWalkingHeartRateAverageErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWalkingHeartRateAverageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWalkingHeartRateAverageResponse'] = ResolversParentTypes['deleteWalkingHeartRateAverageResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWalkingHeartRateAverageUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWalkingHeartRateAverageUnion'] = ResolversParentTypes['deleteWalkingHeartRateAverageUnion']> = {
  __resolveType: TypeResolveFn<'deleteWalkingHeartRateAverageResponse' | 'deleteWalkingHeartRateAverageError', ParentType, ContextType>;
};

export type DeleteWalkingRunningDistanceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWalkingRunningDistanceError'] = ResolversParentTypes['deleteWalkingRunningDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteWalkingRunningDistanceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWalkingRunningDistanceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWalkingRunningDistanceResponse'] = ResolversParentTypes['deleteWalkingRunningDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWalkingRunningDistanceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWalkingRunningDistanceUnion'] = ResolversParentTypes['deleteWalkingRunningDistanceUnion']> = {
  __resolveType: TypeResolveFn<'deleteWalkingRunningDistanceResponse' | 'deleteWalkingRunningDistanceError', ParentType, ContextType>;
};

export type DeleteWeightErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWeightError'] = ResolversParentTypes['deleteWeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['deleteWeightErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWeightResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWeightResponse'] = ResolversParentTypes['deleteWeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DeleteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWeightUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteWeightUnion'] = ResolversParentTypes['deleteWeightUnion']> = {
  __resolveType: TypeResolveFn<'deleteWeightResponse' | 'deleteWeightError', ParentType, ContextType>;
};

export type DrivingScoreAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['drivingScoreAllError'] = ResolversParentTypes['drivingScoreAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['drivingScoreAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DrivingScoreAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['drivingScoreAllResponse'] = ResolversParentTypes['drivingScoreAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['DrivingScoreType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DrivingScoreAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['drivingScoreAllUnion'] = ResolversParentTypes['drivingScoreAllUnion']> = {
  __resolveType: TypeResolveFn<'drivingScoreAllResponse' | 'drivingScoreAllError', ParentType, ContextType>;
};

export type DrivingScoreErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['drivingScoreError'] = ResolversParentTypes['drivingScoreError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['drivingScoreErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DrivingScoreResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['drivingScoreResponse'] = ResolversParentTypes['drivingScoreResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DrivingScoreType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DrivingScoreUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['drivingScoreUnion'] = ResolversParentTypes['drivingScoreUnion']> = {
  __resolveType: TypeResolveFn<'drivingScoreResponse' | 'drivingScoreError', ParentType, ContextType>;
};

export type FlightsClimbedAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['flightsClimbedAllError'] = ResolversParentTypes['flightsClimbedAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['flightsClimbedAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlightsClimbedAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flightsClimbedAllResponse'] = ResolversParentTypes['flightsClimbedAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlightsClimbedAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['flightsClimbedAllUnion'] = ResolversParentTypes['flightsClimbedAllUnion']> = {
  __resolveType: TypeResolveFn<'flightsClimbedAllResponse' | 'flightsClimbedAllError', ParentType, ContextType>;
};

export type FlightsClimbedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['flightsClimbedError'] = ResolversParentTypes['flightsClimbedError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['flightsClimbedErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlightsClimbedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flightsClimbedResponse'] = ResolversParentTypes['flightsClimbedResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlightsClimbedUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['flightsClimbedUnion'] = ResolversParentTypes['flightsClimbedUnion']> = {
  __resolveType: TypeResolveFn<'flightsClimbedResponse' | 'flightsClimbedError', ParentType, ContextType>;
};

export type HeartrateAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateAllError'] = ResolversParentTypes['heartrateAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heartrateAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeartrateAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateAllResponse'] = ResolversParentTypes['heartrateAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeartrateAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateAllUnion'] = ResolversParentTypes['heartrateAllUnion']> = {
  __resolveType: TypeResolveFn<'heartrateAllResponse' | 'heartrateAllError', ParentType, ContextType>;
};

export type HeartrateErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateError'] = ResolversParentTypes['heartrateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heartrateErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeartrateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateResponse'] = ResolversParentTypes['heartrateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeartrateUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateUnion'] = ResolversParentTypes['heartrateUnion']> = {
  __resolveType: TypeResolveFn<'heartrateResponse' | 'heartrateError', ParentType, ContextType>;
};

export type HeartrateVariabilityAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateVariabilityAllError'] = ResolversParentTypes['heartrateVariabilityAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heartrateVariabilityAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeartrateVariabilityAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateVariabilityAllResponse'] = ResolversParentTypes['heartrateVariabilityAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeartrateVariabilityAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateVariabilityAllUnion'] = ResolversParentTypes['heartrateVariabilityAllUnion']> = {
  __resolveType: TypeResolveFn<'heartrateVariabilityAllResponse' | 'heartrateVariabilityAllError', ParentType, ContextType>;
};

export type HeartrateVariabilityErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateVariabilityError'] = ResolversParentTypes['heartrateVariabilityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heartrateVariabilityErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeartrateVariabilityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateVariabilityResponse'] = ResolversParentTypes['heartrateVariabilityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeartrateVariabilityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['heartrateVariabilityUnion'] = ResolversParentTypes['heartrateVariabilityUnion']> = {
  __resolveType: TypeResolveFn<'heartrateVariabilityResponse' | 'heartrateVariabilityError', ParentType, ContextType>;
};

export type HeightAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['heightAllError'] = ResolversParentTypes['heightAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heightAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeightAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['heightAllResponse'] = ResolversParentTypes['heightAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeightAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['heightAllUnion'] = ResolversParentTypes['heightAllUnion']> = {
  __resolveType: TypeResolveFn<'heightAllResponse' | 'heightAllError', ParentType, ContextType>;
};

export type HeightErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['heightError'] = ResolversParentTypes['heightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['heightErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeightResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['heightResponse'] = ResolversParentTypes['heightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeightUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['heightUnion'] = ResolversParentTypes['heightUnion']> = {
  __resolveType: TypeResolveFn<'heightResponse' | 'heightError', ParentType, ContextType>;
};

export type IncrementCollectionErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['incrementCollectionError'] = ResolversParentTypes['incrementCollectionError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['incrementCollectionErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementCollectionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['incrementCollectionResponse'] = ResolversParentTypes['incrementCollectionResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementCollectionUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['incrementCollectionUnion'] = ResolversParentTypes['incrementCollectionUnion']> = {
  __resolveType: TypeResolveFn<'incrementCollectionResponse' | 'incrementCollectionError', ParentType, ContextType>;
};

export type IncrementSteinErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['incrementSteinError'] = ResolversParentTypes['incrementSteinError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['incrementSteinErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementSteinResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['incrementSteinResponse'] = ResolversParentTypes['incrementSteinResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementSteinUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['incrementSteinUnion'] = ResolversParentTypes['incrementSteinUnion']> = {
  __resolveType: TypeResolveFn<'incrementSteinResponse' | 'incrementSteinError', ParentType, ContextType>;
};

export type MigraineAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['migraineAllError'] = ResolversParentTypes['migraineAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['migraineAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MigraineAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['migraineAllResponse'] = ResolversParentTypes['migraineAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['MigraineType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MigraineAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['migraineAllUnion'] = ResolversParentTypes['migraineAllUnion']> = {
  __resolveType: TypeResolveFn<'migraineAllResponse' | 'migraineAllError', ParentType, ContextType>;
};

export type MigraineErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['migraineError'] = ResolversParentTypes['migraineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['migraineErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MigraineResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['migraineResponse'] = ResolversParentTypes['migraineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['MigraineType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MigraineUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['migraineUnion'] = ResolversParentTypes['migraineUnion']> = {
  __resolveType: TypeResolveFn<'migraineResponse' | 'migraineError', ParentType, ContextType>;
};

export type OxygenSaturationAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['oxygenSaturationAllError'] = ResolversParentTypes['oxygenSaturationAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['oxygenSaturationAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OxygenSaturationAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['oxygenSaturationAllResponse'] = ResolversParentTypes['oxygenSaturationAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OxygenSaturationAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['oxygenSaturationAllUnion'] = ResolversParentTypes['oxygenSaturationAllUnion']> = {
  __resolveType: TypeResolveFn<'oxygenSaturationAllResponse' | 'oxygenSaturationAllError', ParentType, ContextType>;
};

export type OxygenSaturationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['oxygenSaturationError'] = ResolversParentTypes['oxygenSaturationError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['oxygenSaturationErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OxygenSaturationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['oxygenSaturationResponse'] = ResolversParentTypes['oxygenSaturationResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OxygenSaturationUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['oxygenSaturationUnion'] = ResolversParentTypes['oxygenSaturationUnion']> = {
  __resolveType: TypeResolveFn<'oxygenSaturationResponse' | 'oxygenSaturationError', ParentType, ContextType>;
};

export type PlateletsAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['plateletsAllError'] = ResolversParentTypes['plateletsAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['plateletsAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlateletsAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['plateletsAllResponse'] = ResolversParentTypes['plateletsAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlateletType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlateletsAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['plateletsAllUnion'] = ResolversParentTypes['plateletsAllUnion']> = {
  __resolveType: TypeResolveFn<'plateletsAllResponse' | 'plateletsAllError', ParentType, ContextType>;
};

export type PlateletsErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['plateletsError'] = ResolversParentTypes['plateletsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['plateletsErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlateletsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['plateletsResponse'] = ResolversParentTypes['plateletsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['PlateletType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlateletsUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['plateletsUnion'] = ResolversParentTypes['plateletsUnion']> = {
  __resolveType: TypeResolveFn<'plateletsResponse' | 'plateletsError', ParentType, ContextType>;
};

export type RefuelAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['refuelAllError'] = ResolversParentTypes['refuelAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['refuelAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefuelAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['refuelAllResponse'] = ResolversParentTypes['refuelAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['RefuelType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefuelAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['refuelAllUnion'] = ResolversParentTypes['refuelAllUnion']> = {
  __resolveType: TypeResolveFn<'refuelAllResponse' | 'refuelAllError', ParentType, ContextType>;
};

export type RefuelErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['refuelError'] = ResolversParentTypes['refuelError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['refuelErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefuelResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['refuelResponse'] = ResolversParentTypes['refuelResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['RefuelType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefuelUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['refuelUnion'] = ResolversParentTypes['refuelUnion']> = {
  __resolveType: TypeResolveFn<'refuelResponse' | 'refuelError', ParentType, ContextType>;
};

export type RestingEnergyAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingEnergyAllError'] = ResolversParentTypes['restingEnergyAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['restingEnergyAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestingEnergyAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingEnergyAllResponse'] = ResolversParentTypes['restingEnergyAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestingEnergyAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingEnergyAllUnion'] = ResolversParentTypes['restingEnergyAllUnion']> = {
  __resolveType: TypeResolveFn<'restingEnergyAllResponse' | 'restingEnergyAllError', ParentType, ContextType>;
};

export type RestingEnergyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingEnergyError'] = ResolversParentTypes['restingEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['restingEnergyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestingEnergyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingEnergyResponse'] = ResolversParentTypes['restingEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestingEnergyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingEnergyUnion'] = ResolversParentTypes['restingEnergyUnion']> = {
  __resolveType: TypeResolveFn<'restingEnergyResponse' | 'restingEnergyError', ParentType, ContextType>;
};

export type RestingHeartrateAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingHeartrateAllError'] = ResolversParentTypes['restingHeartrateAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['restingHeartrateAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestingHeartrateAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingHeartrateAllResponse'] = ResolversParentTypes['restingHeartrateAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestingHeartrateAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingHeartrateAllUnion'] = ResolversParentTypes['restingHeartrateAllUnion']> = {
  __resolveType: TypeResolveFn<'restingHeartrateAllResponse' | 'restingHeartrateAllError', ParentType, ContextType>;
};

export type RestingHeartrateErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingHeartrateError'] = ResolversParentTypes['restingHeartrateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['restingHeartrateErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestingHeartrateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingHeartrateResponse'] = ResolversParentTypes['restingHeartrateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestingHeartrateUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['restingHeartrateUnion'] = ResolversParentTypes['restingHeartrateUnion']> = {
  __resolveType: TypeResolveFn<'restingHeartrateResponse' | 'restingHeartrateError', ParentType, ContextType>;
};

export type SleepAnalysisAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['sleepAnalysisAllError'] = ResolversParentTypes['sleepAnalysisAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['sleepAnalysisAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SleepAnalysisAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['sleepAnalysisAllResponse'] = ResolversParentTypes['sleepAnalysisAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SleepAnalysisAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['sleepAnalysisAllUnion'] = ResolversParentTypes['sleepAnalysisAllUnion']> = {
  __resolveType: TypeResolveFn<'sleepAnalysisAllResponse' | 'sleepAnalysisAllError', ParentType, ContextType>;
};

export type SleepAnalysisErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['sleepAnalysisError'] = ResolversParentTypes['sleepAnalysisError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['sleepAnalysisErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SleepAnalysisResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['sleepAnalysisResponse'] = ResolversParentTypes['sleepAnalysisResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SleepAnalysisUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['sleepAnalysisUnion'] = ResolversParentTypes['sleepAnalysisUnion']> = {
  __resolveType: TypeResolveFn<'sleepAnalysisResponse' | 'sleepAnalysisError', ParentType, ContextType>;
};

export type StepsAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['stepsAllError'] = ResolversParentTypes['stepsAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['stepsAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StepsAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['stepsAllResponse'] = ResolversParentTypes['stepsAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StepsAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['stepsAllUnion'] = ResolversParentTypes['stepsAllUnion']> = {
  __resolveType: TypeResolveFn<'stepsAllResponse' | 'stepsAllError', ParentType, ContextType>;
};

export type StepsErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['stepsError'] = ResolversParentTypes['stepsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['stepsErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StepsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['stepsResponse'] = ResolversParentTypes['stepsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StepsUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['stepsUnion'] = ResolversParentTypes['stepsUnion']> = {
  __resolveType: TypeResolveFn<'stepsResponse' | 'stepsError', ParentType, ContextType>;
};

export type SwimmingDistanceAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['swimmingDistanceAllError'] = ResolversParentTypes['swimmingDistanceAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['swimmingDistanceAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwimmingDistanceAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['swimmingDistanceAllResponse'] = ResolversParentTypes['swimmingDistanceAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwimmingDistanceAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['swimmingDistanceAllUnion'] = ResolversParentTypes['swimmingDistanceAllUnion']> = {
  __resolveType: TypeResolveFn<'swimmingDistanceAllResponse' | 'swimmingDistanceAllError', ParentType, ContextType>;
};

export type SwimmingDistanceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['swimmingDistanceError'] = ResolversParentTypes['swimmingDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['swimmingDistanceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwimmingDistanceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['swimmingDistanceResponse'] = ResolversParentTypes['swimmingDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwimmingDistanceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['swimmingDistanceUnion'] = ResolversParentTypes['swimmingDistanceUnion']> = {
  __resolveType: TypeResolveFn<'swimmingDistanceResponse' | 'swimmingDistanceError', ParentType, ContextType>;
};

export type UpdateActiveEnergyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateActiveEnergyError'] = ResolversParentTypes['updateActiveEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateActiveEnergyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateActiveEnergyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateActiveEnergyResponse'] = ResolversParentTypes['updateActiveEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateActiveEnergyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateActiveEnergyUnion'] = ResolversParentTypes['updateActiveEnergyUnion']> = {
  __resolveType: TypeResolveFn<'updateActiveEnergyResponse' | 'updateActiveEnergyError', ParentType, ContextType>;
};

export type UpdateActivityErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateActivityError'] = ResolversParentTypes['updateActivityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateActivityErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateActivityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateActivityResponse'] = ResolversParentTypes['updateActivityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateActivityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateActivityUnion'] = ResolversParentTypes['updateActivityUnion']> = {
  __resolveType: TypeResolveFn<'updateActivityResponse' | 'updateActivityError', ParentType, ContextType>;
};

export type UpdateAnxietyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateAnxietyError'] = ResolversParentTypes['updateAnxietyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateAnxietyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAnxietyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateAnxietyResponse'] = ResolversParentTypes['updateAnxietyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAnxietyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateAnxietyUnion'] = ResolversParentTypes['updateAnxietyUnion']> = {
  __resolveType: TypeResolveFn<'updateAnxietyResponse' | 'updateAnxietyError', ParentType, ContextType>;
};

export type UpdateAverageMpgErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateAverageMPGError'] = ResolversParentTypes['updateAverageMPGError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateAverageMPGErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAverageMpgResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateAverageMPGResponse'] = ResolversParentTypes['updateAverageMPGResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['AverageMPGType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAverageMpgUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateAverageMPGUnion'] = ResolversParentTypes['updateAverageMPGUnion']> = {
  __resolveType: TypeResolveFn<'updateAverageMPGResponse' | 'updateAverageMPGError', ParentType, ContextType>;
};

export type UpdateBloodPressureErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateBloodPressureError'] = ResolversParentTypes['updateBloodPressureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateBloodPressureErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBloodPressureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateBloodPressureResponse'] = ResolversParentTypes['updateBloodPressureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['BloodPressureType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBloodPressureUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateBloodPressureUnion'] = ResolversParentTypes['updateBloodPressureUnion']> = {
  __resolveType: TypeResolveFn<'updateBloodPressureResponse' | 'updateBloodPressureError', ParentType, ContextType>;
};

export type UpdateBodyTemperatureErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateBodyTemperatureError'] = ResolversParentTypes['updateBodyTemperatureError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateBodyTemperatureErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBodyTemperatureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateBodyTemperatureResponse'] = ResolversParentTypes['updateBodyTemperatureResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBodyTemperatureUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateBodyTemperatureUnion'] = ResolversParentTypes['updateBodyTemperatureUnion']> = {
  __resolveType: TypeResolveFn<'updateBodyTemperatureResponse' | 'updateBodyTemperatureError', ParentType, ContextType>;
};

export type UpdateCaffeineErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCaffeineError'] = ResolversParentTypes['updateCaffeineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateCaffeineErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCaffeineResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCaffeineResponse'] = ResolversParentTypes['updateCaffeineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCaffeineUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCaffeineUnion'] = ResolversParentTypes['updateCaffeineUnion']> = {
  __resolveType: TypeResolveFn<'updateCaffeineResponse' | 'updateCaffeineError', ParentType, ContextType>;
};

export type UpdateCbcErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCbcError'] = ResolversParentTypes['updateCbcError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateCbcErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCbcResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCbcResponse'] = ResolversParentTypes['updateCbcResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CbcType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCbcUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCbcUnion'] = ResolversParentTypes['updateCbcUnion']> = {
  __resolveType: TypeResolveFn<'updateCbcResponse' | 'updateCbcError', ParentType, ContextType>;
};

export type UpdateCollectionErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCollectionError'] = ResolversParentTypes['updateCollectionError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateCollectionErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCollectionResponse'] = ResolversParentTypes['updateCollectionResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCollectionUnion'] = ResolversParentTypes['updateCollectionUnion']> = {
  __resolveType: TypeResolveFn<'updateCollectionResponse' | 'updateCollectionError', ParentType, ContextType>;
};

export type UpdateDrivingScoreErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateDrivingScoreError'] = ResolversParentTypes['updateDrivingScoreError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateDrivingScoreErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateDrivingScoreResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateDrivingScoreResponse'] = ResolversParentTypes['updateDrivingScoreResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['DrivingScoreType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateDrivingScoreUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateDrivingScoreUnion'] = ResolversParentTypes['updateDrivingScoreUnion']> = {
  __resolveType: TypeResolveFn<'updateDrivingScoreResponse' | 'updateDrivingScoreError', ParentType, ContextType>;
};

export type UpdateFlightsClimbedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateFlightsClimbedError'] = ResolversParentTypes['updateFlightsClimbedError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateFlightsClimbedErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFlightsClimbedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateFlightsClimbedResponse'] = ResolversParentTypes['updateFlightsClimbedResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFlightsClimbedUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateFlightsClimbedUnion'] = ResolversParentTypes['updateFlightsClimbedUnion']> = {
  __resolveType: TypeResolveFn<'updateFlightsClimbedResponse' | 'updateFlightsClimbedError', ParentType, ContextType>;
};

export type UpdateHeartRateErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateHeartRateError'] = ResolversParentTypes['updateHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateHeartRateErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateHeartRateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateHeartRateResponse'] = ResolversParentTypes['updateHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateHeartRateUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateHeartRateUnion'] = ResolversParentTypes['updateHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'updateHeartRateResponse' | 'updateHeartRateError', ParentType, ContextType>;
};

export type UpdateHeartRateVariabilityErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateHeartRateVariabilityError'] = ResolversParentTypes['updateHeartRateVariabilityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateHeartRateVariabilityErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateHeartRateVariabilityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateHeartRateVariabilityResponse'] = ResolversParentTypes['updateHeartRateVariabilityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateHeartRateVariabilityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateHeartRateVariabilityUnion'] = ResolversParentTypes['updateHeartRateVariabilityUnion']> = {
  __resolveType: TypeResolveFn<'updateHeartRateVariabilityResponse' | 'updateHeartRateVariabilityError', ParentType, ContextType>;
};

export type UpdateHeightErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateHeightError'] = ResolversParentTypes['updateHeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateHeightErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateHeightResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateHeightResponse'] = ResolversParentTypes['updateHeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateHeightUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateHeightUnion'] = ResolversParentTypes['updateHeightUnion']> = {
  __resolveType: TypeResolveFn<'updateHeightResponse' | 'updateHeightError', ParentType, ContextType>;
};

export type UpdateMigraineErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateMigraineError'] = ResolversParentTypes['updateMigraineError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateMigraineErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMigraineResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateMigraineResponse'] = ResolversParentTypes['updateMigraineResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['MigraineType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMigraineUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateMigraineUnion'] = ResolversParentTypes['updateMigraineUnion']> = {
  __resolveType: TypeResolveFn<'updateMigraineResponse' | 'updateMigraineError', ParentType, ContextType>;
};

export type UpdateOxygenSaturationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateOxygenSaturationError'] = ResolversParentTypes['updateOxygenSaturationError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateOxygenSaturationErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOxygenSaturationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateOxygenSaturationResponse'] = ResolversParentTypes['updateOxygenSaturationResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOxygenSaturationUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateOxygenSaturationUnion'] = ResolversParentTypes['updateOxygenSaturationUnion']> = {
  __resolveType: TypeResolveFn<'updateOxygenSaturationResponse' | 'updateOxygenSaturationError', ParentType, ContextType>;
};

export type UpdatePlateletsErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updatePlateletsError'] = ResolversParentTypes['updatePlateletsError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updatePlateletsErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePlateletsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updatePlateletsResponse'] = ResolversParentTypes['updatePlateletsResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['PlateletType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePlateletsUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updatePlateletsUnion'] = ResolversParentTypes['updatePlateletsUnion']> = {
  __resolveType: TypeResolveFn<'updatePlateletsResponse' | 'updatePlateletsError', ParentType, ContextType>;
};

export type UpdateRefuelErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRefuelError'] = ResolversParentTypes['updateRefuelError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateRefuelErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRefuelResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRefuelResponse'] = ResolversParentTypes['updateRefuelResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['RefuelType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRefuelUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRefuelUnion'] = ResolversParentTypes['updateRefuelUnion']> = {
  __resolveType: TypeResolveFn<'updateRefuelResponse' | 'updateRefuelError', ParentType, ContextType>;
};

export type UpdateRestingEnergyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRestingEnergyError'] = ResolversParentTypes['updateRestingEnergyError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateRestingEnergyErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRestingEnergyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRestingEnergyResponse'] = ResolversParentTypes['updateRestingEnergyResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRestingEnergyUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRestingEnergyUnion'] = ResolversParentTypes['updateRestingEnergyUnion']> = {
  __resolveType: TypeResolveFn<'updateRestingEnergyResponse' | 'updateRestingEnergyError', ParentType, ContextType>;
};

export type UpdateRestingHeartRateErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRestingHeartRateError'] = ResolversParentTypes['updateRestingHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateRestingHeartRateErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRestingHeartRateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRestingHeartRateResponse'] = ResolversParentTypes['updateRestingHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRestingHeartRateUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRestingHeartRateUnion'] = ResolversParentTypes['updateRestingHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'updateRestingHeartRateResponse' | 'updateRestingHeartRateError', ParentType, ContextType>;
};

export type UpdateSleepAnalysisErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSleepAnalysisError'] = ResolversParentTypes['updateSleepAnalysisError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateSleepAnalysisErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSleepAnalysisResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSleepAnalysisResponse'] = ResolversParentTypes['updateSleepAnalysisResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSleepAnalysisUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSleepAnalysisUnion'] = ResolversParentTypes['updateSleepAnalysisUnion']> = {
  __resolveType: TypeResolveFn<'updateSleepAnalysisResponse' | 'updateSleepAnalysisError', ParentType, ContextType>;
};

export type UpdateSteinErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSteinError'] = ResolversParentTypes['updateSteinError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateSteinErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSteinResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSteinResponse'] = ResolversParentTypes['updateSteinResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['CollectionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSteinUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSteinUnion'] = ResolversParentTypes['updateSteinUnion']> = {
  __resolveType: TypeResolveFn<'updateSteinResponse' | 'updateSteinError', ParentType, ContextType>;
};

export type UpdateStepErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateStepError'] = ResolversParentTypes['updateStepError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateStepErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateStepResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateStepResponse'] = ResolversParentTypes['updateStepResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateStepUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateStepUnion'] = ResolversParentTypes['updateStepUnion']> = {
  __resolveType: TypeResolveFn<'updateStepResponse' | 'updateStepError', ParentType, ContextType>;
};

export type UpdateSwimmingDistanceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSwimmingDistanceError'] = ResolversParentTypes['updateSwimmingDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateSwimmingDistanceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSwimmingDistanceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSwimmingDistanceResponse'] = ResolversParentTypes['updateSwimmingDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSwimmingDistanceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSwimmingDistanceUnion'] = ResolversParentTypes['updateSwimmingDistanceUnion']> = {
  __resolveType: TypeResolveFn<'updateSwimmingDistanceResponse' | 'updateSwimmingDistanceError', ParentType, ContextType>;
};

export type UpdateWaistCircumferenceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWaistCircumferenceError'] = ResolversParentTypes['updateWaistCircumferenceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateWaistCircumferenceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWaistCircumferenceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWaistCircumferenceResponse'] = ResolversParentTypes['updateWaistCircumferenceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWaistCircumferenceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWaistCircumferenceUnion'] = ResolversParentTypes['updateWaistCircumferenceUnion']> = {
  __resolveType: TypeResolveFn<'updateWaistCircumferenceResponse' | 'updateWaistCircumferenceError', ParentType, ContextType>;
};

export type UpdateWalkingHeartRateAverageErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWalkingHeartRateAverageError'] = ResolversParentTypes['updateWalkingHeartRateAverageError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateWalkingHeartRateAverageErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWalkingHeartRateAverageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWalkingHeartRateAverageResponse'] = ResolversParentTypes['updateWalkingHeartRateAverageResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWalkingHeartRateAverageUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWalkingHeartRateAverageUnion'] = ResolversParentTypes['updateWalkingHeartRateAverageUnion']> = {
  __resolveType: TypeResolveFn<'updateWalkingHeartRateAverageResponse' | 'updateWalkingHeartRateAverageError', ParentType, ContextType>;
};

export type UpdateWalkingRunningDistanceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWalkingRunningDistanceError'] = ResolversParentTypes['updateWalkingRunningDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateWalkingRunningDistanceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWalkingRunningDistanceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWalkingRunningDistanceResponse'] = ResolversParentTypes['updateWalkingRunningDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWalkingRunningDistanceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWalkingRunningDistanceUnion'] = ResolversParentTypes['updateWalkingRunningDistanceUnion']> = {
  __resolveType: TypeResolveFn<'updateWalkingRunningDistanceResponse' | 'updateWalkingRunningDistanceError', ParentType, ContextType>;
};

export type UpdateWeightErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWeightError'] = ResolversParentTypes['updateWeightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateWeightErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWeightResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWeightResponse'] = ResolversParentTypes['updateWeightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWeightUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateWeightUnion'] = ResolversParentTypes['updateWeightUnion']> = {
  __resolveType: TypeResolveFn<'updateWeightResponse' | 'updateWeightError', ParentType, ContextType>;
};

export type WaistCircumferenceAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['waistCircumferenceAllError'] = ResolversParentTypes['waistCircumferenceAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['waistCircumferenceAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WaistCircumferenceAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['waistCircumferenceAllResponse'] = ResolversParentTypes['waistCircumferenceAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WaistCircumferenceAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['waistCircumferenceAllUnion'] = ResolversParentTypes['waistCircumferenceAllUnion']> = {
  __resolveType: TypeResolveFn<'waistCircumferenceAllResponse' | 'waistCircumferenceAllError', ParentType, ContextType>;
};

export type WaistCircumferenceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['waistCircumferenceError'] = ResolversParentTypes['waistCircumferenceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['waistCircumferenceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WaistCircumferenceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['waistCircumferenceResponse'] = ResolversParentTypes['waistCircumferenceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WaistCircumferenceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['waistCircumferenceUnion'] = ResolversParentTypes['waistCircumferenceUnion']> = {
  __resolveType: TypeResolveFn<'waistCircumferenceResponse' | 'waistCircumferenceError', ParentType, ContextType>;
};

export type WalkingHeartrateAverageAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingHeartrateAverageAllError'] = ResolversParentTypes['walkingHeartrateAverageAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['walkingHeartrateAverageAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalkingHeartrateAverageAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingHeartrateAverageAllResponse'] = ResolversParentTypes['walkingHeartrateAverageAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalkingHeartrateAverageAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingHeartrateAverageAllUnion'] = ResolversParentTypes['walkingHeartrateAverageAllUnion']> = {
  __resolveType: TypeResolveFn<'walkingHeartrateAverageAllResponse' | 'walkingHeartrateAverageAllError', ParentType, ContextType>;
};

export type WalkingHeartrateAverageErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingHeartrateAverageError'] = ResolversParentTypes['walkingHeartrateAverageError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['walkingHeartrateAverageErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalkingHeartrateAverageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingHeartrateAverageResponse'] = ResolversParentTypes['walkingHeartrateAverageResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalkingHeartrateAverageUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingHeartrateAverageUnion'] = ResolversParentTypes['walkingHeartrateAverageUnion']> = {
  __resolveType: TypeResolveFn<'walkingHeartrateAverageResponse' | 'walkingHeartrateAverageError', ParentType, ContextType>;
};

export type WalkingRunningDistanceAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingRunningDistanceAllError'] = ResolversParentTypes['walkingRunningDistanceAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['walkingRunningDistanceAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalkingRunningDistanceAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingRunningDistanceAllResponse'] = ResolversParentTypes['walkingRunningDistanceAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthKitType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalkingRunningDistanceAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingRunningDistanceAllUnion'] = ResolversParentTypes['walkingRunningDistanceAllUnion']> = {
  __resolveType: TypeResolveFn<'walkingRunningDistanceAllResponse' | 'walkingRunningDistanceAllError', ParentType, ContextType>;
};

export type WalkingRunningDistanceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingRunningDistanceError'] = ResolversParentTypes['walkingRunningDistanceError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['walkingRunningDistanceErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalkingRunningDistanceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingRunningDistanceResponse'] = ResolversParentTypes['walkingRunningDistanceResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthKitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalkingRunningDistanceUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['walkingRunningDistanceUnion'] = ResolversParentTypes['walkingRunningDistanceUnion']> = {
  __resolveType: TypeResolveFn<'walkingRunningDistanceResponse' | 'walkingRunningDistanceError', ParentType, ContextType>;
};

export type WeightAllErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['weightAllError'] = ResolversParentTypes['weightAllError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['weightAllErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeightAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['weightAllResponse'] = ResolversParentTypes['weightAllResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeightAllUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['weightAllUnion'] = ResolversParentTypes['weightAllUnion']> = {
  __resolveType: TypeResolveFn<'weightAllResponse' | 'weightAllError', ParentType, ContextType>;
};

export type WeightErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['weightError'] = ResolversParentTypes['weightError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['weightErrorErrorCodesType']>, ParentType, ContextType>;
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeightResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['weightResponse'] = ResolversParentTypes['weightResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeightUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['weightUnion'] = ResolversParentTypes['weightUnion']> = {
  __resolveType: TypeResolveFn<'weightResponse' | 'weightError', ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ActivityType?: ActivityTypeResolvers<ContextType>;
  AverageMPGType?: AverageMpgTypeResolvers<ContextType>;
  BloodPressureType?: BloodPressureTypeResolvers<ContextType>;
  CbcType?: CbcTypeResolvers<ContextType>;
  CollectionType?: CollectionTypeResolvers<ContextType>;
  CollectionsAllError?: CollectionsAllErrorResolvers<ContextType>;
  CollectionsAllResponse?: CollectionsAllResponseResolvers<ContextType>;
  CollectionsAllUnion?: CollectionsAllUnionResolvers<ContextType>;
  CollectionsError?: CollectionsErrorResolvers<ContextType>;
  CollectionsResponse?: CollectionsResponseResolvers<ContextType>;
  CollectionsUnion?: CollectionsUnionResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DeleteType?: DeleteTypeResolvers<ContextType>;
  DrivingScoreType?: DrivingScoreTypeResolvers<ContextType>;
  HealthKitType?: HealthKitTypeResolvers<ContextType>;
  HealthKitUnionType?: HealthKitUnionTypeResolvers<ContextType>;
  HealthType?: HealthTypeResolvers<ContextType>;
  MigraineType?: MigraineTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PlateletType?: PlateletTypeResolvers<ContextType>;
  RefuelType?: RefuelTypeResolvers<ContextType>;
  RootQueryType?: RootQueryTypeResolvers<ContextType>;
  SteinsAllError?: SteinsAllErrorResolvers<ContextType>;
  SteinsAllResponse?: SteinsAllResponseResolvers<ContextType>;
  SteinsAllUnion?: SteinsAllUnionResolvers<ContextType>;
  SteinsError?: SteinsErrorResolvers<ContextType>;
  SteinsResponse?: SteinsResponseResolvers<ContextType>;
  SteinsUnion?: SteinsUnionResolvers<ContextType>;
  activeEnergyAllError?: ActiveEnergyAllErrorResolvers<ContextType>;
  activeEnergyAllResponse?: ActiveEnergyAllResponseResolvers<ContextType>;
  activeEnergyAllUnion?: ActiveEnergyAllUnionResolvers<ContextType>;
  activeEnergyError?: ActiveEnergyErrorResolvers<ContextType>;
  activeEnergyResponse?: ActiveEnergyResponseResolvers<ContextType>;
  activeEnergyUnion?: ActiveEnergyUnionResolvers<ContextType>;
  activityAllError?: ActivityAllErrorResolvers<ContextType>;
  activityAllResponse?: ActivityAllResponseResolvers<ContextType>;
  activityAllUnion?: ActivityAllUnionResolvers<ContextType>;
  activityError?: ActivityErrorResolvers<ContextType>;
  activityResponse?: ActivityResponseResolvers<ContextType>;
  activityUnion?: ActivityUnionResolvers<ContextType>;
  addActiveEnergyError?: AddActiveEnergyErrorResolvers<ContextType>;
  addActiveEnergyResponse?: AddActiveEnergyResponseResolvers<ContextType>;
  addActiveEnergyUnion?: AddActiveEnergyUnionResolvers<ContextType>;
  addActivityError?: AddActivityErrorResolvers<ContextType>;
  addActivityResponse?: AddActivityResponseResolvers<ContextType>;
  addActivityUnion?: AddActivityUnionResolvers<ContextType>;
  addAnxietyError?: AddAnxietyErrorResolvers<ContextType>;
  addAnxietyResponse?: AddAnxietyResponseResolvers<ContextType>;
  addAnxietyUnion?: AddAnxietyUnionResolvers<ContextType>;
  addAverageMPGError?: AddAverageMpgErrorResolvers<ContextType>;
  addAverageMPGResponse?: AddAverageMpgResponseResolvers<ContextType>;
  addAverageMPGUnion?: AddAverageMpgUnionResolvers<ContextType>;
  addBloodPressureError?: AddBloodPressureErrorResolvers<ContextType>;
  addBloodPressureResponse?: AddBloodPressureResponseResolvers<ContextType>;
  addBloodPressureUnion?: AddBloodPressureUnionResolvers<ContextType>;
  addBodyTemperatureError?: AddBodyTemperatureErrorResolvers<ContextType>;
  addBodyTemperatureResponse?: AddBodyTemperatureResponseResolvers<ContextType>;
  addBodyTemperatureUnion?: AddBodyTemperatureUnionResolvers<ContextType>;
  addCaffeineError?: AddCaffeineErrorResolvers<ContextType>;
  addCaffeineResponse?: AddCaffeineResponseResolvers<ContextType>;
  addCaffeineUnion?: AddCaffeineUnionResolvers<ContextType>;
  addCbcError?: AddCbcErrorResolvers<ContextType>;
  addCbcResponse?: AddCbcResponseResolvers<ContextType>;
  addCbcUnion?: AddCbcUnionResolvers<ContextType>;
  addCollectionError?: AddCollectionErrorResolvers<ContextType>;
  addCollectionResponse?: AddCollectionResponseResolvers<ContextType>;
  addCollectionUnion?: AddCollectionUnionResolvers<ContextType>;
  addDrivingScoreError?: AddDrivingScoreErrorResolvers<ContextType>;
  addDrivingScoreResponse?: AddDrivingScoreResponseResolvers<ContextType>;
  addDrivingScoreUnion?: AddDrivingScoreUnionResolvers<ContextType>;
  addFlightsClimbedError?: AddFlightsClimbedErrorResolvers<ContextType>;
  addFlightsClimbedResponse?: AddFlightsClimbedResponseResolvers<ContextType>;
  addFlightsClimbedUnion?: AddFlightsClimbedUnionResolvers<ContextType>;
  addHealthKitError?: AddHealthKitErrorResolvers<ContextType>;
  addHealthKitResponse?: AddHealthKitResponseResolvers<ContextType>;
  addHealthKitUnion?: AddHealthKitUnionResolvers<ContextType>;
  addHeartRateError?: AddHeartRateErrorResolvers<ContextType>;
  addHeartRateResponse?: AddHeartRateResponseResolvers<ContextType>;
  addHeartRateUnion?: AddHeartRateUnionResolvers<ContextType>;
  addHeartRateVariabilityError?: AddHeartRateVariabilityErrorResolvers<ContextType>;
  addHeartRateVariabilityResponse?: AddHeartRateVariabilityResponseResolvers<ContextType>;
  addHeartRateVariabilityUnion?: AddHeartRateVariabilityUnionResolvers<ContextType>;
  addHeightError?: AddHeightErrorResolvers<ContextType>;
  addHeightResponse?: AddHeightResponseResolvers<ContextType>;
  addHeightUnion?: AddHeightUnionResolvers<ContextType>;
  addMigraineError?: AddMigraineErrorResolvers<ContextType>;
  addMigraineResponse?: AddMigraineResponseResolvers<ContextType>;
  addMigraineUnion?: AddMigraineUnionResolvers<ContextType>;
  addOxygenSaturationError?: AddOxygenSaturationErrorResolvers<ContextType>;
  addOxygenSaturationResponse?: AddOxygenSaturationResponseResolvers<ContextType>;
  addOxygenSaturationUnion?: AddOxygenSaturationUnionResolvers<ContextType>;
  addPlateletsError?: AddPlateletsErrorResolvers<ContextType>;
  addPlateletsResponse?: AddPlateletsResponseResolvers<ContextType>;
  addPlateletsUnion?: AddPlateletsUnionResolvers<ContextType>;
  addRefuelError?: AddRefuelErrorResolvers<ContextType>;
  addRefuelResponse?: AddRefuelResponseResolvers<ContextType>;
  addRefuelUnion?: AddRefuelUnionResolvers<ContextType>;
  addRestingEnergyError?: AddRestingEnergyErrorResolvers<ContextType>;
  addRestingEnergyResponse?: AddRestingEnergyResponseResolvers<ContextType>;
  addRestingEnergyUnion?: AddRestingEnergyUnionResolvers<ContextType>;
  addRestingHeartRateError?: AddRestingHeartRateErrorResolvers<ContextType>;
  addRestingHeartRateResponse?: AddRestingHeartRateResponseResolvers<ContextType>;
  addRestingHeartRateUnion?: AddRestingHeartRateUnionResolvers<ContextType>;
  addSleepAnalysisError?: AddSleepAnalysisErrorResolvers<ContextType>;
  addSleepAnalysisResponse?: AddSleepAnalysisResponseResolvers<ContextType>;
  addSleepAnalysisUnion?: AddSleepAnalysisUnionResolvers<ContextType>;
  addSteinError?: AddSteinErrorResolvers<ContextType>;
  addSteinResponse?: AddSteinResponseResolvers<ContextType>;
  addSteinUnion?: AddSteinUnionResolvers<ContextType>;
  addStepError?: AddStepErrorResolvers<ContextType>;
  addStepResponse?: AddStepResponseResolvers<ContextType>;
  addStepUnion?: AddStepUnionResolvers<ContextType>;
  addSwimmingDistanceError?: AddSwimmingDistanceErrorResolvers<ContextType>;
  addSwimmingDistanceResponse?: AddSwimmingDistanceResponseResolvers<ContextType>;
  addSwimmingDistanceUnion?: AddSwimmingDistanceUnionResolvers<ContextType>;
  addWaistCircumferenceError?: AddWaistCircumferenceErrorResolvers<ContextType>;
  addWaistCircumferenceResponse?: AddWaistCircumferenceResponseResolvers<ContextType>;
  addWaistCircumferenceUnion?: AddWaistCircumferenceUnionResolvers<ContextType>;
  addWalkingHeartRateAverageError?: AddWalkingHeartRateAverageErrorResolvers<ContextType>;
  addWalkingHeartRateAverageResponse?: AddWalkingHeartRateAverageResponseResolvers<ContextType>;
  addWalkingHeartRateAverageUnion?: AddWalkingHeartRateAverageUnionResolvers<ContextType>;
  addWalkingRunningDistanceError?: AddWalkingRunningDistanceErrorResolvers<ContextType>;
  addWalkingRunningDistanceResponse?: AddWalkingRunningDistanceResponseResolvers<ContextType>;
  addWalkingRunningDistanceUnion?: AddWalkingRunningDistanceUnionResolvers<ContextType>;
  addWeightError?: AddWeightErrorResolvers<ContextType>;
  addWeightResponse?: AddWeightResponseResolvers<ContextType>;
  addWeightUnion?: AddWeightUnionResolvers<ContextType>;
  anxietyAllError?: AnxietyAllErrorResolvers<ContextType>;
  anxietyAllResponse?: AnxietyAllResponseResolvers<ContextType>;
  anxietyAllUnion?: AnxietyAllUnionResolvers<ContextType>;
  anxietyError?: AnxietyErrorResolvers<ContextType>;
  anxietyResponse?: AnxietyResponseResolvers<ContextType>;
  anxietyUnion?: AnxietyUnionResolvers<ContextType>;
  averageMPGAllError?: AverageMpgAllErrorResolvers<ContextType>;
  averageMPGAllResponse?: AverageMpgAllResponseResolvers<ContextType>;
  averageMPGAllUnion?: AverageMpgAllUnionResolvers<ContextType>;
  averageMPGError?: AverageMpgErrorResolvers<ContextType>;
  averageMPGResponse?: AverageMpgResponseResolvers<ContextType>;
  averageMPGUnion?: AverageMpgUnionResolvers<ContextType>;
  bloodPressureAllError?: BloodPressureAllErrorResolvers<ContextType>;
  bloodPressureAllResponse?: BloodPressureAllResponseResolvers<ContextType>;
  bloodPressureAllUnion?: BloodPressureAllUnionResolvers<ContextType>;
  bloodPressureError?: BloodPressureErrorResolvers<ContextType>;
  bloodPressureResponse?: BloodPressureResponseResolvers<ContextType>;
  bloodPressureUnion?: BloodPressureUnionResolvers<ContextType>;
  bodyTemperatureAllError?: BodyTemperatureAllErrorResolvers<ContextType>;
  bodyTemperatureAllResponse?: BodyTemperatureAllResponseResolvers<ContextType>;
  bodyTemperatureAllUnion?: BodyTemperatureAllUnionResolvers<ContextType>;
  bodyTemperatureError?: BodyTemperatureErrorResolvers<ContextType>;
  bodyTemperatureResponse?: BodyTemperatureResponseResolvers<ContextType>;
  bodyTemperatureUnion?: BodyTemperatureUnionResolvers<ContextType>;
  caffeineAllError?: CaffeineAllErrorResolvers<ContextType>;
  caffeineAllResponse?: CaffeineAllResponseResolvers<ContextType>;
  caffeineAllUnion?: CaffeineAllUnionResolvers<ContextType>;
  caffeineError?: CaffeineErrorResolvers<ContextType>;
  caffeineResponse?: CaffeineResponseResolvers<ContextType>;
  caffeineUnion?: CaffeineUnionResolvers<ContextType>;
  cbcAllError?: CbcAllErrorResolvers<ContextType>;
  cbcAllResponse?: CbcAllResponseResolvers<ContextType>;
  cbcAllUnion?: CbcAllUnionResolvers<ContextType>;
  cbcError?: CbcErrorResolvers<ContextType>;
  cbcResponse?: CbcResponseResolvers<ContextType>;
  cbcUnion?: CbcUnionResolvers<ContextType>;
  deleteActiveEnergyError?: DeleteActiveEnergyErrorResolvers<ContextType>;
  deleteActiveEnergyResponse?: DeleteActiveEnergyResponseResolvers<ContextType>;
  deleteActiveEnergyUnion?: DeleteActiveEnergyUnionResolvers<ContextType>;
  deleteActivityError?: DeleteActivityErrorResolvers<ContextType>;
  deleteActivityResponse?: DeleteActivityResponseResolvers<ContextType>;
  deleteActivityUnion?: DeleteActivityUnionResolvers<ContextType>;
  deleteAnxietyError?: DeleteAnxietyErrorResolvers<ContextType>;
  deleteAnxietyResponse?: DeleteAnxietyResponseResolvers<ContextType>;
  deleteAnxietyUnion?: DeleteAnxietyUnionResolvers<ContextType>;
  deleteAverageMPGError?: DeleteAverageMpgErrorResolvers<ContextType>;
  deleteAverageMPGResponse?: DeleteAverageMpgResponseResolvers<ContextType>;
  deleteAverageMPGUnion?: DeleteAverageMpgUnionResolvers<ContextType>;
  deleteBloodPressureError?: DeleteBloodPressureErrorResolvers<ContextType>;
  deleteBloodPressureResponse?: DeleteBloodPressureResponseResolvers<ContextType>;
  deleteBloodPressureUnion?: DeleteBloodPressureUnionResolvers<ContextType>;
  deleteBodyTemperatureError?: DeleteBodyTemperatureErrorResolvers<ContextType>;
  deleteBodyTemperatureResponse?: DeleteBodyTemperatureResponseResolvers<ContextType>;
  deleteBodyTemperatureUnion?: DeleteBodyTemperatureUnionResolvers<ContextType>;
  deleteCbcError?: DeleteCbcErrorResolvers<ContextType>;
  deleteCbcResponse?: DeleteCbcResponseResolvers<ContextType>;
  deleteCbcUnion?: DeleteCbcUnionResolvers<ContextType>;
  deleteCollectionError?: DeleteCollectionErrorResolvers<ContextType>;
  deleteCollectionResponse?: DeleteCollectionResponseResolvers<ContextType>;
  deleteCollectionUnion?: DeleteCollectionUnionResolvers<ContextType>;
  deleteDrivingScoreError?: DeleteDrivingScoreErrorResolvers<ContextType>;
  deleteDrivingScoreResponse?: DeleteDrivingScoreResponseResolvers<ContextType>;
  deleteDrivingScoreUnion?: DeleteDrivingScoreUnionResolvers<ContextType>;
  deleteFlightsClimbedError?: DeleteFlightsClimbedErrorResolvers<ContextType>;
  deleteFlightsClimbedResponse?: DeleteFlightsClimbedResponseResolvers<ContextType>;
  deleteFlightsClimbedUnion?: DeleteFlightsClimbedUnionResolvers<ContextType>;
  deleteHeartRateError?: DeleteHeartRateErrorResolvers<ContextType>;
  deleteHeartRateResponse?: DeleteHeartRateResponseResolvers<ContextType>;
  deleteHeartRateUnion?: DeleteHeartRateUnionResolvers<ContextType>;
  deleteHeartRateVariabilityError?: DeleteHeartRateVariabilityErrorResolvers<ContextType>;
  deleteHeartRateVariabilityResponse?: DeleteHeartRateVariabilityResponseResolvers<ContextType>;
  deleteHeartRateVariabilityUnion?: DeleteHeartRateVariabilityUnionResolvers<ContextType>;
  deleteHeightError?: DeleteHeightErrorResolvers<ContextType>;
  deleteHeightResponse?: DeleteHeightResponseResolvers<ContextType>;
  deleteHeightUnion?: DeleteHeightUnionResolvers<ContextType>;
  deleteMigraineError?: DeleteMigraineErrorResolvers<ContextType>;
  deleteMigraineResponse?: DeleteMigraineResponseResolvers<ContextType>;
  deleteMigraineUnion?: DeleteMigraineUnionResolvers<ContextType>;
  deleteOxygenSaturationError?: DeleteOxygenSaturationErrorResolvers<ContextType>;
  deleteOxygenSaturationResponse?: DeleteOxygenSaturationResponseResolvers<ContextType>;
  deleteOxygenSaturationUnion?: DeleteOxygenSaturationUnionResolvers<ContextType>;
  deletePlateletsError?: DeletePlateletsErrorResolvers<ContextType>;
  deletePlateletsResponse?: DeletePlateletsResponseResolvers<ContextType>;
  deletePlateletsUnion?: DeletePlateletsUnionResolvers<ContextType>;
  deleteRefuelError?: DeleteRefuelErrorResolvers<ContextType>;
  deleteRefuelResponse?: DeleteRefuelResponseResolvers<ContextType>;
  deleteRefuelUnion?: DeleteRefuelUnionResolvers<ContextType>;
  deleteRestingEnergyError?: DeleteRestingEnergyErrorResolvers<ContextType>;
  deleteRestingEnergyResponse?: DeleteRestingEnergyResponseResolvers<ContextType>;
  deleteRestingEnergyUnion?: DeleteRestingEnergyUnionResolvers<ContextType>;
  deleteRestingHeartRateError?: DeleteRestingHeartRateErrorResolvers<ContextType>;
  deleteRestingHeartRateResponse?: DeleteRestingHeartRateResponseResolvers<ContextType>;
  deleteRestingHeartRateUnion?: DeleteRestingHeartRateUnionResolvers<ContextType>;
  deleteSteinError?: DeleteSteinErrorResolvers<ContextType>;
  deleteSteinResponse?: DeleteSteinResponseResolvers<ContextType>;
  deleteSteinUnion?: DeleteSteinUnionResolvers<ContextType>;
  deleteStepError?: DeleteStepErrorResolvers<ContextType>;
  deleteStepResponse?: DeleteStepResponseResolvers<ContextType>;
  deleteStepUnion?: DeleteStepUnionResolvers<ContextType>;
  deleteWaistCircumferenceError?: DeleteWaistCircumferenceErrorResolvers<ContextType>;
  deleteWaistCircumferenceResponse?: DeleteWaistCircumferenceResponseResolvers<ContextType>;
  deleteWaistCircumferenceUnion?: DeleteWaistCircumferenceUnionResolvers<ContextType>;
  deleteWalkingHeartRateAverageError?: DeleteWalkingHeartRateAverageErrorResolvers<ContextType>;
  deleteWalkingHeartRateAverageResponse?: DeleteWalkingHeartRateAverageResponseResolvers<ContextType>;
  deleteWalkingHeartRateAverageUnion?: DeleteWalkingHeartRateAverageUnionResolvers<ContextType>;
  deleteWalkingRunningDistanceError?: DeleteWalkingRunningDistanceErrorResolvers<ContextType>;
  deleteWalkingRunningDistanceResponse?: DeleteWalkingRunningDistanceResponseResolvers<ContextType>;
  deleteWalkingRunningDistanceUnion?: DeleteWalkingRunningDistanceUnionResolvers<ContextType>;
  deleteWeightError?: DeleteWeightErrorResolvers<ContextType>;
  deleteWeightResponse?: DeleteWeightResponseResolvers<ContextType>;
  deleteWeightUnion?: DeleteWeightUnionResolvers<ContextType>;
  drivingScoreAllError?: DrivingScoreAllErrorResolvers<ContextType>;
  drivingScoreAllResponse?: DrivingScoreAllResponseResolvers<ContextType>;
  drivingScoreAllUnion?: DrivingScoreAllUnionResolvers<ContextType>;
  drivingScoreError?: DrivingScoreErrorResolvers<ContextType>;
  drivingScoreResponse?: DrivingScoreResponseResolvers<ContextType>;
  drivingScoreUnion?: DrivingScoreUnionResolvers<ContextType>;
  flightsClimbedAllError?: FlightsClimbedAllErrorResolvers<ContextType>;
  flightsClimbedAllResponse?: FlightsClimbedAllResponseResolvers<ContextType>;
  flightsClimbedAllUnion?: FlightsClimbedAllUnionResolvers<ContextType>;
  flightsClimbedError?: FlightsClimbedErrorResolvers<ContextType>;
  flightsClimbedResponse?: FlightsClimbedResponseResolvers<ContextType>;
  flightsClimbedUnion?: FlightsClimbedUnionResolvers<ContextType>;
  heartrateAllError?: HeartrateAllErrorResolvers<ContextType>;
  heartrateAllResponse?: HeartrateAllResponseResolvers<ContextType>;
  heartrateAllUnion?: HeartrateAllUnionResolvers<ContextType>;
  heartrateError?: HeartrateErrorResolvers<ContextType>;
  heartrateResponse?: HeartrateResponseResolvers<ContextType>;
  heartrateUnion?: HeartrateUnionResolvers<ContextType>;
  heartrateVariabilityAllError?: HeartrateVariabilityAllErrorResolvers<ContextType>;
  heartrateVariabilityAllResponse?: HeartrateVariabilityAllResponseResolvers<ContextType>;
  heartrateVariabilityAllUnion?: HeartrateVariabilityAllUnionResolvers<ContextType>;
  heartrateVariabilityError?: HeartrateVariabilityErrorResolvers<ContextType>;
  heartrateVariabilityResponse?: HeartrateVariabilityResponseResolvers<ContextType>;
  heartrateVariabilityUnion?: HeartrateVariabilityUnionResolvers<ContextType>;
  heightAllError?: HeightAllErrorResolvers<ContextType>;
  heightAllResponse?: HeightAllResponseResolvers<ContextType>;
  heightAllUnion?: HeightAllUnionResolvers<ContextType>;
  heightError?: HeightErrorResolvers<ContextType>;
  heightResponse?: HeightResponseResolvers<ContextType>;
  heightUnion?: HeightUnionResolvers<ContextType>;
  incrementCollectionError?: IncrementCollectionErrorResolvers<ContextType>;
  incrementCollectionResponse?: IncrementCollectionResponseResolvers<ContextType>;
  incrementCollectionUnion?: IncrementCollectionUnionResolvers<ContextType>;
  incrementSteinError?: IncrementSteinErrorResolvers<ContextType>;
  incrementSteinResponse?: IncrementSteinResponseResolvers<ContextType>;
  incrementSteinUnion?: IncrementSteinUnionResolvers<ContextType>;
  migraineAllError?: MigraineAllErrorResolvers<ContextType>;
  migraineAllResponse?: MigraineAllResponseResolvers<ContextType>;
  migraineAllUnion?: MigraineAllUnionResolvers<ContextType>;
  migraineError?: MigraineErrorResolvers<ContextType>;
  migraineResponse?: MigraineResponseResolvers<ContextType>;
  migraineUnion?: MigraineUnionResolvers<ContextType>;
  oxygenSaturationAllError?: OxygenSaturationAllErrorResolvers<ContextType>;
  oxygenSaturationAllResponse?: OxygenSaturationAllResponseResolvers<ContextType>;
  oxygenSaturationAllUnion?: OxygenSaturationAllUnionResolvers<ContextType>;
  oxygenSaturationError?: OxygenSaturationErrorResolvers<ContextType>;
  oxygenSaturationResponse?: OxygenSaturationResponseResolvers<ContextType>;
  oxygenSaturationUnion?: OxygenSaturationUnionResolvers<ContextType>;
  plateletsAllError?: PlateletsAllErrorResolvers<ContextType>;
  plateletsAllResponse?: PlateletsAllResponseResolvers<ContextType>;
  plateletsAllUnion?: PlateletsAllUnionResolvers<ContextType>;
  plateletsError?: PlateletsErrorResolvers<ContextType>;
  plateletsResponse?: PlateletsResponseResolvers<ContextType>;
  plateletsUnion?: PlateletsUnionResolvers<ContextType>;
  refuelAllError?: RefuelAllErrorResolvers<ContextType>;
  refuelAllResponse?: RefuelAllResponseResolvers<ContextType>;
  refuelAllUnion?: RefuelAllUnionResolvers<ContextType>;
  refuelError?: RefuelErrorResolvers<ContextType>;
  refuelResponse?: RefuelResponseResolvers<ContextType>;
  refuelUnion?: RefuelUnionResolvers<ContextType>;
  restingEnergyAllError?: RestingEnergyAllErrorResolvers<ContextType>;
  restingEnergyAllResponse?: RestingEnergyAllResponseResolvers<ContextType>;
  restingEnergyAllUnion?: RestingEnergyAllUnionResolvers<ContextType>;
  restingEnergyError?: RestingEnergyErrorResolvers<ContextType>;
  restingEnergyResponse?: RestingEnergyResponseResolvers<ContextType>;
  restingEnergyUnion?: RestingEnergyUnionResolvers<ContextType>;
  restingHeartrateAllError?: RestingHeartrateAllErrorResolvers<ContextType>;
  restingHeartrateAllResponse?: RestingHeartrateAllResponseResolvers<ContextType>;
  restingHeartrateAllUnion?: RestingHeartrateAllUnionResolvers<ContextType>;
  restingHeartrateError?: RestingHeartrateErrorResolvers<ContextType>;
  restingHeartrateResponse?: RestingHeartrateResponseResolvers<ContextType>;
  restingHeartrateUnion?: RestingHeartrateUnionResolvers<ContextType>;
  sleepAnalysisAllError?: SleepAnalysisAllErrorResolvers<ContextType>;
  sleepAnalysisAllResponse?: SleepAnalysisAllResponseResolvers<ContextType>;
  sleepAnalysisAllUnion?: SleepAnalysisAllUnionResolvers<ContextType>;
  sleepAnalysisError?: SleepAnalysisErrorResolvers<ContextType>;
  sleepAnalysisResponse?: SleepAnalysisResponseResolvers<ContextType>;
  sleepAnalysisUnion?: SleepAnalysisUnionResolvers<ContextType>;
  stepsAllError?: StepsAllErrorResolvers<ContextType>;
  stepsAllResponse?: StepsAllResponseResolvers<ContextType>;
  stepsAllUnion?: StepsAllUnionResolvers<ContextType>;
  stepsError?: StepsErrorResolvers<ContextType>;
  stepsResponse?: StepsResponseResolvers<ContextType>;
  stepsUnion?: StepsUnionResolvers<ContextType>;
  swimmingDistanceAllError?: SwimmingDistanceAllErrorResolvers<ContextType>;
  swimmingDistanceAllResponse?: SwimmingDistanceAllResponseResolvers<ContextType>;
  swimmingDistanceAllUnion?: SwimmingDistanceAllUnionResolvers<ContextType>;
  swimmingDistanceError?: SwimmingDistanceErrorResolvers<ContextType>;
  swimmingDistanceResponse?: SwimmingDistanceResponseResolvers<ContextType>;
  swimmingDistanceUnion?: SwimmingDistanceUnionResolvers<ContextType>;
  updateActiveEnergyError?: UpdateActiveEnergyErrorResolvers<ContextType>;
  updateActiveEnergyResponse?: UpdateActiveEnergyResponseResolvers<ContextType>;
  updateActiveEnergyUnion?: UpdateActiveEnergyUnionResolvers<ContextType>;
  updateActivityError?: UpdateActivityErrorResolvers<ContextType>;
  updateActivityResponse?: UpdateActivityResponseResolvers<ContextType>;
  updateActivityUnion?: UpdateActivityUnionResolvers<ContextType>;
  updateAnxietyError?: UpdateAnxietyErrorResolvers<ContextType>;
  updateAnxietyResponse?: UpdateAnxietyResponseResolvers<ContextType>;
  updateAnxietyUnion?: UpdateAnxietyUnionResolvers<ContextType>;
  updateAverageMPGError?: UpdateAverageMpgErrorResolvers<ContextType>;
  updateAverageMPGResponse?: UpdateAverageMpgResponseResolvers<ContextType>;
  updateAverageMPGUnion?: UpdateAverageMpgUnionResolvers<ContextType>;
  updateBloodPressureError?: UpdateBloodPressureErrorResolvers<ContextType>;
  updateBloodPressureResponse?: UpdateBloodPressureResponseResolvers<ContextType>;
  updateBloodPressureUnion?: UpdateBloodPressureUnionResolvers<ContextType>;
  updateBodyTemperatureError?: UpdateBodyTemperatureErrorResolvers<ContextType>;
  updateBodyTemperatureResponse?: UpdateBodyTemperatureResponseResolvers<ContextType>;
  updateBodyTemperatureUnion?: UpdateBodyTemperatureUnionResolvers<ContextType>;
  updateCaffeineError?: UpdateCaffeineErrorResolvers<ContextType>;
  updateCaffeineResponse?: UpdateCaffeineResponseResolvers<ContextType>;
  updateCaffeineUnion?: UpdateCaffeineUnionResolvers<ContextType>;
  updateCbcError?: UpdateCbcErrorResolvers<ContextType>;
  updateCbcResponse?: UpdateCbcResponseResolvers<ContextType>;
  updateCbcUnion?: UpdateCbcUnionResolvers<ContextType>;
  updateCollectionError?: UpdateCollectionErrorResolvers<ContextType>;
  updateCollectionResponse?: UpdateCollectionResponseResolvers<ContextType>;
  updateCollectionUnion?: UpdateCollectionUnionResolvers<ContextType>;
  updateDrivingScoreError?: UpdateDrivingScoreErrorResolvers<ContextType>;
  updateDrivingScoreResponse?: UpdateDrivingScoreResponseResolvers<ContextType>;
  updateDrivingScoreUnion?: UpdateDrivingScoreUnionResolvers<ContextType>;
  updateFlightsClimbedError?: UpdateFlightsClimbedErrorResolvers<ContextType>;
  updateFlightsClimbedResponse?: UpdateFlightsClimbedResponseResolvers<ContextType>;
  updateFlightsClimbedUnion?: UpdateFlightsClimbedUnionResolvers<ContextType>;
  updateHeartRateError?: UpdateHeartRateErrorResolvers<ContextType>;
  updateHeartRateResponse?: UpdateHeartRateResponseResolvers<ContextType>;
  updateHeartRateUnion?: UpdateHeartRateUnionResolvers<ContextType>;
  updateHeartRateVariabilityError?: UpdateHeartRateVariabilityErrorResolvers<ContextType>;
  updateHeartRateVariabilityResponse?: UpdateHeartRateVariabilityResponseResolvers<ContextType>;
  updateHeartRateVariabilityUnion?: UpdateHeartRateVariabilityUnionResolvers<ContextType>;
  updateHeightError?: UpdateHeightErrorResolvers<ContextType>;
  updateHeightResponse?: UpdateHeightResponseResolvers<ContextType>;
  updateHeightUnion?: UpdateHeightUnionResolvers<ContextType>;
  updateMigraineError?: UpdateMigraineErrorResolvers<ContextType>;
  updateMigraineResponse?: UpdateMigraineResponseResolvers<ContextType>;
  updateMigraineUnion?: UpdateMigraineUnionResolvers<ContextType>;
  updateOxygenSaturationError?: UpdateOxygenSaturationErrorResolvers<ContextType>;
  updateOxygenSaturationResponse?: UpdateOxygenSaturationResponseResolvers<ContextType>;
  updateOxygenSaturationUnion?: UpdateOxygenSaturationUnionResolvers<ContextType>;
  updatePlateletsError?: UpdatePlateletsErrorResolvers<ContextType>;
  updatePlateletsResponse?: UpdatePlateletsResponseResolvers<ContextType>;
  updatePlateletsUnion?: UpdatePlateletsUnionResolvers<ContextType>;
  updateRefuelError?: UpdateRefuelErrorResolvers<ContextType>;
  updateRefuelResponse?: UpdateRefuelResponseResolvers<ContextType>;
  updateRefuelUnion?: UpdateRefuelUnionResolvers<ContextType>;
  updateRestingEnergyError?: UpdateRestingEnergyErrorResolvers<ContextType>;
  updateRestingEnergyResponse?: UpdateRestingEnergyResponseResolvers<ContextType>;
  updateRestingEnergyUnion?: UpdateRestingEnergyUnionResolvers<ContextType>;
  updateRestingHeartRateError?: UpdateRestingHeartRateErrorResolvers<ContextType>;
  updateRestingHeartRateResponse?: UpdateRestingHeartRateResponseResolvers<ContextType>;
  updateRestingHeartRateUnion?: UpdateRestingHeartRateUnionResolvers<ContextType>;
  updateSleepAnalysisError?: UpdateSleepAnalysisErrorResolvers<ContextType>;
  updateSleepAnalysisResponse?: UpdateSleepAnalysisResponseResolvers<ContextType>;
  updateSleepAnalysisUnion?: UpdateSleepAnalysisUnionResolvers<ContextType>;
  updateSteinError?: UpdateSteinErrorResolvers<ContextType>;
  updateSteinResponse?: UpdateSteinResponseResolvers<ContextType>;
  updateSteinUnion?: UpdateSteinUnionResolvers<ContextType>;
  updateStepError?: UpdateStepErrorResolvers<ContextType>;
  updateStepResponse?: UpdateStepResponseResolvers<ContextType>;
  updateStepUnion?: UpdateStepUnionResolvers<ContextType>;
  updateSwimmingDistanceError?: UpdateSwimmingDistanceErrorResolvers<ContextType>;
  updateSwimmingDistanceResponse?: UpdateSwimmingDistanceResponseResolvers<ContextType>;
  updateSwimmingDistanceUnion?: UpdateSwimmingDistanceUnionResolvers<ContextType>;
  updateWaistCircumferenceError?: UpdateWaistCircumferenceErrorResolvers<ContextType>;
  updateWaistCircumferenceResponse?: UpdateWaistCircumferenceResponseResolvers<ContextType>;
  updateWaistCircumferenceUnion?: UpdateWaistCircumferenceUnionResolvers<ContextType>;
  updateWalkingHeartRateAverageError?: UpdateWalkingHeartRateAverageErrorResolvers<ContextType>;
  updateWalkingHeartRateAverageResponse?: UpdateWalkingHeartRateAverageResponseResolvers<ContextType>;
  updateWalkingHeartRateAverageUnion?: UpdateWalkingHeartRateAverageUnionResolvers<ContextType>;
  updateWalkingRunningDistanceError?: UpdateWalkingRunningDistanceErrorResolvers<ContextType>;
  updateWalkingRunningDistanceResponse?: UpdateWalkingRunningDistanceResponseResolvers<ContextType>;
  updateWalkingRunningDistanceUnion?: UpdateWalkingRunningDistanceUnionResolvers<ContextType>;
  updateWeightError?: UpdateWeightErrorResolvers<ContextType>;
  updateWeightResponse?: UpdateWeightResponseResolvers<ContextType>;
  updateWeightUnion?: UpdateWeightUnionResolvers<ContextType>;
  waistCircumferenceAllError?: WaistCircumferenceAllErrorResolvers<ContextType>;
  waistCircumferenceAllResponse?: WaistCircumferenceAllResponseResolvers<ContextType>;
  waistCircumferenceAllUnion?: WaistCircumferenceAllUnionResolvers<ContextType>;
  waistCircumferenceError?: WaistCircumferenceErrorResolvers<ContextType>;
  waistCircumferenceResponse?: WaistCircumferenceResponseResolvers<ContextType>;
  waistCircumferenceUnion?: WaistCircumferenceUnionResolvers<ContextType>;
  walkingHeartrateAverageAllError?: WalkingHeartrateAverageAllErrorResolvers<ContextType>;
  walkingHeartrateAverageAllResponse?: WalkingHeartrateAverageAllResponseResolvers<ContextType>;
  walkingHeartrateAverageAllUnion?: WalkingHeartrateAverageAllUnionResolvers<ContextType>;
  walkingHeartrateAverageError?: WalkingHeartrateAverageErrorResolvers<ContextType>;
  walkingHeartrateAverageResponse?: WalkingHeartrateAverageResponseResolvers<ContextType>;
  walkingHeartrateAverageUnion?: WalkingHeartrateAverageUnionResolvers<ContextType>;
  walkingRunningDistanceAllError?: WalkingRunningDistanceAllErrorResolvers<ContextType>;
  walkingRunningDistanceAllResponse?: WalkingRunningDistanceAllResponseResolvers<ContextType>;
  walkingRunningDistanceAllUnion?: WalkingRunningDistanceAllUnionResolvers<ContextType>;
  walkingRunningDistanceError?: WalkingRunningDistanceErrorResolvers<ContextType>;
  walkingRunningDistanceResponse?: WalkingRunningDistanceResponseResolvers<ContextType>;
  walkingRunningDistanceUnion?: WalkingRunningDistanceUnionResolvers<ContextType>;
  weightAllError?: WeightAllErrorResolvers<ContextType>;
  weightAllResponse?: WeightAllResponseResolvers<ContextType>;
  weightAllUnion?: WeightAllUnionResolvers<ContextType>;
  weightError?: WeightErrorResolvers<ContextType>;
  weightResponse?: WeightResponseResolvers<ContextType>;
  weightUnion?: WeightUnionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

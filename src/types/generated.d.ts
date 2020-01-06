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









export type AddFlightsClimbedError = {
  __typename?: 'addFlightsClimbedError',
  errorCode?: Maybe<AddFlightsClimbedErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddFlightsClimbedErrorErrorCodesType {
  InternalError = 'INTERNAL_ERROR',
  ServerTimeout = 'SERVER_TIMEOUT',
  Unauthorized = 'UNAUTHORIZED',
  AddHealthError = 'ADD_HEALTH_ERROR',
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

export type AddFlightsClimbedResponse = {
  __typename?: 'addFlightsClimbedResponse',
  response?: Maybe<HealthType>,
};

export type AddFlightsClimbedUnion = AddFlightsClimbedResponse | AddFlightsClimbedError;

export type AddHealthKitError = {
  __typename?: 'addHealthKitError',
  errorCode?: Maybe<AddHealthKitErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddHealthKitErrorErrorCodesType {
  InternalError = 'INTERNAL_ERROR',
  ServerTimeout = 'SERVER_TIMEOUT',
  Unauthorized = 'UNAUTHORIZED',
  AddHealthError = 'ADD_HEALTH_ERROR',
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

export type AddHealthKitResponse = {
  __typename?: 'addHealthKitResponse',
  response?: Maybe<Array<Maybe<HealthType>>>,
};

export type AddHealthKitUnion = AddHealthKitResponse | AddHealthKitError;

export type AddHeartRateError = {
  __typename?: 'addHeartRateError',
  errorCode?: Maybe<AddHeartRateErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddHeartRateErrorErrorCodesType {
  InternalError = 'INTERNAL_ERROR',
  ServerTimeout = 'SERVER_TIMEOUT',
  Unauthorized = 'UNAUTHORIZED',
  AddHealthError = 'ADD_HEALTH_ERROR',
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

export type AddHeartRateResponse = {
  __typename?: 'addHeartRateResponse',
  response?: Maybe<HealthType>,
};

export type AddHeartRateUnion = AddHeartRateResponse | AddHeartRateError;

export type AddHeartRateVariabilityError = {
  __typename?: 'addHeartRateVariabilityError',
  errorCode?: Maybe<AddHeartRateVariabilityErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddHeartRateVariabilityErrorErrorCodesType {
  InternalError = 'INTERNAL_ERROR',
  ServerTimeout = 'SERVER_TIMEOUT',
  Unauthorized = 'UNAUTHORIZED',
  AddHealthError = 'ADD_HEALTH_ERROR',
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

export type AddHeartRateVariabilityResponse = {
  __typename?: 'addHeartRateVariabilityResponse',
  response?: Maybe<HealthType>,
};

export type AddHeartRateVariabilityUnion = AddHeartRateVariabilityResponse | AddHeartRateVariabilityError;

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type AddStepError = {
  __typename?: 'addStepError',
  errorCode?: Maybe<AddStepErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum AddStepErrorErrorCodesType {
  InternalError = 'INTERNAL_ERROR',
  ServerTimeout = 'SERVER_TIMEOUT',
  Unauthorized = 'UNAUTHORIZED',
  AddHealthError = 'ADD_HEALTH_ERROR',
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

export type AddStepResponse = {
  __typename?: 'addStepResponse',
  response?: Maybe<HealthType>,
};

export type AddStepUnion = AddStepResponse | AddStepError;


export type HealthInputSampleType = {
  date?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  value: Scalars['String'],
  duration?: Maybe<Scalars['String']>,
};

export type HealthInputType = {
  type: Scalars['String'],
  unit?: Maybe<UnitType>,
  sampleList?: Maybe<Array<Maybe<HealthInputSampleType>>>,
  sample?: Maybe<HealthInputSampleType>,
  sampledOn?: Maybe<Scalars['String']>,
  validSources?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type HealthInputUpdateType = {
  value?: Maybe<Scalars['Int']>,
  valueType?: Maybe<Scalars['String']>,
  totalSampleValue?: Maybe<Scalars['Int']>,
  averageSampleValue?: Maybe<Scalars['Int']>,
  highestSampleValue?: Maybe<Scalars['Int']>,
  lowestSampleValue?: Maybe<Scalars['Int']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  sources?: Maybe<Array<Maybe<Scalars['String']>>>,
  unit?: Maybe<UnitType>,
  totalDuration?: Maybe<Scalars['String']>,
};

export type HealthType = {
  __typename?: 'HealthType',
  id?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
  valueType?: Maybe<Scalars['String']>,
  totalSampleValue?: Maybe<Scalars['Int']>,
  averageSampleValue?: Maybe<Scalars['Int']>,
  highestSampleValue?: Maybe<Scalars['Int']>,
  lowestSampleValue?: Maybe<Scalars['Int']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  sources?: Maybe<Array<Maybe<Scalars['String']>>>,
  unit?: Maybe<UnitType>,
  totalDuration?: Maybe<Scalars['String']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  addStep?: Maybe<AddStepUnion>,
  updateStep?: Maybe<UpdateStepUnion>,
  addFlightsClimbed?: Maybe<AddFlightsClimbedUnion>,
  updateFlightsClimbed?: Maybe<UpdateFlightsClimbedUnion>,
  addHeartRate?: Maybe<AddHeartRateUnion>,
  updateHeartRate?: Maybe<UpdateHeartRateUnion>,
  addHeartRateVariability?: Maybe<AddHeartRateVariabilityUnion>,
  updateHeartRateVariability?: Maybe<UpdateHeartRateVariabilityUnion>,
  addHealthKit?: Maybe<AddHealthKitUnion>,
};


export type MutationAddStepArgs = {
  input: HealthInputType
};


export type MutationUpdateStepArgs = {
  id: Scalars['ID'],
  input: HealthInputUpdateType
};


export type MutationAddFlightsClimbedArgs = {
  input: HealthInputType
};


export type MutationUpdateFlightsClimbedArgs = {
  id: Scalars['ID'],
  input: HealthInputUpdateType
};


export type MutationAddHeartRateArgs = {
  input: HealthInputType
};


export type MutationUpdateHeartRateArgs = {
  id: Scalars['ID'],
  input: HealthInputUpdateType
};


export type MutationAddHeartRateVariabilityArgs = {
  input: HealthInputType
};


export type MutationUpdateHeartRateVariabilityArgs = {
  id: Scalars['ID'],
  input: HealthInputUpdateType
};


export type MutationAddHealthKitArgs = {
  input?: Maybe<Array<Maybe<HealthInputType>>>
};

export type RootQueryType = {
  __typename?: 'RootQueryType',
  step?: Maybe<HealthType>,
  flightsClimbed?: Maybe<HealthType>,
  heartrate?: Maybe<HealthType>,
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

export enum UnitType {
  Cm = 'cm',
  Kg = 'kg',
  Count = 'count',
  Km = 'km',
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
  Bpm = 'bpm'
}

export type UpdateFlightsClimbedError = {
  __typename?: 'updateFlightsClimbedError',
  errorCode?: Maybe<UpdateFlightsClimbedErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateFlightsClimbedErrorErrorCodesType {
  InternalError = 'INTERNAL_ERROR',
  ServerTimeout = 'SERVER_TIMEOUT',
  Unauthorized = 'UNAUTHORIZED',
  AddHealthError = 'ADD_HEALTH_ERROR',
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

export type UpdateFlightsClimbedResponse = {
  __typename?: 'updateFlightsClimbedResponse',
  response?: Maybe<HealthType>,
};

export type UpdateFlightsClimbedUnion = UpdateFlightsClimbedResponse | UpdateFlightsClimbedError;

export type UpdateHeartRateError = {
  __typename?: 'updateHeartRateError',
  errorCode?: Maybe<UpdateHeartRateErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateHeartRateErrorErrorCodesType {
  InternalError = 'INTERNAL_ERROR',
  ServerTimeout = 'SERVER_TIMEOUT',
  Unauthorized = 'UNAUTHORIZED',
  AddHealthError = 'ADD_HEALTH_ERROR',
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

export type UpdateHeartRateResponse = {
  __typename?: 'updateHeartRateResponse',
  response?: Maybe<HealthType>,
};

export type UpdateHeartRateUnion = UpdateHeartRateResponse | UpdateHeartRateError;

export type UpdateHeartRateVariabilityError = {
  __typename?: 'updateHeartRateVariabilityError',
  errorCode?: Maybe<UpdateHeartRateVariabilityErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateHeartRateVariabilityErrorErrorCodesType {
  InternalError = 'INTERNAL_ERROR',
  ServerTimeout = 'SERVER_TIMEOUT',
  Unauthorized = 'UNAUTHORIZED',
  AddHealthError = 'ADD_HEALTH_ERROR',
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

export type UpdateHeartRateVariabilityResponse = {
  __typename?: 'updateHeartRateVariabilityResponse',
  response?: Maybe<HealthType>,
};

export type UpdateHeartRateVariabilityUnion = UpdateHeartRateVariabilityResponse | UpdateHeartRateVariabilityError;

export type UpdateStepError = {
  __typename?: 'updateStepError',
  errorCode?: Maybe<UpdateStepErrorErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

export enum UpdateStepErrorErrorCodesType {
  InternalError = 'INTERNAL_ERROR',
  ServerTimeout = 'SERVER_TIMEOUT',
  Unauthorized = 'UNAUTHORIZED',
  AddHealthError = 'ADD_HEALTH_ERROR',
  ReplaceHealthError = 'REPLACE_HEALTH_ERROR',
  UpdateHealthError = 'UPDATE_HEALTH_ERROR',
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  DisabledHealthType = 'DISABLED_HEALTH_TYPE',
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

export type UpdateStepResponse = {
  __typename?: 'updateStepResponse',
  response?: Maybe<HealthType>,
};

export type UpdateStepUnion = UpdateStepResponse | UpdateStepError;



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
  Mutation: ResolverTypeWrapper<{}>,
  HealthInputType: HealthInputType,
  String: ResolverTypeWrapper<Scalars['String']>,
  UnitType: UnitType,
  HealthInputSampleType: HealthInputSampleType,
  addStepUnion: ResolversTypes['addStepResponse'] | ResolversTypes['addStepError'],
  addStepResponse: ResolverTypeWrapper<AddStepResponse>,
  HealthType: ResolverTypeWrapper<HealthType>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  addStepError: ResolverTypeWrapper<AddStepError>,
  addStepErrorErrorCodesType: AddStepErrorErrorCodesType,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  HealthInputUpdateType: HealthInputUpdateType,
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  RootQueryType: ResolverTypeWrapper<RootQueryType>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  AdditionalEntityFields: AdditionalEntityFields,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Mutation: {},
  HealthInputType: HealthInputType,
  String: Scalars['String'],
  UnitType: UnitType,
  HealthInputSampleType: HealthInputSampleType,
  addStepUnion: ResolversTypes['addStepResponse'] | ResolversTypes['addStepError'],
  addStepResponse: AddStepResponse,
  HealthType: HealthType,
  Int: Scalars['Int'],
  addStepError: AddStepError,
  addStepErrorErrorCodesType: AddStepErrorErrorCodesType,
  ID: Scalars['ID'],
  HealthInputUpdateType: HealthInputUpdateType,
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
  Boolean: Scalars['Boolean'],
  RootQueryType: RootQueryType,
  Date: Scalars['Date'],
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

export type AddFlightsClimbedErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addFlightsClimbedError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addFlightsClimbedErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddFlightsClimbedResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addFlightsClimbedResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AddFlightsClimbedUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addFlightsClimbedUnion']> = {
  __resolveType: TypeResolveFn<'addFlightsClimbedResponse' | 'addFlightsClimbedError', ParentType, ContextType>
};

export type AddHealthKitErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addHealthKitError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHealthKitErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddHealthKitResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addHealthKitResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>,
};

export type AddHealthKitUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addHealthKitUnion']> = {
  __resolveType: TypeResolveFn<'addHealthKitResponse' | 'addHealthKitError', ParentType, ContextType>
};

export type AddHeartRateErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHeartRateErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddHeartRateResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AddHeartRateUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'addHeartRateResponse' | 'addHeartRateError', ParentType, ContextType>
};

export type AddHeartRateVariabilityErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateVariabilityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addHeartRateVariabilityErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddHeartRateVariabilityResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateVariabilityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AddHeartRateVariabilityUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addHeartRateVariabilityUnion']> = {
  __resolveType: TypeResolveFn<'addHeartRateVariabilityResponse' | 'addHeartRateVariabilityError', ParentType, ContextType>
};

export type AddStepErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addStepError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['addStepErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddStepResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addStepResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type AddStepUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addStepUnion']> = {
  __resolveType: TypeResolveFn<'addStepResponse' | 'addStepError', ParentType, ContextType>
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type HealthTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['HealthType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  valueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  totalSampleValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  averageSampleValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  highestSampleValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  lowestSampleValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
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
};

export type RootQueryTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['RootQueryType']> = {
  step?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType, RootQueryTypeStepArgs>,
  flightsClimbed?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType, RootQueryTypeFlightsClimbedArgs>,
  heartrate?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType, RootQueryTypeHeartrateArgs>,
};

export type UpdateFlightsClimbedErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateFlightsClimbedError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateFlightsClimbedErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateFlightsClimbedResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateFlightsClimbedResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type UpdateFlightsClimbedUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateFlightsClimbedUnion']> = {
  __resolveType: TypeResolveFn<'updateFlightsClimbedResponse' | 'updateFlightsClimbedError', ParentType, ContextType>
};

export type UpdateHeartRateErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateHeartRateErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateHeartRateResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type UpdateHeartRateUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateUnion']> = {
  __resolveType: TypeResolveFn<'updateHeartRateResponse' | 'updateHeartRateError', ParentType, ContextType>
};

export type UpdateHeartRateVariabilityErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateVariabilityError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateHeartRateVariabilityErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateHeartRateVariabilityResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateVariabilityResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type UpdateHeartRateVariabilityUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateHeartRateVariabilityUnion']> = {
  __resolveType: TypeResolveFn<'updateHeartRateVariabilityResponse' | 'updateHeartRateVariabilityError', ParentType, ContextType>
};

export type UpdateStepErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['updateStepError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['updateStepErrorErrorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UpdateStepResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['updateStepResponse']> = {
  response?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType>,
};

export type UpdateStepUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['updateStepUnion']> = {
  __resolveType: TypeResolveFn<'updateStepResponse' | 'updateStepError', ParentType, ContextType>
};

export type Resolvers<ContextType = any> = {
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
  addStepError?: AddStepErrorResolvers<ContextType>,
  addStepResponse?: AddStepResponseResolvers<ContextType>,
  addStepUnion?: AddStepUnionResolvers,
  Date?: GraphQLScalarType,
  HealthType?: HealthTypeResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  RootQueryType?: RootQueryTypeResolvers<ContextType>,
  updateFlightsClimbedError?: UpdateFlightsClimbedErrorResolvers<ContextType>,
  updateFlightsClimbedResponse?: UpdateFlightsClimbedResponseResolvers<ContextType>,
  updateFlightsClimbedUnion?: UpdateFlightsClimbedUnionResolvers,
  updateHeartRateError?: UpdateHeartRateErrorResolvers<ContextType>,
  updateHeartRateResponse?: UpdateHeartRateResponseResolvers<ContextType>,
  updateHeartRateUnion?: UpdateHeartRateUnionResolvers,
  updateHeartRateVariabilityError?: UpdateHeartRateVariabilityErrorResolvers<ContextType>,
  updateHeartRateVariabilityResponse?: UpdateHeartRateVariabilityResponseResolvers<ContextType>,
  updateHeartRateVariabilityUnion?: UpdateHeartRateVariabilityUnionResolvers,
  updateStepError?: UpdateStepErrorResolvers<ContextType>,
  updateStepResponse?: UpdateStepResponseResolvers<ContextType>,
  updateStepUnion?: UpdateStepUnionResolvers,
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
import { ObjectID } from 'mongodb';

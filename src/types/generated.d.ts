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









export type AddHealthKitError = {
  __typename?: 'addHealthKitError',
  errorCode?: Maybe<ErrorCodesType>,
  errorDesc?: Maybe<Scalars['String']>,
};

/** Response data for adding healthkit data */
export type AddHealthKitResponse = {
  __typename?: 'addHealthKitResponse',
  response?: Maybe<Array<Maybe<HealthType>>>,
};

/** Can either be response data or error data */
export type AddHealthKitUnion = AddHealthKitResponse | AddHealthKitError;

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};


export enum ErrorCodesType {
  /** Oh noes. There was an internal error. */
  InternalError = 'INTERNAL_ERROR',
  /** Server Timeout */
  ServerTimeout = 'SERVER_TIMEOUT',
  /** Authorization failed. */
  Unauthorized = 'UNAUTHORIZED',
  /** An error occured trying to add health item */
  AddHealthError = 'ADD_HEALTH_ERROR',
  /** Not a valid health type */
  InvalidHealthType = 'INVALID_HEALTH_TYPE',
  /** Input is invalid or empty */
  InvalidHealthkitInput = 'INVALID_HEALTHKIT_INPUT'
}

/** Sample item in health data */
export type HealthInputSampleType = {
  date?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  value: Scalars['String'],
  duration?: Maybe<Scalars['String']>,
};

/** Health data input */
export type HealthInputType = {
  type: Scalars['String'],
  unit?: Maybe<UnitType>,
  sampleList?: Maybe<Array<Maybe<HealthInputSampleType>>>,
  sample?: Maybe<HealthInputSampleType>,
  sampledOn?: Maybe<Scalars['String']>,
  validSources?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** Health data */
export type HealthType = {
  __typename?: 'HealthType',
  id?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
  sampledOn?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['String']>,
  updatedOn?: Maybe<Scalars['String']>,
  sources?: Maybe<Array<Maybe<Scalars['String']>>>,
  unit?: Maybe<UnitType>,
  totalDuration?: Maybe<Scalars['String']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  /** Add a step count node */
  addStep?: Maybe<HealthType>,
  /** Update a step count node */
  updateStep?: Maybe<HealthType>,
  /** Add multiple HealthKit data types */
  addHealthKit?: Maybe<AddHealthKitUnion>,
};


export type MutationAddStepArgs = {
  input: HealthInputType
};


export type MutationUpdateStepArgs = {
  _id: Scalars['ID'],
  input: HealthInputType
};


export type MutationAddHealthKitArgs = {
  input?: Maybe<Array<Maybe<HealthInputType>>>
};

export type RootQueryType = {
  __typename?: 'RootQueryType',
  /** Get a single step count by either _id or date, _id taking priority */
  step?: Maybe<HealthType>,
};


export type RootQueryTypeStepArgs = {
  id?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>
};

/** Acceptable units of measurment */
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
  Mg = 'mg'
}


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
  HealthType: ResolverTypeWrapper<HealthType>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  UnitType: UnitType,
  Mutation: ResolverTypeWrapper<{}>,
  HealthInputType: HealthInputType,
  HealthInputSampleType: HealthInputSampleType,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  addHealthKitUnion: ResolversTypes['addHealthKitResponse'] | ResolversTypes['addHealthKitError'],
  addHealthKitResponse: ResolverTypeWrapper<AddHealthKitResponse>,
  addHealthKitError: ResolverTypeWrapper<AddHealthKitError>,
  errorCodesType: ErrorCodesType,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  AdditionalEntityFields: AdditionalEntityFields,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootQueryType: {},
  String: Scalars['String'],
  Date: Scalars['Date'],
  HealthType: HealthType,
  Int: Scalars['Int'],
  UnitType: UnitType,
  Mutation: {},
  HealthInputType: HealthInputType,
  HealthInputSampleType: HealthInputSampleType,
  ID: Scalars['ID'],
  addHealthKitUnion: ResolversTypes['addHealthKitResponse'] | ResolversTypes['addHealthKitError'],
  addHealthKitResponse: AddHealthKitResponse,
  addHealthKitError: AddHealthKitError,
  errorCodesType: ErrorCodesType,
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

export type AddHealthKitErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['addHealthKitError']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['errorCodesType']>, ParentType, ContextType>,
  errorDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AddHealthKitResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['addHealthKitResponse']> = {
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthType']>>>, ParentType, ContextType>,
};

export type AddHealthKitUnionResolvers<ContextType = any, ParentType = ResolversParentTypes['addHealthKitUnion']> = {
  __resolveType: TypeResolveFn<'addHealthKitResponse' | 'addHealthKitError', ParentType, ContextType>
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type HealthTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['HealthType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  sampledOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  unit?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>,
  totalDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType = ResolversParentTypes['Mutation']> = {
  addStep?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType, MutationAddStepArgs>,
  updateStep?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType, MutationUpdateStepArgs>,
  addHealthKit?: Resolver<Maybe<ResolversTypes['addHealthKitUnion']>, ParentType, ContextType, MutationAddHealthKitArgs>,
};

export type RootQueryTypeResolvers<ContextType = any, ParentType = ResolversParentTypes['RootQueryType']> = {
  step?: Resolver<Maybe<ResolversTypes['HealthType']>, ParentType, ContextType, RootQueryTypeStepArgs>,
};

export type Resolvers<ContextType = any> = {
  addHealthKitError?: AddHealthKitErrorResolvers<ContextType>,
  addHealthKitResponse?: AddHealthKitResponseResolvers<ContextType>,
  addHealthKitUnion?: AddHealthKitUnionResolvers,
  Date?: GraphQLScalarType,
  HealthType?: HealthTypeResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  RootQueryType?: RootQueryTypeResolvers<ContextType>,
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
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;import { ObjectID } from 'mongodb';
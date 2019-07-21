import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** Sample item in health data */
export type HealthInputSampleType = {
  date?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  value: Scalars["String"];
  duration?: Maybe<Scalars["String"]>;
};

/** Health data input */
export type HealthInputType = {
  type: Scalars["String"];
  unit?: Maybe<Scalars["String"]>;
  sampleList?: Maybe<Array<Maybe<HealthInputSampleType>>>;
  sample?: Maybe<HealthInputSampleType>;
  date?: Maybe<Scalars["Date"]>;
};

/** Health data */
export type HealthType = {
  __typename?: "HealthType";
  _id?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["Int"]>;
  sampledOn?: Maybe<Scalars["Date"]>;
  createdOn?: Maybe<Scalars["Date"]>;
  sources?: Maybe<Array<Maybe<Scalars["String"]>>>;
  unit?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Add a step count node */
  addStep?: Maybe<HealthType>;
};

export type MutationAddStepArgs = {
  input: HealthInputType;
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  /** Get a single step count by either _id or date, _id taking priority */
  step?: Maybe<HealthType>;
};

export type RootQueryTypeStepArgs = {
  _id?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["Date"]>;
};

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

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  RootQueryType: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  HealthType: ResolverTypeWrapper<HealthType>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Mutation: ResolverTypeWrapper<{}>;
  HealthInputType: HealthInputType;
  HealthInputSampleType: HealthInputSampleType;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootQueryType: {};
  String: Scalars["String"];
  Date: Scalars["Date"];
  HealthType: HealthType;
  Int: Scalars["Int"];
  Mutation: {};
  HealthInputType: HealthInputType;
  HealthInputSampleType: HealthInputSampleType;
  Boolean: Scalars["Boolean"];
  AdditionalEntityFields: AdditionalEntityFields;
};

export type UnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {
    discriminatorField?: Maybe<Maybe<Scalars["String"]>>;
    additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {
    discriminatorField?: Maybe<Scalars["String"]>;
    additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {
    embedded?: Maybe<Maybe<Scalars["Boolean"]>>;
    additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { overrideType?: Maybe<Maybe<Scalars["String"]>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {}
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { overrideType?: Maybe<Maybe<Scalars["String"]>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {}
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { path?: Maybe<Scalars["String"]> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export type HealthTypeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["HealthType"]
> = {
  _id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  sampledOn?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  sources?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  unit?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Mutation"]
> = {
  addStep?: Resolver<
    Maybe<ResolversTypes["HealthType"]>,
    ParentType,
    ContextType,
    MutationAddStepArgs
  >;
};

export type RootQueryTypeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["RootQueryType"]
> = {
  step?: Resolver<
    Maybe<ResolversTypes["HealthType"]>,
    ParentType,
    ContextType,
    RootQueryTypeStepArgs
  >;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  HealthType?: HealthTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  RootQueryType?: RootQueryTypeResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<
  ContextType
>;
import { ObjectID } from "mongodb";

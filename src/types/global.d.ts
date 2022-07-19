import { GraphQLObjectType, GraphQLInputObjectType } from 'graphql';
import { BaseContext } from 'koa';
import { OrderItem } from 'sequelize/types';
import { CarConfigType } from './car';
import { CollectionConfigType } from './collection';
import { HealthConfigType } from './health';
import { HealthKitConfigType } from './healthkit';

declare module 'nanoid' {
  export function nanoid(size?: number): string;
}

export type ComposeQueryOptions = {
  type: GraphQLObjectType;
  name?: string;
  config?: AnyConfig;
  description?: string;
  findInclude?: string;
  includeResponseKey?: string;
};

export type ComposeMutationOptions = {
  type?: GraphQLObjectType;
  inputType?: GraphQLInputObjectType;
  name?: string;
  description?: string;
  config?: AnyConfig;
  controller?: any;
};

export type QueryAllOptions = {
  limit?: number;
  offset?: number;
  after?: string;
  before?: string;
  sortBy?: OrderItem;
  dateBy?: string;
};

export type WhereDb = {
  [key: string]: any;
};

export type DateInterval = 'hour' | 'day' | 'week' | 'month' | 'year';

export type AnyConfig =
  | HealthKitConfigType
  | HealthConfigType
  | CarConfigType
  | CollectionConfigType;

export type DatabaseConfigOptions = {
  externalAccess?: boolean;
};

export type DbSSLConfigType = {
  key?: string;
  cert?: string;
  ca?: string;
};

export type DbSSLType = {
  key?: Buffer;
  cert?: Buffer;
  ca?: Buffer;
};

export type TestItem = {
  assert: any;
  expected: any;
  description?: string;
};

export type KoaCustomContext = {
  isReady?: boolean;
};

export type KoaContext = BaseContext & KoaCustomContext;

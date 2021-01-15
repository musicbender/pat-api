import { GraphQLObjectType, GraphQLInputObjectType } from 'graphql';
import { OrderItem } from 'sequelize/types';

export type ComposeQueryOptions = {
  type: GraphQLObjectType,
  name?: string,
  modelID?: string,
  description?: string,
  findInclude?: string,
}

export type ComposeMutationOptions = {
  type: GraphQLObjectType,
  inputType?: GraphQLInputObjectType
  name?: string,
  description?: string,
  config?: any,
  controller?: any,
}

export type QueryAllOptions = {
  limit?: number,
  offset?: number,
  after?: string,
  before?: string,
  sortBy?: OrderItem,
  dateBy?: string,
}

export type WhereDb = {
  [key: string]: any
}

export type DateInterval = 'hour' | 'day' | 'week' | 'month' | 'year';

export type DatabaseConfigOptions = {
  externalAccess?: boolean
}

export type DbSSLConfigType = {
  key?: string,
  cert?: string,
  ca?: string
}

export type DbSSLType = {
  key?: Buffer,
  cert?: Buffer,
  ca?: Buffer
}

export type TestItem = {
  assert: any,
  expected: any,
  description?: string
}

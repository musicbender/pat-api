import { GraphQLObjectType, GraphQLInputObjectType } from 'graphql';

export type ComposeQueryOptions = {
  type: GraphQLObjectType,
  name?: string,
  modelID?: string,
  description?: string,
}

export type ComposeMutationOptions = {
  type: GraphQLObjectType,
  inputType: GraphQLInputObjectType
  name?: string,
  description?: string,
  config?: any,
  controller?: any,
}

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

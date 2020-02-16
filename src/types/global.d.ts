import { GraphQLObjectType, GraphQLInputObjectType } from 'graphql';

export type QueryOptions = {
  type: GraphQLObjectType,
  name?: string,
  modelID?: string,
  description?: string,
}

export type ComposeAddMutationOptions = {
  type: GraphQLObjectType,
  inputType: GraphQLInputObjectType
  name?: string,
  description?: string,
  config: any,
  controllerFunc?: any,
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

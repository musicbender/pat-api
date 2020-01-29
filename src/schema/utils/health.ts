import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';
import { UnitType } from '../types/unit-type';

type BasicHealthOptions = {
  type: string
}

export const composeBasicHealthTypes = (options: BasicHealthOptions) => {
  const { type  } = options;
  let output = {};

  output[`${type}InputType`] = new GraphQLInputObjectType({
    name: `${type}InputType`,
    description: `${type} data input`,
    fields: () => ({
      value: { type: GraphQLInt },
      sampledOn: { type: GraphQLString },
    })
  });

  output[`${type}InputUpdateType`] = new GraphQLInputObjectType({
    name: `${type}InputUpdateType`,
    description: `${type} data input for updating`,
    fields: () => ({
      value: { type: GraphQLInt },
      sampledOn: { type: GraphQLString },
      createdOn: { type: GraphQLString },
      unit: { type: UnitType }
    })
  });

  output[`${type}Type`] = new GraphQLObjectType({
    name: `${type}Type`,
    description: `${type} data`,
    fields: () => ({
      id: { type: GraphQLString },
      value: { type: GraphQLInt },
      sampledOn: { type: GraphQLString },
      createdOn: { type: GraphQLString },
      updatedOn: { type: GraphQLString },
      unit: { type: UnitType }
    })
  });

  return output;
}

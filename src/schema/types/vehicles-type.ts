import { GraphQLEnumType } from 'graphql';

export const VehicleType = new GraphQLEnumType({
  name: 'VehicleType',
  description: 'Acceptable vehicles for car data',
  values: {
    "prius-prime": { value: "prius-prime" },
  }
});
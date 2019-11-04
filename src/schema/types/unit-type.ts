import { GraphQLEnumType } from 'graphql';

export const UnitType = new GraphQLEnumType({
  name: 'UnitType',
  description: 'Acceptable units of measurment',
  values: {
    "cm": { value: "cm" },
    "kg": { value: "kg" },
    "count": { value:"count" },
    "km": { value: "km" },
    "kcal": { value: "kcal" },
    "percent": { value: "%" },
    "count_min": { value: "count/min" },
    "degC": { value: "degC" },
    "mmHg": { value: "mmHg" },
    "mg_dL": { value: "mg/dL" },
    "mcS": { value: "mcS" },
    "L": { value: "L" },
    "L_min": { value: "L/min" },
    "ml": { value: "ml" },
    "mcg": { value: "mcg" },
    "g": { value: "g" },
    "mg": { value: "mg" }
  }
});
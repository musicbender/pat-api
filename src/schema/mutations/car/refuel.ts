import { GraphQLNonNull, GraphQLID } from 'graphql';
import { addCarItem, deleteCarItem, updateCarItem } from '@controllers/car';
import {
  DeleteType,
  RefuelType,
  RefuelInputType,
  ResponseUnionType,
  RefuelInputUpdateType,
} from '@schema/types';
import { appendResponse, composeDeleteMutation } from '@schema/utils/global';
const carConf = require('@configs/cars.json');

const name = carConf.refuel.modelID;

export const addRefuel = {
  name: `add${name}`,
  description: `Add a ${name} node`,
  type: ResponseUnionType({
    name: `add${name}`,
    responseType: RefuelType,
  }),
  args: {
    input: {
      type: new GraphQLNonNull(RefuelInputType),
    },
  },
  async resolve(parentValue, { input }) {
    try {
      const response = await addCarItem(input, carConf.refuel);
      return { response: appendResponse(response, carConf.refuel) };
    } catch (err) {
      throw err;
    }
  },
};

export const updateRefuel = {
  name: `update${name}`,
  description: `Update a ${name} node`,
  type: ResponseUnionType({
    name: `update${name}`,
    responseType: RefuelType,
  }),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    input: {
      type: new GraphQLNonNull(RefuelInputUpdateType),
    },
  },
  async resolve(parentValue, { id, input }) {
    try {
      const response = await updateCarItem(id, input, carConf.refuel);
      return { response: appendResponse(response.get(), carConf.refuel) };
    } catch (err) {
      throw err;
    }
  },
};

export const deleteRefuel = composeDeleteMutation({
  name,
  config: carConf.refuel,
});

import { GraphQLNonNull, GraphQLID } from 'graphql';
import { addCarItem, deleteCarItem, updateCarItem } from '@controllers/car';
import { appendResponse } from '@schema/utils/global';
import {
  DeleteType,
  AverageMPGType,
  AverageMPGInputType,
  ResponseUnionType,
  AverageMPGInputUpdateType,
} from '@schema/types';
const carConf = require('@configs/cars.json');

const name = carConf.averageMPG.modelID;

export const addAverageMPG = {
  name: `add${name}`,
  description: `Add a ${name} node`,
  type: ResponseUnionType({
    name: `add${name}`,
    responseType: AverageMPGType,
  }),
  args: {
    input: {
      type: new GraphQLNonNull(AverageMPGInputType),
    },
  },
  async resolve(parentValue, { input }) {
    try {
      const response = await addCarItem(input, carConf.averageMPG);
      return { response: appendResponse(response, carConf.averageMPG) };
    } catch (err) {
      throw err;
    }
  },
};

export const updateAverageMPG = {
  name: `update${name}`,
  description: `Update a ${name} node`,
  type: ResponseUnionType({
    name: `update${name}`,
    responseType: AverageMPGType,
  }),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    input: {
      type: new GraphQLNonNull(AverageMPGInputUpdateType),
    },
  },
  async resolve(parentValue, { id, input }) {
    try {
      const response = await updateCarItem(id, input, carConf.averageMPG);
      return { response: appendResponse(response.get(), carConf.averageMPG) };
    } catch (err) {
      throw err;
    }
  },
};

export const deleteAverageMPG = {
  name: `delete${name}`,
  description: `Delete a ${name} node`,
  type: ResponseUnionType({
    name: `delete${name}`,
    responseType: DeleteType,
  }),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(parentValue, { id }) {
    try {
      await deleteCarItem(id, carConf.averageMPG);
      return {
        response: {
          id,
          configID: carConf.averageMPG.id,
        },
      };
    } catch (err) {
      throw err;
    }
  },
};

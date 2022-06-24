import { GraphQLNonNull, GraphQLID } from 'graphql';
import { addCarItem, deleteCarItem, updateCarItem } from '@controllers/car';
import { appendResponse } from '@schema/utils/global';
import {
  DrivingScoreType,
  DeleteType,
  DrivingScoreInputType,
  ResponseUnionType,
  DrivingScoreInputUpdateType,
} from '@schema/types';
const carConf = require('@configs/cars.json');

const name = carConf.drivingScore.modelID;

export const addDrivingScore = {
  name: `add${name}`,
  description: `Add a ${name} node`,
  type: ResponseUnionType({
    name: `add${name}`,
    responseType: DrivingScoreType,
  }),
  args: {
    input: {
      type: new GraphQLNonNull(DrivingScoreInputType),
    },
  },
  async resolve(parentValue, { input }) {
    try {
      const response = await addCarItem(input, carConf.drivingScore);
      return { response: appendResponse(response, carConf.drivingScore) };
    } catch (err) {
      throw err;
    }
  },
};

export const updateDrivingScore = {
  name: `update${name}`,
  description: `Update a ${name} node`,
  type: ResponseUnionType({
    name: `update${name}`,
    responseType: DrivingScoreType,
  }),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    input: {
      type: new GraphQLNonNull(DrivingScoreInputUpdateType),
    },
  },
  async resolve(parentValue, { id, input }) {
    try {
      const response = await updateCarItem(id, input, carConf.drivingScore);
      return { response: appendResponse(response.get(), carConf.drivingScore) };
    } catch (err) {
      throw err;
    }
  },
};

export const deleteDrivingScore = {
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
      await deleteCarItem(id, carConf.drivingScore);
      return {
        response: {
          id,
          configID: carConf.drivingScore.id,
        },
      };
    } catch (err) {
      throw err;
    }
  },
};

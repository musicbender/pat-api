import { GraphQLNonNull, GraphQLID } from 'graphql';
import { DeleteType } from 'schema/types/delete-type';
import { addCarItem, deleteCarItem, updateCarItem } from '../../../controllers/car';
import { DrivingScoreType, DrivingScoreInputType, ResponseUnionType, DrivingScoreInputUpdateType } from '../../types';
const carConf = require('../../../configs/cars.json');

const name = carConf.drivingScore.modelID;

export const addDrivingScore = {
  name: `add${name}`,
  description: `Add a ${name} node`,
  type: ResponseUnionType({
    name: `add${name}`,
    responseType: DrivingScoreType
  }),
  args: {
    input: {
      type: new GraphQLNonNull(DrivingScoreInputType)
    }
  },
  async resolve(parentValue, { input }) {
    try {
      const response = await addCarItem(input, carConf.drivingScore);
      return { response };
    } catch (err) {
      throw err;
    }
  }
}

export const updateDrivingScore = {
    name: `update${name}`,
    description: `Update a ${name} node`,
    type: ResponseUnionType({
      name: `update${name}`,
      responseType: DrivingScoreType
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      input: {
        type: new GraphQLNonNull(DrivingScoreInputUpdateType)
      }
    },
    async resolve(parentValue, { id, input }) {
      try {
        const response = await updateCarItem(id, input, carConf.drivingScore);
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }

  export const deleteDrivingScore = {
    name: `delete${name}`,
    description: `Delete a ${name} node`,
    type: ResponseUnionType({
      name: `delete${name}`,
      responseType: DeleteType
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(parentValue, { id }) {
      try {
        await deleteCarItem(id, carConf.drivingScore);
        return { response: {
            id,
            configID: carConf.drivingScore.id,
          } 
        };
      } catch (err) {
        throw err;
      }
    }
  }

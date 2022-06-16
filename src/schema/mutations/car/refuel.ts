import { GraphQLNonNull, GraphQLID } from 'graphql';
import { DeleteType } from 'schema/types/delete-type';
import { addCarItem, deleteCarItem, updateCarItem } from '../../../controllers/car';
import { RefuelType, RefuelInputType, ResponseUnionType, RefuelInputUpdateType } from '../../types';
const carConf = require('../../../configs/cars.json');

const name = carConf.refuel.modelID;

export const addRefuel = {
  name: `add${name}`,
  description: `Add a ${name} node`,
  type: ResponseUnionType({
    name: `add${name}`,
    responseType: RefuelType
  }),
  args: {
    input: {
      type: new GraphQLNonNull(RefuelInputType)
    }
  },
  async resolve(parentValue, { input }) {
    try {
      const response = await addCarItem(input, carConf.refuel);
      return { response };
    } catch (err) {
      throw err;
    }
  }
}

export const updateRefuel = {
    name: `update${name}`,
    description: `Update a ${name} node`,
    type: ResponseUnionType({
      name: `update${name}`,
      responseType: RefuelType
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      input: {
        type: new GraphQLNonNull(RefuelInputUpdateType)
      }
    },
    async resolve(parentValue, { id, input }) {
      try {
        const response = await updateCarItem(id, input, carConf.refuel);
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }

  export const deleteRefuel = {
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
        await deleteCarItem(id, carConf.refuel);
        return { response: {
            id,
            configID: carConf.refuel.id,
          } 
        };
      } catch (err) {
        throw err;
      }
    }
  }


import { GraphQLNonNull, GraphQLID } from 'graphql';
import { addCarItem, updateCarItem } from '../../../controllers/car';
import { AverageMPGType, AverageMPGInputType, ResponseUnionType, AverageMPGInputUpdateType } from '../../types';
const carConf = require('../../../configs/cars.json');

const name = carConf.averageMPG.modelID;

export const addAverageMPG = {
  name: `add${name}`,
  description: `Add a ${name} node`,
  type: ResponseUnionType({
    name: `add${name}`,
    responseType: AverageMPGType
  }),
  args: {
    input: {
      type: new GraphQLNonNull(AverageMPGInputType)
    }
  },
  async resolve(parentValue, { input }) {
    try {
      const response = await addCarItem(input, carConf.averageMPG);
      return { response };
    } catch (err) {
      throw err;
    }
  }
}

export const updateAverageMPG = {
    name: `update${name}`,
    description: `Update a ${name} node`,
    type: ResponseUnionType({
      name: `update${name}`,
      responseType: AverageMPGType
    }),
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      input: {
        type: new GraphQLNonNull(AverageMPGInputUpdateType)
      }
    },
    async resolve(parentValue, { id, input }) {
      try {
        const response = await updateCarItem(id, input, carConf.averageMPG);
        return { response };
      } catch (err) {
        throw err;
      }
    }
  }

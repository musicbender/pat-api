import { GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql';
import { HealthType, HealthInputType } from '../../types';
import { addHealthItem } from '../../../controllers/health';

export const addHealthKit = {
  name: 'addHealthKit',
  description: 'Add multiple HealthKit data types',
  type: new GraphQLList(HealthType),
  args: {
    input: {
      type: new GraphQLList(HealthInputType)
    }
  },
  resolve(parentValue, { input }) {

    return addHealthItem(input, 'Step');
  }
}

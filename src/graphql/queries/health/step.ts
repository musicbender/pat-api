import StepType from '../types';
import Step from '../../models/step';

import GraphQLDate from 'graphql-date';
import { GraphQLID } from 'graphql';

const step = {
  type: StepType,
  description: 'Get a single step count',
  args: {
    date: {
      type:  GraphQLDate
    },
    _id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    if (args._id) {
      return Step.findOne({ _id: args._id });
    } else {
      
    }
  }
}

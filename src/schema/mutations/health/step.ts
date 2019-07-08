import { StepType, StepInputType } from '../../types';
import { addAStep } from '../../../controllers/step';
import uuid from 'uuid';

export const addStep = {
  name: 'addStep',
  description: 'Add a step count node',
  type: StepType,
  args: {
    input: {
      type: StepInputType
    }
  },
  resolve(parentValue, { input }) {
    return new Promise((resolve, reject) => {
      console.log('TEST RESOLVE ADD STEP')
      resolve({
        _id: uuid(),
        stepCount: 1000,
        date: new Date(),
        sources: ['iphone'],
        unit: 'count'
      });
    });
    // return addAStep(input);
  }
}

export const updateStep = {
  name: 'updateStep',
  description: 'Update a step count node',
  type: StepType,
  args: {
    input: {
      type: StepInputType
    }
  },
  resolve(parentValue, { input }) {
    return new Promise((resolve, reject) => {
      console.log('TEST RESOLVE ADD STEP')
      resolve({
        _id: uuid(),
        stepCount: 1000,
        date: new Date(),
        sources: ['iphone'],
        unit: 'count'
      });
    });
  }
}

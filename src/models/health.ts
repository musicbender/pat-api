import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import { healthTypes } from '../configs/health.json';

const Schema = mongoose.Schema;

// schema objects
const healthSchema = {
  _id: {
    type: String,
    default: uuid()
  },
  value: {
    type: Number,
    default: 0,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
    required: true
  },
  sampledOn: {
    type: Date,
    default: Date.now(),
    required: true
  },
  sources: {
    type: [String]
  },
  unit: {
    type: String,
    default: ''
  },
  totalDuration: {
    type: String,
    default: '0.00:00:00'
  }
}

// mongoose schemas
const stepsSchema = new Schema(healthSchema, { collection: healthTypes.steps.id });

// export mongoose models
export default {
  [healthTypes.steps.modelID]: mongoose.model(healthTypes.steps.modelID, stepsSchema)
}

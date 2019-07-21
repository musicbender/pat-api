import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

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
  }
}

// mongoose schemas
const stepsSchema = new Schema(healthSchema);

// export mongoose models
export const Step = mongoose.model('Step', stepsSchema);

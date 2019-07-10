import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

const Schema = mongoose.Schema;

const stepsSchema = new Schema({
  _id: {
    type: String,
    default: uuid()
  },
  stepCount: {
    type: Number,
    default: 0,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
    required: true
  },
  samplesDate: {
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
});

const Step = mongoose.model('Step', stepsSchema);

export default Step;

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const stepsSchema = new Schema({
  stepCount: {
    type: Number,
    default: 0,
    required: true
  },
  date: {
    type: Date,
    default: Date.now(),
    required: true
  }
});

const Step = mongoose.model('Step', stepsSchema);

export default Step;

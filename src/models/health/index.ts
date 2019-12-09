import { healthTypes } from '../../configs/health.json';

// models
import Step from './step.model';
import FlightsClimbed from './flights-climbed.model';
import HeartRate from './heartrate.model';

export default {
  [healthTypes.steps.modelID]: Step,
  [healthTypes.flightsClimbed.modelID]: FlightsClimbed,
  [healthTypes.heartRate.modelID]: HeartRate,
}
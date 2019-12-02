import { healthTypes } from '../../configs/health.json';

// models
import Step from './step.model';
import FlightsClimbed from './flights-climbed.model';

export default {
  [healthTypes.steps.modelID]: Step,
  [healthTypes.flightsClimbed.modelID]: FlightsClimbed
}
import { healthTypes } from '../../configs/healthkit.json';
import Step from './step.model';
import FlightsClimbed from './flights-climbed.model';
import HeartRate from './heartrate.model';
import HeartRateVariability from './heartrate-variability.model';
import ActiveEnergy from './active-energy.model';
import Caffeine from './caffeine.model';
import RestingEnergy from './resting-energy.model';
import RestingHeartRate from './resting-heartrate.model';
import SleepAnalysis from './sleep-analysis.model';
import SwimmingDistance from './swimming-distance.model';
import WalkingHeartRateAverage from './walking-heartrate.model';
import WalkingRunningDistance from './walking-running-distance.model';
import OxygenSaturation from './oxygen-saturation.model';

export default { 
  [healthTypes.steps.modelID]: Step,
  [healthTypes.flightsClimbed.modelID]: FlightsClimbed,
  [healthTypes.heartRate.modelID]: HeartRate,
  [healthTypes.heartRateVariability.modelID]: HeartRateVariability,
  [healthTypes.activeEnergy.modelID]: ActiveEnergy,
  [healthTypes.caffeine.modelID]: Caffeine,
  [healthTypes.restingEnergy.modelID]: RestingEnergy,
  [healthTypes.restingHeartRate.modelID]: RestingHeartRate,
  [healthTypes.sleepAnalysis.modelID]: SleepAnalysis,
  [healthTypes.swimmingDistance.modelID]: SwimmingDistance,
  [healthTypes.walkingHeartRateAverage.modelID]: WalkingHeartRateAverage,
  [healthTypes.walkingRunningDistance.modelID]: WalkingRunningDistance,
  [healthTypes.oxygenSaturation.modelID]: OxygenSaturation,
}

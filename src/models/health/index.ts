import { healthTypes } from '../../configs/health.json';
import Step from './step.model';
import FlightsClimbed from './flights-climbed.model';
import HeartRate from './heartrate.model';
import HeartRateVariability from './heartrate-variability.model';
import ActiveEnergy from './active-energy.model';
import Caffeine from './caffeine.model';
import DiastolicBloodPressure from './diastolic-blood-pressure.model';
import ExerciseMinutes from './exercise-minutes.model';
import Height from './height.model';
import OxygenSaturation from './oxygen-saturation.model';
import RestingEnergy from './resting-energy.model';
import RestingHeartRate from './resting-heartrate.model';
import SleepAnalysis from './sleep-analysis.model';
import SwimmingDistance from './swimming-distance.model';
import SystolicBloodPressure from './systolic-blood-pressure.model';
import WaistCircumference from './waist-circumference.model';
import WalkingHeartRateAverage from './walking-heartrate.model';
import WalkingRunningDistance from './walking-running-distance.model';
import Weight from './weight.model';

export default {
  [healthTypes.steps.modelID]: Step,
  [healthTypes.flightsClimbed.modelID]: FlightsClimbed,
  [healthTypes.heartRate.modelID]: HeartRate,
  [healthTypes.heartRateVariability.modelID]: HeartRateVariability,
  [healthTypes.activeEnergy.modelID]: ActiveEnergy,
  [healthTypes.caffeine.modelID]: Caffeine,
  [healthTypes.diastolicBloodPressure.modelID]: DiastolicBloodPressure,
  [healthTypes.exerciseMinutes.modelID]: ExerciseMinutes,
  [healthTypes.height.modelID]: Height,
  [healthTypes.oxygenSaturation.modelID]: OxygenSaturation,
  [healthTypes.restingEnergy.modelID]: RestingEnergy,
  [healthTypes.restingHeartRate.modelID]: RestingHeartRate,
  [healthTypes.sleepAnalysis.modelID]: SleepAnalysis,
  [healthTypes.swimmingDistance.modelID]: SwimmingDistance,
  [healthTypes.systolicBloodPressure.modelID]: SystolicBloodPressure,
  [healthTypes.waistCircumference.modelID]: WaistCircumference,
  [healthTypes.walkingHeartRateAverage.modelID]: WalkingHeartRateAverage,
  [healthTypes.walkingRunningDistance.modelID]: WalkingRunningDistance,
  [healthTypes.weight.modelID]: Weight,
}

const healthTypes = require('../../configs/health.json');
import Weight from './weight.model';
import BodyTemperature from './body-temperature.model';
import OxygenSaturation from './oxygen-saturation.model';
import Height from './height.model'
import WaistCircumference from './waist-circumference.model';
import Cbc from './cbc.model';
import Platelets from './platelets.model'
import BloodPressure from './blood-pressure.model';

export default {
  [healthTypes.weight.modelID]: Weight,
  [healthTypes.bodyTemperature.modelID]: BodyTemperature,
  [healthTypes.oxygenSaturation.modelID]: OxygenSaturation,
  [healthTypes.height.modelID]: Height,
  [healthTypes.waistCircumference.modelID]: WaistCircumference,
  [healthTypes.cbc.modelID]: Cbc,
  [healthTypes.platelets.modelID]: Platelets,
  [healthTypes.bloodPressure.modelID]: BloodPressure,
}

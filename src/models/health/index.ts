const healthTypes = require('../../configs/health.json');
import Activity from './activity.model';
import Weight from './weight.model';
import BodyTemperature from './body-temperature.model';
import Height from './height.model'
import WaistCircumference from './waist-circumference.model';
import Cbc from './cbc.model';
import Platelets from './platelets.model'
import BloodPressure from './blood-pressure.model';
import Anxiety from './anxiety.model';
import Migraine from './migraine.model';

export default {
  [healthTypes.activity.modelID]: Activity,
  [healthTypes.weight.modelID]: Weight,
  [healthTypes.bodyTemperature.modelID]: BodyTemperature,
  [healthTypes.height.modelID]: Height,
  [healthTypes.waistCircumference.modelID]: WaistCircumference,
  [healthTypes.cbc.modelID]: Cbc,
  [healthTypes.platelets.modelID]: Platelets,
  [healthTypes.bloodPressure.modelID]: BloodPressure,
  [healthTypes.anxiety.modelID]: Anxiety,
  [healthTypes.migraine.modelID]: Migraine,
}

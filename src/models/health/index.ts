const healthTypes = require('../../configs/health.json');
import Weight from './weight.model';

export default {
  [healthTypes.weight.modelID]: Weight
}

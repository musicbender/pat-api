import healthkit from './healthkit';
import health from './health';
import * as car from './car';
import * as collection from './collection';

export default { 
  ...health, 
  ...healthkit,
  ...car,
  ...collection,
};
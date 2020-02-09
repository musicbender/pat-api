import healthkit from './healthkit';
import health from './health';
import * as car from './car';

export default { 
  ...health, 
  ...healthkit,
  ...car,
};
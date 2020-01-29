import { composeBasicHealthTypes } from '../utils/health';
const { weight } = require('../../configs/health.json');

export default composeBasicHealthTypes({ type: weight.modelID });
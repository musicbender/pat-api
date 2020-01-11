import { composeHealthkitQuery } from '../../utils/healthkit';

const sleepAnalysis = composeHealthkitQuery({
  type: 'sleep-analysis',
  description: 'Get a single sleep-analysis count by either _id or date, _id taking priority',
})

export default sleepAnalysis;

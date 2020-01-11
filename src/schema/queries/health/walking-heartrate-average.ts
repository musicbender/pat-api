import { composeHealthkitQuery } from '../../utils/healthkit';

const walkingHeartrateAverage = composeHealthkitQuery({
  type: 'walking-heartrate-average',
  description: 'Get a single walking heartrate average by either _id or date, _id taking priority',
})

export default walkingHeartrateAverage;

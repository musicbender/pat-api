import { composeHealthkitQuery } from '../../utils/healthkit';
import { GraphQLObjectType } from 'graphql';


const walkingRunningDistance = composeHealthkitQuery({
  type: 'walking-running-distance',
  description: 'Get a single walking-running-distance count by either _id or date, _id taking priority',
})

export default walkingRunningDistance;

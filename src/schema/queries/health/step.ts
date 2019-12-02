// import { HealthType } from '../../types';
// import { findHealthById, findHealthByDate } from '../../../controllers/health';
// import * as GraphQLDate from 'graphql-date';
// import { GraphQLString } from 'graphql';
// import { ExpectedError } from '../../../utils/errors';
// import { HealthConfigType } from '../../../types';
// const { healthTypes } = require('../../../configs/health.json');
import { composeHealthkitQuery } from '../../utils/healthkit';

// const step = {
//   type: HealthType,
//   description: 'Get a single step count by either _id or date, _id taking priority',
//   args: {
//     id: {
//       type: GraphQLString
//     },
//     date: {
//       type: GraphQLDate
//     }
//   },
//   resolve(parentValue, args) {
//     const config: HealthConfigType = healthTypes.steps;
//     if (args.id) {
//       return findHealthById(args.id, config);
//     } else if (args.date) {
//       return findHealthByDate(args.date, config);
//     } else {
//       throw new ExpectedError('INVALID_ARGUMENTS');
//     }
//   }
// }

const step = composeHealthkitQuery({
  type: 'steps',
  description: 'Get a single step count by either _id or date, _id taking priority',
})

export default step;

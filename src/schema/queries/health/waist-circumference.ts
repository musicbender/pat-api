import { composeHealthQuery } from '../../utils/health';

export const waistCircumference = composeHealthQuery({
  type: 'waist-circumference',
  description: 'Get a single waist circumference entry by either _id or date, _id taking priority',
});

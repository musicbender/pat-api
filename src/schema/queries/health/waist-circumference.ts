import { composeHealthkitQuery } from '../../utils/healthkit';

export const waistCircumference = composeHealthkitQuery({
  type: 'waist-circumference',
  description: 'Get a single waist circumference by either _id or date, _id taking priority',
});
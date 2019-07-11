import { aggregateStepData } from '../step';

import mockStepData1 from '../../../test/mocks/step-data-1.json';

describe('controllers/step.ts', function () {
  describe('aggregateStepData()', function () {
    const tests = [
      {
        assert: [
          {
            stepData: mockStepData1,
            date: new Date()
          }
        ],
        expected: {
          unit: 'count',
          stepCount: 0,
          sampleDate: '2019-07-06T00:05:17-07:00',
          sources: ['Apple Watch']
        },
        info: 'Given mock sample data 1, outputs correct data'
      },
    ];

    tests.forEach(({ assert, expected, info }) => {
      it(info, () => {
        const data = aggregateStepData(...assert);
        expect(data._id).toBeInstanceOf('string');
        expect(data.unit).toEqual(expected.unit);
        expect(data.stepCount).toEqual(expected.stepCount);
        expect(data.createdOn).toEqual(assert[0].date);
        expect(data.sampleDate).toEqual(expected.sampleDate);
        expect(data.sources).toEqual(expected.sources);
      });
    })
  });
});

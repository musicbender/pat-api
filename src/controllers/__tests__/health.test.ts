import { aggregateHealthData } from '../health';

import mockStepData1 from '../../../test/mocks/step-data-1.json';

describe('controllers/step.ts', function () {
  describe('aggregateStepData()', function () {
    const tests = [
      {
        assert: [ mockStepData1.input ],
        expected: {
          unit: 'count',
          value: 0,
          sampledOn: '2019-07-06T00:05:17-07:00',
          sources: ['Apple Watch']
        },
        info: 'Given mock sample data 1, outputs correct data'
      },
    ];

    tests.forEach(({ assert, expected, info }) => {
      it(info, () => {
        const data = aggregateHealthData(...assert);
        expect(data._id).toBeInstanceOf('string');
        expect(data.unit).toEqual(expected.unit);
        expect(data.value).toEqual(expected.value);
        expect(data.createdOn).toEqual(assert[0].date);
        expect(data.sampledOn).toEqual(expected.sampledOn);
        expect(data.sources).toEqual(expected.sources);
      });
    })
  });
});

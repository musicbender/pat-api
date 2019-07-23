import { aggregateHealthData } from '../health';

// mocks
const mockStepData = require( '../../../test/mocks/step-data-1.json');

describe('controllers/health.ts', function () {
  describe('aggregateHealthData()', function () {
    const tests = [
      {
        assert: [ mockStepData[0] ],
        expected: {
          unit: 'count',
          value: 13626,
          sampledOn: '2019-07-06T00:05:17-07:00',
          sources: ['Apple Watch']
        },
        info: 'Given mock sample data 1, outputs correct data'
      },
      {
        assert: [ mockStepData[1] ],
        expected: {
          unit: 'count',
          value: 9,
          sampledOn: '2019-07-07T23:00:00-07:00',
          sources: ['iPhone', 'Apple Watch']
        },
        info: 'Given mock sample data 2, outputs correct data'
      },
    ];

    tests.forEach(({ assert, expected, info }) => {
      it(info, () => {
        const data = aggregateHealthData(assert[0]);
        expect(data.unit).toEqual(expected.unit);
        expect(data.value).toEqual(expected.value);
        expect(data.sampledOn).toEqual(expected.sampledOn);
        expect(data.sources).toEqual(expected.sources);
      });
    })
  });
});

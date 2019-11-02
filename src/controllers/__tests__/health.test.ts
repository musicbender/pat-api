import { aggregateHealthData } from '../health';
import * as moment from 'moment';
const { healthTypes } = require('../../configs/health.json');

// mocks
const mockStepData = require( '../../../test/mocks/step-data-1.json');

describe('controllers/health.ts', function () {
  describe('aggregateHealthData()', function () {
    const tests = [
      {
        assert: [ mockStepData[0], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 7081,
          sampledOn: '2019-07-06T04:00:00-07:00',
          sources: ['pat-apple-watch']
        },
        info: 'Given mock sample data 1, outputs correct data'
      },
      {
        assert: [ mockStepData[1], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 8,
          sampledOn: '2019-07-06T01:00:00-07:00',
          sources: ['pat-apple-watch', 'pat-iphone']
        },
        info: 'Given mock sample data 2, outputs correct data'
      },
      {
        assert: [ mockStepData[2], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 10,
          sampledOn: '2019-10-10T01:00:00-07:00',
          sources: ['pat-iphone']
        },
        info: 'Given mock sample data 3, outputs correct data'
      },
      {
        assert: [ mockStepData[4], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 100,
          sampledOn: '2019-10-10T12:03:11-07:00',
          sources: ['pat-iphone']
        },
        info: 'If right at midnight, still counts value'
      },
      {
        assert: [ mockStepData[5], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 100,
          sampledOn: '2019-10-10T12:03:11-07:00',
          sources: ['pat-apple-watch']
        },
        info: 'If 1 second before next day, still counts value'
      },
      {
        assert: [ mockStepData[6], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 0,
          sampledOn: '2019-10-10T12:03:11-07:00',
          sources: []
        },
        info: 'If midnight on next day, will not count value'
      },
      {
        assert: [ mockStepData[7], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 0,
          sampledOn: '2019-10-10T12:03:11-07:00',
          sources: []
        },
        info: 'If on previous day by 1 second, will not count value'
      },
      {
        assert: [ mockStepData[8], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 0,
          sampledOn: '2019-10-10T12:03:11-07:00',
          sources: []
        },
        info: 'If on previous day by 1 second, will not count value'
      },
      {
        assert: [ mockStepData[9], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 100,
          sampledOn: '2019-10-10T12:03:11-07:00',
          sources: ['pat-iphone']
        },
        info: 'If valid sources and sample date match, value is correct'
      },
      {
        assert: [ mockStepData[10], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 100,
          sampledOn: '2019-10-10T12:03:11-07:00',
          sources: ['pat-iphone']
        },
        info: 'If all sources accepted, counts all sources'
      },
      {
        assert: [ mockStepData[11], healthTypes.steps ],
        expected: {
          unit: 'count',
          value: 100,
          sampledOn: '2019-10-10T12:03:11-07:00',
          sources: ['pat-apple-watch']
        },
        info: 'If no valid sources defined, counts all sources'
      }
    ];

    tests.forEach(({ assert, expected, info }) => {
      it(info, () => {
        const data = aggregateHealthData(assert[0], assert[1]);
        expect(data.unit).toEqual(expected.unit);
        expect(data.value).toEqual(expected.value);
        expect(data.sampledOn).toEqual(expected.sampledOn);
        expect(data.sources).toEqual(expected.sources);
      });
    });

    it('If not given sampledOn, output is created but no value', () => {
      const data = aggregateHealthData(mockStepData[6], healthTypes.steps);
      const formatDate = moment(data.sampledOn, 'YYYY-MM-DD');
      expect(data.unit).toEqual('count');
      expect(data.value).toEqual(0);
      expect(formatDate.isValid()).toEqual(true);
      expect(data.sources).toEqual([]);
    });
  });
});

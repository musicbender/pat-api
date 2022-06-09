import { isWithinInterval, getValidSources, getAverage, findOutterValues, aggregateHealthData } from '../sample';
import * as moment from 'moment';
import { TestItem } from '../../types';
const { healthTypes } = require('../../configs/healthkit.json');

// mocks
const mockStepData = require( '../../../test/mocks/step-data-1.json');
const mockFlightsData = require( '../../../test/mocks/flights-climbed-data.json');
const mockHeartratesData = require( '../../../test/mocks/heartrate-data.json');

describe('sample.ts', () => {
    describe('isWithinInterval()', () => {
        const tests: TestItem[] = [
            {
                assert: [
                    "day",
                    "2019-10-22T07:29:37-07:00",
                    "2019-10-22T22:33:49-07:00"
                ],
                expected: true
            },
            {
                assert: [
                    "day",
                    "2019-10-22T10:36:31-07:00",
                    "2019-10-22T22:33:49-07:00"
                ],
                expected: true
            },
            {
                assert: [
                    "day",
                    "2019-10-22T12:39:42-07:00",
                    "2019-10-22T22:33:49-07:00"
                ],
                expected: true
            },
            {
                assert: [
                    "day",
                    "2019-10-22T16:22:34-07:00",
                    "2019-10-22T22:33:49-07:00"
                ],
                expected: true
            },
            {
                assert: [
                    "day",
                    "2019-10-22T18:14:19-07:00",
                    "2019-10-22T22:33:49-07:00"
                ],
                expected: true
            },
            {
                assert: [
                    "day",
                    "2019-10-22T21:48:55-07:00",
                    "2019-10-22T22:33:49-07:00"
                ],
                expected: true
            },
            {
                assert: [
                    "day",
                    "2019-10-24T16:22:34-07:00",
                    "2019-10-22T22:33:49-07:00"
                ],
                expected: false
            },
            {
                assert: [
                    "day",
                    "2019-10-21T16:22:34-07:00",
                    "2019-10-22T22:33:49-07:00"
                ],
                expected: false
            },
            {
                assert: [
                    null,
                    "2019-10-22T16:22:34-07:00",
                    "2019-10-22T22:33:49-07:00"
                ],
                expected: true
            }
        ];

        tests.forEach(({ assert, expected }) => {
            it (`${assert[1]} and ${assert[2]} are ${expected} if interval is ${assert[0]}`, () => {
                expect(isWithinInterval(assert[0], assert[1], assert[2])).toEqual(expected);
            });
        });
    });

    describe('getValidSources()', () => {
        const tests: TestItem[] = [
            {
                assert: [
                    ['pat-iphone'],
                    null
                ],
                expected: ['pat-iphone']
            },
            {
                assert: [
                    ['pat-apple-watch'],
                    null
                ],
                expected: ['pat-apple-watch']
            },
            {
                assert: [
                    ['pat-iphone', 'pat-apple-watch'],
                    null
                ],
                expected: ['pat-iphone', 'pat-apple-watch']
            },
            {
                assert: [
                    ['wut'],
                    null
                ],
                expected: ['wut']
            },
            {
                assert: [
                    null,
                    null
                ],
                expected: ['*']
            },
            {
                assert: [
                    null,
                    ['pat-iphone']
                ],
                expected: ['pat-iphone']
            },
            {
                assert: [
                    null,
                    ['pat-apple-watch']
                ],
                expected: ['pat-apple-watch']
            },
            {
                assert: [
                    ['pat-iphone'],
                    ['pat-apple-watch']
                ],
                expected: ['pat-iphone']
            },
            {
                assert: [
                    ['*'],
                    null
                ],
                expected: ['*']
            },
            {
                assert: [
                    [],
                    null
                ],
                expected: ['*']
            },
            {
                assert: [
                    null,
                    []
                ],
                expected: ['*']
            }
        ];

        tests.forEach(({ assert, expected }) => {
            it(`Given ${assert[0] ? assert[0].length : '0'} valid sources, ${assert[1]} is default, returns ${expected}`, () => {
                expect(getValidSources(assert[0], assert[1])).toEqual(expected);
            });
        });
    });

    describe('getAverage()', () => {
      const tests: TestItem[] = [
        {
          assert: [1, 2, 3],
          expected: 2
        },
        {
          assert: [1, 2, 3, 4, 5],
          expected: 3
        },
        {
          assert: [0, 5, 10],
          expected: 5
        },
        {
          assert: [10, 0, 5],
          expected: 5
        },
        {
          assert: [1],
          expected: 1
        },
        {
          assert: [4, 34, 0, 6, 12, 456, 3, 99],
          expected: 76.75
        },
        {
          assert: [0, 100],
          expected: 50
        },
        {
          assert: [0],
          expected: 0
        },
        {
          assert: [1, 2, -3],
          expected: 0
        },
        {
          assert: [1, 2, -10],
          expected: -2.33
        },
        {
          assert: [1, 2, 3.75],
          expected: 2.25
        },
        {
          assert: [2.9, 0.33, 5.5, 3, 3.1111],
          expected: 2.97
        },
        {
          assert: [0, 1000],
          expected: 500
        },
        {
          assert: [],
          expected: null
        },
      ];

      tests.forEach(({ assert, expected }) => {
        it(`Given ${assert[0]} will output ${expected}`, () => {
          expect(getAverage(assert)).toEqual(expected);
        });
      });
    });

    describe('findOutterValues()', () => {
      const tests: TestItem[] = [
        {
          assert: [
            [1, 2, 3],
            'lowest'
          ],
          expected: 1
        },
        {
          assert: [
            [2, 1, 3],
            'lowest'
          ],
          expected: 1
        },
        {
          assert: [
            [30, 56, 45, 99, 10, 11, 55],
            'lowest'
          ],
          expected: 10
        },
        {
          assert: [
            [1, 2, -3],
            'lowest'
          ],
          expected: -3
        },
        {
          assert: [
            [100],
            'lowest'
          ],
          expected: 100
        },
        {
          assert: [
            [2, 2],
            'lowest'
          ],
          expected: 2
        },
        {
          assert: [
            [1, 2, 3],
            'highest'
          ],
          expected: 3
        },
        {
          assert: [
            [3, 1, 2],
            'highest'
          ],
          expected: 3
        },
        {
          assert: [
            [999, 453, 337, 37, -12, 1000, 1001, 500],
            'highest'
          ],
          expected: 1001
        },
        {
          assert: [
            [0, 100],
            'highest'
          ],
          expected: 100
        },
        {
          assert: [
            [1],
            'highest'
          ],
          expected: 1
        },
        {
          assert: [
            [-100, -99],
            'highest'
          ],
          expected: -99
        },
        {
          assert: [
            [22, 22],
            'highest'
          ],
          expected: 22
        }
      ];

      tests.forEach(({ assert, expected }) => {
        it(`Given ${assert[0]} will output ${expected}`, () => {
          expect(findOutterValues(assert[0], assert[1])).toEqual(expected);
        });
      });
    });

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
            value: null,
            sampledOn: '2019-10-10T12:03:11-07:00',
            sources: []
          },
          info: 'If midnight on next day, will not count value'
        },
        {
          assert: [ mockStepData[7], healthTypes.steps ],
          expected: {
            unit: 'count',
            value: null,
            sampledOn: '2019-10-10T12:03:11-07:00',
            sources: []
          },
          info: 'If on previous day by 1 second, will not count value'
        },
        {
          assert: [ mockStepData[8], healthTypes.steps ],
          expected: {
            unit: 'count',
            value: null,
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
        },
        {
          assert: [ mockFlightsData[0], healthTypes.flightsClimbed ],
          expected: {
            unit: 'count',
            value: 5,
            sampledOn: '2019-12-10T12:03:11-07:00',
            sources: ['pat-iphone']
          },
          info: 'Given valid flights climbed data, outputs correct data'
        },
        {
          assert: [ mockFlightsData[1], healthTypes.flightsClimbed ],
          expected: {
            unit: 'count',
            value: 2,
            sampledOn: '2019-12-10T12:03:11-07:00',
            sources: ['pat-iphone'] 
          },
          info: 'Does not include invalid flights source sample'
        },
        {
          assert: [ mockHeartratesData[0], healthTypes.heartRate ],
          expected: {
            unit: 'count_min',
            value: 78,
            sampledOn: '2019-12-10T12:03:11-07:00',
            sources: ['pat-apple-watch']
          },
          info: 'Given valid heartrate data, outputs correct data'
        },
        {
          assert: [ mockHeartratesData[1], healthTypes.heartRate ],
          expected: {
            unit: 'count_min',
            value: 79,
            sampledOn: '2019-12-10T12:03:11-07:00',
            sources: ['pat-apple-watch']
          },
          info: 'Does not include invalid heartrate source sample'
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
        expect(data.value).toEqual(null);
        expect(formatDate.isValid()).toEqual(true);
        expect(data.sources).toEqual([]);
      });
    });
});
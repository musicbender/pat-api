import { isWithinInterval, getValidSources, getAverage, findOutterValues } from '../sample';
import { TestItem } from '../../types';

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
                    'pat-iphone'
                ],
                expected: ['pat-iphone']
            },
            {
                assert: [
                    null,
                    'pat-apple-watch'
                ],
                expected: ['pat-apple-watch']
            },
            {
                assert: [
                    ['pat-iphone'],
                    'pat-apple-watch'
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
                    ['none'],
                    null
                ],
                expected: null
            },
            {
                assert: [
                    null,
                    'none'
                ],
                expected: null
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
          expected: 77
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
          expected: -2
        },
        {
          assert: [1, 2, 3.75],
          expected: 2
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
});
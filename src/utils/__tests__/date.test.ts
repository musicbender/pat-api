import * as moment from 'moment';
import { formatDuration, addToDuration } from '../date';

describe('date.ts', function () {
  describe('formatDuration()', function () {
    const tests = [
      {
        assert: '00:01:00',
        expected: '0.00:01:00'
      },
      {
        assert: '00:01:10',
        expected: '0.00:01:10'
      },
      {
        assert: '1.00:00:00',
        expected: '1.00:00:00'
      },
      {
        assert: 60000,
        expected: '0.00:01:00'
      },
      {
        assert: 3600000,
        expected: '0.01:00:00'
      },
      {
        assert: 150000,
        expected: '0.00:02:30'
      },
      {
        assert: 0,
        expected: '0.00:00:00'
      },
    ];

    tests.forEach(({ assert, expected }) => {
      it(`Giving duration of ${assert} formats to ${expected}`, function () {
        expect(formatDuration(moment.duration(assert))).toBe(expected);
      });
    });
  });

  describe('addToDuration()', function () {
    const tests = [
      {
        assert: [
          '00:01:00',
          '0.00:15:00'
        ],
        expected: '0.00:16:00'
      },
      {
        assert: [
          '00:01:00',
          '0.00:01:00'
        ],
        expected: '0.00:02:00'
      },
      {
        assert: [
          '00:00:01',
          '0.00:00:15'
        ],
        expected: '0.00:00:16'
      },
      {
        assert: [
          '01:01:00',
          '0.03:00:00'
        ],
        expected: '0.04:01:00'
      },
      {
        assert: [
          '00:00:00',
          '0.00:15:00'
        ],
        expected: '0.00:15:00'
      },
      {
        assert: [
          '00:00:00',
          '0.00:00:00'
        ],
        expected: '0.00:00:00'
      },
      {
        assert: [
          '00:00',
          '0.00:15:00'
        ],
        expected: '0.00:15:00'
      },
      {
        assert: [
          '00:00',
          '0.00:00:00'
        ],
        expected: '0.00:00:00'
      },
      {
        assert: [
          '01:00',
          '0.00:15:00'
        ],
        expected: '0.00:16:00'
      },
      {
        assert: [
          '30:12',
          '0.00:10:00'
        ],
        expected: '0.00:40:12'
      },
      {
        assert: [
          '2:10',
          '0.00:10:00'
        ],
        expected: '0.00:12:10'
      },
      {
        assert: [
          '9:00',
          '0.00:10:00'
        ],
        expected: '0.00:19:00'
      },
      {
        assert: [
          '1:09:00',
          '0.00:10:00'
        ],
        expected: '0.01:19:00'
      },
      {
        assert: [
          '0',
          '0.00:15:00'
        ],
        expected: '0.00:15:00'
      },
      {
        assert: [
          undefined,
          '0.00:15:00'
        ],
        expected: '0.00:15:00'
      },
      {
        assert: [
          '15:00'
        ],
        expected: '0.00:15:00'
      },
      {
        assert: [],
        expected: '0.00:00:00'
      },
      {
        assert: [
          '01:00:00',
          '0.23:00:00'
        ],
        expected: '1.00:00:00'
      },
      {
        assert: [
          '11:11:11',
          '1.00:00:00'
        ],
        expected: '1.11:11:11'
      },
      {
        assert: [
          '2.00:00:00',
          '2.00:00:00'
        ],
        expected: '4.00:00:00'
      },
    ];

    tests.forEach(({ assert, expected }) => {
      it(`Add ${assert[0]} to ${assert[1]} should output ${expected}`, function () {
        expect(addToDuration(...assert)).toBe(expected);
      });
    });
  });
});

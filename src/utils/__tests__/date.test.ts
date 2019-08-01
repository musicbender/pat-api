import * as moment from 'moment';
import { addToDuration } from '../date';

describe('date.ts', function () {
  describe('addToDuration()', function () {
    const tests = [
      {
        assert: [
          '00:01:00',
          '00:15:00'
        ],
        expected: '00:16:00'
      },
      {
        assert: [
          '00:01:00',
          '00:01:00'
        ],
        expected: '00:02:00'
      },
      {
        assert: [
          '00:00:01',
          '00:00:15'
        ],
        expected: '00:00:16'
      },
      {
        assert: [
          '01:01:00',
          '03:00:00'
        ],
        expected: '04:01:00'
      },
      {
        assert: [
          '00:00:00',
          '00:15:00'
        ],
        expected: '00:15:00'
      },
      {
        assert: [
          '00:00:00',
          '00:00:00'
        ],
        expected: '00:00:00'
      },
      {
        assert: [
          '00:00',
          '00:15:00'
        ],
        expected: '00:15:00'
      },
      {
        assert: [
          '00:00',
          '00:00:00'
        ],
        expected: '00:00:00'
      },
      {
        assert: [
          '01:00',
          '00:15:00'
        ],
        expected: '00:16:00'
      },
      {
        assert: [
          '01:00',
          '15:00'
        ],
        expected: '00:16:00'
      },
      {
        assert: [
          '30:12',
          '00:10:00'
        ],
        expected: '00:40:12'
      },
      {
        assert: [
          '0',
          '00:15:00'
        ],
        expected: '00:15:00'
      },
      {
        assert: [
          undefined,
          '00:15:00'
        ],
        expected: '00:15:00'
      },
      {
        assert: [
          '15:00'
        ],
        expected: '00:15:00'
      },
      {
        assert: [],
        expected: '00:00:00'
      }
    ];

    tests.forEach(({ assert, expected }) => {
      it(`Add ${assert[0]} to ${assert[1]} should output ${expected}`, function () {
        expect(addToDuration(...assert)).toBe(expected);
      });
    });
  });
});

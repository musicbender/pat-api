import { isWithinInterval } from '../sample';

describe('sample.ts', () => {
    describe('isWithinInterval()', () => {
        const tests: any = [
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
});
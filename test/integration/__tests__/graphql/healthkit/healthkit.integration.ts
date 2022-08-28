import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { clearHealthKitTables } from '@database';
import { GRAPHQL_PATH } from '@integration/lib/constants';
import { addMutation, getQuery, deleteMutation } from '@mocks/queries/healthkit';
import { gqlPlugin } from '@integration/lib/plugins';
import * as inputs from '@mocks/inputs/healthkit';
import * as moment from 'moment';

/**
 * Healthkit integration tests
 *
 * @group integration
 * @group int/graphql/healthkit
 */

describe('Healthkit', () => {
  const hkIdList: string[] = [];
  let request: SuperTest<Test>;

  beforeAll(async () => {
    await clearHealthKitTables();
  });

  afterAll(async () => {
    await clearHealthKitTables();
  });

  beforeEach(async () => {
    request = supertest(globalThis.patApiServer);
  });

  describe('create mutation', () => {
    it('works with input variation 1', async () => {
      console.log('DEBUG --- input variation 1 begin');
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hk1,
          },
        });

      console.log('DEBUG --- input variation 1 res', JSON.stringify(res.body));

      const {
        response: [data1],
      } = res.body.data.addHealthKit;

      if (data1.hkid) hkIdList.push(data1.hkid);

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(1);
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(2265);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(2265);
      expect(data1.averageSampleValue).toEqual(66.62);
      expect(data1.highestSampleValue).toEqual(677);
      expect(data1.lowestSampleValue).toEqual(1);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-apple-watch']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.01:29:17');
      expect(data1.configID).toEqual('steps');
    });

    it('works with input variation 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hk2,
          },
        });

      const {
        response: [data1, data2],
      } = res.body.data.addHealthKit;

      expect(res.body.data.addHealthKit.response.length).toEqual(2);

      // Flights Climbed
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(5);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(5);
      expect(data1.averageSampleValue).toEqual(1.67);
      expect(data1.highestSampleValue).toEqual(3);
      expect(data1.lowestSampleValue).toEqual(1);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-iphone']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.00:00:34');
      expect(data1.configID).toEqual('flights-climbed');

      // Walking + Running Distance
      expect(typeof data2.id).toEqual('string');
      expect(data2.id.length).toEqual(36);
      expect(typeof data2.hkid).toEqual('string');
      expect(data2.hkid.length).toEqual(11);
      expect(data2.value).toEqual(16);
      expect(data2.valueType).toEqual('totalSampleValue');
      expect(data2.totalSampleValue).toEqual(16);
      expect(data2.averageSampleValue).toEqual(5.33);
      expect(data2.highestSampleValue).toEqual(10);
      expect(data2.lowestSampleValue).toEqual(1);
      expect(moment(data2.sampledOn).isValid()).toBeTruthy();
      expect(moment(data2.createdOn).isValid()).toBeTruthy();
      expect(moment(data2.updatedOn).isValid()).toBeTruthy();
      expect(data2.sources).toEqual(['pat-apple-watch']);
      expect(data2.unit).toEqual('mi');
      expect(data2.totalDuration).toEqual('0.00:10:33');
      expect(data2.configID).toEqual('walking-running-distance');
    });

    it('works with input variation 3', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hk3,
          },
        });

      const {
        response: [data1, data2, data3],
      } = res.body.data.addHealthKit;

      if (data1.hkid) hkIdList.push(data1.hkid);

      expect(res.body.data.addHealthKit.response.length).toEqual(3);

      // Blood Pressure
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.diastolic).toEqual(70);
      expect(data1.systolic).toEqual(115);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.unit).toEqual('mmHg');
      expect(data1.configID).toEqual('blood-pressure');

      // Heart Rate
      expect(typeof data2.id).toEqual('string');
      expect(data2.id.length).toEqual(36);
      expect(typeof data2.hkid).toEqual('string');
      expect(data2.hkid.length).toEqual(11);
      expect(data2.value).toEqual(73.75);
      expect(data2.valueType).toEqual('averageSampleValue');
      expect(data2.totalSampleValue).toEqual(null);
      expect(data2.averageSampleValue).toEqual(73.75);
      expect(data2.highestSampleValue).toEqual(86);
      expect(data2.lowestSampleValue).toEqual(68);
      expect(moment(data2.sampledOn).isValid()).toBeTruthy();
      expect(moment(data2.createdOn).isValid()).toBeTruthy();
      expect(moment(data2.updatedOn).isValid()).toBeTruthy();
      expect(data2.sources).toEqual(['pat-apple-watch']);
      expect(data2.unit).toEqual('count_min');
      expect(data2.totalDuration).toEqual('0.00:00:00');
      expect(data2.configID).toEqual('heartrate');

      // Oxygen Saturation
      expect(typeof data3.id).toEqual('string');
      expect(data3.id.length).toEqual(36);
      expect(typeof data3.hkid).toEqual('string');
      expect(data3.hkid.length).toEqual(11);
      expect(data3.value).toEqual(97);
      expect(data3.valueType).toEqual('averageSampleValue');
      expect(data3.totalSampleValue).toEqual(null);
      expect(data3.averageSampleValue).toEqual(97);
      expect(data3.highestSampleValue).toEqual(100);
      expect(data3.lowestSampleValue).toEqual(95);
      expect(moment(data3.sampledOn).isValid()).toBeTruthy();
      expect(moment(data3.createdOn).isValid()).toBeTruthy();
      expect(moment(data3.updatedOn).isValid()).toBeTruthy();
      expect(data3.sources).toEqual(['pat-apple-watch', 'valid-test-source']);
      expect(data3.unit).toEqual('percent');
      expect(data3.totalDuration).toEqual('0.00:00:00');
      expect(data3.configID).toEqual('oxygen-saturation');
    });

    it('works with large healthkit input 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkAll1,
          },
        });

      const {
        response: [data1, data2, data3, data4, data5, data6, data7, data8],
      } = res.body.data.addHealthKit;

      if (data1.hkid) hkIdList.push(data1.hkid);

      expect(res.body.data.addHealthKit.response.length).toEqual(8);

      // Flights Climbed
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(14);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(14);
      expect(data1.averageSampleValue).toEqual(1);
      expect(data1.highestSampleValue).toEqual(1);
      expect(data1.lowestSampleValue).toEqual(1);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-apple-watch', 'pat-iphone']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.01:07:18');
      expect(data1.configID).toEqual('flights-climbed');

      // Heart Rate
      expect(typeof data2.id).toEqual('string');
      expect(data2.id.length).toEqual(36);
      expect(typeof data2.hkid).toEqual('string');
      expect(data2.hkid.length).toEqual(11);
      expect(data2.value).toEqual(104.14);
      expect(data2.valueType).toEqual('averageSampleValue');
      expect(data2.totalSampleValue).toEqual(null);
      expect(data2.averageSampleValue).toEqual(104.14);
      expect(data2.highestSampleValue).toEqual(165);
      expect(data2.lowestSampleValue).toEqual(64);
      expect(moment(data2.sampledOn).isValid()).toBeTruthy();
      expect(moment(data2.createdOn).isValid()).toBeTruthy();
      expect(moment(data2.updatedOn).isValid()).toBeTruthy();
      expect(data2.sources).toEqual(['pat-apple-watch']);
      expect(data2.unit).toEqual('count_min');
      expect(data2.totalDuration).toEqual('0.00:00:00');
      expect(data2.configID).toEqual('heartrate');

      // Heart Rate Variability
      expect(typeof data3.id).toEqual('string');
      expect(data3.id.length).toEqual(36);
      expect(typeof data3.hkid).toEqual('string');
      expect(data3.hkid.length).toEqual(11);
      expect(data3.value).toEqual(42.83);
      expect(data3.valueType).toEqual('averageSampleValue');
      expect(data3.totalSampleValue).toEqual(null);
      expect(data3.averageSampleValue).toEqual(42.83);
      expect(data3.highestSampleValue).toEqual(70.74819793895963);
      expect(data3.lowestSampleValue).toEqual(19.90049354129502);
      expect(moment(data3.sampledOn).isValid()).toBeTruthy();
      expect(moment(data3.createdOn).isValid()).toBeTruthy();
      expect(moment(data3.updatedOn).isValid()).toBeTruthy();
      expect(data3.sources).toEqual(['pat-apple-watch']);
      expect(data3.unit).toEqual('ms');
      expect(data3.totalDuration).toEqual('0.00:08:33');
      expect(data3.configID).toEqual('heartrate-variability');

      // Oxygen Saturation
      expect(typeof data4.id).toEqual('string');
      expect(data4.id.length).toEqual(36);
      expect(typeof data4.hkid).toEqual('string');
      expect(data4.hkid.length).toEqual(11);
      expect(data4.value).toEqual(94);
      expect(data4.valueType).toEqual('averageSampleValue');
      expect(data4.totalSampleValue).toEqual(null);
      expect(data4.averageSampleValue).toEqual(94);
      expect(data4.highestSampleValue).toEqual(97);
      expect(data4.lowestSampleValue).toEqual(90);
      expect(moment(data4.sampledOn).isValid()).toBeTruthy();
      expect(moment(data4.createdOn).isValid()).toBeTruthy();
      expect(moment(data4.updatedOn).isValid()).toBeTruthy();
      expect(data4.sources).toEqual(['pat-apple-watch']);
      expect(data4.unit).toEqual('percent');
      expect(data4.totalDuration).toEqual('0.00:00:00');
      expect(data4.configID).toEqual('oxygen-saturation');

      // Resting Heart Rate
      expect(typeof data5.id).toEqual('string');
      expect(data5.id.length).toEqual(36);
      expect(typeof data5.hkid).toEqual('string');
      expect(data5.hkid.length).toEqual(11);
      expect(data5.value).toEqual(70);
      expect(data5.valueType).toEqual('averageSampleValue');
      expect(data5.totalSampleValue).toEqual(null);
      expect(data5.averageSampleValue).toEqual(70);
      expect(data5.highestSampleValue).toEqual(70);
      expect(data5.lowestSampleValue).toEqual(70);
      expect(moment(data5.sampledOn).isValid()).toBeTruthy();
      expect(moment(data5.createdOn).isValid()).toBeTruthy();
      expect(moment(data5.updatedOn).isValid()).toBeTruthy();
      expect(data5.sources).toEqual(['pat-apple-watch']);
      expect(data5.unit).toEqual('bpm');
      expect(data5.totalDuration).toEqual('0.17:07:24');
      expect(data5.configID).toEqual('resting-heartrate');

      // Steps
      expect(typeof data6.id).toEqual('string');
      expect(data6.id.length).toEqual(36);
      expect(typeof data6.hkid).toEqual('string');
      expect(data6.hkid.length).toEqual(11);
      expect(data6.value).toEqual(3532);
      expect(data6.valueType).toEqual('totalSampleValue');
      expect(data6.totalSampleValue).toEqual(3532);
      expect(data6.averageSampleValue).toEqual(28.26);
      expect(data6.highestSampleValue).toEqual(172);
      expect(data6.lowestSampleValue).toEqual(1);
      expect(moment(data6.sampledOn).isValid()).toBeTruthy();
      expect(moment(data6.createdOn).isValid()).toBeTruthy();
      expect(moment(data6.updatedOn).isValid()).toBeTruthy();
      expect(data6.sources).toEqual(['pat-apple-watch']);
      expect(data6.unit).toEqual('count');
      expect(data6.totalDuration).toEqual('0.02:13:24');
      expect(data6.configID).toEqual('steps');

      // Walking Heart Rate Average
      expect(typeof data7.id).toEqual('string');
      expect(data7.id.length).toEqual(36);
      expect(typeof data7.hkid).toEqual('string');
      expect(data7.hkid.length).toEqual(11);
      expect(data7.value).toEqual(132);
      expect(data7.valueType).toEqual('averageSampleValue');
      expect(data7.totalSampleValue).toEqual(null);
      expect(data7.averageSampleValue).toEqual(132);
      expect(data7.highestSampleValue).toEqual(132);
      expect(data7.lowestSampleValue).toEqual(132);
      expect(moment(data7.sampledOn).isValid()).toBeTruthy();
      expect(moment(data7.createdOn).isValid()).toBeTruthy();
      expect(moment(data7.updatedOn).isValid()).toBeTruthy();
      expect(data7.sources).toEqual(['pat-apple-watch']);
      expect(data7.unit).toEqual('bpm');
      expect(data7.totalDuration).toEqual('0.13:19:07');
      expect(data7.configID).toEqual('walking-heartrate-average');

      // Walking + Running Distance
      expect(typeof data8.id).toEqual('string');
      expect(data8.id.length).toEqual(36);
      expect(typeof data8.hkid).toEqual('string');
      expect(data8.hkid.length).toEqual(11);
      expect(data8.value).toEqual(1.73);
      expect(data8.valueType).toEqual('totalSampleValue');
      expect(data8.totalSampleValue).toEqual(1.73);
      expect(data8.averageSampleValue).toEqual(0.01);
      expect(data8.highestSampleValue).toEqual(0.07594857915549792);
      expect(data8.lowestSampleValue).toEqual(0.0004346900710157987);
      expect(moment(data8.sampledOn).isValid()).toBeTruthy();
      expect(moment(data8.createdOn).isValid()).toBeTruthy();
      expect(moment(data8.updatedOn).isValid()).toBeTruthy();
      expect(data8.sources).toEqual(['pat-apple-watch']);
      expect(data8.unit).toEqual('mi');
      expect(data8.totalDuration).toEqual('0.02:14:12');
      expect(data8.configID).toEqual('walking-running-distance');
    });

    it('works with large healthkit input 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkAll2,
          },
        });

      const {
        response: [data0, data1, data2, data3, data4, data5, data6, data7, data8],
      } = res.body.data.addHealthKit;

      expect(res.body.data.addHealthKit.response.length).toEqual(9);

      // Blood Pressure
      expect(typeof data0.id).toEqual('string');
      expect(data0.id.length).toEqual(36);
      expect(typeof data0.hkid).toEqual('string');
      expect(data0.hkid.length).toEqual(11);
      expect(data0.diastolic).toEqual(75);
      expect(data0.systolic).toEqual(118);
      expect(moment(data0.sampledOn).isValid()).toBeTruthy();
      expect(moment(data0.createdOn).isValid()).toBeTruthy();
      expect(moment(data0.updatedOn).isValid()).toBeTruthy();
      expect(data0.unit).toEqual('mmHg');
      expect(data0.configID).toEqual('blood-pressure');

      // Flights Climbed
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(28);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(28);
      expect(data1.averageSampleValue).toEqual(1.08);
      expect(data1.highestSampleValue).toEqual(2);
      expect(data1.lowestSampleValue).toEqual(1);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-iphone', 'pat-apple-watch']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.00:13:10');
      expect(data1.configID).toEqual('flights-climbed');

      // Heart Rate
      expect(typeof data2.id).toEqual('string');
      expect(data2.id.length).toEqual(36);
      expect(typeof data2.hkid).toEqual('string');
      expect(data2.hkid.length).toEqual(11);
      expect(data2.value).toEqual(123.42);
      expect(data2.valueType).toEqual('averageSampleValue');
      expect(data2.totalSampleValue).toEqual(null);
      expect(data2.averageSampleValue).toEqual(123.42);
      expect(data2.highestSampleValue).toEqual(178);
      expect(data2.lowestSampleValue).toEqual(64);
      expect(moment(data2.sampledOn).isValid()).toBeTruthy();
      expect(moment(data2.createdOn).isValid()).toBeTruthy();
      expect(moment(data2.updatedOn).isValid()).toBeTruthy();
      expect(data2.sources).toEqual(['pat-apple-watch']);
      expect(data2.unit).toEqual('count_min');
      expect(data2.totalDuration).toEqual('0.00:00:00');
      expect(data2.configID).toEqual('heartrate');

      // Heart Rate Variability
      expect(typeof data3.id).toEqual('string');
      expect(data3.id.length).toEqual(36);
      expect(typeof data3.hkid).toEqual('string');
      expect(data3.hkid.length).toEqual(11);
      expect(data3.value).toEqual(37.18);
      expect(data3.valueType).toEqual('averageSampleValue');
      expect(data3.totalSampleValue).toEqual(null);
      expect(data3.averageSampleValue).toEqual(37.18);
      expect(data3.highestSampleValue).toEqual(63.28448657006221);
      expect(data3.lowestSampleValue).toEqual(15.10069830657369);
      expect(moment(data3.sampledOn).isValid()).toBeTruthy();
      expect(moment(data3.createdOn).isValid()).toBeTruthy();
      expect(moment(data3.updatedOn).isValid()).toBeTruthy();
      expect(data3.sources).toEqual(['pat-apple-watch']);
      expect(data3.unit).toEqual('ms');
      expect(data3.totalDuration).toEqual('0.00:07:34');
      expect(data3.configID).toEqual('heartrate-variability');

      // Oxygen Saturation
      expect(typeof data4.id).toEqual('string');
      expect(data4.id.length).toEqual(36);
      expect(typeof data4.hkid).toEqual('string');
      expect(data4.hkid.length).toEqual(11);
      expect(data4.value).toEqual(96);
      expect(data4.valueType).toEqual('averageSampleValue');
      expect(data4.totalSampleValue).toEqual(null);
      expect(data4.averageSampleValue).toEqual(96);
      expect(data4.highestSampleValue).toEqual(99);
      expect(data4.lowestSampleValue).toEqual(93);
      expect(moment(data4.sampledOn).isValid()).toBeTruthy();
      expect(moment(data4.createdOn).isValid()).toBeTruthy();
      expect(moment(data4.updatedOn).isValid()).toBeTruthy();
      expect(data4.sources).toEqual(['pat-apple-watch']);
      expect(data4.unit).toEqual('percent');
      expect(data4.totalDuration).toEqual('0.00:00:00');
      expect(data4.configID).toEqual('oxygen-saturation');

      // Resting Heart Rate
      expect(typeof data5.id).toEqual('string');
      expect(data5.id.length).toEqual(36);
      expect(typeof data5.hkid).toEqual('string');
      expect(data5.hkid.length).toEqual(11);
      expect(data5.value).toEqual(71);
      expect(data5.valueType).toEqual('averageSampleValue');
      expect(data5.totalSampleValue).toEqual(null);
      expect(data5.averageSampleValue).toEqual(71);
      expect(data5.highestSampleValue).toEqual(71);
      expect(data5.lowestSampleValue).toEqual(71);
      expect(moment(data5.sampledOn).isValid()).toBeTruthy();
      expect(moment(data5.createdOn).isValid()).toBeTruthy();
      expect(moment(data5.updatedOn).isValid()).toBeTruthy();
      expect(data5.sources).toEqual(['pat-apple-watch']);
      expect(data5.unit).toEqual('bpm');
      expect(data5.totalDuration).toEqual('0.13:23:05');
      expect(data5.configID).toEqual('resting-heartrate');

      // Steps
      expect(typeof data6.id).toEqual('string');
      expect(data6.id.length).toEqual(36);
      expect(typeof data6.hkid).toEqual('string');
      expect(data6.hkid.length).toEqual(11);
      expect(data6.value).toEqual(6690);
      expect(data6.valueType).toEqual('totalSampleValue');
      expect(data6.totalSampleValue).toEqual(6690);
      expect(data6.averageSampleValue).toEqual(44.6);
      expect(data6.highestSampleValue).toEqual(637);
      expect(data6.lowestSampleValue).toEqual(1);
      expect(moment(data6.sampledOn).isValid()).toBeTruthy();
      expect(moment(data6.createdOn).isValid()).toBeTruthy();
      expect(moment(data6.updatedOn).isValid()).toBeTruthy();
      expect(data6.sources).toEqual(['pat-apple-watch']);
      expect(data6.unit).toEqual('count');
      expect(data6.totalDuration).toEqual('0.03:41:00');
      expect(data6.configID).toEqual('steps');

      // Walking Heart Rate Average
      expect(typeof data7.id).toEqual('string');
      expect(data7.id.length).toEqual(36);
      expect(typeof data7.hkid).toEqual('string');
      expect(data7.hkid.length).toEqual(11);
      expect(data7.value).toEqual(114.5);
      expect(data7.valueType).toEqual('averageSampleValue');
      expect(data7.totalSampleValue).toEqual(null);
      expect(data7.averageSampleValue).toEqual(114.5);
      expect(data7.highestSampleValue).toEqual(114.5);
      expect(data7.lowestSampleValue).toEqual(114.5);
      expect(moment(data7.sampledOn).isValid()).toBeTruthy();
      expect(moment(data7.createdOn).isValid()).toBeTruthy();
      expect(moment(data7.updatedOn).isValid()).toBeTruthy();
      expect(data7.sources).toEqual(['pat-apple-watch']);
      expect(data7.unit).toEqual('bpm');
      expect(data7.totalDuration).toEqual('0.13:46:02');
      expect(data7.configID).toEqual('walking-heartrate-average');

      // Walking + Running Distance
      expect(typeof data8.id).toEqual('string');
      expect(data8.id.length).toEqual(36);
      expect(typeof data8.hkid).toEqual('string');
      expect(data8.hkid.length).toEqual(11);
      expect(data8.value).toEqual(3.22);
      expect(data8.valueType).toEqual('totalSampleValue');
      expect(data8.totalSampleValue).toEqual(3.22);
      expect(data8.averageSampleValue).toEqual(0.02);
      expect(data8.highestSampleValue).toEqual(0.3093556414342399);
      expect(data8.lowestSampleValue).toEqual(0.0003249340547831455);
      expect(moment(data8.sampledOn).isValid()).toBeTruthy();
      expect(moment(data8.createdOn).isValid()).toBeTruthy();
      expect(moment(data8.updatedOn).isValid()).toBeTruthy();
      expect(data8.sources).toEqual(['pat-apple-watch']);
      expect(data8.unit).toEqual('mi');
      expect(data8.totalDuration).toEqual('0.03:26:38');
      expect(data8.configID).toEqual('walking-running-distance');
    });

    it('works with step variation 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkSteps[0],
          },
        });

      const {
        response: [data1],
      } = res.body.data.addHealthKit;

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(1);
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(8);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(8);
      expect(data1.averageSampleValue).toEqual(1);
      expect(data1.highestSampleValue).toEqual(1);
      expect(data1.lowestSampleValue).toEqual(1);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-apple-watch', 'pat-iphone']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.00:00:00');
      expect(data1.configID).toEqual('steps');
    });

    it('works with step variation 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkSteps[1],
          },
        });

      const {
        response: [data1],
      } = res.body.data.addHealthKit;

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(1);
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(10);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(10);
      expect(data1.averageSampleValue).toEqual(10);
      expect(data1.highestSampleValue).toEqual(10);
      expect(data1.lowestSampleValue).toEqual(10);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-iphone']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.00:00:00');
      expect(data1.configID).toEqual('steps');
    });

    it('works with step variation 3', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkSteps[2],
          },
        });

      const {
        response: [data1],
      } = res.body.data.addHealthKit;

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(1);
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(10);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(10);
      expect(data1.averageSampleValue).toEqual(10);
      expect(data1.highestSampleValue).toEqual(10);
      expect(data1.lowestSampleValue).toEqual(10);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['test-device']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.00:00:00');
      expect(data1.configID).toEqual('steps');
    });

    it('non-matching sampled on dates for samples returns nothing 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkSteps[3],
          },
        });

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(0);
    });

    it('non-matching sampled on dates for samples returns nothing 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkSteps[4],
          },
        });

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(0);
    });

    it('no valid devices returns nothing', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkSteps[5],
          },
        });

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(0);
    });

    it('any valid device should use all samples no matter the device', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkSteps[6],
          },
        });

      const {
        response: [data1],
      } = res.body.data.addHealthKit;

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(1);
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(400);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(400);
      expect(data1.averageSampleValue).toEqual(100);
      expect(data1.highestSampleValue).toEqual(100);
      expect(data1.lowestSampleValue).toEqual(100);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual([
        'pat-iphone',
        'wut-is-this',
        'another-device',
        'its-over-nine-thousand',
      ]);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.00:00:00');
      expect(data1.configID).toEqual('steps');
    });

    it('even value of zero returns steps data', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkSteps[7],
          },
        });

      const {
        response: [data1],
      } = res.body.data.addHealthKit;

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(1);
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(0);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(0);
      expect(data1.averageSampleValue).toEqual(0);
      expect(data1.highestSampleValue).toEqual(0);
      expect(data1.lowestSampleValue).toEqual(0);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-apple-watch']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.00:00:00');
      expect(data1.configID).toEqual('steps');
    });

    it('no samples returns nothing', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hkSteps[8],
          },
        });

      // Steps
      expect(res.body.data.addHealthKit.response.length).toEqual(0);
    });
  });

  describe('query', () => {
    it('query variation 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { hkid: hkIdList[0] },
        });

      const {
        response: [data1],
      } = res.body.data.healthkit;

      // Steps
      expect(res.body.data.healthkit.response.length).toEqual(1);
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(2265);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(2265);
      expect(data1.averageSampleValue).toEqual(66.62);
      expect(data1.highestSampleValue).toEqual(677);
      expect(data1.lowestSampleValue).toEqual(1);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-apple-watch']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.01:29:17');
      expect(data1.configID).toEqual('steps');
    });

    it('query variation 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { hkid: hkIdList[1] },
        });

      const {
        response: [data1, data2, data3],
      } = res.body.data.healthkit;

      expect(res.body.data.healthkit.response.length).toEqual(3);

      // Blood Pressure
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.diastolic).toEqual(70);
      expect(data1.systolic).toEqual(115);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.unit).toEqual('mmHg');
      expect(data1.configID).toEqual('blood-pressure');

      // Heart Rate
      expect(typeof data2.id).toEqual('string');
      expect(data2.id.length).toEqual(36);
      expect(typeof data2.hkid).toEqual('string');
      expect(data2.hkid.length).toEqual(11);
      expect(data2.value).toEqual(73.75);
      expect(data2.valueType).toEqual('averageSampleValue');
      expect(data2.totalSampleValue).toEqual(null);
      expect(data2.averageSampleValue).toEqual(73.75);
      expect(data2.highestSampleValue).toEqual(86);
      expect(data2.lowestSampleValue).toEqual(68);
      expect(moment(data2.sampledOn).isValid()).toBeTruthy();
      expect(moment(data2.createdOn).isValid()).toBeTruthy();
      expect(moment(data2.updatedOn).isValid()).toBeTruthy();
      expect(data2.sources).toEqual(['pat-apple-watch']);
      expect(data2.unit).toEqual('count_min');
      expect(data2.totalDuration).toEqual('0.00:00:00');
      expect(data2.configID).toEqual('heartrate');

      // Oxygen Saturation
      expect(typeof data3.id).toEqual('string');
      expect(data3.id.length).toEqual(36);
      expect(typeof data3.hkid).toEqual('string');
      expect(data3.hkid.length).toEqual(11);
      expect(data3.value).toEqual(97);
      expect(data3.valueType).toEqual('averageSampleValue');
      expect(data3.totalSampleValue).toEqual(null);
      expect(data3.averageSampleValue).toEqual(97);
      expect(data3.highestSampleValue).toEqual(100);
      expect(data3.lowestSampleValue).toEqual(95);
      expect(moment(data3.sampledOn).isValid()).toBeTruthy();
      expect(moment(data3.createdOn).isValid()).toBeTruthy();
      expect(moment(data3.updatedOn).isValid()).toBeTruthy();
      expect(data3.sources).toEqual(['pat-apple-watch', 'valid-test-source']);
      expect(data3.unit).toEqual('percent');
      expect(data3.totalDuration).toEqual('0.00:00:00');
      expect(data3.configID).toEqual('oxygen-saturation');
    });

    it('query for large healthkit data', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { hkid: hkIdList[2] },
        });

      const {
        response: [data1, data2, data3, data4, data5, data6, data7, data8],
      } = res.body.data.healthkit;

      expect(res.body.data.healthkit.response.length).toEqual(8);

      // Flights Climbed
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(14);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(14);
      expect(data1.averageSampleValue).toEqual(1);
      expect(data1.highestSampleValue).toEqual(1);
      expect(data1.lowestSampleValue).toEqual(1);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-apple-watch', 'pat-iphone']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.01:07:18');
      expect(data1.configID).toEqual('flights-climbed');

      // Heart Rate
      expect(typeof data2.id).toEqual('string');
      expect(data2.id.length).toEqual(36);
      expect(typeof data2.hkid).toEqual('string');
      expect(data2.hkid.length).toEqual(11);
      expect(data2.value).toEqual(104.14);
      expect(data2.valueType).toEqual('averageSampleValue');
      expect(data2.totalSampleValue).toEqual(null);
      expect(data2.averageSampleValue).toEqual(104.14);
      expect(data2.highestSampleValue).toEqual(165);
      expect(data2.lowestSampleValue).toEqual(64);
      expect(moment(data2.sampledOn).isValid()).toBeTruthy();
      expect(moment(data2.createdOn).isValid()).toBeTruthy();
      expect(moment(data2.updatedOn).isValid()).toBeTruthy();
      expect(data2.sources).toEqual(['pat-apple-watch']);
      expect(data2.unit).toEqual('count_min');
      expect(data2.totalDuration).toEqual('0.00:00:00');
      expect(data2.configID).toEqual('heartrate');

      // Heart Rate Variability
      expect(typeof data3.id).toEqual('string');
      expect(data3.id.length).toEqual(36);
      expect(typeof data3.hkid).toEqual('string');
      expect(data3.hkid.length).toEqual(11);
      expect(data3.value).toEqual(42.83);
      expect(data3.valueType).toEqual('averageSampleValue');
      expect(data3.totalSampleValue).toEqual(null);
      expect(data3.averageSampleValue).toEqual(42.83);
      expect(data3.highestSampleValue).toEqual(70.74819793895963);
      expect(data3.lowestSampleValue).toEqual(19.90049354129502);
      expect(moment(data3.sampledOn).isValid()).toBeTruthy();
      expect(moment(data3.createdOn).isValid()).toBeTruthy();
      expect(moment(data3.updatedOn).isValid()).toBeTruthy();
      expect(data3.sources).toEqual(['pat-apple-watch']);
      expect(data3.unit).toEqual('ms');
      expect(data3.totalDuration).toEqual('0.00:08:33');
      expect(data3.configID).toEqual('heartrate-variability');

      // Oxygen Saturation
      expect(typeof data4.id).toEqual('string');
      expect(data4.id.length).toEqual(36);
      expect(typeof data4.hkid).toEqual('string');
      expect(data4.hkid.length).toEqual(11);
      expect(data4.value).toEqual(94);
      expect(data4.valueType).toEqual('averageSampleValue');
      expect(data4.totalSampleValue).toEqual(null);
      expect(data4.averageSampleValue).toEqual(94);
      expect(data4.highestSampleValue).toEqual(97);
      expect(data4.lowestSampleValue).toEqual(90);
      expect(moment(data4.sampledOn).isValid()).toBeTruthy();
      expect(moment(data4.createdOn).isValid()).toBeTruthy();
      expect(moment(data4.updatedOn).isValid()).toBeTruthy();
      expect(data4.sources).toEqual(['pat-apple-watch']);
      expect(data4.unit).toEqual('percent');
      expect(data4.totalDuration).toEqual('0.00:00:00');
      expect(data4.configID).toEqual('oxygen-saturation');

      // Resting Heart Rate
      expect(typeof data5.id).toEqual('string');
      expect(data5.id.length).toEqual(36);
      expect(typeof data5.hkid).toEqual('string');
      expect(data5.hkid.length).toEqual(11);
      expect(data5.value).toEqual(70);
      expect(data5.valueType).toEqual('averageSampleValue');
      expect(data5.totalSampleValue).toEqual(null);
      expect(data5.averageSampleValue).toEqual(70);
      expect(data5.highestSampleValue).toEqual(70);
      expect(data5.lowestSampleValue).toEqual(70);
      expect(moment(data5.sampledOn).isValid()).toBeTruthy();
      expect(moment(data5.createdOn).isValid()).toBeTruthy();
      expect(moment(data5.updatedOn).isValid()).toBeTruthy();
      expect(data5.sources).toEqual(['pat-apple-watch']);
      expect(data5.unit).toEqual('bpm');
      expect(data5.totalDuration).toEqual('0.17:07:24');
      expect(data5.configID).toEqual('resting-heartrate');

      // Steps
      expect(typeof data6.id).toEqual('string');
      expect(data6.id.length).toEqual(36);
      expect(typeof data6.hkid).toEqual('string');
      expect(data6.hkid.length).toEqual(11);
      expect(data6.value).toEqual(3532);
      expect(data6.valueType).toEqual('totalSampleValue');
      expect(data6.totalSampleValue).toEqual(3532);
      expect(data6.averageSampleValue).toEqual(28.26);
      expect(data6.highestSampleValue).toEqual(172);
      expect(data6.lowestSampleValue).toEqual(1);
      expect(moment(data6.sampledOn).isValid()).toBeTruthy();
      expect(moment(data6.createdOn).isValid()).toBeTruthy();
      expect(moment(data6.updatedOn).isValid()).toBeTruthy();
      expect(data6.sources).toEqual(['pat-apple-watch']);
      expect(data6.unit).toEqual('count');
      expect(data6.totalDuration).toEqual('0.02:13:24');
      expect(data6.configID).toEqual('steps');

      // Walking Heart Rate Average
      expect(typeof data7.id).toEqual('string');
      expect(data7.id.length).toEqual(36);
      expect(typeof data7.hkid).toEqual('string');
      expect(data7.hkid.length).toEqual(11);
      expect(data7.value).toEqual(132);
      expect(data7.valueType).toEqual('averageSampleValue');
      expect(data7.totalSampleValue).toEqual(null);
      expect(data7.averageSampleValue).toEqual(132);
      expect(data7.highestSampleValue).toEqual(132);
      expect(data7.lowestSampleValue).toEqual(132);
      expect(moment(data7.sampledOn).isValid()).toBeTruthy();
      expect(moment(data7.createdOn).isValid()).toBeTruthy();
      expect(moment(data7.updatedOn).isValid()).toBeTruthy();
      expect(data7.sources).toEqual(['pat-apple-watch']);
      expect(data7.unit).toEqual('bpm');
      expect(data7.totalDuration).toEqual('0.13:19:07');
      expect(data7.configID).toEqual('walking-heartrate-average');

      // Walking + Running Distance
      expect(typeof data8.id).toEqual('string');
      expect(data8.id.length).toEqual(36);
      expect(typeof data8.hkid).toEqual('string');
      expect(data8.hkid.length).toEqual(11);
      expect(data8.value).toEqual(1.73);
      expect(data8.valueType).toEqual('totalSampleValue');
      expect(data8.totalSampleValue).toEqual(1.73);
      expect(data8.averageSampleValue).toEqual(0.01);
      expect(data8.highestSampleValue).toEqual(0.07594857915549792);
      expect(data8.lowestSampleValue).toEqual(0.0004346900710157987);
      expect(moment(data8.sampledOn).isValid()).toBeTruthy();
      expect(moment(data8.createdOn).isValid()).toBeTruthy();
      expect(moment(data8.updatedOn).isValid()).toBeTruthy();
      expect(data8.sources).toEqual(['pat-apple-watch']);
      expect(data8.unit).toEqual('mi');
      expect(data8.totalDuration).toEqual('0.02:14:12');
      expect(data8.configID).toEqual('walking-running-distance');
    });
  });

  describe('delete mutation', () => {
    it('can remove hk items 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: deleteMutation,
          variables: { hkid: hkIdList[0] },
        });

      const { response: data } = res.body.data.deleteHealthKit;

      expect(res.status).toEqual(200);
      expect(data.hkid).toEqual(hkIdList[0]);
      expect(data.configIDs).toEqual(['steps']);
    });

    it('can remove hk items 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: deleteMutation,
          variables: { hkid: hkIdList[1] },
        });

      const { response: data } = res.body.data.deleteHealthKit;

      expect(res.status).toEqual(200);
      expect(data.hkid).toEqual(hkIdList[1]);
      expect(data.configIDs).toEqual(['blood-pressure', 'heartrate', 'oxygen-saturation']);
    });

    it('can remove hk items 3', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: deleteMutation,
          variables: { hkid: hkIdList[2] },
        });

      const { response: data } = res.body.data.deleteHealthKit;

      expect(res.status).toEqual(200);
      expect(data.hkid).toEqual(hkIdList[2]);
      expect(data.configIDs).toEqual([
        'flights-climbed',
        'heartrate',
        'heartrate-variability',
        'oxygen-saturation',
        'resting-heartrate',
        'steps',
        'walking-heartrate-average',
        'walking-running-distance',
      ]);
    });
  });
});

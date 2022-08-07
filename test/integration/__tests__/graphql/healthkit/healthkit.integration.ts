import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { clearTable, getHealthKitTables } from '@database';
import { GRAPHQL_PATH } from '@integration/lib/constants';
import { addMutation, getQuery, deleteMutation } from '@mocks/queries/healthkit';
import { gqlPlugin } from '@integration/lib/plugins';
import * as inputs from '@mocks/inputs/healthkit';
import * as moment from 'moment';
const { healthTypes } = require('@configs/healthkit.json');

/**
 * Healthkit integration tests
 *
 * @group integration
 * @group int/graphql/healthkit
 */

describe('Healthkit', () => {
  const hkTables = getHealthKitTables();
  let request: SuperTest<Test>;

  beforeEach(async () => {
    await Promise.all(
      hkTables.map(async (hkTable) => {
        await clearTable(hkTable);
      }),
    );
    request = supertest(globalThis.patApiServer);
  });

  describe('create mutation', () => {
    it('works with input variation 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: inputs.hk1,
          },
        });

      const { response: data } = res.body.data.addHealthKit;

      expect(data.length).toEqual(1);
      expect(typeof data[0].id).toEqual('string');
      expect(data[0].id.length).toEqual(36);
      expect(typeof data[0].hkid).toEqual('string');
      expect(data[0].hkid.length).toEqual(11);
      expect(data[0].value).toEqual(2265);
      expect(data[0].valueType).toEqual('totalSampleValue');
      expect(data[0].totalSampleValue).toEqual(2265);
      expect(data[0].averageSampleValue).toEqual(66.62);
      expect(data[0].highestSampleValue).toEqual(677);
      expect(data[0].lowestSampleValue).toEqual(1);
      expect(moment(data[0].sampledOn).isValid()).toBeTruthy();
      expect(moment(data[0].createdOn).isValid()).toBeTruthy();
      expect(moment(data[0].updatedOn).isValid()).toBeTruthy();
      expect(data[0].sources).toEqual(['pat-apple-watch']);
      expect(data[0].unit).toEqual('count');
      expect(data[0].totalDuration).toEqual('0.01:29:17');
      expect(data[0].configID).toEqual('steps');
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
      expect(data1.sources).toEqual(['pat-iphone', 'pat-apple-watch']);
      expect(data1.unit).toEqual('count');
      expect(data1.totalDuration).toEqual('0.00:00:34');
      expect(data1.configID).toEqual('flights-climbed');

      // Heart Rate
      expect(typeof data2.id).toEqual('string');
      expect(data2.id.length).toEqual(36);
      expect(typeof data2.hkid).toEqual('string');
      expect(data2.hkid.length).toEqual(11);
      expect(data2.value).toEqual(73.75);
      expect(data2.valueType).toEqual('averageSampleValue');
      expect(data2.totalSampleValue).toEqual(null);
      expect(data2.averageSampleValue).toEqual(73.75);
      expect(data2.highestSampleValue).toEqual(116);
      expect(data2.lowestSampleValue).toEqual(63);
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
      expect(data3.value).toEqual(73.75);
      expect(data3.valueType).toEqual('averageSampleValue');
      expect(data3.totalSampleValue).toEqual(null);
      expect(data3.averageSampleValue).toEqual(73.75);
      expect(data3.highestSampleValue).toEqual(116);
      expect(data3.lowestSampleValue).toEqual(63);
      expect(moment(data3.sampledOn).isValid()).toBeTruthy();
      expect(moment(data3.createdOn).isValid()).toBeTruthy();
      expect(moment(data3.updatedOn).isValid()).toBeTruthy();
      expect(data3.sources).toEqual(['pat-apple-watch']);
      expect(data3.unit).toEqual('ms');
      expect(data3.totalDuration).toEqual('0.01:20:37');
      expect(data3.configID).toEqual('heartrate-variability');

      // Oxygen Saturation
      expect(typeof data4.id).toEqual('string');
      expect(data4.id.length).toEqual(36);
      expect(typeof data4.hkid).toEqual('string');
      expect(data4.hkid.length).toEqual(11);
      expect(data4.value).toEqual(97);
      expect(data4.valueType).toEqual('averageSampleValue');
      expect(data4.totalSampleValue).toEqual(null);
      expect(data4.averageSampleValue).toEqual(97);
      expect(data4.highestSampleValue).toEqual(100);
      expect(data4.lowestSampleValue).toEqual(95);
      expect(moment(data4.sampledOn).isValid()).toBeTruthy();
      expect(moment(data4.createdOn).isValid()).toBeTruthy();
      expect(moment(data4.updatedOn).isValid()).toBeTruthy();
      expect(data4.sources).toEqual(['pat-apple-watch', 'valid-test-source']);
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
      expect(data5.totalDuration).toEqual('17:07:24');
      expect(data5.configID).toEqual('resting-heartrate');

      // Steps
      expect(typeof data6.id).toEqual('string');
      expect(data6.id.length).toEqual(36);
      expect(typeof data6.hkid).toEqual('string');
      expect(data6.hkid.length).toEqual(11);
      expect(data6.value).toEqual(3000);
      expect(data6.valueType).toEqual('totalSampleValue');
      expect(data6.totalSampleValue).toEqual(3000);
      expect(data6.averageSampleValue).toEqual(50);
      expect(data6.highestSampleValue).toEqual(100);
      expect(data6.lowestSampleValue).toEqual(1);
      expect(moment(data6.sampledOn).isValid()).toBeTruthy();
      expect(moment(data6.createdOn).isValid()).toBeTruthy();
      expect(moment(data6.updatedOn).isValid()).toBeTruthy();
      expect(data6.sources).toEqual(['pat-apple-watch', 'pat-iphone']);
      expect(data6.unit).toEqual('count');
      expect(data6.totalDuration).toEqual('17:07:24');
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
      expect(data7.totalDuration).toEqual('13:19:07');
      expect(data7.configID).toEqual('walking-heartrate-average');

      // Walking + Running Distance
      expect(typeof data8.id).toEqual('string');
      expect(data8.id.length).toEqual(36);
      expect(typeof data8.hkid).toEqual('string');
      expect(data8.hkid.length).toEqual(11);
      expect(data8.value).toEqual(16);
      expect(data8.valueType).toEqual('totalSampleValue');
      expect(data8.totalSampleValue).toEqual(16);
      expect(data8.averageSampleValue).toEqual(0.5);
      expect(data8.highestSampleValue).toEqual(1);
      expect(data8.lowestSampleValue).toEqual(0.01);
      expect(moment(data8.sampledOn).isValid()).toBeTruthy();
      expect(moment(data8.createdOn).isValid()).toBeTruthy();
      expect(moment(data8.updatedOn).isValid()).toBeTruthy();
      expect(data8.sources).toEqual(['pat-apple-watch']);
      expect(data8.unit).toEqual('mi');
      expect(data8.totalDuration).toEqual('0.00:30:33');
      expect(data8.configID).toEqual('walking-running-distance');
    });
  });

  // describe('query', () => {
  //   it('query for item 1', async () => {
  //     const res = await request
  //       .post(GRAPHQL_PATH)
  //       .use(gqlPlugin)
  //       .send({
  //         query: getQuery,
  //         variables: { id: itemIDs[0] },
  //       });

  //     const { response: data } = res.body.data.healthkit;

  //     expect(data.id).toEqual(itemIDs[0]);
  //     expect(data.value).toEqual(158);
  //     expect(moment(data.sampledOn).isValid()).toBeTruthy();
  //     expect(moment(data.createdOn).isValid()).toBeTruthy();
  //     expect(moment(data.updatedOn).isValid()).toBeTruthy();
  //     expect(data.configID).toEqual(CONFIG_ID);
  //   });
  // });

  // describe('delete mutation', () => {
  //   it('can remove item 1', async () => {
  //     const res = await request
  //       .post(GRAPHQL_PATH)
  //       .use(gqlPlugin)
  //       .send({
  //         query: deleteMutation,
  //         variables: { id: itemIDs[0] },
  //       });

  //     const { response: data } = res.body.data.deleteHealthKit;

  //     expect(res.status).toEqual(200);
  //     expect(data.id).toEqual(itemIDs[0]);
  //     expect(data.configID).toEqual(CONFIG_ID);
  //   });
  // });
});

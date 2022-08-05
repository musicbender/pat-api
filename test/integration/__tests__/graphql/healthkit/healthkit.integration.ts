import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { clearTable } from '@database';
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
  const hkTables = Object.keys(healthTypes).map((hk: string) => healthTypes[hk].id);
  let request: SuperTest<Test>;

  beforeAll(async () => {
    await Promise.all(
      hkTables.map(async (hkTable) => {
        await clearTable(hkTable);
      }),
    );
  });

  beforeEach(async () => {
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

      // Walking + Running Distance
      expect(typeof data1.id).toEqual('string');
      expect(data1.id.length).toEqual(36);
      expect(typeof data1.hkid).toEqual('string');
      expect(data1.hkid.length).toEqual(11);
      expect(data1.value).toEqual(16);
      expect(data1.valueType).toEqual('totalSampleValue');
      expect(data1.totalSampleValue).toEqual(16);
      expect(data1.averageSampleValue).toEqual(5);
      expect(data1.highestSampleValue).toEqual(10);
      expect(data1.lowestSampleValue).toEqual(1);
      expect(moment(data1.sampledOn).isValid()).toBeTruthy();
      expect(moment(data1.createdOn).isValid()).toBeTruthy();
      expect(moment(data1.updatedOn).isValid()).toBeTruthy();
      expect(data1.sources).toEqual(['pat-apple-watch', 'test-device']);
      expect(data1.unit).toEqual('mi');
      expect(data1.totalDuration).toEqual('0.00:20:23');
      expect(data1.configID).toEqual('walking-running-distance');

      // Flights Climbed
      expect(typeof data2.id).toEqual('string');
      expect(data2.id.length).toEqual(36);
      expect(typeof data2.hkid).toEqual('string');
      expect(data2.hkid.length).toEqual(11);
      expect(data2.value).toEqual(5);
      expect(data2.valueType).toEqual('totalSampleValue');
      expect(data2.totalSampleValue).toEqual(5);
      expect(data2.averageSampleValue).toEqual(2);
      expect(data2.highestSampleValue).toEqual(3);
      expect(data2.lowestSampleValue).toEqual(1);
      expect(moment(data2.sampledOn).isValid()).toBeTruthy();
      expect(moment(data2.createdOn).isValid()).toBeTruthy();
      expect(moment(data2.updatedOn).isValid()).toBeTruthy();
      expect(data2.sources).toEqual(['pat-iphone']);
      expect(data2.unit).toEqual('count');
      expect(data2.totalDuration).toEqual('0.00:00:34');
      expect(data2.configID).toEqual('flights-climbed');
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

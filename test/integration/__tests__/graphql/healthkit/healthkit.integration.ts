import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { clearTable } from '@database';
import { GRAPHQL_PATH } from '@integration/lib/constants';
import { addMutation, getQuery, deleteMutation } from '@mocks/queries/healthkit';
import { gqlPlugin } from '@integration/lib/plugins';
import * as inputs from '@mocks/inputs/healthkit';
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

      console.log(res.body);
      const { response: data } = res.body.data.addHealthkit;

      expect(data.length).toEqual(1);
      expect(typeof data[0].id).toEqual('string');
      expect(data[0].id.length).toEqual(36);
      expect(typeof data[0].hkid).toEqual('string');
      expect(data[0].hkid.length).toEqual(11);
      expect(data[0].value).toEqual(2000);
      expect(data[0].valueType).toEqual('sum');
      expect(data[0].totalSampleValue).toEqual(2000);
      expect(data[0].averageSampleValue).toEqual(2000);
      expect(data[0].highestSampleValue).toEqual(2000);
      expect(data[0].lowestSampleValue).toEqual(2);
      expect(data[0].sampledOn).toEqual('2019-10-30T23:15:00-07:00');
      expect(data[0].createdOn).toEqual('???');
      expect(data[0].updatedOn).toEqual('???');
      expect(data[0].sources).toEqual(['pat-apple-watch']);
      expect(data[0].unit).toEqual('count');
      expect(data[0].totalDuration).toEqual('1:30;20');
      expect(data[0].configID).toEqual('steps');
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

  //     const { response: data } = res.body.data.deleteHealthkit;

  //     expect(res.status).toEqual(200);
  //     expect(data.id).toEqual(itemIDs[0]);
  //     expect(data.configID).toEqual(CONFIG_ID);
  //   });
  // });
});

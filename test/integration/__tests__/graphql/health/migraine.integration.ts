import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { clearTable } from '@database';
import { GRAPHQL_PATH } from '@integration/lib/constants';
import { addMutation, getQuery, deleteMutation, updateMutation } from '@mocks/queries/migraine';
import * as moment from 'moment';
import { gqlPlugin } from '@integration/lib/plugins';
const inputs = require('@mocks/inputs/migraine.json');

/**
 * Migraine integreation tests
 *
 * @group integration/graphql/health
 */

describe('Health - Migraine', () => {
  const CONFIG_ID = 'migraine';
  const MOCK_SAMPLED_ON: string = moment().toISOString();
  const itemIDs: string[] = [];
  let request: SuperTest<Test>;

  beforeAll(async () => {
    await clearTable(CONFIG_ID);
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
            input: {
              ...inputs.addMutation[0],
              sampledOn: MOCK_SAMPLED_ON,
            },
          },
        });

      const { response: data } = res.body.data.addMigraine;

      if (data.id) itemIDs.push(data.id);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.painLevel).toEqual(3);
      expect(data.auraLevel).toEqual(5);
      expect(data.nauseaLevel).toEqual(9);
      expect(data.auraTags).toEqual(['ceiling-fan']);
      expect(data.description).toEqual('That was not pleasant');
      expect(data.totalDuration).toEqual('0.02.13.00');
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('works with input variation 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: {
              ...inputs.addMutation[1],
              sampledOn: MOCK_SAMPLED_ON,
            },
          },
        });

      const { response: data } = res.body.data.addMigraine;

      if (data.id) itemIDs.push(data.id);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.painLevel).toEqual(9);
      expect(data.auraLevel).toEqual(1);
      expect(data.nauseaLevel).toEqual(1);
      expect(data.auraTags).toEqual(['alien', 'flashing']);
      expect(data.description).toEqual('Owch');
      expect(data.totalDuration).toEqual('1.12.45.12');
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });

  describe('query', () => {
    it('query for item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { id: itemIDs[0] },
        });

      const { response: data } = res.body.data.migraine;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.painLevel).toEqual(3);
      expect(data.auraLevel).toEqual(5);
      expect(data.nauseaLevel).toEqual(9);
      expect(data.auraTags).toEqual(['ceiling-fan']);
      expect(data.description).toEqual('That was not pleasant');
      expect(data.totalDuration).toEqual('0.02.13.00');
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('query for item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { id: itemIDs[1] },
        });

      const { response: data } = res.body.data.migraine;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.painLevel).toEqual(9);
      expect(data.auraLevel).toEqual(1);
      expect(data.nauseaLevel).toEqual(1);
      expect(data.auraTags).toEqual(['alien', 'flashing']);
      expect(data.description).toEqual('Owch');
      expect(data.totalDuration).toEqual('1.12.45.12');
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('query for item by date', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { date: MOCK_SAMPLED_ON },
        });

      const { response: data } = res.body.data.migraine;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.painLevel).toEqual(3);
      expect(data.auraLevel).toEqual(5);
      expect(data.nauseaLevel).toEqual(9);
      expect(data.auraTags).toEqual(['ceiling-fan']);
      expect(data.description).toEqual('That was not pleasant');
      expect(data.totalDuration).toEqual('0.02.13.00');
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });

  describe('update mutation', () => {
    it('can change value for item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: updateMutation,
          variables: {
            input: inputs.updateMutation[0],
            id: itemIDs[0],
          },
        });

      const { response: data } = res.body.data.updateMigraine;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.painLevel).toEqual(0);
      expect(data.auraLevel).toEqual(6);
      expect(data.nauseaLevel).toEqual(10);
      expect(data.auraTags).toEqual(['ceiling-fan']);
      expect(data.description).toEqual('That was not pleasant');
      expect(data.totalDuration).toEqual('0.02.13.00');
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('can change value for item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: updateMutation,
          variables: {
            input: inputs.updateMutation[1],
            id: itemIDs[1],
          },
        });

      const { response: data } = res.body.data.updateMigraine;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.painLevel).toEqual(9);
      expect(data.auraLevel).toEqual(1);
      expect(data.nauseaLevel).toEqual(1);
      expect(data.auraTags).toEqual(['alien', 'flashing', 'ceiling-fan']);
      expect(data.description).toEqual('Owch');
      expect(data.totalDuration).toEqual('8.00.00.00');
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });

  describe('delete mutation', () => {
    it('can remove item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: deleteMutation,
          variables: { id: itemIDs[0] },
        });

      const { response: data } = res.body.data.deleteMigraine;

      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[0]);
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('can remove item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: deleteMutation,
          variables: { id: itemIDs[1] },
        });

      const { response: data } = res.body.data.deleteMigraine;

      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[1]);
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });
});

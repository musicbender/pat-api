import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { clearTable } from '@database';
import { GRAPHQL_PATH } from '@integration/lib/constants';
import {
  addMutation,
  getQuery,
  deleteMutation,
  updateMutation,
  incrementMutation,
} from '@mocks/queries/collections';
import * as moment from 'moment';
import { gqlPlugin } from '@integration/lib/plugins';
const inputs = require('@mocks/inputs/collections.json');

/**
 * Collections integreation tests
 *
 * @group integration/graphql/collections
 */

describe('Collections', () => {
  const CONFIG_ID = 'collections';
  const MOCK_SAMPLED_ON: string = moment().toISOString();
  const itemIDs: string[] = [];
  const itemShortIDs: string[] = [];
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

      const { response: data } = res.body.data.addCollection;

      if (data.id) itemIDs.push(data.id);
      if (data.shortId) itemShortIDs.push(data.shortId);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(typeof data.shortId).toEqual('string');
      expect(data.name).toEqual('my-things');
      expect(data.description).toEqual('Things I has');
      expect(data.tags).toEqual(['thing', 'mine', 'not-yours']);
      expect(data.count).toEqual(3);
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

      const { response: data } = res.body.data.addCollection;

      if (data.id) itemIDs.push(data.id);
      if (data.shortId) itemShortIDs.push(data.shortId);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(typeof data.shortId).toEqual('string');
      expect(data.name).toEqual('hand-saws');
      expect(data.description).toEqual('All my neat hand saws');
      expect(data.tags).toEqual(['panel', 'crosscut']);
      expect(data.count).toEqual(100);
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

      const { response: data } = res.body.data.collections;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.shortId).toEqual(itemShortIDs[0]);
      expect(data.name).toEqual('my-things');
      expect(data.description).toEqual('Things I has');
      expect(data.tags).toEqual(['thing', 'mine', 'not-yours']);
      expect(data.count).toEqual(3);
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

      const { response: data } = res.body.data.collections;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.shortId).toEqual(itemShortIDs[1]);
      expect(data.name).toEqual('hand-saws');
      expect(data.description).toEqual('All my neat hand saws');
      expect(data.tags).toEqual(['panel', 'crosscut']);
      expect(data.count).toEqual(100);
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

      const { response: data } = res.body.data.updateCollection;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.shortId).toEqual(itemShortIDs[0]);
      expect(data.name).toEqual('my-things');
      expect(data.description).toEqual('Things I has plus moar');
      expect(data.tags).toEqual(['thing', 'mine', 'not-yours']);
      expect(data.count).toEqual(7);
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

      const { response: data } = res.body.data.updateCollection;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.shortId).toEqual(itemShortIDs[1]);
      expect(data.name).toEqual('hand-saws');
      expect(data.description).toEqual('All my neat hand saws');
      expect(data.tags).toEqual(['panel', 'crosscut', 'japanese']);
      expect(data.count).toEqual(100);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });

  describe('increment mutation', () => {
    it('can increment value for item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: incrementMutation,
          variables: {
            input: inputs.incrementMutation[0],
            id: itemIDs[0],
          },
        });

      const { response: data } = res.body.data.incrementCollection;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.name).toEqual('my-things');
      expect(data.count).toEqual(8);
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('can increment value for item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: incrementMutation,
          variables: {
            input: inputs.incrementMutation[1],
            id: itemIDs[1],
          },
        });

      const { response: data } = res.body.data.incrementCollection;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.name).toEqual('hand-saws');
      expect(data.count).toEqual(150);
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

      const { response: data } = res.body.data.deleteCollection;

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

      const { response: data } = res.body.data.deleteCollection;

      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[1]);
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });
});

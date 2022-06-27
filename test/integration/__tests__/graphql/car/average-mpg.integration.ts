import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { clearTable } from '@database';
import { GRAPHQL_PATH } from '@integration/lib/constants';
import {
  addAverageMPG,
  getAverageMPG,
  deleteAverageMPG,
  updateAverageMPG,
} from '@mocks/queries/average-mpg';
import * as moment from 'moment';
import { gqlPlugin } from '@integration/lib/plugins';
const inputs = require('@mocks/inputs/averageMPG.json');

/**
 * Car mpg integration tests
 *
 * @group integration/graphql/car
 */

describe('Car - Average MPG', () => {
  const CONFIG_ID = 'car-average-mpg';
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
          query: addAverageMPG,
          variables: {
            input: {
              ...inputs.addAverageMPG[0],
              sampledOn: MOCK_SAMPLED_ON,
            },
          },
        });

      const { response: data } = res.body.data.addAverageMPG;
      if (data.id) itemIDs.push(data.id);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.value).toEqual(130.5);
      expect(data.vehicle).toEqual('priusPrime');
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
          query: addAverageMPG,
          variables: {
            input: {
              ...inputs.addAverageMPG[1],
              sampledOn: MOCK_SAMPLED_ON,
            },
          },
        });

      const { response: data } = res.body.data.addAverageMPG;
      if (data.id) itemIDs.push(data.id);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.value).toEqual(10);
      expect(data.vehicle).toEqual('crv');
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
          query: getAverageMPG,
          variables: { id: itemIDs[0] },
        });

      const { response: data } = res.body.data.averageMPG;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.value).toEqual(130.5);
      expect(data.vehicle).toEqual('priusPrime');
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
          query: getAverageMPG,
          variables: { id: itemIDs[1] },
        });

      const { response: data } = res.body.data.averageMPG;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.value).toEqual(10);
      expect(data.vehicle).toEqual('crv');
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
          query: updateAverageMPG,
          variables: {
            input: inputs.updateAverageMPG[0],
            id: itemIDs[0],
          },
        });

      const { response: data } = res.body.data.updateAverageMPG;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.value).toEqual(201);
      expect(data.vehicle).toEqual('priusPrime');
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('can change vehicle for item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: updateAverageMPG,
          variables: {
            input: inputs.updateAverageMPG[1],
            id: itemIDs[1],
          },
        });

      const { response: data } = res.body.data.updateAverageMPG;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.value).toEqual(10);
      expect(data.vehicle).toEqual('priusPrime');
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
          query: deleteAverageMPG,
          variables: { id: itemIDs[0] },
        });

      const { response: data } = res.body.data.deleteAverageMPG;

      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[0]);
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('can remove item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: deleteAverageMPG,
          variables: { id: itemIDs[1] },
        });

      const { response: data } = res.body.data.deleteAverageMPG;

      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[1]);
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });
});

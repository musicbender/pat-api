import { Server } from 'http';
import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import app from '../../../../../src/server';
import { connectDatabase, closeDatabase } from '../../../../../src/database';
import { GRAPHQL_PATH } from '../../../lib/constants';
import { addMutation, getQuery, deleteMutation, updateMutation } from '../../../../mocks/queries/refuel';
import * as moment from 'moment';
import { gqlPlugin } from '../../../lib/plugins';
const inputs = require('../../../../mocks/inputs/refuel.json'); 

/**
 * Validate service e2e tests
 * 
 * @group integration/graphql/car
 */

describe('Car - Refuel', () => {
  const CONFIG_ID = 'car-refuel';
  let request: SuperTest<Test>;
  let server: Server;
  let itemIDs: string[] = [];
  let itemDate: number;

  beforeAll(async () => { 
    await connectDatabase();
    server = app.listen(process.env.PATAPI_PORT);
    app.context.isReady = true;
  });

  afterAll(async () => { 
    await closeDatabase();
    await server.close() 
  });

  beforeEach(async () => {
    request = supertest(server);
  });

  describe('create mutation', () => {
    it('works with input variation 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: { input: inputs.addMutation[0] }
        });

      const { response: data } = res.body.data.addRefuel;

      if (data.id) itemIDs.push(data.id);
      if (data.sampledOn) itemDate = data.sampledOn;

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.gallons).toEqual(30.4);
      expect(data.cost).toEqual(35.5);
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
          query: addMutation,
          variables: { input: inputs.addMutation[1] }
        });

      const { response: data } = res.body.data.addRefuel;
      if (data.id) itemIDs.push(data.id);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.gallons).toEqual(1);
      expect(data.cost).toEqual(1.59);
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
          query: getQuery,
          variables: { id: itemIDs[0] }
        });

      const { response: data } = res.body.data.refuel;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.cost).toEqual(35.5);
      expect(data.gallons).toEqual(30.4);
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
          query: getQuery,
          variables: { id: itemIDs[1] }
        });

      const { response: data } = res.body.data.refuel;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.gallons).toEqual(1);
      expect(data.cost).toEqual(1.59);
      expect(data.vehicle).toEqual('crv');
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
          variables: { date: itemDate }
        });

      const { response: data } = res.body.data.refuel;
      
      expect(data.id).toEqual(itemIDs[0]);
      expect(data.cost).toEqual(35.5);
      expect(data.gallons).toEqual(30.4);
      expect(data.vehicle).toEqual('priusPrime');
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
          }
        });

      const { response: data } = res.body.data.updateRefuel;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.cost).toEqual(35.5);
      expect(data.gallons).toEqual(100);
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
          query: updateMutation,
          variables: {
            input: inputs.updateMutation[1],
            id: itemIDs[1],
          }
        });

      const { response: data } = res.body.data.updateRefuel;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.gallons).toEqual(1);
      expect(data.cost).toEqual(1000);
      expect(data.vehicle).toEqual('crv');
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
          variables: { id: itemIDs[0] }
        });

      const { response: data } = res.body.data.deleteRefuel;
      
      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[0]);
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('can remove item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: deleteMutation,
          variables: { id: itemIDs[1] }
        });

      const { response: data } = res.body.data.deleteRefuel;
      
      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[1]);
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });
});
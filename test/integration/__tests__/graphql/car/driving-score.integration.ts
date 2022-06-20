import { Server } from 'http';
import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import app from '../../../../../src/server';
import { connectDatabase, closeDatabase } from '../../../../../src/database';
import { GRAPHQL_PATH } from '../../../lib/constants';
import { addMutation, getQuery, deleteMutation, updateMutation } from '../../../../mocks/queries/driving-score';
import * as moment from 'moment';
import { gqlPlugin } from '../../../lib/plugins';
const inputs = require('../../../../mocks/inputs/driving-score.json'); 

/**
 * Validate service e2e tests
 * 
 * @group integration/graphql/car
 */

describe('Car - Driving Score', () => {
  const CONFIG_ID = 'car-driving-score';
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

      const { response: data } = res.body.data.addDrivingScore;

      if (data.id) itemIDs.push(data.id);
      if (data.sampledOn) itemDate = data.sampledOn;

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.accelerationScore).toEqual(5);
      expect(data.coastingScore).toEqual(3);
      expect(data.breakingScore).toEqual(3);
      expect(data.totalScore).toEqual(75);
      expect(data.vehicle).toEqual('priusPrime');
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });

  describe('query', () => {
    it('query for item', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { id: itemIDs[0] }
        });

      const { response: data } = res.body.data.drivingScore;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.accelerationScore).toEqual(5);
      expect(data.coastingScore).toEqual(3);
      expect(data.breakingScore).toEqual(3);
      expect(data.totalScore).toEqual(75);
      expect(data.vehicle).toEqual('priusPrime');
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

      const { response: data } = res.body.data.drivingScore;
      
      expect(data.id).toEqual(itemIDs[0]);
      expect(data.accelerationScore).toEqual(5);
      expect(data.coastingScore).toEqual(3);
      expect(data.breakingScore).toEqual(3);
      expect(data.totalScore).toEqual(75);
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

      const { response: data } = res.body.data.updateDrivingScore;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.accelerationScore).toEqual(5);
      expect(data.coastingScore).toEqual(5);
      expect(data.breakingScore).toEqual(1);
      expect(data.totalScore).toEqual(64);
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
          query: deleteMutation,
          variables: { id: itemIDs[0] }
        });

      const { response: data } = res.body.data.deleteDrivingScore;
      
      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[0]);
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });
});
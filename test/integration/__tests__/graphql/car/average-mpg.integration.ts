import { Server } from 'http';
import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import app from '../../../../../src/server';
import { connectDatabase, closeDatabase } from '../../../../../src/database';
import { GRAPHQL_PATH } from '../../../lib/constants';
import { addAverageMPG, getAverageMPG } from '../../../../mocks/queries/average-mpg';
import * as moment from 'moment';
import { gqlPlugin } from '../../../lib/plugins';
const inputs = require('../../../../mocks/inputs/averageMPG.json'); 

/**
 * Validate service e2e tests
 * 
 * @group integration/graphql/car
 */
let request: SuperTest<Test>;
let server: Server;

describe('Car - Average MPG', () => {
  let itemIDs: string[] = [];

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
          query: addAverageMPG,
          variables: inputs.addAverageMPG[0]
        });

      const { response: data } = res.body.data.addAverageMPG;
      if (data.id) itemIDs.push(data.id);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.value).toEqual(130.5);
      expect(data.vehicle).toEqual('priusPrime');
      expect(moment.unix(data.sampledOn).isValid()).toBeTruthy();
      expect(moment.unix(data.createdOn).isValid()).toBeTruthy();
      expect(moment.unix(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual('car-average-mpg');
    });

    it('works with input variation 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addAverageMPG,
          variables: inputs.addAverageMPG[1]
        });

      const { response: data } = res.body.data.addAverageMPG;
      if (data.id) itemIDs.push(data.id);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.value).toEqual(10);
      expect(data.vehicle).toEqual('crv');
      expect(moment.unix(data.sampledOn).isValid()).toBeTruthy();
      expect(moment.unix(data.createdOn).isValid()).toBeTruthy();
      expect(moment.unix(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual('car-average-mpg');
    });
  });

  describe('query', () => {
    it('query for item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getAverageMPG,
          variables: { id: itemIDs[0] }
        });

      const { response: data } = res.body.data.averageMPG;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.value).toEqual(130.5);
      expect(data.vehicle).toEqual('priusPrime');
      expect(moment.unix(data.sampledOn).isValid()).toBeTruthy();
      expect(moment.unix(data.createdOn).isValid()).toBeTruthy();
      expect(moment.unix(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual('car-average-mpg');
    })

    it('query for item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getAverageMPG,
          variables: { id: itemIDs[1] }
        });

      const { response: data } = res.body.data.averageMPG;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.value).toEqual(10);
      expect(data.vehicle).toEqual('crv');
      expect(moment.unix(data.sampledOn).isValid()).toBeTruthy();
      expect(moment.unix(data.createdOn).isValid()).toBeTruthy();
      expect(moment.unix(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual('car-average-mpg');
    })
  });

  // describe('update mutation', () => {
    
  // });

  // describe('delete mutation', () => {
    
  // });
});
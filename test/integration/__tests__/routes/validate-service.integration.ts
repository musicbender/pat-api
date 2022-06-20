import { Server } from 'http';
import * as supertest from 'supertest';
import app from '../../../../src/server';
import { connectDatabase, closeDatabase } from '../../../../src/database';
import { INFO_PATH, LIVENESS_PATH, READINESS_PATH, TEST_PATH, VERSION_PATH } from '../../lib/constants';
const pkg = require('../../../../package.json');

/**
 * Validate service e2e tests
 * 
 * @group integration/routes
 */

let request: supertest.SuperTest<supertest.Test>;
let server: Server;

describe('Validate Service Routes', () => {
  const OLD_ENV = process.env;

  beforeAll(async () => { 
    await connectDatabase();
    server = app.listen(process.env.PATAPI_PORT);
    app.context.isReady = true;
  });

  afterAll(async () => { 
    await closeDatabase();
    server.close() 
  });

  beforeEach(async () => {
    // jest.resetModules();
    process.env = { ...OLD_ENV };
    request = supertest(server)
  });

  afterEach(() => {
    process.env = OLD_ENV;
  })

  describe('/version', () => {
    it('returns 200', async () => {
      const response = await request.get(VERSION_PATH);
      expect(response.status).toEqual(200);
    });

    it('returns correct version', async () => {
      const response = await request.get(VERSION_PATH);
      expect(response.body.data.version).toEqual(pkg.version);
    });
  });

  describe('/test', () => {
    it('should redirect to /health/liveness', async () => {
      const response = await request.get(TEST_PATH);
      expect(response.redirect).toEqual(true);
      expect(response.status).toEqual(302);
      expect(response.headers.location).toEqual(LIVENESS_PATH);
    });
  });

  describe('/health', () => {
    it('/liveness should return success', async () => {
      const response = await request.get(LIVENESS_PATH);
      expect(response.status).toEqual(200);
      expect(response.body.message).toEqual('success');
    });

    it('/readiness should return success', async () => {
      const response = await request.get(READINESS_PATH);
      expect(response.status).toEqual(200);
      expect(response.body.message).toEqual('success');
    });
  });

  describe('/info', () => {
    it('should return 200 status', async () => {
      const response = await request.get(INFO_PATH);
      expect(response.status).toEqual(200);
    });

    it('should return info data', async () => {
      process.env.PATAPI_BUILD_NUMBER = '123';
      process.env.PATAPI_COMMIT_HASH = '7777777';
      process.env.PATAPI_LAST_DEPLOY_DATE = '9/9/2016';

      const response = await request.get(INFO_PATH);
      const { data } = response.body;
      expect(data.version).toEqual(pkg.version);
      expect(data.buildNumber).toEqual('123');
      expect(data.commitHash).toEqual('7777777');
      expect(data.lastDeployDate).toEqual('9/9/2016');
      expect(typeof data.randomDadJoke).toBe('string');
      expect(data.randomDadJoke).not.toEqual('No dad jokes today.');
    });
  });
});
import { Server } from 'http';
import supertest, { SuperTest, Test } from 'supertest';
import app from '../../../../src/server';
import { connectDatabase, closeDatabase } from '../../../../src/database';
import { VERSION_PATH } from '../../constants';

/**
 * Validate service e2e tests
 * 
 * @group integration/routes
 */

console.log('----- debug port ----- ', process.env.PATAPI_PORT);

let request: SuperTest<Test>;
let server: Server;

describe('Validate Service Routes', () => {
  beforeAll(async () => { 
    await connectDatabase();
    server = app.listen(process.env.PATAPI_PORT);
  });

  afterAll(async () => { 
    await closeDatabase();
    server.close() 
  });

  beforeEach(async () => {
    request = supertest(server)
  })

  describe('/version', () => {
    it('/version endpoint returns 200', async () => {
      const response = await request.get(VERSION_PATH);
      expect(response.status).toEqual(200);
    });
  });
});
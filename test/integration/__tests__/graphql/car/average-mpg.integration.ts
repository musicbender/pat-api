import { Server } from 'http';
import * as supertest from 'supertest';
import app from '../../../../../src/server';
import { connectDatabase, closeDatabase } from '../../../../../src/database';

/**
 * Validate service e2e tests
 * 
 * @group integration/routes
 */

let request: supertest.SuperTest<supertest.Test>;
let server: Server;

describe('Car - Average MPG', () => {
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
    request = supertest(server)
  });

  describe('create mutation', () => {
    
  });

  describe('query', () => {
    
  });

  describe('update mutation', () => {
    
  });

  describe('delete mutation', () => {
    
  });
});
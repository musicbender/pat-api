import supertest from 'supertest';
import { VERSION_PATH } from '../../constants';

/**
 * Validate service e2e tests
 * 
 * @group e2e/routes
 */

console.log('DEBUG', process.env.PATAPI_TEST_URL);

const client = supertest('http://localhost:4000');

describe('Validate Service Routes', () => {
  describe('/version', () => {
    it('/version endpoint returns 200', async () => {
      const response = await client.get(VERSION_PATH);
      expect(response.status).toEqual(200);
    });
  });
});
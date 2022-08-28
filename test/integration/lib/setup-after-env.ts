import { closeDatabase, connectDatabase } from '@database';
import app from '@server';

console.log('DEBUG --- setup after env');

beforeAll(async () => {
  await connectDatabase();
  console.log('DEBUG --- data connected!');
  globalThis.patApiServer = app.listen(process.env.PATAPI_PORT);
  app.context.isReady = true;
});

afterAll(async () => {
  await globalThis.patApiServer.close();
  await closeDatabase();
});

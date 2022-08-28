import { closeDatabase, connectDatabase } from '@database';
import app from '@server';

beforeAll(async () => {
  await connectDatabase();
  globalThis.patApiServer = app.listen(process.env.PATAPI_PORT);
  app.context.isReady = true;
});

afterAll(async () => {
  await globalThis.patApiServer.close();
  await closeDatabase();
});

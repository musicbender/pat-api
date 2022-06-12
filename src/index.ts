import { connectDatabase } from './database';
import app from './server';

(async () => {
  await connectDatabase();
  app.listen(process.env.PATAPI_PORT, () => {
    console.log(`Pat API running at port ${process.env.PATAPI_PORT}`)
    app.context.isReady = true;
  });
})();

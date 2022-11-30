import logger from './utils/logger';
import { connectDatabase } from './database';
import app from './server';

(async () => {
  await connectDatabase();
  app.listen(process.env.PORT, () => {
    logger.info(`Pat API running at port ${process.env.PORT}`);
    app.context.isReady = true;
  });
})();

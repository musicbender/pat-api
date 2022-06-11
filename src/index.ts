import { connectDB } from './database';
import app from './server';

// connect database and start server
(async () => {
  try {
    await connectDB();
  } catch (err) {
    throw new Error(`Database could not connect: ${err}`);
  }

  // start server
  app.listen(process.env.PATAPI_PORT, () => {
    console.log(`Pat API running at port ${process.env.PATAPI_PORT}`)
    app.context.isReady = true;
  });
})();

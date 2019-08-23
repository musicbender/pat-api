import { Sequelize } from 'sequelize-typescript';

const getDBConfig = (): any => {
  const config = {
    dialect: 'postgres',
    database: process.env.PATAPI_DB_NAME,
    models: [`${__dirname}/models/**/*.model.ts`]
  };

  console.log(`pass: ${process.env.PATAPI_DB_PASSWORD}`)

  return process.env.PATAPI_DATABASE_URI
    ? 
      {
        ...config,
        url: process.env.PATAPI_DATABASE_URI,
      }
    : 
      {
        ...config,
        host: process.env.PATAPI_DB_HOST,
        port: process.env.PATAPI_DB_PORT,
        username: process.env.PATAPI_DB_USER || 'root',
        password: process.env.PATAPI_DB_PASSWORD || ''
      };
}

export const connectDB = () => {
  const sequelize = new Sequelize(getDBConfig());
  return sequelize.sync();
}

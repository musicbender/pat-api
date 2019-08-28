import { Sequelize } from 'sequelize-typescript';
import * as fs from 'fs';

type SSLConfigType = {
  key?: string,
  cert?: string,
  ca?: string
}

type SSLType = {
  key?: Buffer,
  cert?: Buffer,
  ca?: Buffer
}

const sslConfig = {
  key: process.env.PATAPI_DB_SSL_KEY,
  cert: process.env.PATAPI_DB_SSL_CERT,
  ca: process.env.PATAPI_DB_SSL_CA
}

const getSSLFiles = (files: SSLConfigType): SSLType => {
  let ssl = {};

  Object.keys(files).forEach((key) => {
    const file = fs.readFileSync(files[key]);
    ssl = { ...ssl, [key]: file }
  });

  return ssl;
}

const getDBConfig = (): any => {
  const config = {
    dialect: 'postgres',
    database: process.env.PATAPI_DB_NAME,
    models: [`${__dirname}/models/**/*.model.ts`]
  };

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
        password: process.env.PATAPI_DB_PASSWORD || '',
        dialectOptions: {
          ssl: process.env.PATAPI_DB_USE_SSL === 'true' && getSSLFiles(sslConfig)
        }
      };
}

export const connectDB = () => {
  const sequelize = new Sequelize(getDBConfig());
  return sequelize.sync();
}

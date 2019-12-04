import { Sequelize } from 'sequelize-typescript';
import * as fs from 'fs';
import { DatabaseConfigOptions, DbSSLConfigType, DbSSLType } from './types';

const sslConfig = {
  key: process.env.PATAPI_DB_SSL_KEY,
  cert: process.env.PATAPI_DB_SSL_CERT,
  ca: process.env.PATAPI_DB_SSL_CA
}

const getSSLFiles = (files: DbSSLConfigType): DbSSLType => {
  let ssl = {};

  Object.keys(files).forEach((key) => {
    const file = fs.readFileSync(files[key]);
    ssl = { ...ssl, [key]: file }
  });

  return ssl;
}

const getAccessProperty = (externalAccess: boolean = false, property: string = 'PORT'): string | number => {
  return externalAccess && process.env[`PATAPI_DB_EXTERNAL_${property}`]
    ? process.env[`PATAPI_DB_EXTERNAL_${property}`]
    : process.env[`PATAPI_DB_${property}`] || '';
}

export const getDBConfig = (options: DatabaseConfigOptions = {}): any => {
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
        host: getAccessProperty(options.externalAccess, 'HOST'),
        port: getAccessProperty(options.externalAccess, 'PORT'),
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

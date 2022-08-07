import { Sequelize } from 'sequelize-typescript';
import * as fs from 'fs';
import { DatabaseConfigOptions, DbSSLConfigType, DbSSLType } from '@types';
import logger from '@utils/logger';
const { healthTypes } = require('@configs/healthkit.json');

let sequelize: Sequelize;

const sslConfig = {
  key: process.env.PATAPI_DB_SSL_KEY,
  cert: process.env.PATAPI_DB_SSL_CERT,
  ca: process.env.PATAPI_DB_SSL_CA,
};

const getSSLFiles = (files: DbSSLConfigType): DbSSLType => {
  let ssl = {};

  Object.keys(files).forEach((key) => {
    const file = fs.readFileSync(files[key]);
    ssl = { ...ssl, [key]: file };
  });

  return ssl;
};

const getAccessProperty = (externalAccess = false, property = 'PORT'): string | number => {
  return externalAccess && process.env[`PATAPI_DB_EXTERNAL_${property}`]
    ? process.env[`PATAPI_DB_EXTERNAL_${property}`]
    : process.env[`PATAPI_DB_${property}`] || '';
};

export const getDBConfig = (options: DatabaseConfigOptions = {}): any => {
  const config = {
    dialect: 'postgres',
    database: process.env.PATAPI_DB_NAME,
    models: [`${__dirname}/models/**/*.model.ts`],
    logging: process.env.NODE_ENV !== 'test',
  };

  return process.env.PATAPI_DATABASE_URI
    ? {
        ...config,
        url: process.env.PATAPI_DATABASE_URI,
      }
    : {
        ...config,
        host: getAccessProperty(options.externalAccess, 'HOST'),
        port: getAccessProperty(options.externalAccess, 'PORT'),
        username: process.env.PATAPI_DB_USER || 'root',
        password: process.env.PATAPI_DB_PASSWORD || '',
        dialectOptions: {
          ssl: process.env.PATAPI_DB_USE_SSL === 'true' && getSSLFiles(sslConfig),
        },
      };
};

export const connectDatabase = async (): Promise<Sequelize> => {
  try {
    const conf = getDBConfig();
    sequelize = new Sequelize(conf);
    const seq: Sequelize = await sequelize.sync();
    logger.info('The connection from pat-api to database successful');
    return seq;
  } catch (err) {
    logger.error(`Database could not connect: ${err}`);
  }
};

export const closeDatabase = async (): Promise<void> => {
  try {
    await sequelize.close();
    logger.info('Database connection closed');
  } catch (err) {
    logger.error(`Database connection from pat-api could not close: ${err}`);
  }
};

export const clearTable = async (tableName: string): Promise<void> => {
  if (process.env.NODE_ENV !== 'test') {
    logger.warning('Attempting to clear table when not in test environment is not allowed.');
    return;
  }

  try {
    await sequelize.query(`TRUNCATE TABLE "${tableName}"`);
    logger.info(`Database table "${tableName}" cleared.`);
  } catch (err) {
    logger.error(`There was an error clearing table "${tableName}" on database: ${err}`);
  }
};

export const clearDatabase = async (): Promise<void> => {
  if (process.env.NODE_ENV !== 'test') {
    logger.warning('Attempting to clear database when not in test environment is not allowed.');
    return;
  }

  try {
    const tableNames = Object.values(sequelize.models).map((model) => `"${model.tableName}"`);
    await sequelize.query('TRUNCATE TABLE ' + tableNames.join(', '));
    logger.info('All database tables cleared.');
  } catch (err) {
    logger.error(`There was an error clearing pat-api database: ${err}`);
  }
};

export const getHealthKitTables = (): string[] => {
  const invalidHkIds = ['systolic-blood-pressure', 'dyastolic-blood-pressure'];
  return Object.keys(healthTypes)
    .filter((hk: string) => !healthTypes[hk].disabled && invalidHkIds.indexOf(hk) < 0)
    .map((hk: string) => healthTypes[hk].id);
};

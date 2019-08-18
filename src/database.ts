import Sequelize from 'sequelize-typescript';

const getDBConfig = (): any => {
  let config = {};

  if (process.env.PATAPI_DATABASE_URI) {
    config = {
      url: process.env.PATAPI_DATABASE_URI
    }
  } else {
    config = {
      host: process.env.PATAPI_DB_HOST,
      database: process.env.PATAPI_DB_NAME,
      user: process.env.PATAPI_DB_USER,
      password: process.env.PATAPI_DB_PASSWORD
    };
  }

  return { 
    ...config, 
    dialect: 'mysql',
    models: [__dirname + '/models']
  };
}

export const connectDB = (): any => {
  const sequelize = new Sequelize(getDBConfig());
  return sequelize.sync;
}

import path from 'path';

switch (process.env.NODE_ENV) {
  case 'production':
    require('dotenv').config({
      path: path.resolve(process.cwd(), '.env.local.production'),
    });
    break;
  case 'test':
    require('dotenv').config({
      path: path.resolve(process.cwd(), '.env.test'),
    });
  default:
    require('dotenv').config();
}

export default require('../database.ts').getDBConfig({
  externalAccess: true,
});

const path = require('path');

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
    break;
  default:
    require('dotenv').config();
}

module.exports = require('../database.ts').getDBConfig({
  externalAccess: true,
});

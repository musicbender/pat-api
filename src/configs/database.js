const path = require('path');
let dotenv;

if (process.env.NODE_ENV === 'production') {
  dotenv = require('dotenv').config({
    path: path.resolve(process.cwd(), '.env.local.production')
  });
} else {
  dotenv = require('dotenv').config();
}

module.exports = require('../database.ts').getDBConfig({
  externalAccess: true
});

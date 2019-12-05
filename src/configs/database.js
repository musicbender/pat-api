const dotenv = require('dotenv').config();
const { getDBConfig } = require('../database.ts');

module.exports = getDBConfig({
  externalAccess: true
});

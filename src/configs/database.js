const dotenv = require('dotenv').config();
const { getDBConfig } = require('../database.ts');

console.log(getDBConfig({
  externalAccess: true
}));

module.exports = getDBConfig({
  externalAccess: true
});

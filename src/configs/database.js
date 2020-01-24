const path = require('path');
let dotenv;

console.log('1');

if (process.env.NODE_ENV === 'production') {
  dotenv = require('dotenv').config({
    path: path.resolve(process.cwd(), '.env.local.production')
  });
} else {
  dotenv = require('dotenv').config();
}
console.log('2');

module.exports = require('../database.ts').getDBConfig({
  externalAccess: true
});

const path = require('path');
let dotenv;

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  console.log('production dot env given');
  
  dotenv = require('dotenv').config({
    path: path.resolve(process.cwd(), '.env.local.production')
  });
} else {
  dotenv = require('dotenv').config();
}

const { getDBConfig } = require('../database.ts');

console.log(getDBConfig({
  externalAccess: true
}));


module.exports = getDBConfig({
  externalAccess: true
});

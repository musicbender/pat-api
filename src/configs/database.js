import path from "path";

let dotenv;

if (process.env.NODE_ENV === 'production') {
  dotenv = require('dotenv').config({
    path: path.resolve(process.cwd(), '.env.local.production')
  });
} else {
  dotenv = require('dotenv').config();
}

export default require('../database.ts').getDBConfig({
  externalAccess: true
});

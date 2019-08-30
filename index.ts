if (process.env.USE_DOTENV === 'true') {
  require('dotenv').config();
}

require('./src/api');
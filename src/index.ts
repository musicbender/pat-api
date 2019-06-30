require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  require('./dist/api');
} else {
  require('@babel/register')({
    presets: [ '@babel/preset-env' ]
  });

  require('./src/api');
}

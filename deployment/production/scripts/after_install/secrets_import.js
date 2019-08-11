const getEnv = require('../../../lib/get-env');
const config = require('../../app-production');

getEnv('pat-api-prod')
  .then(function (env) {
    let app = config.apps[0];
    Object.keys(env).forEach(function (key) {
      app.env[key] = env[key];
    });
    console.log(JSON.stringify({
      apps: [app],
    }, null, 2));
  });

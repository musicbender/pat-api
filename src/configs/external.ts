const pkg = require('../../package.json');

export default {
  config: {
    customUserAgent: `pat-api/${pkg.version}`,
  },
  urls: {
    dadJokesApiUri: "https://icanhazdadjoke.com/",
  }
};

const { promises: fs } = require('fs');
const path = require('path');

const dotenvPath = path.resolve(process.cwd(), '.env.test');

const dotenvExists = () => {
  try {
    fs.access(dotenvPath);
    return true;
  } catch {
    return false;
  }
};

if (dotenvExists()) {
  require('dotenv').config({ path: dotenvPath });
}

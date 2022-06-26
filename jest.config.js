const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  runner: 'groups',
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  extensionsToTreatAsEsm: ['.ts'],
  modulePaths: ['node_modules', '<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true,
  moduleNameMapper,
};

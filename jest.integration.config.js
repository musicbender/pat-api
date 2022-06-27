const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  runner: 'groups',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testRegex: '(/__tests__/.*|(\\.|/)(integration))\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  extensionsToTreatAsEsm: ['.ts'],
  modulePaths: ['node_modules', '<rootDir>/src', '<rootDir>/test'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true,
  moduleNameMapper,
};

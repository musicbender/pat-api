module.exports = {
  runner: 'groups',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|integration))\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true
}

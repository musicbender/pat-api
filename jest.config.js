export default {
  runner: 'groups',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|integration))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: false
}

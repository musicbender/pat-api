module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: false
}

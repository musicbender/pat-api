module.exports = {
  roots: ['<rootDir>/src'],
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  preset: 'ts-jest',
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true
}

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'ts'],
  // moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json', 'node'],
  // moduleNameMapper: {
  //   'src/(.*)': '<rootDir>/src/$1',
  //   'tests/(.*)': '<rootDir>/__tests__/$1',
  // },

  roots: ['<rootDir>/src'],

  testMatch: ['**/__tests__/**/*.[jt]s?x', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // preset: 'ts-jest',
  // testEnvironment: 'node',
};

module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', 'dist', '/testData'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

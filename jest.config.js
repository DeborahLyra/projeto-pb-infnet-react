export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.css$': 'jest-css-modules-transform',
    },
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    collectCoverageFrom: [
      'src/components/**/*.jsx',
      '!src/**/*.css',
    ],
  };
  
export default {
  testEnvironment: "node",
  transform: {},
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 40,
      functions: 50,
      lines: 60,
    },
  },
};

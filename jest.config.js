export default {
  testEnvironment: "node",
  transform: {},
  extensionsToTreatAsEsm: [".js"],
  moduleFileExtensions: ["js", "json"],
  coverageThreshold: {
    global: {
      statements: 65,
      branches: 60,
      functions: 60,
      lines: 65,
    },
  },
};

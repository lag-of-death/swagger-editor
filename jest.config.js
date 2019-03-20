module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom : ["src/**/*.tsx"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>enzyme.config.js"],
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    }
  }
};

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/dist/tests"],
  setupFiles: ["<rootDir>/dist/tests/setup.js"],
  collectCoverageFrom: ["<rootDir>/dist/**/*.js", "!**/node_modules/**"],
};

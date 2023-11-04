module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/src/_test_/cssFileMock.js",
  },
}

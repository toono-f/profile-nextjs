const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  displayName: "storyshots",
  moduleNameMapper: {
    // tsconfig.jsonのcompilerOptions>pathsの定義に合わせる
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["<rootDir>/src/tests/storybook/jest.storyshotsImage.ts"],
};

module.exports = createJestConfig(customJestConfig);

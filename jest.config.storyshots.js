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
  testMatch: ["<rootDir>/src/tests/test.storyshots.ts"],
};

module.exports = createJestConfig(customJestConfig);
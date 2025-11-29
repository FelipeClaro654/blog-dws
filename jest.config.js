export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@atomics$": "<rootDir>/src/components/atomics/index.js",
    "^@atomics/(.*)$": "<rootDir>/src/components/atomics/$1",
    "^@compounds$": "<rootDir>/src/components/compounds/index.js",
    "^@compounds/(.*)$": "<rootDir>/src/components/compounds/$1",
    "^@theme/(.*)$": "<rootDir>/src/styles/theme/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@context/(.*)$": "<rootDir>/src/context/$1",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};

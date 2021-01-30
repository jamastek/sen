const { pathsToModuleNameMapper } = require('ts-jest/utils');

const paths = {
  "components/*": ["components/*"],
  "containers/*": ["containers/*"],
  "layout": ["containers/layout"],
  "images/*": ["images/*"],
  "types/*": ["types/*"],
  "hooks/*": ["hooks/*"],
  "apollo/*": ["apollo/*"],
  "styles/*": ["styles/*"],
  "services/*": ["services/*"],
  "utils/*": ["utils/*"],
  "prisma/*": ["prisma/*"],
}

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', "<rootDir>/test-setup.js"],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  modulePaths: [
    "<rootDir>"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
    ...pathsToModuleNameMapper(paths)
  }
};
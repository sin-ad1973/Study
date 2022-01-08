module.exports = {
  testURL: 'http://localhost',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~resources/(.*)$': '<rootDir>/tests/resources/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
};

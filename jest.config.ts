import globals from 'plugin-runtime/build/envFlags';

/**
 * 单元测试的几个指标:
 * stmts 是语句覆盖率(statement coverage): 是不是每个语句都执行了?
 * Branch 分支覆盖率(branch coverage): 是不是每个if代码块都执行了?
 * Funcs 函数覆盖率(function coverage): 是不是每个函数都调用了?
 * Lines 行覆盖率(line coverage): 是不是每一行都执行了?
 */

export default {
  automock: false,
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '<rootDir>/test/',
    '<rootDir>/lib/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: [
    '<rootDir>/test/',
    '<rootDir>/lib/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
  ],
  transformIgnorePatterns: [
    '<rootDir>/lib/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '!<rootDir>/node_modules/plugin-runtime/',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  testMatch: [
    '<rootDir>/components/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/site/**/__tests__/**/*.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/file.mock.ts',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  globals: globals,
};

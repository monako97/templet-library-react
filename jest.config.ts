import type { Config } from 'jest';
import globals from 'PackageNameByCore/build/envFlags';

const { name } = JSON.parse(globals.programInfo);

/**
 * 单元测试的几个指标:
 * stmts 是语句覆盖率(statement coverage): 是不是每个语句都执行了?
 * Branch 分支覆盖率(branch coverage): 是不是每个if代码块都执行了?
 * Funcs 函数覆盖率(function coverage): 是不是每个函数都调用了?
 * Lines 行覆盖率(line coverage): 是不是每一行都执行了?
 */

const ignore = [
  '<rootDir>/test/',
  '<rootDir>/lib/',
  '<rootDir>/es/',
  '<rootDir>/dist/',
  '<rootDir>/docs/',
  '<rootDir>/node_modules/',
];
const config: Config = {
  automock: false,
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  roots: ['components'],
  coveragePathIgnorePatterns: ignore,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: ignore,
  transformIgnorePatterns: ignore.filter((o) => !['<rootDir>/test/'].includes(o)),
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/test/setup.ts',
  ],
  testMatch: [
    '<rootDir>/components/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/site/**/__tests__/**/*.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/file.mock.ts',
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\?raw$': '<rootDir>/test/file.mock.ts',
    [name]: '<rootDir>/components/index.ts',
  },
  globals: globals,
};

export default config;

import type {Config} from 'jest'

const config: Config = {
  verbose: false,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['**/__tests__/*.(test|spec).(ts|tsx|js)'],
}

export default config;

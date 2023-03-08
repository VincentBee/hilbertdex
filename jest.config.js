const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFiles: ['./jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
}

module.exports = createJestConfig(customJestConfig)

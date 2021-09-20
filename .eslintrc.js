const path = require('path');

const rootDir = path.dirname(__filename)

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ['**/__tests__/*.test.js', 'scripts/**/*.js'],
  rules: {},
  'import/no-extraneous-dependencies': [
    'error',
    {
      packageDir: [
        path.join(rootDir, 'core'),
        path.join(rootDir, 'router')
      ]
    },
  ],
};

const path = require('path');

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  globals: {
    jest: true,
    expect: true,
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ['**/__tests__/*.test.js', 'scripts/**/*.js'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: false,
        packageDir: [
          path.join(__dirname, 'core'),
          path.join(__dirname, 'router'),
        ],
      },
    ],
  },
};

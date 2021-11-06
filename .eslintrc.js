module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
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
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: '*/tsconfig.json',
      }, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};

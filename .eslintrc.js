module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'react-app',
    // eslint recommended rules
    'eslint:recommended',
    // standardJS rules
    'standard',
    // runs prettier, overrides eslint:recommended to be compatible with prettier
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn'
  },
}

module.exports = {
  extends: '@ridi',
  env: {
    browser: true,
  },
  plugins: [
    'import',
  ],
  rules: {
    // reset ridibooks
    'class-methods-use-this': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-constant-condition': 'error',
    'no-plusplus': 'error',

    // store rules
    'space-before-function-paren': ['error', 'always'],
    'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],
    'no-unused-vars': ['error', { 'varsIgnorePattern': 'vm' }],
    'no-bitwise': ['error', { 'allow': ['~'] }],
    'arrow-parens': ['error', 'as-needed'],

    // rsg rules
    'no-param-reassign': 'off',
    'no-console': 'off',
    'max-len': ['warn', 200],
  },
};

module.exports = {
  'extends': [
    'tslint:recommended',
  ],
  'rules': {
    'interface-name': false,
    'no-implicit-dependencies': false,
    'no-submodule-imports': false,
    'variable-name': [true, 'allow-pascal-case'],
    'semicolon': [true, 'always'],
    'quotemark': [true, 'single', 'jsx-double'],
    'jsx-no-multiline-js': false,
    'object-literal-sort-keys': false,
    'member-ordering': [true, {
      'order': [
        'constructor',
        'instance-method',
        'instance-field',
        'static-field',
        'static-method',
      ]
    }],
  },
  'linterOptions': {
    'exclude': [
      '**/node_modules/**',
      '**/__tests__/**',
    ],
  },
};

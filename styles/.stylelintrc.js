const smacss = require('./.smacss.json');

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    "stylelint-order",
    "stylelint-selector-bem-pattern"
  ],
  rules: {
    // autoprefixer
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    // BEM Pattern
    "plugin/selector-bem-pattern": {
      "componentName": "[A-Z]+",
      "componentSelectors": {
        "initial": "^\\.{componentName}(?:-[a-z]+)?$",
        "combined": "^\\.combined-{componentName}-[a-z]+$"
      },
      "utilitySelectors": "^\\.util-[a-z]+$"
    },

    // store rule
    'font-family-name-quotes': 'always-where-required',
    'font-weight-notation': 'numeric',
    'function-url-quotes': 'never',
    'number-leading-zero': 'never',
    'max-nesting-depth': 5,
    'max-empty-lines': 2,
    'comment-empty-line-before': ['always', {
      'except': ["first-nested"],
      'ignore': ["after-comment", "stylelint-commands"],
    }],
    'rule-empty-line-before': null,
    'at-rule-empty-line-before': null,

    // order
    'order/properties-order': smacss,
  },
};

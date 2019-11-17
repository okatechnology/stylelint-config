const prettierrc = require('./.prettierrc');

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-prettier', 'stylelint-scss', 'stylelint-order'],
  rules: {
    'prettier/prettier': [true, prettierrc],
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': ['function', 'if', 'for', 'each', 'include', 'mixin', 'content']
    }],
    'order/properties-alphabetical-order': true,
    'order/order': [
      'custom-properties',
      'declarations',
    ],
  }
}

module.exports = {
  linters: {
    '**/*.js': ['eslint --fix --quiet', 'git add'],
    '**/*.{ts,tsx}': [`tslint --config .tslintrc.js --fix`, 'git add'],
  },
};

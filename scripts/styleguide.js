/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const build = require('./build');

(async () => {
  await build({ watch: true });
  require('react-styleguidist/bin/styleguidist');
})();

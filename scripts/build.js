/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/prefer-default-export */

const async = require('async');

const isWatch = process.argv.some(arg => ['--watch', '-w'].includes(arg));

function* title () {
  yield console.log('\x1b[35m%s\x1b[0m: ', '\nColors converter');
  yield console.log('\x1b[35m%s\x1b[0m: ', '\nSVG icons');
  yield console.log('\x1b[35m%s\x1b[0m: ', '\nStylesheets postcss');
  yield console.log('\x1b[35m%s\x1b[0m: ', '\nComponents build');
}

const printTitle = title();

export const builder = {
  colors: '../colors/scripts/build',
  svg: '../svg/scripts/build',
  stylesheets: '../stylesheets/scripts/build',
  components: '../components/scripts/build',
};

async.series([
  ...Object.values(builder).map(scriptFile => async callback => {
    printTitle.next();
    await require(scriptFile);
    callback(null, true);
  }),
], () => {
  isWatch && require('./watcher');
});

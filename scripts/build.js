/* eslint-disable global-require, import/no-dynamic-require */

const async = require('async');

const isWatch = process.argv.some(arg => ['--watch', '-w'].includes(arg));

function* title () {
  yield console.log('\x1b[35m%s\x1b[0m: ', '\nColors converter');
  yield console.log('\x1b[35m%s\x1b[0m: ', '\nSVG icons');
  yield console.log('\x1b[35m%s\x1b[0m: ', '\nStyles postcss');
  yield console.log('\x1b[35m%s\x1b[0m: ', '\nComponents build');
}

const printTitle = title();

async.series([
  ...[
    '../colors/scripts/converter',
    '../svg/scripts/icons',
    '../styles/scripts/postcss',
    '../components/scripts/build',
  ].map(builder => async callback => {
    printTitle.next();
    await require(builder);
    callback(null, true);
  }),
], () => {
  isWatch && require('./watcher');
});

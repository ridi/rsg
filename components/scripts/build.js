/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const async = require('async');
const chalk = require('chalk');
const rollup = require('rollup');
const { modules } = require('./config');
const generateOptions = require('./option');
const cssBuilder = require('./cssBuilder');
const indexBuilder = require('./indexBuilder');

const asyncSeries = asyncFunctions => new Promise((resolve, reject) => {
  async.series([...asyncFunctions.map(asyncFunction => async callback => {
    try {
      const result = await asyncFunction();
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  })], (err, result) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(result);
  });
});

const build = async ({
  onBuildStart = () => {},
  onBuildFinish = () => {},
  onBuildError = err => { throw err; },
} = {}) => {
  try {
    onBuildStart();
    await asyncSeries([
      cssBuilder,
      indexBuilder,
      ...modules.map(moduleName => async () => {
        console.log(`- Build ${moduleName} component`);
        const options = generateOptions(moduleName);
        const bundle = await rollup.rollup(options.input);
        await bundle.write(options.output);
      }),
    ]);
    onBuildFinish();
  } catch (err) {
    onBuildError(err);
  }
};

if (process.mainModule.filename === __filename) {
  // noinspection JSIgnoredPromiseFromCall
  build({
    onBuildFinish: () => {
      console.log(chalk.bold.green('Build finished!'));
    },
  });
} else {
  module.exports = build;
}

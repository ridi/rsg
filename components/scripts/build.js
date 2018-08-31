/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const async = require('async');
const { rollup } = require('rollup');
const generateOptions = require('./option');

const modules = ['icon', 'book', 'pagination', 'order', 'popup', 'empty', 'fetch_retry_block', 'button', 'check_box'];

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

module.exports = async ({
  onBuildStart = () => {},
  onBuildFinish = () => {},
  onBuildError = err => { throw err; },
} = {}) => {
  try {
    onBuildStart();
    await asyncSeries(modules.map(moduleName => async () => {
      console.log(`- Build ${moduleName} component`);
      const options = generateOptions(moduleName);
      const bundle = await rollup(options.input);
      await bundle.write(options.output);
    }));
    onBuildFinish();
  } catch (err) {
    onBuildError(err);
  }
};

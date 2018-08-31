/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const async = require('async');
const { rollup } = require('rollup');
const generateOptions = require('./option');

const modules = ['icon', 'book', 'pagination', 'order', 'popup', 'empty', 'fetch_retry_block', 'button', 'check_box'];

module.exports = new Promise(resolve => {
  async.series([...modules.map(moduleName => async callback => {
    try {
      console.log(`- Build ${moduleName} component`);
      const options = generateOptions(moduleName);
      const bundle = await rollup(options.input);
      await bundle.write(options.output);
      callback();
    } catch (err) {
      callback(err);
    }
  })], (err, result) => {
    if (err) {
      console.error(err.stack || err);
    }
    resolve(result);
  });
});

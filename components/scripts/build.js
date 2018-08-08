/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const async = require('async');
const { rollup } = require('rollup');
const generateOptions = require('./option');

const modules = ['icon', 'book', 'pagination', 'order', 'popup', 'empty', 'fetch_retry_block', 'button', 'check_box'];
module.exports = new Promise(resolve => {
  async.series([...modules.map(moduleName => async callback => {
    const options = generateOptions(moduleName);
    try {
      const bundle = await rollup(options.input);
      await bundle.generate(options.output);
      await bundle.write(options.output);
      console.log(`- Build ${moduleName} component`);
    } catch (error) {
      console.log(error);
    }
    callback(null, '');
  })], (err, result) => {
    resolve(result);
  });
});

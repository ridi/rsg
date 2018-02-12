/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const async = require('async');
const { rollup } = require('rollup');
const generateOptions = require('./option');

const modules = ['book'];
module.exports = new Promise(resolve => {
  async.parallel([...modules.map(moduleName => async callback => {
    const options = generateOptions(moduleName);
    try {
      const bundle = await rollup(options.input);
      await bundle.generate(options.output);
      await bundle.write(options.output);
    } catch (error) {
      console.log(error);
    }
    console.log(`- Build ${moduleName} component`);
    callback(null, '');
  })], (err, result) => {
    resolve(result);
  });
});

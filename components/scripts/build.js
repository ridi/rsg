/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const fs = require('fs');
const path = require('path');
const async = require('async');
const { rollup } = require('rollup');
const { baseDir } = require('./config');
const generateOptions = require('./option');
const cssBuilder = require('./cssBuilder');

const modules = fs.readdirSync(path.join(baseDir, 'src/'));

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
    await asyncSeries([
      cssBuilder,
      async () => {
        console.log('- Create index.js');
        const data = modules.map(m => `export * from './dist/${m}';\n`).join('');
        fs.writeFileSync(path.join(baseDir, 'index.js'), data);
      },
      async () => {
        console.log('- Create index.d.ts');
        const data = modules.map(m => `export * from './dist/${m}/index';\n`).join('');
        fs.writeFileSync(path.join(baseDir, 'index.d.ts'), data);
      },
      ...modules.map(moduleName => async () => {
        console.log(`- Build ${moduleName} component`);
        const options = generateOptions(moduleName);
        const bundle = await rollup(options.input);
        await bundle.write(options.output);
      }),
    ]);
    onBuildFinish();
  } catch (err) {
    onBuildError(err);
  }
};

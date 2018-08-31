/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const fs = require('fs');
const path = require('path');
const async = require('async');
const { rollup } = require('rollup');
const { baseDir } = require('./config');
const generateOptions = require('./option');

const modules = fs.readdirSync(path.join(baseDir, 'src/'));
module.exports = new Promise(resolve => {
  async.series([
    async callback => {
      const data = modules.map(m => `export * from './dist/${m}';\n`).join('');
      await fs.writeFile(path.join(baseDir, 'index.js'), data);
      console.log('Create index.js');
      callback(null, '');
    },
    async callback => {
      const data = modules.map(m => `export * from './dist/${m}/index';\n`).join('');
      await fs.writeFile(path.join(baseDir, 'index.d.ts'), data);
      console.log('Create index.d.ts');
      callback(null, '');
    },
    ...modules.map(moduleName => async callback => {
      const options = generateOptions(moduleName);
      try {
        const bundle = await rollup(options.input);
        await bundle.write(options.output);
        console.log(`- Build ${moduleName} component`);
      } catch (error) {
        console.log(error);
      }
      callback(null, '');
    }),
  ], (err, result) => {
    resolve(result);
  });
});

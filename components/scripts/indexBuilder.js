/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const fs = require('fs');
const path = require('path');
const { baseDir, modules } = require('./config');

const buildJs = () => {
  console.log('- Create index.js');
  const data = modules.map(moduleName => `export * from './dist/${moduleName}';\n`).join('');
  fs.writeFileSync(path.join(baseDir, 'index.js'), data);
};

const buildTs = () => {
  console.log('- Create index.d.ts');
  const data = modules.map(moduleName => `export * from './dist/${moduleName}/index';\n`).join('');
  fs.writeFileSync(path.join(baseDir, 'index.d.ts'), data);
};

module.exports = () => {
  buildJs();
  buildTs();
};

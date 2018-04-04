/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const { join } = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const ts = require('rollup-plugin-typescript2');
const typescript = require('typescript');
const config = require('./config');

const {
  baseDir,
  outputDir,
  tsconfig,
  cacheRoot,
} = config;

module.exports = function generateOptions (name) {
  return {
    input: {
      input: join(baseDir, `src/${name}/index.tsx`),
      external: ['react', 'classnames', 'lodash-es'],
      plugins: [
        resolve({
          jsnext: true,
          main: true,
        }),
        commonjs({
          exclude: /src/,
        }),
        ts({
          typescript,
          tsconfig,
          cacheRoot,
        }),
      ],
    },
    output: {
      file: join(outputDir, `${name}.js`),
      format: 'es',
      sourcemap: true,
    },
  };
};

/* eslint import/no-extraneous-dependencies: ['error', { 'devDependencies': true }] */

const path = require('path');
const progress = require('rollup-plugin-progress');
const alias = require('rollup-plugin-alias');
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
      input: path.join(baseDir, `src/${name}/index.tsx`),
      external: [
        'react',
        'react-router-dom',
        'classnames',
        'lodash-es',
        '@ridi/object-case-converter',
        '@ridi/rsg/svg/dist/icons',
        '@ridi/rsg/componenst/dist/icon',
      ],
      plugins: [
        process.stdin.isTTY && progress(),
        alias({
          rsg: path.resolve(baseDir, '../'),
        }),
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
      ].filter(plugin => !!plugin),
    },
    output: {
      file: path.join(outputDir, `${name}.js`),
      format: 'es',
      sourcemap: true,
    },
  };
};

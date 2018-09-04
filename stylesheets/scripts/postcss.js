/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');
const async = require('async');
const postcss = require('postcss');
const atImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const inlineSvg = require('postcss-inline-svg');
const nesting = require('postcss-nesting');

const cwd = path.resolve(process.cwd(), 'stylesheets');
const dist = path.join(cwd, 'dist');

const entries = require('./entries');

const plugins = [
  atImport({
    resolve (id) {
      const rsg = /^rsg\/(.+)/.exec(id);
      if (rsg) {
        return path.resolve(process.cwd(), rsg[1]);
      }
      return id;
    },
  }),
  nesting(),
  cssnext({
    features: {
      autoprefixer: false,
      nesting: false,
    },
  }),
  inlineSvg({
    path: path.resolve(process.cwd(), 'svg/src'),
    removeFill: true,
  }),
];

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

function build ({ css: source, ...options }, callback) {
  postcss(plugins)
    .process(source, {
      map: { inline: false },
      ...options,
    })
    .then(({ css, map }) => {
      console.log(`- Create ${path.relative(dist, options.to)}`);
      fs.writeFileSync(options.to, css);
      if (map) {
        const mapFileName = `${options.to}.map`;
        console.log(`- Create ${path.relative(dist, mapFileName)}`);
        fs.writeFileSync(mapFileName, map);
      }
      callback();
    })
    .catch(callback);
}

module.exports = new Promise((resolve, reject) => {
  async.parallel([
    ...Object.entries(entries).map(([, data]) => callback => build(data, callback)),
  ], (err, result) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(result);
  });
});

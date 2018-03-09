const fs = require('fs');
const path = require('path');
const async = require('async');
const postcss = require('postcss');
const atImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const inlineSvg = require('postcss-inline-svg');
const nestedAncestors = require('postcss-nested-ancestors');
const nested = require('postcss-nested');

const cwd = path.resolve(process.cwd(), 'styles');
const src = path.join(cwd, 'src');
const dist = path.join(cwd, 'dist');

const entries = require('./entries')

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
  nestedAncestors(),
  nested(),
];

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

module.exports = new Promise(resolve => {
  Object.entries(entries).forEach(([name, data]) => {
    const { css, ...options } = data;
    postcss(plugins)
      .process(css, {
        map: { inline: false },
        ...options,
      })
      .then(({ css, map }) => {
        async.parallel([
          callback => {
            fs.writeFile(options.to, css, () => {
              console.log(`- Create ${path.relative(dist, options.to)}`);
              callback(null, true);
            });
          },
          ...(map ? [
            callback => {
              const mapFileName = `${options.to}.map`;
              fs.writeFile(mapFileName, map, () => {
                console.log(`- Create ${path.relative(dist, mapFileName)}`);
                callback(null, true);
              });
            },
          ] : []),
        ], (err, result) => {
          resolve(result);
        });
      });
  })
});

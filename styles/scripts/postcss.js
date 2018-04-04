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
const from = path.join(cwd, 'index.css');
const to = path.join(dist, 'rui.css');

const entry = fs.readdirSync(src, 'utf8')
  .filter(filename => /\.css$/.test(filename))
  .reduce(
    (accumulator, filename) => `${accumulator}@import './src/${filename}';\n`,
    fs.readFileSync(from, 'utf8'),
  );

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

const options = {
  to,
  from,
  map: {
    inline: false,
  },
};

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

module.exports = new Promise(resolve => {
  postcss(plugins)
    .process(entry, options)
    .then(({ css, map }) => {
      async.parallel([
        callback => {
          fs.writeFile(to, css, () => {
            console.log(`- Create ${path.relative(dist, to)}`);
            callback(null, true);
          });
        },
        ...(map ? [
          callback => {
            const mapFileName = `${to}.map`;
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
});

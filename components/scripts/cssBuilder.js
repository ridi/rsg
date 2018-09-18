/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const postcss = require('postcss');
const atImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const nesting = require('postcss-nesting');
const inlineSvg = require('postcss-inline-svg');

const sourceDir = path.join(__dirname, '../');
const distDir = path.join(__dirname, '../dist/');

const filename = 'components.css';

const option = {
  from: path.join(sourceDir, filename),
  to: path.join(distDir, filename),
  map: { inline: false },
};

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
    path: path.join(sourceDir, '../svg/icons'),
    removeFill: true,
  }),
];

module.exports = () => new Promise((resolve, reject) => {
  console.log(`- Create ${filename}`);
  postcss(plugins)
    .process(fs.readFileSync(option.from), option)
    .then(({ css, map }) => {
      mkdirp.sync(distDir);
      fs.writeFileSync(path.join(distDir, filename), css);
      if (map) {
        fs.writeFileSync(path.join(distDir, `${filename}.map`), map);
      }
      resolve();
    })
    .catch(reject);
});


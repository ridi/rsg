/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const postcss = require('postcss');
const atImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const nesting = require('postcss-nesting');
// const inlineSvg = require('postcss-inline-svg');

const filename = 'components.css';

const option = {
  from: path.join(__dirname, `../${filename}`),
  to: path.join(__dirname, `../dist/${filename}`),
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
];

module.exports = () => new Promise((resolve, reject) => {
  console.log(`- Create ${filename}`);
  postcss(plugins)
    .process(fs.readFileSync(option.from), option)
    .then(({ css, map }) => {
      mkdirp.sync(path.join(__dirname, '../dist/'));
      fs.writeFileSync(path.join(__dirname, `../dist/${filename}`), css);
      if (map) {
        const mapFileName = `${filename}.map`;
        fs.writeFileSync(mapFileName, map);
      }
      resolve();
    })
    .catch(reject);
});


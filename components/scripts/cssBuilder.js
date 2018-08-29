const fs = require('fs');
const path = require('path');
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

module.exports = async callback => {
  postcss(plugins)
    .process(fs.readFileSync(option.from), option)
    .then(({ css, map }) => {
      fs.writeFileSync(path.join(__dirname, `../dist/${filename}`), css);
      if (map) {
        const mapFileName = `${filename}.map`;
        fs.writeFileSync(mapFileName, map);
      }
      console.log(`- '${filename}' has been created`);
      callback();
    });
};


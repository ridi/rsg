/* eslint-disable global-require, import/no-dynamic-require */

const path = require('path');
const watch = require('watch');
const { Minimatch } = require('minimatch');
const gitignore = require('./lib/gitignore-to-glob')();

const cwd = process.cwd();

const excludes = [
  'rui/**',
  'iconfont/**',
  'scripts/**',
  'grunt/**',
];

const ignores = new Minimatch(`!{${gitignore.join(',')},${excludes.join(',')}}`);

const options = {
  filter: filename => ignores.match(path.relative(cwd, filename)),
  ignoreDotFiles: true,
  ignoreUnreadableDir: true,
  ignoreNotPermitted: true,
  ignoreDirectoryPattern: /node_modules|dist/,
  interval: 1,
};

function watchMessage () {
  console.log('\x1b[36m%s\x1b[0m', '\nWatching the files ...\n');
}

async function rebuild (builder) {
  delete require.cache[`${path.resolve(__dirname, builder)}.js`];
  await require(builder);
  watchMessage();
}

watch.watchTree(cwd, options, (f, curr, prev) => {
  if (typeof f === 'object' && prev === null && curr === null) {
    watchMessage();
    return;
  }

  const filename = path.relative(cwd, f);
  const target = filename.split('/')[0];

  switch (target) {
    case 'colors':
      rebuild('../colors/scripts/converter');
      break;
    case 'svg':
      rebuild('../svg/scripts/icons');
      break;
    case 'styles':
      rebuild('../styles/scripts/postcss');
      break;
    case 'components':
      rebuild('../components/scripts/build');
      break;
    default:
  }
});

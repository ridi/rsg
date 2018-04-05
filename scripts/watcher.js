/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/prefer-default-export */

const path = require('path');
const watch = require('watch');
const { Minimatch } = require('minimatch');
const gitignore = require('./lib/gitignore-to-glob')();

const { builder } = require('./build');
const queue = require('./queue.js');

const { isLocked, lock } = queue;
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

export async function rebuild (target) {
  const scriptFile = builder[target];
  if (!scriptFile) return;
  lock(target);
  delete require.cache[`${path.resolve(__dirname, scriptFile)}.js`];
  await require(scriptFile);
  lock(target, false);
  watchMessage();
}

watch.watchTree(cwd, options, (f, curr, prev) => {
  if (typeof f === 'object' && prev === null && curr === null) {
    watchMessage();
    return;
  }

  const filename = path.relative(cwd, f);
  const target = filename.split('/')[0];

  if (isLocked(target)) {
    queue.add(target);
  } else {
    rebuild(target);
  }
});

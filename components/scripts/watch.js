/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */

const chokidar = require('chokidar');
const debounce = require('debounce-async').default;
const decache = require('decache');
const path = require('path');

const reimport = moduleName => {
  decache(moduleName);
  return require(moduleName);
};

const watch = async ({
  paths,
  build,
  delay = 100,
  onBuildStart = () => {},
  onBuildFinish = () => {},
  onBuildError = err => { throw err; },
} = {}) => {
  const buildManaged = async () => {
    try {
      onBuildStart();
      await build();
      onBuildFinish();
    } catch (err) {
      onBuildError(err);
    }
  };

  await buildManaged();

  const watcher = chokidar.watch(paths, {
    ignoreInitial: true,
  });

  // Build should be delayed when several files are added or removed at once
  const buildDebounced = debounce(buildManaged, delay);

  const handleEvent = async () => {
    try {
      await buildDebounced();
    } catch (err) {
      if (err === 'canceled') {
        return;
      }
      throw err;
    }
  };

  watcher.on('add', handleEvent);
  watcher.on('change', handleEvent);
  watcher.on('unlink', handleEvent);
  watcher.on('error', console.error);
};

module.exports = (options = {}) => watch({
  paths: [
    path.join(__dirname, '../../svg/dist'),
    path.join(__dirname, '../src'),
  ],
  build: () => reimport('./build')(),
  ...options,
});

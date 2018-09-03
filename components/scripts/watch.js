/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */

const chokidar = require('chokidar');
const debounce = require('debounce-async').default;
const path = require('path');
const rollup = require('rollup');

const cssBuilder = require('./cssBuilder');
const indexBuilder = require('./indexBuilder');

const { modules } = require('./config');
const generateOptions = require('./option');

const watch = async ({
  paths,
  ignored,
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
    ignored,
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

const watchCss = (options = {}) => watch({
  paths: [
    path.join(__dirname, '../../colors/colors.css'),
    path.join(__dirname, '../**/*.css'),
  ],
  ignored: path.join(__dirname, '../dist'),
  build: cssBuilder,
  ...options,
});

const buildIndex = async ({
  onBuildStart = () => {},
  onBuildFinish = () => {},
  onBuildError = err => { throw err; },
}) => {
  try {
    onBuildStart();
    await indexBuilder();
    onBuildFinish();
  } catch (err) {
    onBuildError(err);
  }
};

const watchComponents = async ({
  onBuildStart = () => {},
  onBuildFinish = () => {},
  onBuildError = err => { throw err; },
}) => {
  const watchOptions = modules.map(moduleName => {
    const options = generateOptions(moduleName);
    return {
      ...options.input,
      output: options.output,
      watch: options.watch,
    };
  });

  const watcher = rollup.watch(watchOptions);

  watcher.on('event', event => {
    switch (event.code) {
      case 'START':
        onBuildStart();
        break;
      case 'BUNDLE_START':
        console.log(`- Build ${event.input}`);
        break;
      case 'END':
        onBuildFinish();
        break;
      case 'ERROR':
      case 'FATAL':
        onBuildError(event.error);
        break;
      default:
        break;
    }
  });
};

module.exports = async (options = {}) => {
  await watchCss(options);
  await buildIndex(options);
  await watchComponents(options);
};

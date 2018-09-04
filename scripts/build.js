/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */

const async = require('async');
const chalk = require('chalk');
const { debounce } = require('lodash');

const scripts = {
  colors: {
    build: '../colors/scripts/build',
    watch: '../colors/scripts/watch',
  },
  svg: {
    build: '../svg/scripts/build',
    watch: '../svg/scripts/watch',
  },
  stylesheets: {
    build: '../stylesheets/scripts/build',
    watch: '../stylesheets/scripts/watch',
  },
  components: {
    build: '../components/scripts/build',
    watch: '../components/scripts/watch',
  },
};

const runDebounced = debounce((func = () => {}) => func(), 300);

const build = ({
  watch = process.argv.some(arg => ['--watch', '-w'].includes(arg)),
  onBuildStart = packageName => {
    console.log(chalk`{bold.magenta Build} {magenta ${packageName}}{bold.magenta :}`);
  },
  onBuildFinish = packageName => {
    console.log(chalk`{bold.magenta Build} {magenta ${packageName}} {bold.magenta finished!}\n`);
  },
  onBuildError = err => {
    console.error(chalk.red('\n', err.stack || err));
  },
  onComplete = () => {
    console.log(chalk.bold.green('Build finished successfully!\n'));
  },
} = {}) => new Promise(resolve => async.series([
  ...Object.entries(scripts).map(([name, script]) => async callback => {
    await require(watch ? script.watch : script.build)({
      onBuildStart: () => {
        runDebounced();
        onBuildStart(name);
      },
      onBuildFinish: () => {
        onBuildFinish();
        runDebounced(() => {
          onComplete();
          resolve();
        });
      },
      onBuildError,
    });
    callback();
  }),
]));

if (process.mainModule.filename === __filename) {
  build();
} else {
  module.exports = build;
}

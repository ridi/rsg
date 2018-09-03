/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */

const async = require('async');
const chalk = require('chalk');
const { debounce } = require('lodash');

const isWatchMode = process.argv.some(arg => ['--watch', '-w'].includes(arg));

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

const notifyBuildFinish = debounce(isFinished => {
  if (!isFinished) {
    return;
  }
  console.log(chalk.bold.green('\nBuild finished successfully!'));
}, 300);

async.series([
  ...Object.entries(scripts).map(([name, script]) => async callback => {
    await require(isWatchMode ? script.watch : script.build)({
      onBuildStart: () => {
        notifyBuildFinish(false);
        console.log(chalk`\n{bold.magenta Build} {magenta ${name}}{bold.magenta :}`);
      },
      onBuildFinish: () => {
        console.log(chalk`{bold.magenta Build} {magenta ${name}} {bold.magenta finished!}`);
        notifyBuildFinish(true);
      },
      onBuildError: err => {
        console.error(chalk.red('\n', err.stack || err));
      },
    });
    callback();
  }),
]);


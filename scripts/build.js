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

const notifyBuildFinish = debounce((isFinished, callback = () => {}) => {
  if (isFinished) {
    console.log(chalk.bold.green('Build finished successfully!\n'));
  }
  callback();
}, 300);

const build = ({
  watch = process.argv.some(arg => ['--watch', '-w'].includes(arg)),
} = {}) => new Promise(resolve => async.series([
  ...Object.entries(scripts).map(([name, script]) => async callback => {
    await require(watch ? script.watch : script.build)({
      onBuildStart: () => {
        notifyBuildFinish(false);
        console.log(chalk`{bold.magenta Build} {magenta ${name}}{bold.magenta :}`);
      },
      onBuildFinish: () => {
        console.log(chalk`{bold.magenta Build} {magenta ${name}} {bold.magenta finished!}\n`);
        notifyBuildFinish(true, resolve);
      },
      onBuildError: err => {
        console.error(chalk.red('\n', err.stack || err));
      },
    });
    callback();
  }),
]));

if (process.mainModule.filename === __filename) {
  build();
} else {
  module.exports = build;
}

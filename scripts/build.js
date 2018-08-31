/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */

const async = require('async');
const chalk = require('chalk');

const isWatch = process.argv.some(arg => ['--watch', '-w'].includes(arg));

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

async.series([
  ...Object.entries(scripts).map(([name, script]) => async callback => {
    console.log(chalk.bold.magenta(`\nBuild ${name}:`));
    await require(isWatch ? script.watch : script.build);
    callback();
  }),
]);


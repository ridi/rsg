const path = require('path');

const baseDir = __dirname;

module.exports = {
  components: path.join(baseDir, 'components/dist/*.js'),
  getExampleFilename (componentPath) {
    const componentName = path.basename(componentPath, '.js');
    const dirName = path.resolve(path.dirname(componentPath), '../src', componentName);
    return path.join(dirName, 'README.md');
  },
  logger: {
    warn: () => {},
  },
  require: [
    path.join(baseDir, 'components/dist/components.css'),
  ],
  webpackConfig: {
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@ridi/rsg': path.join(baseDir, 'components'),
      },
    },
  },
};

const path = require('path');

const baseDir = __dirname;

const cssSourceMap = process.env.NODE_ENV === 'development';

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
          test: /\.(js|css)$/,
          use: ['source-map-loader'],
          enforce: 'pre',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                sourceMap: cssSourceMap,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: cssSourceMap,
              },
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

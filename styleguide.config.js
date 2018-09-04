const path = require('path');

module.exports = {
  components: 'components/dist/*.js',
  getExampleFilename (componentPath) {
    const componentName = path.basename(componentPath, '.js');
    const dirName = path.resolve(path.dirname(componentPath), '../src', componentName);
    return path.join(dirName, 'README.md');
  },
  require: [
    path.join(__dirname, 'stylesheets/dist/rui.css'),
    path.join(__dirname, 'stylesheets/dist/book.css'),
    path.join(__dirname, 'components/dist/components.css'),
  ],
  webpackConfig: {
    resolve: {
      alias: {
        '@ridi/rsg': path.join(__dirname, 'components'),
      },
    },
    module: {
      rules: [
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
  },
};

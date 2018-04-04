const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: /stories|components/,
    loader: 'awesome-typescript-loader',
    options: {
      configFileName: resolve(__dirname, '../components/tsconfig.json'),
      rootDir: '..',
      declaration: false,
      declarationDir: false,
      jsx: 'react',
    }
  });

  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');

  config.plugins.push(
    new CheckerPlugin()
  )

  if (!config.watchOptions) config.watchOptions = {}
  config.watchOptions.ignored = /node_modules|components\/src/

  return config;
};

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const packageJson = require('./package.json');
const commonConfig = require('./webpack.common');

const NAME = encodeURIComponent(packageJson.name);
const VERSION = packageJson.version;

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: `${process.env.PRODUCTION_DOMAIN}/${NAME}/${VERSION}/`,
    path: path.join(process.cwd(), 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: NAME,
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './FeedApp': './src/App',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const {
  normalizeName,
  buildProdRemote,
  buildProdPublicPath,
} = require('./webpack-utils');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const domain = process.env.PRODUCTION_DOMAIN;
const name = normalizeName(packageJson.name);
const version = packageJson.version;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    publicPath: buildProdPublicPath({ domain, name, version }),
    path: path.join(process.cwd(), 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './CartApp': './src/main',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
